# Agreement Calculation Sheet v1

## Purpose

Define how agreement will be calculated after real reviewer classifications are imported.

No calculations are performed in this file.

## Required Data

For each excerpt:

- Reviewer A classification
- Reviewer B classification
- Reviewer C classification, if available

Allowed classifications:

- decision
- not decision
- unclear

## Exact Agreement Count

Formula:

Count excerpts where all submitted reviewer classifications are identical.

Example structure:

`if reviewer_labels_for_excerpt all match, exact_agreement = 1; else exact_agreement = 0`

## Disagreement Count

Formula:

Count excerpts where at least two submitted reviewer classifications differ.

Example structure:

`if reviewer_labels_for_excerpt contain more than one unique label, disagreement = 1; else disagreement = 0`

## Unclear Frequency

Formula:

Count all reviewer classifications equal to unclear.

Optional per-excerpt formula:

`unclear_frequency_for_excerpt = count(unclear labels for excerpt)`

## Optional Future Metrics

### Cohen's Kappa

Use only when exactly two reviewers submit complete classifications.

Do not calculate until real reviewer data exists.

### Fleiss' Kappa

Use only when three or more reviewers submit complete classifications.

Do not calculate until real reviewer data exists.

## Current Calculation Status

NOT_CALCULATED

No reviewer data exists.

