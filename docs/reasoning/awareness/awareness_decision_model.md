# Awareness Decision Model v1

## Purpose

The Awareness Decision Model defines possible outcomes when Awareness QA reviews a valid continuity concern.

Outcomes are attention recommendations only. They are not decisions, reminders, notifications, rankings, or actions.

## Possible Outcomes

### SUPPRESS

Meaning: Valid concern. Not worth attention.

Use when awareness value is absent or too low relative to attention cost.

### DEFER

Meaning: Potentially important. Not today.

Use when the concern may matter but timing fit is weak or unclear.

### SURFACE

Meaning: Worth awareness. Strong candidate.

Use when awareness value, evidence, relevance, and timing fit justify attention.

### PRIORITIZE

Meaning: High-value awareness item. Should compete for top attention.

Use when attention value is high, timing is strong, and continuity impact is meaningful.

### REJECT

Meaning: Violates law, trust, or attention principles.

Use when the candidate should not proceed because it conflicts with law, trust, consent, evidence, or attention governance.

## Rules

No awareness value -> SUPPRESS.

No timing fit -> DEFER.

High attention cost + low value -> SUPPRESS.

Trust uncertainty -> escalate to Trust QA.

No evidence -> REJECT or return to Continuity Director as UNKNOWN.

No source -> REJECT or return to Continuity Director as UNKNOWN.

## Required Explanation Fields

Every outcome should be explainable through:

- continuity concern
- Continuity Director verdict
- evidence
- timing fit
- awareness value
- attention cost
- uncertainty
- trust status
- why today

## Non-Implementation Boundary

This model does not define formulas, scoring, ranking, notification behavior, UI display, reminders, or task creation.
