# Reviewer Submission Import Protocol v1

## Purpose

Define how copied Reliability Lab results should be imported for Round 2.

## Source Format

Expected copied result block:

```text
Reviewer ID:
Date:
Excerpt ID:
Classification:
Comment:
```

## Allowed Classification Values

- decision
- not decision
- unclear

Case normalization is allowed for classification values only.

Reviewer comments must be preserved exactly.

## Import Steps

1. Preserve the raw copied submission in round2_raw_evidence_log_v1.md.
2. Assign or confirm reviewer identity.
3. Parse each excerpt block.
4. Validate that all expected excerpt IDs are present.
5. Validate that each excerpt has exactly one classification.
6. Flag malformed entries.
7. Flag missing classifications.
8. Flag duplicate excerpt entries.
9. Import only after validation notes are recorded.

## Validation Checks

### Reviewer ID

Flag if blank or duplicated across different people.

### Excerpt Coverage

Expected:

50 excerpts.

Flag if fewer or more than 50 excerpt entries appear.

### Duplicate Detection

Duplicate if the same reviewer submission contains the same Excerpt ID more than once.

### Missing Classification Handling

If classification is blank:

- preserve raw entry
- mark missing_classification
- do not infer a label

### Malformed Label Handling

If classification is not one of the allowed values:

- preserve raw value
- mark malformed_label
- do not normalize unless the intended allowed value is obvious and documented

## Guardrail

Do not invent reviewer intent.

Do not complete missing labels.

Do not calculate agreement during import.

