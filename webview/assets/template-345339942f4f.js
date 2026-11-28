import{n as e}from"./rolldown-runtime-428824ca0286.js";import{bl as t,nd as n}from"./app-initial-9f20463a6878.js";import{Bmt as r,Rmt as i}from"./app-initial-df9c4d3df63b.js";function a(e){return e.formatMessage({id:`space.gettingStartedPages.pageTitle`,defaultMessage:`Your guide to pages`,description:`Title of the introductory Getting Started Page`})}function o(e,t){let r=e.formatMessage({id:`space.gettingStartedPages.starterBody.guide`,defaultMessage:`> [!CALLOUT] 💡
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
\`\`\``,description:`Initial Markdown for each user's editable guide to Pages. Preserve headings, the light-bulb callout, pointing-down emoji, checkboxes, emphasis, dividers, code fences, and the literal commands /, /page, @ChatGPT, /visualize, and codex-prompt. Preserve the savings, solar, and piano placeholders: each inserts a complete interactive visualization.`},{savings:t?.savings==null?``:i(t.savings,e.formatMessage({id:`space.welcome.demo.savingsAlt`,defaultMessage:`Savings growth calculator`,description:`Accessible title for the embedded interactive savings calculator in the Welcome Page`})),solar:t?.solar==null?``:i(t.solar,e.formatMessage({id:`space.welcome.demo.solarAlt`,defaultMessage:`Solar system explorer`,description:`Accessible title for the embedded interactive solar system in the Welcome Page`})),piano:t?.piano==null?``:i(t.piano,e.formatMessage({id:`space.welcome.demo.pianoAlt`,defaultMessage:`Mini Piano`,description:`Accessible title for the embedded playable piano in the Welcome Page`}))});return n(r).flatMap(e=>e.startsWith(`- [ ] `)?[e,``]:[e])}function s(e){let t=c.find(t=>e.endsWith(t));return t==null?e:e.slice(0,-t.length)}var c;function l(){return(l=e((()=>{t(),r(),c=[`⁣⁣`,`⁣⁤`]})))()}export{s as i,a as n,l as r,o as t};
//# sourceMappingURL=template-345339942f4f.js.map