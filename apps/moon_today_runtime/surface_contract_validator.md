# Surface Contract Validator v1

## Purpose

The Surface Contract Validator defines validation rules for accepting an approved awareness artifact as a valid Today item.

This is a validation contract only. It does not define code, database logic, UI, notifications, reminders, or external integrations.

## Required Fields

An artifact must contain:

- Title
- Summary
- Why It Matters
- Why Now
- Evidence
- Confidence
- Source References

## Required Authority Outputs

Continuity Verdict must be:

- CONCERN
- HIGH_CONCERN

Awareness Outcome must be:

- SURFACE
- PRIORITIZE

Trust Outcome must be:

- ALLOW
- ALLOW_WITH_CAUTION

Task Writer Status must indicate the artifact is approved.

## Missing Requirements

Missing requirements result in:

REJECT

## Validation Interpretation

Validation confirms only that the artifact satisfies the Today Surface Contract.

Validation does not decide whether the item matters, matters now, or is permitted. Those decisions belong to prior authorities.

## Non-Implementation Boundary

This file does not define executable validation code, schemas, storage, runtime checks, UI, notifications, reminders, or ranking.
