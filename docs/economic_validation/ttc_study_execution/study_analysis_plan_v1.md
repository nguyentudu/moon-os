# Study Analysis Plan v1

## Purpose

Define how TTC Study data should be analyzed after raw submissions exist.

No analysis is performed in this file.

## Required Inputs

- raw participant JSON
- participant mode assignment
- question set version
- answer quality rubric
- import validation notes

## Analysis Steps

1. Preserve raw submissions.
2. Validate participant IDs and modes.
3. Validate each question has an answer and timing.
4. Calculate elapsed time by question and mode.
5. Score answer quality separately.
6. Compare Manual vs Decision Memory only after quality review.
7. Document limitations.

## Allowed Future Outputs

- participant count
- valid run count
- missing data count
- median time by mode
- answer quality by mode
- qualitative limitations

## Not Allowed

- economic value claim without baseline and quality evidence
- automated winner in the UI
- PMF claim
- onboarding reduction claim

