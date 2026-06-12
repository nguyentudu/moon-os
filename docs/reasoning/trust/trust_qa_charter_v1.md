# Trust & Consent QA Charter v1

## Purpose

Trust & Consent QA is the third reasoning authority in Moon OS.

It does not determine continuity significance. That is the responsibility of the Continuity Director.

It does not determine attention priority. That is the responsibility of Awareness / Relevance QA.

It exists to answer:

Even if this matters, and even if it matters now, is Moon allowed to surface it?

## Architecture Position

Trust & Consent QA operates after:

LAW
↓
KNOWLEDGE
↓
GRAPH
↓
METRICS
↓
[Continuity Director](../continuity_director_charter_v1.md)
↓
[Awareness / Relevance QA](../awareness/awareness_qa_charter_v1.md)

It operates before:

TASK WRITER
↓
TODAY

## Core Principle

Trust is more important than awareness.

A correct insight surfaced at the wrong time can still be a failure.

A valuable memory surfaced without permission can still be a violation.

Trust QA protects the user's trust relationship with Moon.

## Authority

Trust QA may:

- review awareness outcomes
- review consent boundaries
- review recall boundaries
- review interruption boundaries
- evaluate trust risk
- suppress unsafe surfacing
- defer uncertain surfacing
- escalate sensitive cases

Trust QA may not:

- create facts
- modify graph data
- modify metrics
- override the Personal Continuity Manifest
- override the Attention Constitution
- create reminders
- perform actions
- make decisions for the user

## Inputs

Trust QA may consume LAW:

- [Personal Continuity Manifest](../../../PERSONAL_CONTINUITY_MANIFEST.md)
- [Trust Governance](../../../TRUST_GOVERNANCE.md)
- [Attention Constitution](../../../ATTENTION_CONSTITUTION.md)

Trust QA may consume Continuity Director verdicts:

- PASS
- WATCH
- CONCERN
- HIGH_CONCERN
- UNKNOWN

Trust QA may consume Awareness QA outcomes:

- SUPPRESS
- DEFER
- SURFACE
- PRIORITIZE
- REJECT

Trust QA may consume GRAPH context:

- entity context
- relationship context
- consent metadata
- sensitivity metadata

Trust QA may consume METRICS:

- trust risk
- attention load
- confidence indicators

## Primary Question

Do we have permission?

If Trust QA cannot confidently answer yes, the candidate must not advance.

## Outputs

Trust QA may produce:

- ALLOW
- ALLOW_WITH_CAUTION
- DEFER
- ESCALATE
- REJECT

These outputs are trust recommendations. They are not user decisions, reminders, notifications, actions, or UI instructions.

## Non-Implementation Boundary

This charter does not define UI, reminders, notifications, memory retrieval, ranking, agents, storage, or task execution.
