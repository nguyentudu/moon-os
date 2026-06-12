# Moon Today Surface Contract v1

## Purpose

Moon Today is the primary awareness surface of Moon OS.

This contract defines what information is allowed to appear on Moon Today and under what conditions.

It does not build Today UI, dashboards, cards, notifications, reminders, or runtime behavior.

## Moon Today Must Never Become

- a notification center
- a reminder feed
- an engagement feed
- a productivity dashboard
- a memory dump

Moon Today exists to surface awareness.

## Core Principle

Moon Today is not:

What happened?

Moon Today is not:

What is recent?

Moon Today is:

What deserves awareness today?

## Authority

Moon Today may:

- display approved awareness artifacts
- display supporting evidence
- display confidence
- display uncertainty
- display trust notes
- display why-now explanations

Moon Today may not:

- create facts
- create concerns
- override Trust QA
- override Awareness QA
- override Continuity Director
- hide uncertainty
- optimize engagement
- generate awareness independently

## Inputs

Moon Today may consume only:

Continuity Director:

- CONCERN
- HIGH_CONCERN

Awareness QA:

- SURFACE
- PRIORITIZE

Trust QA:

- ALLOW
- ALLOW_WITH_CAUTION

Task Writer:

- approved awareness artifacts

Any item missing approval from any prior authority must not appear.

## Contract References

- [Today Item Definition](today_item_definition.md)
- [Today Visibility Rules](today_visibility_rules.md)
- [Today Priority Model](today_priority_model.md)
- [Today Explanation Requirements](today_explanation_requirements.md)
- [Today Surface Constraints](today_surface_constraints.md)
- [Today Governance](today_governance_v1.md)

## Non-Implementation Boundary

This contract does not define UI, dashboard components, cards, notifications, reminders, ranking engines, storage, retrieval, or runtime implementation.
