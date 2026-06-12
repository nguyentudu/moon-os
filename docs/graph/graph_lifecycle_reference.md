# Graph Lifecycle Reference v1

## Purpose

This reference describes how graph entities may evolve over time.

Lifecycle movement is conceptual. It does not define automation, transitions, storage rules, or scoring formulas.

## General Lifecycle Principles

- Entities may change state when evidence changes.
- State changes require evidence links.
- Confidence must be exposed for derived lifecycle states.
- Old state is not automatically replaced by recent activity unless evidence supports it.
- Boundaries and consent may limit surfacing even when lifecycle evidence exists.

## Project Lifecycle

Common path:

active
↓
dormant
↓
abandoned

Completion path:

active
↓
completed

Reactivation path:

dormant
↓
active

Continuity note: Project lifecycle should preserve context, ownership, progress, and closure evidence.

## Goal Lifecycle

Common path:

active
↓
drifting
↓
abandoned

Completion path:

active
↓
completed

Realignment path:

drifting
↓
active

Continuity note: Goal drift should be treated as awareness information, not failure.

## Commitment Lifecycle

Common path:

active
↓
at_risk
↓
fulfilled

Failure path:

active
↓
at_risk
↓
broken

Continuity note: Commitment lifecycle should account for trust, dependencies, follow-ups, and closure.

## Relationship Lifecycle

Common path:

active
↓
latent
↓
declining
↓
ended

Reactivation path:

latent
↓
active

Continuity note: Relationship lifecycle requires caution because absence of evidence is not always evidence of decline.

## Learning Lifecycle

Common path:

active
↓
paused
↓
abandoned

Integration path:

active
↓
integrated

Reactivation path:

paused
↓
active

Continuity note: Learning lifecycle should preserve questions, sources, synthesis, and application.

## Decision Lifecycle

Common path:

open
↓
committed
↓
resolved

Revision path:

committed
↓
reversed

Continuity note: Decision lifecycle should preserve rationale, assumptions, consequences, and reversal evidence.
