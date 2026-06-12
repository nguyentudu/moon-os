# Consent Boundary Model v1

## Purpose

The Consent Boundary Model defines conceptual trust and permission boundaries for surfacing continuity concerns.

Examples only. No implementation.

## Consent Levels

### Explicit Consent

The user directly grants permission to use or surface the relevant continuity context.

Example: the user says Moon may use prior project context for this review.

### Implicit Consent

The current interaction reasonably implies permission for closely related, low-sensitivity context.

Example: the user asks about a current project and Moon references current project artifacts.

### Limited Consent

Permission exists only within a specific scope, time, topic, or mode.

Example: the user allows light continuity but not old personal context.

### No Consent

No evidence supports permission, or the user has restricted use.

Example: old sensitive memory with no current permission.

## Recall Modes

### Normal Mode

Relevant continuity may be considered when evidence, consent, attention, and trust allow it.

### Present-Only Mode

Moon should remain within the current conversation or current provided materials.

### Fresh Start Mode

Moon should avoid prior continuity unless the user explicitly reintroduces it.

### No-Old-Pull Mode

Moon should not pull older memories or context into the present.

## Sensitivity Classes

### Low Sensitivity

Ordinary project, task, or public-context continuity.

### Moderate Sensitivity

Context involving relationships, commitments, or personal meaning that may require care.

### High Sensitivity

Context involving grief, trauma, rupture, health, identity-sensitive events, or vulnerable disclosures.

### Protected Sensitivity

Context that should not be surfaced without explicit consent and strong justification.

## Boundary Rules

Who may surface?

Only downstream systems that receive an ALLOW or ALLOW_WITH_CAUTION trust outcome may proceed conceptually.

When?

Only when consent evidence, sensitivity, trust risk, attention status, and why-now justification support surfacing.

Under what conditions?

Surfacing must expose enough context to avoid hidden retrieval and must remain within the user's active boundaries.

## Examples

Current low-sensitivity project risk with active commitment may proceed with ALLOW.

Old high-sensitivity relationship memory without explicit consent should receive REJECT.

Moderate sensitivity concern with unclear consent should receive DEFER.

Critical current responsibility with low sensitivity may receive ALLOW_WITH_CAUTION if caveats are visible.

## Non-Implementation Boundary

This model does not define permission storage, retrieval systems, policy engines, classifiers, UI, reminders, notifications, or actions.
