import{n as e}from"./rolldown-runtime-428824ca0286.js";import{$R as t,B7 as n,I7 as r,Mu as i,OR as a,P8 as o,QR as s,Qc as ee,T9 as c,YR as te,Z9 as l,dR as ne,fR as u,nz as d,q9 as re,z9 as f}from"./app-initial-1f5245639493.js";import{Jln as p,Rcn as m,_pn as h,hln as g,kcn as _,msn as v,rbn as ie}from"./app-initial-4ce6c66b1093.js";import{Dnn as y,EHt as b,Fkn as x,HOn as ae,THt as oe,UOn as S,bC as se,dWt as ce,ent as le,fWt as ue,iNn as C,int as de,irn as w,lWt as T,mLt as E,mWt as D,rNn as O,rnn as k,rrn as A,xC as j,yC as M}from"./app-initial-a7e8bddc3c95.js";function N(e,t){let n=H.safeParse(t);if(!n.success)return;if(n.data.templates?.length===0)return[];let r=de(e)??`en`,i=r.split(`-`)[0],a=n.data.templatesByLocale?.[r]??n.data.templatesByLocale?.[i]??(i===`en`?n.data.templates:void 0);if(a!=null&&new Set(a.map(({id:e})=>e)).size===a.length)return a}var P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{a(),o(),le(),oe(),C(),j(),ue(),P=[`to-do-list`,`project-tracker`],F=d(O,({get:e})=>e(D)?e(M,`4051280260`):void 0),I=d(O,({get:e})=>e(T)?e(M,`4051280260`):void 0),L=d(O,({get:e})=>e(ce)?e(se,`4051280260`):void 0),R=f({submitLabel:l().trim().min(1).optional(),preparingLabel:l().trim().min(1).optional(),freeformPlaceholder:l().trim().min(1).optional(),questions:r(f({question:l().trim().min(1),answerLabel:l().trim().min(1),isOther:n().optional(),options:r(f({id:l().trim().min(1),value:l().trim().min(1)})).refine(e=>new Set(e.map(({id:e})=>e)).size===e.length,`Each option ID in a question must be unique`)})).min(1)}),z=f({id:l().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),title:l().trim().min(1),prompt:l().trim().min(1),prefillPrompt:l().trim().min(1),previewMarkdown:l().trim().min(1).optional(),previewDocument:r(f({kind:c(`markdown`),markdown:l().trim().min(1),layout:b.optional()})).min(1).optional(),setupQuestion:l().trim().min(1).nullish(),followUp:R.nullish()}),B=r(z.partial({title:!0,prompt:!0,prefillPrompt:!0,previewMarkdown:!0})),V=r(l()).min(4).max(10).refine(e=>new Set(e).size===e.length&&P.every(t=>e.includes(t))),H=f({templates:B.optional(),templatesByLocale:re(l().regex(/^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$/),B).optional()})})))()}function fe(e,t){switch(t){case`feature-backlog`:return{id:t,title:e.formatMessage({id:`space.pageTemplates.feature-backlog.title`,defaultMessage:`Feature backlog`,description:`Title of the Feature backlog Page template.`}),prompt:e.formatMessage({id:`space.pageTemplates.feature-backlog.prompt`,defaultMessage:`Turn ideas and requests for my product into a feature backlog. Group similar requests, describe the user need, link supporting feedback, and suggest priorities and next decisions. Ask which product if it’s unclear; a few ideas are enough to start. Use the details I’ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Update this Page and preserve my edits.`,description:`Setup request sent to the assistant when a Work user creates a Page from the Feature backlog template. Preserve the requested source checks, questions, scheduling, and safeguards.`}),prefillPrompt:e.formatMessage({id:`space.pageTemplates.feature-backlog.prefillPrompt`,defaultMessage:`Organize a feature backlog for my product, grouping requests by user need and suggesting priorities and next decisions. Use details I’ve shared and relevant conversations and connected apps you can access; ask for what’s missing after checking them. Update this Page and preserve my edits.`,description:`Unsent draft in the chat composer when a non-Work user creates a Page from the Feature backlog template. Preserve the instructions to use accessible sources, ask for missing details, and keep user edits.`}),previewDocument:[{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.feature-backlog.preview.1`,defaultMessage:`## Ideas and requests
| Idea | User problem | Evidence | Next decision |
| --- | --- | --- | --- |

## Priorities to discuss
Compare impact, effort, and dependencies where known.

## Open questions
Track what needs research or a product decision.`,description:`Illustrative Feature backlog Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`})}]};case`learning-plan`:return{id:t,title:e.formatMessage({id:`space.pageTemplates.learning-plan.title`,defaultMessage:`Learning plan`,description:`Title of the Learning plan Page template.`}),prompt:e.formatMessage({id:`space.pageTemplates.learning-plan.prompt`,defaultMessage:`Help me make a plan for something I want to learn. Start with what I already know and what I want to be able to do. Break it into manageable steps with useful resources, practice, and a weekly routine. Include space for notes and progress checks. Use the details I’ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.`,description:`Setup request sent to the assistant when a Work user creates a Page from the Learning plan template. Preserve the requested source checks, questions, scheduling, and safeguards.`}),prefillPrompt:e.formatMessage({id:`space.pageTemplates.learning-plan.prefillPrompt`,defaultMessage:`Make a learning plan with a clear goal, useful resources, practice, and a weekly routine. Use details I’ve shared and relevant conversations and connected apps you can access; ask for what’s missing after checking them. Replace the examples with my details and preserve my edits.`,description:`Unsent draft in the chat composer when a non-Work user creates a Page from the Learning plan template. Preserve the instructions to use accessible sources, ask for missing details, and keep user edits.`}),previewDocument:[{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.learning-plan.preview.overview`,defaultMessage:`**Time:** Two 30-minute sessions a week

## 🎯 Outcome

Locate five major lunar features on a map and explain the difference between a crater and a dark plain in ordinary language.

## 🧩 Starting point

I can recognize the Moon’s broad light and dark areas. I want to connect those patterns with named places.

## 🗺️ Learning path`,description:`Illustrative Learning plan Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.learning-plan.preview.7`,defaultMessage:`| Step | Resource | Practice |
| --- | --- | --- |
| Get oriented | NASA Moon overview | Label five features on a sketch |
| Look closely | A library lunar atlas | Compare two images of one region |
| Explain it | My own notes | Write a 100-word visitor caption |`,description:`Illustrative Learning plan Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`}),layout:`normal`},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.learning-plan.preview.practiceAndReview`,defaultMessage:`## 📅 Weekly rhythm

- [ ] Tuesday: read one short section and draw a sketch.

- [ ] Sunday: revisit the sketch without looking at the labels.

- [ ] Explain one feature to a friend.

## 📝 Notebook

**Observation:** The same region can look quite different as shadows change.

**Question:** Which lighting makes a crater’s shape easiest to see?

## 🔁 Progress check

I can locate three of the five features without the atlas. Compare those three under different lighting, then add two more and repeat the unlabeled sketch.

## 🔗 Start here

[NASA Moon overview](https://science.nasa.gov/moon/)`,description:`Illustrative Learning plan Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`})}]};case`weekly-planner`:return{id:t,title:e.formatMessage({id:`space.pageTemplates.weekly-planner.title`,defaultMessage:`Weekly planner`,description:`Title of the Weekly planner Page template.`}),prompt:e.formatMessage({id:`space.pageTemplates.weekly-planner.prompt`,defaultMessage:`Plan my week around the priorities and commitments I’ve shared. Create a short priority list and a realistic day-by-day plan with suggested focus time and room for rest. Ask what matters most this week if you need a starting point. Use the details I’ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.`,description:`Setup request sent to the assistant when a Work user creates a Page from the Weekly planner template. Preserve the requested source checks, questions, scheduling, and safeguards.`}),prefillPrompt:e.formatMessage({id:`space.pageTemplates.weekly-planner.prefillPrompt`,defaultMessage:`Make a realistic weekly plan around my priorities and commitments, with suggested focus time and room for rest. Use details I’ve shared and relevant conversations and connected apps you can access; ask for what’s missing after checking them. Replace the examples with my details and preserve my edits.`,description:`Unsent draft in the chat composer when a non-Work user creates a Page from the Weekly planner template. Preserve the instructions to use accessible sources, ask for missing details, and keep user edits.`}),previewDocument:[{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.weekly-planner.preview.priorities`,defaultMessage:`## 🎯 Priorities

- [ ] Finish the lunar exhibit captions.

- [ ] Confirm volunteer roles for Friday.

- [ ] Leave one evening free of commitments.

## 🗓️ Week at a glance`,description:`Illustrative Weekly planner Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.weekly-planner.preview.6`,defaultMessage:`| Day | Main focus | Commitment |
| --- | --- | --- |
| Monday | Caption edits | Review with Leo, 14:00 |
| Tuesday | Final captions and handout draft | Approve the full print set |
| Wednesday | Send approved files to the print shop | Volunteer call, 18:00 |
| Thursday | Collect prints and check the room | Free evening |
| Friday | Open house | Arrive at 17:15 |
| Weekend | Rest and a short walk | Sunday journal time |`,description:`Illustrative Weekly planner Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`}),layout:`normal`},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.weekly-planner.preview.lifeAndReview`,defaultMessage:`## 🏡 Everyday life

- [ ] Pick up groceries on the way home.

- [ ] Return the library book.

- [ ] Call a friend over the weekend.

## 📌 Can wait

The archive’s video section and the future talk schedule.

## ✨ Weekend review

**What helped:** Did the shared caption review resolve questions before printing?

**What to change:** Note any last-minute printing or role changes to allow for in the next event plan.`,description:`Illustrative Weekly planner Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`})}]};case`trip-planner`:return{id:t,title:e.formatMessage({id:`space.pageTemplates.trip-planner.title`,defaultMessage:`Trip planner`,description:`Title of the Trip planner Page template.`}),prompt:e.formatMessage({id:`space.pageTemplates.trip-planner.prompt`,defaultMessage:`Make a flexible itinerary and planning checklist using the trip details I’ve shared. Include ideas for activities, transport, and accommodation, keeping confirmed bookings easy to identify. Ask where I’d like to go if needed, or help me choose a destination. Use the details I’ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.`,description:`Setup request sent to the assistant when a Work user creates a Page from the Trip planner template. Preserve the requested source checks, questions, scheduling, and safeguards.`}),prefillPrompt:e.formatMessage({id:`space.pageTemplates.trip-planner.prefillPrompt`,defaultMessage:`Make a flexible trip itinerary and planning checklist, including activities, transport, and accommodation. Help me choose a destination if needed. Use details I’ve shared and relevant conversations and connected apps you can access; ask for what’s missing after checking them. Replace the examples with my details and preserve my edits.`,description:`Unsent draft in the chat composer when a non-Work user creates a Page from the Trip planner template. Preserve the instructions to use accessible sources, ask for missing details, and keep user edits.`}),previewDocument:[{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.trip-planner.preview.overview`,defaultMessage:`**Travelers:** Maya and Sam  
**Pace:** One main activity a day

## 🧭 The plan

Plan two nights near a mountain observatory. The visitor tour is the main activity; confirm its availability before choosing transport and accommodation.

## 🚆 Travel and stay`,description:`Illustrative Trip planner Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.trip-planner.preview.5`,defaultMessage:`| Item | Plan | Status |
| --- | --- | --- |
| Outbound | Friday afternoon train, then local shuttle | Compare departure times |
| Accommodation | Two nights in the village | Choose a flexible booking |
| Return | Sunday afternoon train | Leave time for lunch |`,description:`Illustrative Trip planner Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`}),layout:`normal`},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.trip-planner.preview.6`,defaultMessage:`## 🗓️ Daily outline`,description:`Illustrative Trip planner Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.trip-planner.preview.7`,defaultMessage:`| Day | Main plan | Flexible alternative |
| --- | --- | --- |
| Friday | Arrive and settle in | Short village walk |
| Saturday | Observatory visitor tour | Science museum if tours change |
| Sunday | Easy morning walk | Café and photo journal |`,description:`Illustrative Trip planner Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`}),layout:`normal`},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.trip-planner.preview.packingAndNextSteps`,defaultMessage:`## 🎒 Before leaving

- [ ] Check the visitor schedule, reserve the tour if required, and review the weather before departure.

- [ ] Confirm transport and accommodation.

- [ ] Save tickets and maps offline.

- [ ] Pack warm layers, walking shoes, and a notebook.

## 💡 Useful notes

Use a $450 planning allowance for two people: $300 for two nights, $120 for meals, and $30 for local transport. Intercity tickets and any tour fees are additional; confirm actual prices before booking. Keep skywatching optional.`,description:`Illustrative Trip planner Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`})}]};case`budget-tracker`:return{id:t,title:e.formatMessage({id:`space.pageTemplates.budget-tracker.title`,defaultMessage:`Budget tracker`,description:`Title of the Budget tracker Page template.`}),prompt:e.formatMessage({id:`space.pageTemplates.budget-tracker.prompt`,defaultMessage:`Use relevant financial information from connected apps you can access to build my budget tracker. Organize income and spending, show how they compare, and help me track progress toward my goals. Use the currency shown in my accounts and start with this month unless I specify otherwise. Keep totals for different currencies separate. Use the details I’ve already shared, and ask for missing essentials only after checking the available information. If no financial information is available, start with an editable budget and ask what I’d like to add. Update this Page and preserve my edits.`,description:`Setup request sent to the assistant when a Work user creates a Page from the Budget tracker template. Preserve the requested source checks, questions, scheduling, and safeguards.`}),prefillPrompt:e.formatMessage({id:`space.pageTemplates.budget-tracker.prefillPrompt`,defaultMessage:`Use financial information from connected apps you can access and details I’ve shared to make a budget tracker for this month. Organize income and spending and track my savings goals, using my accounts’ currencies and keeping their totals separate. If no figures are available, help me start an editable budget. Update this Page and preserve my edits.`,description:`Unsent draft in the chat composer when a non-Work user creates a Page from the Budget tracker template. Preserve the instructions to use accessible sources, ask for missing details, and keep user edits.`}),previewDocument:[{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.budget-tracker.preview.1`,defaultMessage:`## Budget period
Add the time period and currency.

## Planned and actual spending
| Category | Planned | Actual | Remaining |
| --- | --- | --- | --- |
| Housing | | | |
| Food | | | |
| Transport | | | |

## Transactions
Add income and expenses with dates and sources.

## Review
Note missing figures and changes for next period.`,description:`Illustrative Budget tracker Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`})}]};case`apartment-hunter`:return{id:t,title:e.formatMessage({id:`space.pageTemplates.apartment-hunter.title`,defaultMessage:`Apartment hunter`,description:`Title of the Apartment hunter Page template.`}),prompt:e.formatMessage({id:`space.pageTemplates.apartment-hunter.prompt`,defaultMessage:`Organize my apartment search around my location and rent budget. Compare available listings by rent, fees, availability, and my preferences, with links and next steps. If I haven’t added listings yet, start with search criteria and a comparison table. Use the details I’ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Update this Page and preserve my edits.`,description:`Setup request sent to the assistant when a Work user creates a Page from the Apartment hunter template. Preserve the requested source checks, questions, scheduling, and safeguards.`}),prefillPrompt:e.formatMessage({id:`space.pageTemplates.apartment-hunter.prefillPrompt`,defaultMessage:`Help me compare apartments by rent, fees, availability, and my preferences, with listing links and next steps. Use details I’ve shared and relevant conversations and connected apps you can access; ask for what’s missing after checking them. Update this Page and preserve my edits.`,description:`Unsent draft in the chat composer when a non-Work user creates a Page from the Apartment hunter template. Preserve the instructions to use accessible sources, ask for missing details, and keep user edits.`}),previewDocument:[{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.apartment-hunter.preview.1`,defaultMessage:`## Search criteria
Add location, budget, move-in timing, and must-haves.

## Shortlist
| Listing | Rent and fees | Availability | Notes |
| --- | --- | --- | --- |

## Next steps
- [ ] Save listings to compare
- [ ] Prepare questions for a viewing

## Viewing notes
Record observations and questions for each apartment.`,description:`Illustrative Apartment hunter Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`})}]};case`event-plan`:return{id:t,title:e.formatMessage({id:`space.pageTemplates.event-plan.title`,defaultMessage:`Event Plan`,description:`Title of the Event Plan Page template.`}),prompt:e.formatMessage({id:`space.pageTemplates.event-plan.prompt`,defaultMessage:`Make a plan for my event with its purpose, key details, schedule, people involved, and preparation checklist. Include a backup plan and follow-up tasks where useful. Use the details I’ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.`,description:`Setup request sent to the assistant when a Work user creates a Page from the Event Plan template. Preserve the requested source checks, questions, scheduling, and safeguards.`}),prefillPrompt:e.formatMessage({id:`space.pageTemplates.event-plan.prefillPrompt`,defaultMessage:`Help me plan my event, including the schedule, people involved, preparation, and follow-up. Use the details I’ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.`,description:`Unsent draft in the chat composer when a non-Work user creates a Page from the Event Plan template. Preserve the instructions to use accessible sources, ask for missing details, and keep user edits.`}),previewDocument:[{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.event-plan.preview.overview`,defaultMessage:`**Time:** 18:00–20:00 local time  
**Place:** Northfield Observatory visitor hall  
**Lead:** Sam Rivera

## 🌙 Purpose

An informal evening of lunar images, short talks, and questions for first-time visitors.

## 📋 Essentials`,description:`Illustrative Event Plan Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.event-plan.preview.5`,defaultMessage:`| Item | Plan |
| --- | --- |
| Capacity | 40 visitors |
| Planning budget | $300 total: $100 printing and $200 refreshments |
| Access | Step-free entrance, seating, large-print handouts |
| Main contact | Sam at the welcome desk |`,description:`Illustrative Event Plan Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`}),layout:`normal`},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.event-plan.preview.6`,defaultMessage:`## 🕰️ Run of show`,description:`Illustrative Event Plan Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.event-plan.preview.7`,defaultMessage:`| Time | Activity | Lead |
| --- | --- | --- |
| 17:15 | Set up and volunteer briefing | Sam |
| 18:00 | Welcome and image gallery | Maya |
| 18:30 | A short tour of the lunar landscape | Priya |
| 19:00 | Indoor questions; outdoor viewing if conditions allow | Priya |
| 20:00 | Close and reset the room | Team |`,description:`Illustrative Event Plan Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`}),layout:`normal`},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.event-plan.preview.preparation`,defaultMessage:`## ✅ Preparation

- [ ] Sam: confirm the room layout and step-free visitor route.

- [ ] Maya: print 50 handouts and the caption cards before the room check.

- [ ] Priya: confirm the observing setup and brief volunteers on the indoor alternative.

## ☁️ If plans change

At 16:00, Sam confirms whether outdoor viewing will run. The indoor event goes ahead either way. Sam updates the welcome desk and guest message; if viewing is cancelled, Priya extends the indoor questions and image discussion.

## 📝 Afterwards

- [ ] Gather short visitor comments.

- [ ] Record useful changes for the next event.`,description:`Illustrative Event Plan Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`})}]};case`personal-goals`:return{id:t,title:e.formatMessage({id:`space.pageTemplates.personal-goals.title`,defaultMessage:`Personal goals`,description:`Title of the Personal goals Page template.`}),prompt:e.formatMessage({id:`space.pageTemplates.personal-goals.prompt`,defaultMessage:`Help me turn the goals I care about into a practical plan. Capture why each goal matters, what progress would look like, and a few steps I can take this week. Suggest ways to make time for them and include a short review section. Use the details I’ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.`,description:`Setup request sent to the assistant when a Work user creates a Page from the Personal goals template. Preserve the requested source checks, questions, scheduling, and safeguards.`}),prefillPrompt:e.formatMessage({id:`space.pageTemplates.personal-goals.prefillPrompt`,defaultMessage:`Help me make a plan for my personal goals, with signs of progress, a few steps for this week, and time to review how it’s going. Use the details I’ve shared and relevant conversations and connected apps you can access to fill in this Page. Ask for missing essentials only after checking that context. Replace the examples with my details and preserve my edits.`,description:`Unsent draft in the chat composer when a non-Work user creates a Page from the Personal goals template. Preserve the instructions to use accessible sources, ask for missing details, and keep user edits.`}),previewDocument:[{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.personal-goals.preview.overview`,defaultMessage:`**Review:** Last Sunday of each month

## 🧭 What matters

Over the next twelve weeks, learn a few lunar features, finish a photo journal, and keep one evening a week free.

## 🎯 Goals`,description:`Illustrative Personal goals Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.personal-goals.preview.5`,defaultMessage:`| Goal | Why | A useful sign of progress |
| --- | --- | --- |
| Learn the lunar landscape | Make skywatching more rewarding | Recognize five named features |
| Make a small photo journal | Finish something tangible | Twelve images with captions |
| Protect unplanned time | Leave room to rest | One free evening each week |`,description:`Illustrative Personal goals Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`}),layout:`normal`},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.personal-goals.preview.rhythmAndReview`,defaultMessage:`## 👣 This week

- [ ] Borrow a Moon guide from the library.

- [ ] Choose the first three journal images.

- [ ] Keep Thursday evening free.

## 🗓️ Make room

Reserve half an hour on Sunday for the journal. Join one astronomy-club evening each month. Pause the second online course until the next review.

## 🔁 Monthly review

**Progress:** The journal theme is chosen and twelve images are shortlisted.

**Lesson:** Short sessions are easier to keep than a whole afternoon.

**Adjustment:** Finish one caption each week so all twelve images are ready by the end of this plan.`,description:`Illustrative Personal goals Page template content, shared by the thumbnail and initial Page. Preserve Markdown formatting and links. Names and details are fictional examples, not user data.`})}]};default:return}}function pe(e,t){let n=N(e.locale,t);if(n?.length===0)return[];let r={kind:`icon`,value:`book`,color:`black`},i=[{id:`to-do-list`,symbol:{kind:`icon`,value:`logs`,color:`green`},title:e.formatMessage(K.todo),prompt:e.formatMessage(K.todoPrompt),prefillPrompt:e.formatMessage(K.todoPrefillPrompt),previewDocument:[{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.todo.preview`,defaultMessage:`## Today

### Top priorities

- [ ] Run propulsion test

- [ ] Verify course calculations

- [ ] Inspect fuel tanks

### If time allows

- [ ] Inspect radiation shields

- [ ] Test communication systems

- [ ] Write status report`,description:`Illustrative Markdown for the To-do list template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})}]},{id:`project-tracker`,symbol:{kind:`icon`,value:`bar-chart`,color:`blue`},title:e.formatMessage(K.projectTracker),prompt:e.formatMessage(K.projectTrackerPrompt),prefillPrompt:e.formatMessage(K.projectTrackerPrefillPrompt),previewDocument:[{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.projectTracker.preview.attentionHeading`,defaultMessage:`## 🔴 Needs immediate attention`,description:`Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.projectTracker.preview.attention`,defaultMessage:`- Communication systems test for launch`,description:`Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.projectTracker.preview.milestonesHeading`,defaultMessage:`## ⛰️ Milestones`,description:`Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})},{kind:`markdown`,layout:`flexible`,markdown:e.formatMessage({id:`space.pageTemplates.projectTracker.preview.milestonesCheckboxes`,defaultMessage:`| Milestone | Status |
| - | - |
| '<ul><li data-checked="false"><p>'Project brief'</p></li></ul>' | Complete |
| '<ul><li data-checked="false"><p>'Prototype review'</p></li></ul>' | In progress |
| '<ul><li data-checked="false"><p>'Launch readiness'</p></li></ul>' | Upcoming |`,description:`Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and the ICU-quoted HTML checkbox markup and data-checked attributes; translate only the visible text.`},{})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.projectTracker.preview.tasksHeading`,defaultMessage:`## ✅ Tasks`,description:`Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})},{kind:`markdown`,layout:`flexible`,markdown:e.formatMessage({id:`space.pageTemplates.projectTracker.preview.tasksCheckboxes`,defaultMessage:`| Task | Owner | Status |
| - | - | - |
| '<ul><li data-checked="false"><p>'Confirm scope'</p></li></ul>' | Product | Done |
| '<ul><li data-checked="false"><p>'Review designs'</p></li></ul>' | Design | In progress |
| '<ul><li data-checked="false"><p>'Test the core flow'</p></li></ul>' | Engineering | Next |
| '<ul><li data-checked="false"><p>'Prepare launch notes'</p></li></ul>' | Marketing | Next |`,description:`Illustrative Markdown for the Project tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and the ICU-quoted HTML checkbox markup and data-checked attributes; translate only the visible text.`},{})}]},{id:`weekly-update`,symbol:{kind:`icon`,value:`writing`,color:`pink`},title:e.formatMessage(K.weeklyUpdate),prompt:e.formatMessage(K.weeklyUpdatePrompt),prefillPrompt:e.formatMessage(K.weeklyUpdatePrefillPrompt),previewDocument:[{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.weeklyUpdate.preview`,defaultMessage:`## ✨ Highlights

- Progress made

## ☝️ Needs attention

- Blockers and decisions needing input

## ▶️ Next week

- Upcoming milestones and confirmed commitments

## 🔗 Sources

- Links to sources`,description:`Illustrative Markdown for the Weekly update template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})}]},{id:`feedback-tracker`,symbol:{kind:`icon`,value:`edit`,color:`red`},title:e.formatMessage(K.feedback),prompt:e.formatMessage(K.feedbackPrompt),prefillPrompt:e.formatMessage(K.feedbackPrefillPrompt),previewDocument:[{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.feedback.preview.themesHeading`,defaultMessage:`## 🔎 Top themes`,description:`Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.feedback.preview.onboardingTheme`,defaultMessage:`1. Make onboarding easier to follow`,description:`Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.feedback.preview.navigationTheme`,defaultMessage:`2. Help people find the right resource`,description:`Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.feedback.preview.sharingTheme`,defaultMessage:`3. Clarify what happens after sharing`,description:`Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.feedback.preview.registerHeading`,defaultMessage:`## 🗂️ Feedback register`,description:`Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})},{kind:`markdown`,layout:`flexible`,markdown:e.formatMessage({id:`space.pageTemplates.feedback.preview.register`,defaultMessage:`| Theme | Source | Next step |
| - | - | - |
| Onboarding | Research notes | Review the first-run flow |
| Navigation | Team channel | Group related resources |
| Sharing | Support email | Clarify confirmation copy |`,description:`Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.feedback.preview.summaryHeading`,defaultMessage:`## 📝 Summary`,description:`Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.feedback.preview.summary`,defaultMessage:`People need clearer guidance at key moments. Start with onboarding, then review navigation and sharing.`,description:`Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.feedback.preview.followupsHeading`,defaultMessage:`## ▶️ Follow-ups`,description:`Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.feedback.preview.followups`,defaultMessage:`- Schedule user interviews for next week`,description:`Illustrative Markdown for the Feedback tracker template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})}]},{id:`release-notes`,symbol:r,title:e.formatMessage(K.releaseNotes),prompt:e.formatMessage(K.releaseNotesPrompt),prefillPrompt:e.formatMessage(K.releaseNotesPrefillPrompt),previewDocument:[{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.releaseNotes.preview`,defaultMessage:`## 🆕 New

- New capabilities and who can use them

## 🏆 Improvements

- Changes to existing workflows

## 🛠️ Fixes

- Resolved issues and their impact

## 🌐 Availability

- Supported platforms, rollout status, and known limitations.

## 🔗 Sources

- Links to sources`,description:`Illustrative Markdown for the Release notes template thumbnail and initial Page content, not facts about the user. Preserve Markdown, emojis, and list numbering and checkbox markers where present.`})}]},{id:`project-home`,symbol:r,title:e.formatMessage(K.projectHome),prompt:e.formatMessage(K.projectHomePrompt),prefillPrompt:e.formatMessage(K.projectHomePrefillPrompt),setupQuestion:e.formatMessage({id:`space.pageTemplates.projectHome.question`,defaultMessage:`Which project is this for, and which sources should I use?`,description:`Immediate setup question for a Project Home Page; the answer identifies the project and permitted source material`}),previewDocument:[{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.projectHome.preview.intro`,defaultMessage:`One place for the team, the plan, and what comes next.

## Overview
Make the next product launch simple, coordinated, and easy to follow.

## Team`,description:`Illustrative intro content for the Project Home Page template. Preserve Markdown formatting; this is sample content, not user data.`})},{kind:`markdown`,layout:`flexible`,markdown:e.formatMessage({id:`space.pageTemplates.projectHome.preview.team`,defaultMessage:`| Responsibility | Team |
| --- | --- |
| Project lead | Product |
| Experience | Design |
| Delivery | Engineering |`,description:`Illustrative team content for the Project Home Page template. Preserve Markdown formatting; this is sample content, not user data.`})},{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.projectHome.preview.ending`,defaultMessage:`## Milestones
- Align on the plan
- Review the first prototype
- Prepare the launch

## Key resources
- Project brief and goals
- Decisions from the team channel
- Research notes and launch checklist

## Latest update
The brief is ready for review. Next up: confirm owners and milestones.`,description:`Illustrative ending content for the Project Home Page template. Preserve Markdown formatting; this is sample content, not user data.`})}]},{id:`faq`,symbol:r,title:e.formatMessage(K.faq),prompt:e.formatMessage(K.faqPrompt),prefillPrompt:e.formatMessage(K.faqPrefillPrompt),setupQuestion:e.formatMessage({id:`space.pageTemplates.faq.question`,defaultMessage:`What topic and audience is this FAQ for, and which sources should I use?`,description:`Immediate setup question for an FAQ Page; the answer identifies the topic, intended audience and trusted source material`}),previewDocument:[{kind:`markdown`,markdown:e.formatMessage({id:`space.pageTemplates.faq.preview`,defaultMessage:`Shared answers, grounded in the team's knowledge.

## Getting started
### Where should I start?
Read the project brief for goals, scope, and the people involved.

### Where can I find the latest plan?
The Project Home brings together milestones, resources, and recent decisions.

## Working together
### How do I share feedback?
Add the source discussion and a clear next step to the feedback tracker.

### How are decisions recorded?
Keep the decision, its owner, and supporting context together.

## Open questions
- Who owns the next review?
- Which resources need an update?

## Sources
Project notes, team discussions, and approved guidance.`,description:`Illustrative Markdown for the FAQ thumbnail and initial Page content. Fictional questions and answers, not approved guidance. Preserve Markdown headings and lists.`})}]}],a=()=>i.filter(({id:e})=>e!==`project-home`&&e!==`faq`).map(e=>({...e,...W(e.previewDocument)}));if(n==null)return a();let o=G.safeParse(n.map(t=>{let n=i.find(({id:e})=>e===t.id)??fe(e,t.id),r=t.prompt==null?n?.setupQuestion:void 0,a=t.prefillPrompt??(t.prompt==null?n?.prefillPrompt:void 0)??e.formatMessage(K.customPrefillPrompt);return{...n,...t,prefillPrompt:a,previewDocument:t.previewDocument??(t.previewMarkdown==null?n?.previewDocument:[{kind:`markdown`,markdown:t.previewMarkdown}]),setupQuestion:t.setupQuestion===void 0?r:t.setupQuestion}}));return o.success?o.data.map(e=>({...e,symbol:i.find(({id:t})=>t===e.id)?.symbol??r,...W(e.previewDocument)})):a()}function W(e){let t=e.flatMap(e=>i(e.markdown).map(t=>({...e,markdown:t})));return{previewMarkdown:t.map(({markdown:e})=>e).join(`

`),previewDocument:t}}var G,K;function q(){return(q=e((()=>{ee(),u(),U(),G=z.required({previewDocument:!0}).array(),K=ne({todoPrefillPrompt:{id:`space.pageTemplates.todo.prefill.sourceAware`,defaultMessage:`Help me turn this Page into my to-do list. Check relevant conversations and connected apps you can access for things I need to do. If you can’t find enough, ask me what to add. Replace the sample tasks, keep the checkboxes and any edits I’ve made, and don’t invent tasks or deadlines.`,description:`Unsent draft in the native Page chat composer for a non-Work user choosing the To-do list template. It asks ChatGPT to use only accessible conversations and connected apps, ask for missing tasks, and preserve user edits while replacing sample content.`},projectTrackerPrefillPrompt:{id:`space.pageTemplates.projectTracker.prefill.sourceAware`,defaultMessage:`Help me make this Page a tracker for my project. Use relevant conversations and connected apps you can access to find milestones and tasks, and ask me for anything missing. Replace the examples, keep my edits, and don’t guess at owners, dates, or statuses.`,description:`Unsent draft in the native Page chat composer for a non-Work user choosing the Project tracker template. It asks ChatGPT to use only accessible conversations and connected apps, ask for missing details, and preserve user edits while replacing examples.`},weeklyUpdatePrefillPrompt:{id:`space.pageTemplates.weeklyUpdate.prefill.sourceAware`,defaultMessage:`Help me write this week’s update on this Page. Look for progress, blockers, and next steps in relevant conversations and connected apps you can access. Ask which project or week I mean if it’s unclear, and don’t make up accomplishments.`,description:`Unsent draft in the native Page chat composer for a non-Work user choosing the Weekly update template. It asks ChatGPT to use only accessible conversations and connected apps, clarify an ambiguous project or week, and avoid invented accomplishments.`},feedbackPrefillPrompt:{id:`space.pageTemplates.feedback.prefill.sourceAware`,defaultMessage:`Help me organize feedback on this Page. Use relevant conversations and connected apps you can access to find feedback. Ask what product or topic to focus on if it’s unclear, replace the examples with what you find, and don’t invent feedback.`,description:`Unsent draft in the native Page chat composer for a non-Work user choosing the Feedback tracker template. It asks ChatGPT to use only accessible conversations and connected apps, clarify the topic, and replace examples without inventing feedback.`},releaseNotesPrefillPrompt:{id:`space.pageTemplates.releaseNotes.prefill.sourceAware`,defaultMessage:`Help me write release notes on this Page. Check relevant conversations and connected apps you can access for confirmed changes and limitations. Ask which release I mean if it’s unclear, and don’t add unconfirmed details or publish anything.`,description:`Unsent draft in the native Page chat composer for a non-Work user choosing the Release notes template. It asks ChatGPT to use only accessible conversations and connected apps, clarify the release, and avoid unconfirmed details or publishing.`},projectHomePrefillPrompt:{id:`space.pageTemplates.projectHome.prefill.sourceAware`,defaultMessage:`Help me set up this Project Home Page. Use relevant conversations and connected apps you can access for the project’s goals, team, milestones, and links. Ask me for anything missing, keep my edits, and don’t make up owners or dates.`,description:`Unsent draft in the native Page chat composer for a non-Work user choosing the Project Home template. It asks ChatGPT to use only accessible conversations and connected apps, ask for missing project details, and preserve user edits.`},faqPrefillPrompt:{id:`space.pageTemplates.faq.prefill.sourceAware`,defaultMessage:`Help me make an FAQ on this Page. Look for trusted answers in relevant conversations and connected apps you can access. Ask who it’s for and what it’s about if unclear, and leave anything unverified as an open question.`,description:`Unsent draft in the native Page chat composer for a non-Work user choosing the FAQ template. It asks ChatGPT to use only accessible conversations and connected apps, clarify the audience and topic, and leave unverified answers open.`},customPrefillPrompt:{id:`space.pageTemplates.custom.prefill.sourceAware`,defaultMessage:`Help me make this Page my own. Use relevant conversations and connected apps you can access, and ask me what I want to add if it’s unclear. Keep my edits and don’t fill in details you can’t verify.`,description:`Fallback unsent draft in the native Page chat composer for a non-Work user choosing a configured Page template without its own prefill prompt. It asks ChatGPT to use only accessible conversations and connected apps, clarify intent, and preserve user edits.`},weeklyUpdate:{id:`space.pageTemplates.weeklyUpdate.title`,defaultMessage:`Weekly update`,description:`Title of the native Weekly update Page template`},weeklyUpdatePrompt:{id:`space.pageTemplates.weeklyUpdate.setup`,defaultMessage:`Check my relevant connected apps and create a weekly update suitable for sharing with cross-functional partners, stakeholders, and executives.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,description:`Setup request for a weekly update Page for cross-functional partners, stakeholders, and executives. Preserve the instructions to verify sources, keep user edits, and ask only essential questions.`},releaseNotes:{id:`space.pageTemplates.releaseNotes.title`,defaultMessage:`Release notes`,description:`Title of the native Release notes Page template`},releaseNotesPrompt:{id:`space.pageTemplates.releaseNotes.setup`,defaultMessage:`Check my relevant connected apps and create release notes. Ask which project I would like to create release notes for.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,description:`Setup request for a release notes Page. Ask which project to cover. Preserve the instructions to verify sources, keep user edits, and use comments only when input is needed.`},projectHome:{id:`space.pageTemplates.projectHome.title`,defaultMessage:`Project Home`,description:`Title of a native Page template organizing project context and resources`},projectHomePrompt:{id:`space.pageTemplates.projectHome.setup`,defaultMessage:`Help me make this Project Home my own. Start working directly in the Page without a setup interview or waiting for confirmation. Choose a project from available context and begin filling it in; the user can redirect you afterward.

If the Page has an Instructions section, collapse it before adding content so it does not push the useful content below the chat, and keep it collapsed when you finish. If that section exists but the available controls cannot change its collapsed state, say so briefly; do not claim it is collapsed. If there is no Instructions section, continue without creating one or mentioning its absence.

Make sure the Page has a title. If it is untitled, use “Project Home” initially. Preserve an existing title and any user edits.

Before searching connected sources, add an editable starting structure with two sections: Project overview and Essential resources. Include supported details already available in context. Keep this first version compact and useful, without a wall of empty headings or repeated placeholders. Send this brief chat message: “I’m filling in your Project Home. You can edit any section while I work.”

Choose the most relevant project using your best judgment. Prioritize context attached to this Page or its current Space, then recent conversations and project activity. If several projects are plausible, pick the strongest candidate and treat it as a working assumption. Do not stop to ask which project to use or wait for approval before filling in supported details. Choose a real project supported by context; do not invent one. If the initial context provides no candidate, search recent connected sources for one.

Leave one comment explaining the choice: “I picked [project] based on [context] and started filling in this Page. If you’d like a different project, reply here with its name or a source and I’ll switch.”

Prefer anchoring this comment to the Page title. If title comments are unsupported, use the first existing content section outside Instructions. If supported, open and focus the comment so it is visible above the chat. Do not claim it is open or focused unless verified. Do not create body content solely to anchor the comment, and do not repeat the project-selection question in the body.

Continue working immediately after leaving the comment. Use the project’s Slack channel, relevant emails, project notes, and links to fill in the Page incrementally. Write useful findings as you find them instead of waiting until all research is complete. Add short, scannable sections as evidence becomes available:

- Project overview: what we’re building, who it’s for, and why it matters
- Team and responsibilities
- Essential resources
- Recent updates
- Upcoming milestones
- Decisions and open questions
- A short guide for someone joining

Cite sources near the claims they support. Prioritize recent sources for status and milestones, and include relevant dates. Distinguish confirmed decisions from proposals, and commitments from completed work. Flag conflicting information rather than silently choosing one version. Do not invent facts or sample records. Keep detailed tasks in a linked tracker if one exists.

Use Open questions only for substantive project unknowns. Label these “Needs input” or “Not yet found” where useful. Do not create an Open questions section to ask which project to use. If no real project can be found after a reasonable search, preserve the starting structure and explain the missing context in the single comment rather than fabricating a project.

Use Page comments for focused questions and assumptions. Prefer the title, or the first existing content section outside Instructions if title comments are unsupported. Refer to the relevant section in the comment instead of anchoring questions farther down the Page. Ask only what is needed to move forward, and continue supported work while awaiting answers. If a relevant app isn’t connected, offer to connect it and continue with available sources.

When input would help, add one brief, contextual invitation in comments or chat: “Add a project brief here with @, or type @ChatGPT, select it from the Page’s mention menu, and ask me to use a different project. Use / to add content to the Page.” Adapt the example to the actual gap. Do not repeat this guidance in the Page body.

Write using native Page blocks. Check current content before replacing anything, and preserve edits the user makes while you work. When the user names a different project or provides new context, update the relevant sections, revise the choice comment, and remove obsolete content, resolved questions, and unnecessary hints.

Keep chat replies brief and focused on the next step. Do not repeat Page content in chat. Do not imply that the Page is being monitored or updated continuously. Do not send messages or configure recurring updates without asking first.`,description:`Setup prompt automatically submitted in the new Project Home Page's chat after the user selects its template. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`},projectTracker:{id:`space.pageTemplates.projectTracker.title`,defaultMessage:`Project tracker`,description:`Title of a native Page template tracking project tasks and milestones`},projectTrackerPrompt:{id:`space.pageTemplates.projectTracker.setup`,defaultMessage:`Check my relevant connected apps and create a project tracker. Automatically update every morning at 6am in my browser time zone.

Include checkboxes to the left of the milestones and tasks in the table. This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,description:`Setup request for a project tracker Page, including checkbox tables and daily updates at 6 a.m. in the browser time zone. Preserve the instructions to verify sources and keep user edits.`},todo:{id:`space.pageTemplates.todo.title`,defaultMessage:`To-do list`,description:`Title of a native Page template for personal tasks across projects`},todoPrompt:{id:`space.pageTemplates.todo.setup`,defaultMessage:`Check my relevant connected apps and create a to-do checklist. Automatically update every morning at 6am in my browser time zone: check off completed tasks for me, and carry forward incomplete tasks to the next day.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. Do not add introductory paragraphs, conclusions, coverage summaries, methodology, scheduling details, or explanations of how you maintain the checklist. Avoid boilerplate. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,description:`Setup request for a personal to-do Page, including daily updates at 6 a.m. in the browser time zone. Preserve the distinction between illustrative tasks and verified user information.`},feedback:{id:`space.pageTemplates.feedback.title`,defaultMessage:`Feedback tracker`,description:`Title of a native Page template collecting feedback and summarizing recurring issues`},feedbackPrompt:{id:`space.pageTemplates.feedback.setup`,defaultMessage:`Check my relevant connected apps and create a feedback tracker. Ask which project I would like to track feedback for. Automatically update every morning at 6am in my browser time zone.

This page starts with illustrative template content, not facts about me or my work. Verify the user making this request before proceeding. Read the page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it and add items where needed. Try to finish the page without any questions, but if essential information is missing, ask a focused question rather than guessing. The page title is displayed separately; do not repeat it as a heading in the body. You may leave up to 3 more comments on the page, as appropriate, where you need my input. Don't add comments unnecessarily.`,description:`Setup request for a feedback tracker Page. Ask which project to track and update daily at 6 a.m. in the browser time zone. Preserve the instructions to verify sources and keep user edits.`},faq:{id:`space.pageTemplates.faq.title`,defaultMessage:`FAQ`,description:`Title of a native Page template for frequently asked questions and source-backed answers`},faqPrompt:{id:`space.pageTemplates.faq.setup`,defaultMessage:`Help me make this FAQ my own. Ask for the topic, audience and trusted source notes or links, including relevant Slack discussions and approved guidance. Offer to connect relevant apps when needed. Build the most useful questions with concise supported answers and source links. Combine equivalent questions, keep unanswered or disputed questions visible with an owner or next decision, and keep material freshness qualifiers beside the answers they affect. Link a separate feedback tracker if I have one. Write directly into this Page using native Page blocks, preserving its title and my edits. Do not invent answers or treat unconfirmed replies as authoritative guidance. Keep source-channel replies unsent and automatic updates unconfigured unless I ask to set them up. Ask only the setup questions needed to proceed. Keep chat replies brief and focused on the next step. Organize the Page into short, scannable sections with actionable details. Don't repeat Page content in chat.`,description:`Setup prompt automatically submitted in the new FAQ Page's chat after the user selects its template`}})})))()}var J,Y,X,Z,Q;function $(){return($=e((()=>{a(),h(),g(),_(),v(),k(),E(),C(),ae(),J=d(O,({get:e})=>e(y)&&e(m).status===`allowed`),Y=te(O,({get:e,scope:t})=>{let n=e(A),r=e(p);return{queryKey:[`space`,`personalized-pages`,n,r],enabled:e(J)&&n!=null&&r!=null,staleTime:6e4,gcTime:0,retry:!1,queryFn:async({signal:e})=>{if(n==null||r==null)throw Error(`space_account_unavailable`);let i=w(t,n,r),a=AbortSignal.any([e,i.signal]);try{let e=await x.safeGet(`/pages/suggestions`,{additionalHeaders:{"ChatGPT-Account-ID":n,[ie]:n},signal:a});return a.throwIfAborted(),e}finally{i.stop()}}}}),X=t(O,e=>Date.parse(e)>Date.now(),(e,{set:t})=>{let n,r=()=>{let i=Date.parse(e)-Date.now();t(i>0),i>0&&(n=setTimeout(r,Math.min(i,2147483647)))};return r(),()=>clearTimeout(n)},{autoDispose:!0}),Z=s(O,(e,{get:t})=>{if(!t(J)||t(S,`3798925676`)?.value[e===`getting-started`?`show_in_getting_started`:`show_in_template_modal`]!==!0)return;let n=t(Y);return n.isSuccess?n.data.suggestions.filter(e=>t(X,e.expires_at)).slice(0,3):void 0}),Q=d(O,({get:e})=>e(J)&&e(S,`3798925676`)?.value.show_in_template_modal===!0&&e(Y).isLoading)})))()}export{J as a,I as c,F as d,V as f,Y as i,L as l,Z as n,pe as o,B as p,Q as r,q as s,$ as t,U as u};
//# sourceMappingURL=personalized-pages-2afddc466857.js.map