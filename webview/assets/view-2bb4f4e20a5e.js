import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";import{ym as t}from"./app-initial-13f932cb2f13.js";import{t as n}from"./compiler-runtime-2015039f3c68.js";import{s as r}from"./lib-72ce426c00b2.js";import{t as i}from"./message-a17254c4ba02.js";import{hf as a,pf as o,yf as s}from"./app-server-manager-signals-36cb05284065.js";import{n as c,t as l}from"./branding-bd05d76eb47c.js";import{n as u,t as d}from"./aeon-icon-7045dd39494b.js";import{c as f,l as p}from"./aeon-appearance-colors-ccc16a29b30d.js";import{n as m,t as h}from"./view-1dac28f15f2d.js";function g(e=`https://chatgpt.com/backend-api`){let t=new URL(e),n=t.hostname===`chatgpt-staging.com`||t.hostname.endsWith(`.chatgpt-staging.com`);if(!n&&t.hostname!==`chatgpt.com`)throw Error(`Unsupported desktop backend`);let r=new URL(n?`https://realtime.chatgpt-staging.com/v1/cua`:`https://realtime.chatgpt.com/v1/cua`),i=t.hostname.match(/^(dev-ephemeral-pr[0-9]+)(?:-|\.)/)?.[1];return i!=null&&r.searchParams.set(`staging_env`,i),r.href}var _;function v(){return(v=e((()=>{_=`
import json, os, secrets, subprocess, time
from pathlib import Path
launcher = ["/usr/local/bin/cloud-agent-desktop"]
# Reserved exit codes let the client report failures without exposing subprocess output.
if not os.path.isfile(launcher[0]):
    raise SystemExit(10)
if os.getuid() != 1000:
    raise SystemExit(11)
def status():
    result = subprocess.run(launcher + ["status"], capture_output=True, timeout=5)
    return json.loads(result.stdout) if result.returncode == 0 else None
ready = status()
if not ready or ready.get("status") != "ready":
    subprocess.Popen(
        launcher + ["serve"],
        env={**os.environ, "ORBIT_OS": "true", "BROWSER_HEADLESS": "false"},
        stdin=subprocess.DEVNULL, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
        start_new_session=True,
    )
    deadline = time.monotonic() + 95
    while True:
        ready = status()
        if ready and ready.get("status") == "ready":
            break
        if time.monotonic() >= deadline:
            raise SystemExit(12)
        time.sleep(1)
# Use the desktop's WebAuthn relay, and let Chromium own its profile before
# an app opens a sign-in link via xdg-open (which would start unmanaged Chromium).
# The controller persists this guest-local service token; never return it to the viewer.
token = os.environ.get("NODE_REPL_AUTH_TOKEN")
if not token:
    try:
        token = json.loads((Path.home() / ".local/state/browser/credentials.json").read_text())["mcp_token"]
    except FileNotFoundError:
        token = secrets.token_urlsafe(32)
try:
    browser = subprocess.run(
        ["/usr/local/bin/cloud-agent-browser-runtime", "activate"],
        env={**os.environ, "DISPLAY": ready["display"], "XAUTHORITY": ready["xauthority"],
             "NODE_REPL_AUTH_TOKEN": token, "ORBIT_OS": "true", "BROWSER_HEADLESS": "false",
             "CUA_REPL_BROWSER_ENV": "orbit", "ENABLE_WEBAUTHN": "true", "ENABLE_BROWSER_CREDENTIAL_CAPABILITIES": "false"},
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=125,
    )
    ready["browser_ready"] = browser.returncode == 0
except (FileNotFoundError, subprocess.TimeoutExpired):
    ready["browser_ready"] = False
ready["session_id"] = os.environ["CODEX_CAAS_SESSION_ID"]
print(json.dumps(ready))
`})))()}function y(e){let t=(0,x.c)(19),n,r,s,l,u;t[0]===e?(n=t[1],r=t[2],s=t[3],l=t[4],u=t[5]):({conversationId:n,orbitAvatar:l,orbitColor:u,orbitName:r,...s}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=s,t[4]=l,t[5]=u);let p=l===void 0?o.avatar:l,m=u===void 0?a:u,g;t[6]===r?g=t[7]:(g=c(r)?(0,S.jsx)(i,{id:`restricted.aeon.computer.unnamedOrbitControl.brand.dot`,defaultMessage:`Your <b>dot</b> has control`,description:`Status shown while the dot assistant has computer control and its name has not loaded. dot is the untranslated term for the user's agent; the b tag makes it bold.`,values:{b}}):(0,S.jsx)(i,{id:`restricted.aeon.computer.orbitControl`,defaultMessage:`{orbitName} has control`,description:`Status below the live computer while the dot has mouse and keyboard control. The orbitName placeholder is the assistant's display name, shown in bold.`,values:{orbitName:(0,S.jsx)(`strong`,{children:r})}}),t[6]=r,t[7]=g);let _=c(r)?null:r,v=m??`cyan`,y;t[8]===v?y=t[9]:(y=f(v),t[8]=v,t[9]=y);let C;t[10]!==n||t[11]!==p?(C=(e,t)=>(0,S.jsx)(d,{className:e,avatar:p,identity:n,animated:t}),t[10]=n,t[11]=p,t[12]=C):C=t[12];let w;return t[13]!==s||t[14]!==g||t[15]!==_||t[16]!==y||t[17]!==C?(w=(0,S.jsx)(h,{...s,assistantControlLabel:g,computerName:_,controlColors:y,renderControlAvatar:C}),t[13]=s,t[14]=g,t[15]=_,t[16]=y,t[17]=C,t[18]=w):w=t[18],w}function b(e){return(0,S.jsx)(`strong`,{children:e})}var x,S;function C(){return(C=e((()=>{x=n(),r(),m(),p(),s(),u(),l(),S=t()})))()}export{v as a,g as i,C as n,_ as r,y as t};
//# sourceMappingURL=view-2bb4f4e20a5e.js.map