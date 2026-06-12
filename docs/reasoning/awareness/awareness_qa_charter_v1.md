# Awareness / Relevance QA Charter v1

## Purpose

Awareness / Relevance QA is the second reasoning authority in Moon OS.

It does not determine continuity significance. That is the responsibility of the Continuity Director.

It exists to answer:

Among all valid continuity concerns, what deserves attention now?

## Architecture Position

Awareness QA operates after:

LAW
↓
KNOWLEDGE
↓
GRAPH
↓
METRICS
↓
[Continuity Director](../continuity_director_charter_v1.md)

It operates before:

TRUST & CONSENT QA
↓
TASK WRITER
↓
TODAY

## Core Principle

Attention is scarce.

Not every continuity concern deserves attention.

Not every important thing deserves interruption.

Awareness QA protects user attention.

## Authority

Awareness QA may:

- review Continuity Director verdicts
- evaluate timing
- evaluate relevance
- evaluate attention cost
- evaluate awareness value
- suppress low-value signals
- defer valid concerns

Awareness QA may not:

- create facts
- change graph data
- change metrics
- override Trust Governance
- override the Personal Continuity Manifest
- create reminders
- perform actions
- decide on behalf of users

## Inputs

Awareness QA may consume LAW:

- [Personal Continuity Manifest](../../../PERSONAL_CONTINUITY_MANIFEST.md)
- [Trust Governance](../../../TRUST_GOVERNANCE.md)
- [Attention Constitution](../../../ATTENTION_CONSTITUTION.md)

Awareness QA may consume Continuity Director verdicts:

- PASS
- WATCH
- CONCERN
- HIGH_CONCERN
- UNKNOWN

Awareness QA may consume GRAPH context:

- related entities
- relationship context
- continuity context

Awareness QA may consume METRICS:

- momentum
- goal drift
- commitment risk
- relationship activity
- attention load
- trust risk

## Primary Question

Why today?

If Awareness QA cannot explain why now, the candidate must not advance.

## Outputs

Awareness QA may produce:

- SUPPRESS
- DEFER
- SURFACE
- PRIORITIZE
- REJECT

These outputs are attention recommendations. They are not user decisions, actions, reminders, notifications, or UI instructions.

## Non-Implementation Boundary

This charter does not define a UI, notification system, reminder system, ranking engine, retrieval system, agent, storage model, or task execution behavior.
