# Continuity Director Verdict Model v1

## Purpose

The verdict model defines the possible reasoning outputs of the Continuity Director.

Verdicts are explainable recommendations. They are not decisions, actions, reminders, or UI instructions.

## Verdicts

### PASS

Meaning: No continuity concern.

Use when evidence does not show meaningful continuity risk, opportunity, or attention value.

### WATCH

Meaning: Potential concern. Monitor.

Use when a signal may matter later but current evidence, confidence, or timing is insufficient for awareness escalation.

### CONCERN

Meaning: Meaningful continuity issue. Worth awareness.

Use when evidence, graph context, metrics, and timing indicate the candidate may deserve awareness review.

### HIGH_CONCERN

Meaning: High continuity impact. Strong candidate for awareness.

Use when evidence is strong and the concern may meaningfully affect commitments, goals, relationships, decisions, trust, or attention.

### UNKNOWN

Meaning: Insufficient evidence. Must not escalate.

Use when evidence, source, or confidence is insufficient.

## Rules

No evidence -> UNKNOWN.

No source -> UNKNOWN.

Low confidence -> UNKNOWN.

Verdicts must be explainable.

Verdicts must expose uncertainty.

Verdicts must not override Trust Governance.

Verdicts must not override the Attention Constitution.

## Required Explanation Fields

Every verdict should be able to explain:

- continuity object involved
- evidence used
- metrics considered
- confidence
- continuity risk or opportunity
- why it matters
- why now
- uncertainty
- trust boundary status
- attention cost

## Non-Implementation Boundary

This model does not define formulas, thresholds, ranking logic, retrieval logic, UI, notifications, reminders, or actions.
