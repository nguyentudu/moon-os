# Moon Shared Understanding Lab Verification

## Verification Date

2026-06-22

## Deployment Status

FAILED

Railway CLI authentication is not available in this non-interactive session.

Commands attempted:

- `railway status`
- `railway login`
- `railway login --browserless`
- `railway up --service moon-today-prototype`

Observed results:

- `railway status`: `Unauthorized. Please run railway login again.`
- `railway login`: `Cannot login in non-interactive mode`
- `railway login --browserless`: `Cannot login in non-interactive mode`
- public route check: `404 Not Found`

## Railway Deployment ID

Unavailable.

No successful Railway deployment occurred in this verification run.

## Public URL

Target:

https://moon-today-prototype-production.up.railway.app/shared-understanding/

Observed status:

`404 Not Found`

## Verification Checklist

| Check | Status | Evidence |
| --- | --- | --- |
| Page loads | FAIL | Public route returned 404 |
| EN/VI toggle works | NOT_VERIFIED | Page not live |
| 4 cases visible | NOT_VERIFIED | `shared_cases.js` public route returned no case data |
| Participant ID field works | NOT_VERIFIED | Page not live |
| Raw answer fields work | NOT_VERIFIED | Page not live |
| Copy results works | NOT_VERIFIED | Page not live |
| JSON download works | NOT_VERIFIED | Page not live |
| No scoring shown | NOT_VERIFIED | Page not live |
| No claims shown | NOT_VERIFIED | Page not live |
| No fake data present | PASS_LOCAL | Local/source files contain no fake participant data |

## Known Issues

Railway authentication must be restored from an interactive environment or a valid non-interactive token before deployment can complete.

## Study Status

NO_PARTICIPANT_DATA

No participant evidence was collected during this verification attempt.

## Verdict

FAIL

Public readiness is blocked until Railway deployment succeeds and the public route can be verified.
