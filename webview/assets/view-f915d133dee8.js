import{n as e}from"./rolldown-runtime-428824ca0286.js";import{KR as t,Q3 as n,VR as r,knt as i}from"./app-initial-9f20463a6878.js";import{Cyn as a,Oyn as o,UQ as s,WQ as c,_q as l,bq as u,ndn as d,rdn as f,wyn as p}from"./app-initial-df9c4d3df63b.js";import{n as m,t as h}from"./view-81c7481ba3ba.js";import{r as g,t as _}from"./transceiver-url-da64bdd7b4e2.js";function v(e=`https://chatgpt.com/backend-api`){let t=new URL(e);if(!(t.hostname===`chatgpt-staging.com`||t.hostname.endsWith(`.chatgpt-staging.com`))&&t.hostname!==`chatgpt.com`)throw Error(`Unsupported desktop backend`);return _(t).href}var y;function b(){return(b=e((()=>{g(),y=`
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
             "BROWSER_START_CLOSED": "true", "CUA_REPL_BROWSER_ENV": "cloud",
             "ENABLE_BROWSER_CREDENTIAL_CAPABILITIES": "false"},
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=125,
    )
    ready["browser_ready"] = browser.returncode == 0
except (FileNotFoundError, subprocess.TimeoutExpired):
    ready["browser_ready"] = False
ready["session_id"] = os.environ.get("CODEX_CAAS_SESSION_ID") or ready["session_id"]
print(json.dumps(ready))
`})))()}function x(e){let n=(0,C.c)(19),r,i,o,c,u;n[0]===e?(r=n[1],i=n[2],o=n[3],c=n[4],u=n[5]):({conversationId:r,orbitAvatar:c,orbitColor:u,orbitName:i,...o}=e,n[0]=e,n[1]=r,n[2]=i,n[3]=o,n[4]=c,n[5]=u);let d=c===void 0?a.avatar:c,m=u===void 0?p:u,g;n[6]===i?g=n[7]:(g=f(i)?(0,w.jsx)(t,{id:`restricted.aeon.computer.unnamedOrbitControl.brand.dot`,defaultMessage:`Your <b>dot</b> has control`,description:`Status shown while the dot assistant has computer control and its name has not loaded. dot is the untranslated term for the user's agent; the b tag makes it bold.`,values:{b:S}}):(0,w.jsx)(t,{id:`restricted.aeon.computer.orbitControl`,defaultMessage:`{orbitName} has control`,description:`Status below the live computer while the dot has mouse and keyboard control. The orbitName placeholder is the assistant's display name, shown in bold.`,values:{orbitName:(0,w.jsx)(`strong`,{children:i})}}),n[6]=i,n[7]=g);let _=f(i)?null:i,v=m??`cyan`,y;n[8]===v?y=n[9]:(y=s(v),n[8]=v,n[9]=y);let b;n[10]!==r||n[11]!==d?(b=(e,t)=>(0,w.jsx)(l,{className:e,avatar:d,identity:r,animated:t}),n[10]=r,n[11]=d,n[12]=b):b=n[12];let x;return n[13]!==o||n[14]!==g||n[15]!==_||n[16]!==y||n[17]!==b?(x=(0,w.jsx)(h,{...o,assistantControlLabel:g,computerName:_,controlColors:y,renderControlAvatar:b}),n[13]=o,n[14]=g,n[15]=_,n[16]=y,n[17]=b,n[18]=x):x=n[18],x}function S(e){return(0,w.jsx)(`strong`,{children:e})}var C,w;function T(){return(T=e((()=>{C=i(),r(),m(),c(),o(),u(),d(),w=n()})))()}export{b as a,v as i,T as n,y as r,x as t};
//# sourceMappingURL=view-f915d133dee8.js.map