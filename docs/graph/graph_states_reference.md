# Graph States Reference v1

## Purpose

This reference defines lifecycle states used by core graph entities.

States are conceptual continuity labels. They are not database enum definitions or implementation requirements.

## Project States

- active: current activity, ownership, and meaningful progress are present.
- dormant: activity has paused without explicit closure or abandonment.
- abandoned: activity and ownership have effectively stopped without completion.
- completed: intended outcome has been achieved or closure is explicit.

## Goal States

- active: effort, decisions, and commitments remain aligned with the goal.
- drifting: current behavior or allocation is diverging from the stated goal.
- abandoned: goal pursuit has stopped or is explicitly discontinued.
- completed: the goal has been achieved or intentionally closed.

## Commitment States

- active: commitment remains valid and actionable.
- at_risk: due date, inactivity, dependency, or context suggests risk of non-fulfillment.
- fulfilled: commitment has been completed or confirmed closed.
- broken: commitment was not fulfilled and remains trust-relevant or consequence-bearing.

## Relationship States

- active: communication, collaboration, care, or reciprocity is current.
- latent: relationship has history and possible relevance but little current activity.
- declining: reduced reciprocity, trust, communication, or shared context is evident.
- ended: relationship is explicitly closed or strongly evidenced as inactive.

## Learning States

- active: ongoing study, research, practice, or application is present.
- paused: learning is temporarily stopped but still plausibly relevant.
- abandoned: learning thread has stopped without integration or closure.
- integrated: learning has been applied, synthesized, or absorbed into practice.

## Decision States

- open: decision has not yet been made or remains unresolved.
- committed: a decision has been made and is guiding action.
- reversed: a later decision has undone or contradicted it.
- resolved: the decision no longer requires active attention because the issue is closed.

## State Governance

State changes require evidence.

Uncertain state should expose confidence.

Sensitive state should require stronger evidence and consent-aware surfacing.
