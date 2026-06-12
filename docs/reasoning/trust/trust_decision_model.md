# Trust Decision Model v1

## Purpose

The Trust Decision Model defines possible outcomes when Trust QA reviews an awareness-approved continuity concern.

Outcomes determine whether surfacing is permitted in principle. They do not create tasks, reminders, notifications, or user decisions.

## Possible Outcomes

### ALLOW

Meaning: Safe to surface.

Use when consent evidence is sufficient, sensitivity is low or appropriate, and no active boundary blocks surfacing.

### ALLOW_WITH_CAUTION

Meaning: May surface. Trust caveats must be visible.

Use when surfacing appears permitted but uncertainty, sensitivity, or context requires careful framing.

### DEFER

Meaning: Insufficient trust confidence. Wait.

Use when consent or boundary evidence is unclear but not clearly violated.

### ESCALATE

Meaning: Sensitive case. Requires additional review.

Use when trust risk is high, sensitivity is elevated, or surfacing may affect vulnerable context.

### REJECT

Meaning: Not allowed to surface.

Use when consent is absent, a boundary would be violated, or trust risk makes surfacing inappropriate.

## Rules

No consent evidence -> REJECT.

Consent unclear -> DEFER.

Trust risk high -> ESCALATE.

Boundary violation risk -> REJECT.

Protected sensitivity without explicit permission -> REJECT.

Hidden retrieval risk -> DEFER or REJECT.

## Required Explanation Fields

Every trust outcome should explain:

- what is being surfaced
- consent evidence
- applicable boundary
- sensitivity class
- trust risk
- uncertainty
- decision outcome
- whether caveats are required

## Non-Implementation Boundary

This model does not define policy automation, permission storage, UI, notification behavior, reminders, or retrieval behavior.
