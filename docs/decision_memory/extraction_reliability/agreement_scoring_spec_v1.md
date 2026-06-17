# Agreement Scoring Spec v1

## Purpose

Define how reviewer agreement should be measured after real reviewer responses exist.

This file defines metrics only.

No agreement scores are calculated here.

## Required Inputs

- classification_packet_v1.md
- completed reviewer_response_template_v1.md from each reviewer
- reviewer count
- classification for each excerpt

## Agreement Metrics

### Exact Agreement Count

Number of excerpts where all reviewers selected the same classification.

### Disagreement Count

Number of excerpts where reviewers selected different classifications.

### Unclear Frequency

Number of unclear selections across reviewers.

This should be tracked overall and per excerpt.

## Per-Excerpt Summary

For each excerpt, record:

- number of decision votes
- number of not decision votes
- number of unclear votes
- agreement status
- dominant classification, if any

## Optional Future Metrics

These may be calculated in a later study:

- Cohen's Kappa for two reviewers
- Fleiss' Kappa for three or more reviewers

Do not calculate them until real reviewer data exists.

## Reliability Outcome Labels

Allowed after data exists:

- high agreement
- moderate agreement
- low agreement
- unknown

This version does not define numeric thresholds.

Thresholds should be set before results are interpreted.

