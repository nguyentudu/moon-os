# Study Execution Manifest v1

## Purpose

Execute the first real Decision Extraction Reliability Study using the existing 50-excerpt validation set.

This study is designed to collect real reviewer classifications and determine whether Moon's Decision Definition can be applied consistently.

## Scope

Included:

- reviewer assignment tracking
- reviewer submission tracking
- reviewer result import structure
- agreement calculation methodology
- disagreement register
- evidence summary
- revision candidate tracking

Excluded:

- generated reviewer responses
- synthetic reviewers
- synthetic agreement
- reliability estimates without evidence
- accuracy benchmark claims
- decision coverage expansion
- new Decision Memory records
- decision definition revisions before evidence exists

## Inputs

Use:

- docs/decision_memory/extraction_validation/decision_definition_v1.md
- docs/decision_memory/extraction_validation/decision_identification_rules_v1.md
- docs/decision_memory/extraction_validation/decision_boundary_cases_v1.md
- docs/decision_memory/extraction_validation/decision_extraction_validation_set_v1.md
- docs/decision_memory/extraction_reliability/classification_packet_v1.md
- docs/decision_memory/extraction_reliability/reviewer_protocol_v1.md
- docs/decision_memory/extraction_reliability/reviewer_response_template_v1.md
- docs/decision_memory/extraction_reliability/extraction_reliability_results_v1.md

## Study Status

SETUP

## Allowed Study States

- SETUP
- COLLECTING_DATA
- ANALYZING
- COMPLETE

## Current Evidence State

No reviewer classifications have been collected.

No agreement has been calculated.

No reliability outcome is claimed.

