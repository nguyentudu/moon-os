# TTC Localization Review v1

## Review Date

2026-06-18

## Languages Supported

- English
- Tiếng Việt

## Landing Page Localized

YES

## Consent Localized

YES

## Questions Localized

YES

## Completion Screen Localized

YES

## Protocol Changed

NO

The same study modes, question ids, timing capture, raw answer capture, and analysis boundaries remain in place.

## Scoring Added

NO

## Analytics Added

NO

## Economic Claims Added

NO

## Storage Updated

YES

Raw evidence now includes:

- `participant_language`

Participant answers are not translated automatically.

## Railway Deployment

YES

Public route:

https://moon-today-prototype-production.up.railway.app/ttc-study/

Smoke test confirmed:

- language selector visible
- English and Vietnamese available
- `participant_language` present in raw capture flow
- localized question file contains 6 TTC questions
- no metrics or claims are shown in the study UI

## Commit Hash

Recorded in final report after commit creation.

## Verdict

PASS

Moon TTC Study now supports English and Vietnamese participation without changing the study protocol or making any TTC improvement or economic claim.
