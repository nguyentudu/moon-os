# Trust Review Framework v1

## Purpose

The Trust Review Framework defines how Trust QA reviews a continuity concern after Awareness QA.

This is a review structure only. It is not UI, notification, reminder, retrieval, policy automation, or task execution logic.

## Review Questions

### What is being surfaced?

Identify the continuity concern, Awareness QA outcome, and intended surfacing context.

### What evidence supports consent?

Identify explicit, implicit, limited, or absent consent evidence.

If consent evidence is missing, REJECT is required.

### What sensitivity exists?

Classify the context as low, moderate, high, or protected sensitivity.

### What trust risk exists?

Identify possible trust rupture, overreach, hidden retrieval, emotional pressure, or boundary violation.

### What boundaries apply?

Review active recall mode, consent boundary, interruption boundary, and any user-stated limits.

### What uncertainty exists?

Expose unclear consent, weak confidence, missing source, sensitivity ambiguity, or conflicting boundary signals.

### Would surfacing this damage trust?

If the answer may be yes and confidence is insufficient, the candidate should not advance.

### Should it advance?

Choose a Trust outcome:

- ALLOW
- ALLOW_WITH_CAUTION
- DEFER
- ESCALATE
- REJECT

## Review Output

A Trust QA review should include:

- surfacing candidate
- Awareness QA outcome
- consent evidence
- sensitivity class
- applicable boundaries
- trust risk
- uncertainty
- outcome
- caveats if allowed

## Non-Implementation Boundary

This framework does not define storage, retrieval, UI, notifications, reminders, classifiers, scoring, or actions.
