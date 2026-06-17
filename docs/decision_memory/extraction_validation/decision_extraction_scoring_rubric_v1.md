# Decision Extraction Scoring Rubric v1

## Purpose

Define how future extraction attempts should be scored against the validation set.

No scores are reported in this file.

## Labels

### decision

The extractor identifies a real decision when the expected classification is decision.

Required explanation:

- choice made
- alternative or rejected path
- rationale
- consequence
- source evidence

### not decision

The extractor rejects an excerpt that lacks decision structure.

Required explanation:

- why it is only a metric, observation, review note, deployment status, or preference
- which required decision element is missing

### unclear

The extractor does not force classification when evidence is incomplete.

Required explanation:

- what appears decision-like
- what evidence is missing
- what source would be needed before extraction

## Scoring Categories

### Correct Positive

Expected decision and classified as decision.

### Correct Negative

Expected not decision and classified as not decision.

### Correct Unclear

Expected unclear and classified as unclear.

### False Positive

Expected not decision or unclear, but classified as decision.

Risk:

Decision Memory becomes polluted with fake or unsupported records.

### False Negative

Expected decision, but classified as not decision.

Risk:

Important rationale remains outside Decision Memory.

### Overconfident Unclear

Expected unclear, but classified as decision without additional evidence.

Risk:

Moon fills gaps with inference.

## Accuracy Guardrail

Do not publish an extraction accuracy percentage until:

- an extraction attempt is performed
- results are compared against this validation set
- false positives and false negatives are documented
- ambiguous cases are reviewed

## Minimum Quality Bar Before Scaling

Before creating 50-100 more decision records, Moon should show:

- low false positive rate
- explicit uncertainty handling
- no unsupported rationale creation
- consistent boundary handling

No threshold is set in this version.

