# Decision Ingestion Spec v1

## Purpose

Define how future Decision Memory records should be added.

This is a manual documentation process for the MVP.

No ingestion engine is implemented.

## Eligible Sources

Allowed sources:

- repository documents
- review reports
- deployment reports
- validation artifacts
- user-confirmed statements
- project artifacts

Disallowed sources:

- unsourced assumptions
- private user data
- external inboxes or calendars
- inferred intent with no supporting artifact

## Manual Ingestion Steps

1. Identify a decision that affects architecture, trust, attention, validation, runtime, or product boundaries.
2. Confirm that source evidence exists.
3. Create or update a decision record.
4. Link related docs and reviews.
5. State alternatives considered.
6. State current validity.
7. Mark status.
8. Add benchmark question coverage where relevant.

## Evidence Requirements

Every record must include:

- at least one evidence link
- at least one related doc or review
- a reason grounded in repository evidence

## Rejection Rules

Reject a candidate decision if:

- no source exists
- the record would invent intent
- the record depends on private data not present in the repository
- the record tries to become a feature request instead of memory

## Update Rules

Decision records may be updated when:

- a later review supersedes the decision
- a prototype changes the outcome
- a benchmark exposes missing context
- the owner changes
- the decision becomes stale

Updates should preserve prior evidence rather than erase it.
