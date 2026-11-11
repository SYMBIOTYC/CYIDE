import{n as e}from"./rolldown-runtime-428824ca0286.js";import{O6 as t,mI as n,vit as r,yI as i}from"./app-initial-48d97b67aa1f.js";import{Gzt as a,Kzt as o,_B as s,pI as c,uI as l,vB as u,vmn as d,wmn as f,ymn as p}from"./app-initial-25ee126179db.js";import{n as m,t as h}from"./view-4d9bf8b7abb4.js";import{a as g,i as _}from"./capture-video-frame-91002f332d48.js";function v(e=`https://chatgpt.com/backend-api`,t=!1){let n=new URL(e);if(!(n.hostname===`chatgpt-staging.com`||n.hostname.endsWith(`.chatgpt-staging.com`))&&n.hostname!==`chatgpt.com`)throw Error(`Unsupported desktop backend`);return _(n,t).href}var y;function b(){return(b=e((()=>{g(),y=`
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
`})))()}function x(e){let t=(0,C.c)(19),n,r,a,c,u;t[0]===e?(n=t[1],r=t[2],a=t[3],c=t[4],u=t[5]):({conversationId:n,orbitAvatar:c,orbitColor:u,orbitName:r,...a}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=a,t[4]=c,t[5]=u);let f=c===void 0?d.avatar:c,m=u===void 0?p:u,g;t[6]===r?g=t[7]:(g=o(r)?(0,w.jsx)(i,{id:`restricted.aeon.computer.unnamedOrbitControl.brand.dot`,defaultMessage:`Your <b>dot</b> has control`,description:`Status shown while the dot assistant has computer control and its name has not loaded. dot is the untranslated term for the user's agent; the b tag makes it bold.`,values:{b:S}}):(0,w.jsx)(i,{id:`restricted.aeon.computer.orbitControl`,defaultMessage:`{orbitName} has control`,description:`Status below the live computer while the dot has mouse and keyboard control. The orbitName placeholder is the assistant's display name, shown in bold.`,values:{orbitName:(0,w.jsx)(`strong`,{children:r})}}),t[6]=r,t[7]=g);let _=o(r)?null:r,v=m??`cyan`,y;t[8]===v?y=t[9]:(y=s(v),t[8]=v,t[9]=y);let b;t[10]!==n||t[11]!==f?(b=(e,t)=>(0,w.jsx)(l,{className:e,avatar:f,identity:n,animated:t}),t[10]=n,t[11]=f,t[12]=b):b=t[12];let x;return t[13]!==a||t[14]!==g||t[15]!==_||t[16]!==y||t[17]!==b?(x=(0,w.jsx)(h,{...a,assistantControlLabel:g,computerName:_,controlColors:y,renderControlAvatar:b}),t[13]=a,t[14]=g,t[15]=_,t[16]=y,t[17]=b,t[18]=x):x=t[18],x}function S(e){return(0,w.jsx)(`strong`,{children:e})}var C,w;function T(){return(T=e((()=>{C=r(),n(),m(),u(),f(),c(),a(),w=t()})))()}export{b as a,v as i,T as n,y as r,x as t};
//# sourceMappingURL=view-4c964e4aad1a.js.map