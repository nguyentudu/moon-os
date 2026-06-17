# Extraction Reliability Execution Plan v1

## Purpose

Define how Moon will run the Decision Extraction reliability study.

## Study Materials

Use:

- extraction_reliability_manifest_v1.md
- reviewer_protocol_v1.md
- classification_packet_v1.md
- reviewer_response_template_v1.md
- agreement_scoring_spec_v1.md
- disagreement_analysis_template_v1.md

## Minimum Review Levels

### Level 0: Setup Only

Reviewer count:

0

Allowed claims:

- Reliability study framework exists.
- Blind reviewer packet exists.
- Results status is NO_DATA.

Not allowed:

- reliability claim
- agreement claim
- accuracy claim

### Level 1: One Reviewer

Reviewer count:

1

Allowed claims:

- One reviewer completed classification.
- Single-reviewer classification patterns can be inspected.

Not allowed:

- inter-reviewer reliability claim
- agreement claim

### Level 2: Two Reviewers

Reviewer count:

2

Allowed claims:

- Pairwise agreement can be counted.
- Disagreement categories can be analyzed.

Optional future metric:

- Cohen's Kappa

Not allowed:

- broad reliability claim without pre-set thresholds

### Level 3: Three Or More Reviewers

Reviewer count:

3+

Allowed claims:

- Multi-reviewer agreement can be summarized.
- Disagreement patterns can inform definition revisions.

Optional future metric:

- Fleiss' Kappa

Not allowed:

- extraction accuracy claim unless compared against validation labels
- scaling claim unless false positive risk is reviewed

## Execution Steps

1. Give reviewers the protocol and classification packet.
2. Collect responses using the response template.
3. Preserve raw responses.
4. Compile per-excerpt classifications.
5. Count exact agreement and disagreement.
6. Analyze disagreements.
7. Decide whether definition revisions are needed.
8. Only then consider scaling Decision Memory extraction.

## Current Level

Level 0: Setup Only

