import{n as e}from"./rolldown-runtime-428824ca0286.js";import{C3 as t,_R as n,ent as r,fR as i}from"./app-initial-1f5245639493.js";import{AQ as a,Cln as o,K_n as s,Sln as c,Z_n as l,jQ as u,pK as d,q_n as f,uK as p}from"./app-initial-a7e8bddc3c95.js";import{n as m,t as h}from"./view-599d26576fe6.js";import{r as g,t as _}from"./transceiver-url-c19fd59229a7.js";function v(e=`https://chatgpt.com/backend-api`,t=!1){let n=new URL(e);if(!(n.hostname===`chatgpt-staging.com`||n.hostname.endsWith(`.chatgpt-staging.com`))&&n.hostname!==`chatgpt.com`)throw Error(`Unsupported desktop backend`);return _(n,t).href}var y;function b(){return(b=e((()=>{g(),y=`
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
`})))()}function x(e){let t=(0,C.c)(19),r,i,c,l,u;t[0]===e?(r=t[1],i=t[2],c=t[3],l=t[4],u=t[5]):({conversationId:r,orbitAvatar:l,orbitColor:u,orbitName:i,...c}=e,t[0]=e,t[1]=r,t[2]=i,t[3]=c,t[4]=l,t[5]=u);let d=l===void 0?s.avatar:l,m=u===void 0?f:u,g;t[6]===i?g=t[7]:(g=o(i)?(0,w.jsx)(n,{id:`restricted.aeon.computer.unnamedOrbitControl.brand.dot`,defaultMessage:`Your <b>dot</b> has control`,description:`Status shown while the dot assistant has computer control and its name has not loaded. dot is the untranslated term for the user's agent; the b tag makes it bold.`,values:{b:S}}):(0,w.jsx)(n,{id:`restricted.aeon.computer.orbitControl`,defaultMessage:`{orbitName} has control`,description:`Status below the live computer while the dot has mouse and keyboard control. The orbitName placeholder is the assistant's display name, shown in bold.`,values:{orbitName:(0,w.jsx)(`strong`,{children:i})}}),t[6]=i,t[7]=g);let _=o(i)?null:i,v=m??`cyan`,y;t[8]===v?y=t[9]:(y=a(v),t[8]=v,t[9]=y);let b;t[10]!==r||t[11]!==d?(b=(e,t)=>(0,w.jsx)(p,{className:e,avatar:d,identity:r,animated:t}),t[10]=r,t[11]=d,t[12]=b):b=t[12];let x;return t[13]!==c||t[14]!==g||t[15]!==_||t[16]!==y||t[17]!==b?(x=(0,w.jsx)(h,{...c,assistantControlLabel:g,computerName:_,controlColors:y,renderControlAvatar:b}),t[13]=c,t[14]=g,t[15]=_,t[16]=y,t[17]=b,t[18]=x):x=t[18],x}function S(e){return(0,w.jsx)(`strong`,{children:e})}var C,w;function T(){return(T=e((()=>{C=r(),i(),m(),u(),l(),d(),c(),w=t()})))()}export{b as a,v as i,T as n,y as r,x as t};
//# sourceMappingURL=view-85bbaf7f9af6.js.map