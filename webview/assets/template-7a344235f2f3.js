import{n as e}from"./rolldown-runtime-428824ca0286.js";import{Mu as t,Qc as n}from"./app-initial-3aea4f07841c.js";import{lmt as r,smt as i}from"./app-initial-cb9d23c7d437.js";function a(e){return e.formatMessage({id:`space.gettingStartedPages.pageTitle`,defaultMessage:`Your guide to pages`,description:`Title of the introductory Getting Started Page`})}function o(e,n){let r=e.formatMessage({id:`space.gettingStartedPages.starterBody.guide`,defaultMessage:`> [!CALLOUT] 💡
>
> Pages are a place for you to write, build, and collaborate with ChatGPT and your teammates. Use this page as your playground to learn the basics — and have fun!

## Getting started

- [ ] **Play with this page.** Type \`/\` to add headings, images, checklists, tables, and more. Try it out in the empty space below 👇

- [ ] **Work with ChatGPT.** Type \`@ChatGPT\`, followed by your request, and ChatGPT will jump in to help with whatever you need.

- [ ] **Get organized.** Instead of folders, organize information by nesting pages *inside of* pages. Type \`/page\` to create a page inside this one.

- [ ] When your masterpiece is ready, **share** it with your teammates (using the share button in the upper-right), **collaborate**, and fiercely debate in the **comments**.

## Imagine anything, and make it real

Create **interactive visualizations** by typing \`/visualize\` and describing your idea, whether it’s *“Show me how my savings could grow with an interactive calculator”*, *“Simulate the solar system”*, or even *“Create a playable mini-piano.”*

{savings}

{solar}

{piano}

---

- [ ] Try it out yourself: In the empty space below, type \`/visualize\` and describe your idea 👇

---

## Put ChatGPT to work

You can add instructions to pages, and ChatGPT will do the work for you, like creating a self-updating to-do list or comprehensive trip planner. Here are a couple examples of pages ChatGPT can create for you.

\`\`\`codex-prompt
Create a daily list of prioritized tasks from my email, messages, and calendar, and update it every morning
\`\`\`

\`\`\`codex-prompt
Create a new trip planner page with flight details, hotel reservations, and tour info, pulled from my emails
\`\`\``,description:`Initial Markdown for each user's editable guide to Pages. Preserve headings, the light-bulb callout, pointing-down emoji, checkboxes, emphasis, dividers, code fences, and the literal commands /, /page, @ChatGPT, /visualize, and codex-prompt. Preserve the savings, solar, and piano placeholders: each inserts a complete interactive visualization.`},{savings:n?.savings==null?``:i(n.savings,e.formatMessage({id:`space.welcome.demo.savingsAlt`,defaultMessage:`Savings growth calculator`,description:`Accessible title for the embedded interactive savings calculator in the Welcome Page`})),solar:n?.solar==null?``:i(n.solar,e.formatMessage({id:`space.welcome.demo.solarAlt`,defaultMessage:`Solar system explorer`,description:`Accessible title for the embedded interactive solar system in the Welcome Page`})),piano:n?.piano==null?``:i(n.piano,e.formatMessage({id:`space.welcome.demo.pianoAlt`,defaultMessage:`Mini Piano`,description:`Accessible title for the embedded playable piano in the Welcome Page`}))});return t(r).flatMap(e=>e.startsWith(`- [ ] `)?[e,``]:[e])}function s(e){let t=c.find(t=>e.endsWith(t));return t==null?e:e.slice(0,-t.length)}var c;function l(){return(l=e((()=>{n(),r(),c=[`⁣⁣`,`⁣⁤`]})))()}export{s as i,a as n,l as r,o as t};
//# sourceMappingURL=template-7a344235f2f3.js.map