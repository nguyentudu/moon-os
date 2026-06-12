# Today Visibility Rules v1

## Purpose

These rules define when an awareness artifact is allowed to appear on Moon Today.

## Rule 1

No approved artifact -> do not display.

## Rule 2

No evidence -> do not display.

## Rule 3

No why-now explanation -> do not display.

## Rule 4

Unknown confidence -> do not display.

## Rule 5

Trust rejection -> do not display.

## Rule 6

Attention suppression -> do not display.

## Rule 7

Silence is valid.

## Approval Requirement

A visible item must have approval from:

- Continuity Director: CONCERN or HIGH_CONCERN
- Awareness QA: SURFACE or PRIORITIZE
- Trust QA: ALLOW or ALLOW_WITH_CAUTION
- Task Writer: approved awareness artifact

## Non-Implementation Boundary

These rules do not define UI visibility logic, database queries, runtime checks, ranking algorithms, notifications, or reminders.
