# Extraction Reliability Manifest v1

## Purpose

Define the reliability study framework for Decision Extraction before Moon scales Decision Memory coverage.

This framework tests whether the Decision Definition can be applied consistently by multiple reviewers.

## Reliability Question

Would multiple reviewers classify the same excerpt the same way?

## Scope

This study uses the existing 50-excerpt validation set from:

- docs/decision_memory/extraction_validation/decision_extraction_validation_set_v1.md

Reviewers classify each excerpt as:

- decision
- not decision
- unclear

## Inputs

Reviewers may use:

- decision_definition_v1.md
- decision_identification_rules_v1.md
- decision_boundary_cases_v1.md
- decision_extraction_scoring_rubric_v1.md
- classification_packet_v1.md

Reviewers must not see:

- expected labels
- author labels
- validation answers
- prior reviewer responses

## Assumptions

- Reviewers can read Moon OS documentation excerpts without needing full architecture context.
- Classification consistency is a prerequisite for scaling Decision Memory.
- Ambiguity is acceptable when reviewers mark it as unclear instead of forcing a decision.

## Limitations

- This framework does not measure extraction accuracy by itself.
- This framework does not prove reliability until real reviewer responses exist.
- This framework does not create decision records.
- This framework does not modify existing decision records.
- This framework does not automate extraction.

## Possible Outcomes

Allowed future outcomes:

- high agreement
- moderate agreement
- low agreement
- unknown

Current outcome:

unknown

No reliability outcome is claimed in this version.

