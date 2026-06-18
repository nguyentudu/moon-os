# Time To Context Measurement v1

## Definition

Time required for a person to understand enough context to answer why a system exists or why a decision was made.

## Existing Evidence

Moon has imported TTC logs from chat-provided benchmark runs.

Current status:

EARLY_TTC_SIGNAL

Limitations:

- participant identity unknown
- reviewer independence unknown
- same-participant status unknown
- possible mode contamination
- no formal completeness scoring
- Moon repo only

## Measurement Design

Compare:

- Manual repo reading
- Decision Memory assisted answering

For each question, capture:

- question
- mode
- elapsed time
- answer
- evidence cited
- participant confidence
- perceived difficulty

## Required Quality Controls

- participant identity recorded
- mode order counterbalanced
- same question set
- same timekeeping method
- answer completeness scored separately
- confidence captured
- raw responses preserved

## Allowed Claims

With no participant data:

NO_CLAIM

With small or incomplete data:

EARLY_SIGNAL

With repeated participant evidence and quality scoring:

VALIDATED_SIGNAL

## Current Claim

EARLY_SIGNAL only.

