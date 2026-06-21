# Study Collection Protocol v1

## Collection Steps

1. Participant opens the public study URL.
2. Participant selects English or Vietnamese.
3. Participant enters Participant ID.
4. Participant consents to raw answer storage.
5. Participant answers four cases.
6. Participant copies or downloads JSON.
7. Research operator imports raw JSON into future evidence files.

## No Backend Policy

The UI does not automatically submit data.

There is no backend, database, dashboard, scoring system, or analytics pipeline.

## Validation Checks Before Import

For each future submission, verify:

- participant_id exists
- language exists
- all four case ids exist
- each answer includes recommendation, rationale, evidence, risks, uncertainty, confidence
- timestamps exist
- elapsed_seconds exists

## Evidence Integrity

Do not edit participant answers.

If an answer is incomplete, preserve it and flag it in analysis.
