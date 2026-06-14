# Moon TTC Lab

## Purpose

Moon TTC Lab is a tiny public benchmark UI for measuring Time To Context.

It lets 3-5 testers compare:

- Manual repo/context reading
- Moon Decision Memory assisted understanding

## Boundary

This is a measurement UI, not a product UI.

It does not include:

- backend
- database
- auth
- ingestion
- agent
- chat
- notifications
- fake benchmark results

## Public Serving

The source lives in:

apps/moon_ttc_lab/

The Railway-served copy lives in:

apps/moon_today_experience_prototype/ttc/

This keeps the existing static Railway service working at:

/ttc/

## Tester Flow

1. Choose Manual Mode or Decision Memory Mode.
2. Start the timer per question.
3. Write an answer.
4. Rate confidence 1-5.
5. Stop the timer.
6. Copy the result.
7. Paste results into the reviewer form or send them back manually.
