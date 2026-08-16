const { spawn } = require('child_process');
const http = require('http');
const { net } = require('net');
const { promisify } = require('util');
const fs = require('fs');
const path = require('path');

const nodeBinaryPath = '/Users/imac/.nvm/versions/node/v24.16.0/bin/node';
const adapterPath = path.resolve(__dirname, '../bin/su-adapter.mjs');

// Skip tests if node binary is missing
if (!fs.existsSync(nodeBinaryPath)) {
  describe.skip('su-adapter.mjs integration (skipped because node binary not found)', () => {
    // Empty suite
  });
  module.exports = {}; // Export empty object to satisfy Vitest
  // Exit early to prevent rest of file from running
  process.exit(0);
}

/**
 * Returns a random port in the range 30000-40000
 */
function getRandomPort() {
  return Math.floor(Math.random() * (40000 - 30000 + 1)) + 30000;
}

/**
 * Waits for a port to be open on localhost
 * @param {number} port - Port to check
 * @param {number} timeoutMs - Timeout in milliseconds
 * @returns {Promise<void>}
 */
function waitForPort(port, timeoutMs) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const socket = new net.Socket();
      socket.setTimeout(100);
      socket.once('error', () => {
        socket.destroy();
        if (Date.now() - startTime > timeoutMs) {
          clearInterval(interval);
          reject(new Error(`Timeout waiting for port ${port}`));
        }
      });
      socket.once('timeout', () => {
        socket.destroy();
        // Try again
      });
      socket.once('connect', () => {
        socket.end();
        clearInterval(interval);
        resolve();
      });
      socket.connect(port, '127.0.0.1');
    }, 100);
  });
}

/**
 * Starts a mock CY gateway server that handles POST /v1/chat/completions
 * @returns {Promise<{server: http.Server, port: number}>}
 */
function startMockGateway() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      if (req.method === 'POST' && req.url === '/v1/chat/completions') {
        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });
        req.on('end', async () => {
          let data;
          try {
            data = JSON.parse(body);
          } catch (e) {
            res.writeHead(400);
            res.end(JSON.stringify({ error: 'Invalid JSON' }));
            return;
          }

          const isStream = data.stream === true;
          
          if (isStream) {
            res.writeHead(200, {
              'Content-Type': 'text/event-stream',
              'Cache-Control': 'no-cache',
              Connection: 'keep-alive',
            });
            
            // Send a few chunks
            const chunk1 = {
              id: 'chatcmpl-123',
              object: 'chat.completion.chunk',
              created: Date.now(),
              model: 'test-model',
              choices: [{
                index: 0,
                delta: { role: 'assistant', content: 'Hello' },
              }]
            };
            
            const chunk2 = {
              id: 'chatcmpl-123',
              object: 'chat.completion.chunk',
              created: Date.now(),
              model: 'test-model',
              choices: [{
                index: 0,
                delta: { content: ' world' },
              }]
            };
            
            const doneChunk = {
              id: 'chatcmpl-123',
              object: 'chat.completion.chunk',
              created: Date.now(),
              model: 'test-model',
              choices: [{ index: 0, delta: {} }]
            };
            
            res.write(`data: ${JSON.stringify(chunk1)}\n\n`);
            res.write(`data: ${JSON.stringify(chunk2)}\n\n`);
            res.write(`data: ${JSON.stringify(doneChunk)}\n\n`);
            res.write('data: [DONE]\n\n');
            res.end();
          } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              id: 'chatcmpl-123',
              object: 'chat.completion',
              created: Date.now(),
              model: 'test-model',
              choices: [{
                index: 0,
                message: { role: 'assistant', content: 'Hello world!' },
                finish_reason: 'stop',
              }],
              usage: { prompt_tokens: 5, completion_tokens: 3, total_tokens: 8 }
            }));
          }
        });
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not found' }));
      }
    });

    server.listen(0, '127.0.0.1', () => {
      const port = server.address().port;
      resolve({ server, port });
    });
  });
}

describe('su-adapter.mjs integration', () => {
  let mockGatewayServer;
  let mockGatewayPort;
  let adapterProcess;
  let adapterPort;

  beforeAll(async () => {
    // Start mock gateway
    const mockGateway = await startMockGateway();
    mockGatewayServer = mockGateway.server;
    mockGatewayPort = mockGateway.port;

    // Choose a random port for the adapter
    adapterPort = getRandomPort();

    // Start adapter process
    adapterProcess = spawn(nodeBinaryPath, [adapterPath], {
      env: {
        ...process.env,
        CY_API_BASE_URL: `http://127.0.0.1:${mockGatewayPort}/v1`,
        SU_ADAPTER_PORT: String(adapterPort),
      },
    });

    // Wait for adapter to be ready
    await waitForPort(adapterPort, 5000);
  });

  afterAll(() => {
    mockGatewayServer.close();
    adapterProcess.kill();
  });

  test('non-streaming response returns valid Responses API JSON', async () => {
    return new Promise((resolve, reject) => {
      const req = http.request(
        {
          hostname: '127.0.0.1',
          port: adapterPort,
          path: '/v1/responses',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
        (res) => {
          let data = '';
          res.on('data', chunk => {
            data += chunk;
          });
          res.on('end', () => {
            try {
              const parsed = JSON.parse(data);
              expect(parsed).toHaveProperty('id');
              expect(parsed.id).toMatch(/^resp_/);
              expect(parsed).toHaveProperty('object', 'response');
              expect(parsed).toHaveProperty('status', 'completed');
              expect(parsed).toHaveProperty('output');
              expect(Array.isArray(parsed.output)).toBe(true);
              resolve();
            } catch (e) {
              reject(new Error(`Failed to parse response: ${e.message}\nResponse: ${data}`));
            }
          });
        }
      );

      req.on('error', reject);
      req.write(JSON.stringify({
        model: 'test-model',
        input: 'Say hello',
      }));
      req.end();
    });
  });

  test('streaming response returns text/event-stream with data lines', async () => {
    return new Promise((resolve, reject) => {
      const req = http.request(
        {
          hostname: '127.0.0.1',
          port: adapterPort,
          path: '/v1/responses',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
        (res) => {
          // Check content type
          expect(res.headers['content-type']).toMatch(/^text\/event-stream/);
          
          let data = '';
          res.on('data', chunk => {
            data += chunk;
          });
          res.on('end', () => {
            // Check that we got at least one "data: " line
            const dataLines = data.split('\n').filter(line => line.startsWith('data: '));
            expect(dataLines.length).toBeGreaterThan(0);
            // Check that we got a [DONE] line
            const doneLine = data.split('\n').find(line === 'data: [DONE]');
            expect(doneLine).toBeDefined();
            resolve();
          });
        }
      );

      req.on('error', reject);
      req.write(JSON.stringify({
        model: 'test-model',
        input: 'Say hello',
        stream: true,
      }));
      req.end();
    });
  });
});

// Export empty object to satisfy Vitest when skipped
if (!fs.existsSync(nodeBinaryPath)) {
  module.exports = {};
}
