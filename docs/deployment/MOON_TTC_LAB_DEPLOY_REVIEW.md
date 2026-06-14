# Moon TTC Lab Deploy Review v1

## Commit Hash

90dd513

Commit message:

Add Moon TTC Lab benchmark UI

## Railway Deployment Status

SUCCESS

Deployment ID:

8e0dfb3b-21ab-49fd-9e84-cad3d90df3e2

## Public TTC Lab URL

https://moon-today-prototype-production.up.railway.app/ttc/

## Manual Mode Works

YES

Verified:

- Manual Mode is the default state.
- Manual instruction is visible.
- Decision Memory answer block is only rendered when state.mode is memory.

## Decision Memory Mode Works

YES

Verified static question data includes 10 structured answers with:

- retrieved decision records
- reason
- evidence links
- current validity
- confidence
- unknowns

## Timer Works

YES

Timer uses client-side JavaScript with Date.now, setInterval, and clearInterval.

## Copy Results Works

YES

The UI includes:

- per-question Copy result button
- Copy all results button
- navigator.clipboard write behavior

## No Backend/Auth/Database

YES

The lab is static HTML, CSS, and JavaScript.

No backend, auth, database, ingestion, agent, chat, notification, or automatic submission was added.

## Fake Results Present

NO

No participant results, scores, timing results, or time-saved claims were added.

## Ready For Testers

YES

The public lab is ready for 3-5 testers to produce Time To Context evidence manually.

## Verdict

PASS

Moon has a public TTC Lab where testers can produce Time To Context evidence without seeing Decision Memory answers in Manual Mode.
