# Reliability Lab Collection Protocol v1

## Purpose

Define how reviewer responses from Moon Reliability Lab should be collected.

## Collection Method

Reviewers use the public Research UI and copy results manually.

No backend collection is used.

## Required Returned Fields

Each copied response should include:

- Reviewer ID
- Date
- Excerpt ID
- Classification
- Comment

## Evidence Handling

Preserve raw reviewer text exactly as submitted.

Do not clean classifications before import.

Do not infer missing answers.

Do not calculate agreement until reviewer data is imported into the execution docs.

## Guardrails

- no fake reviewer data
- no fake agreement
- no synthetic reliability metrics
- no decision definition revision before disagreement evidence exists

