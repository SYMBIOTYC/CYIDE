import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";import{lt as t}from"./preparation-85a94988e85b.js";import{Ku as n}from"./chatgpt-conversation-queries-fed923318f92.js";function r({attachmentCount:e,imageCount:t,message:n}){let r=[n.trim()];return e>0&&r.push(`[User attached ${e} ${e===1?`file`:`files`}; file contents were not included]`),t>0&&r.push(`[User attached ${t} ${t===1?`image`:`images`}; image contents were not included]`),r.filter(e=>e.length>0).join(`

`)}function i(){return(i=e((()=>{n(),t()})))()}export{i as n,r as t};
//# sourceMappingURL=message-context-e65bb6776d75.js.map