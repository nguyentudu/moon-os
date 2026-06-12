# Today Runtime Examples v1

## Purpose

These examples illustrate Moon Today Runtime MVP behavior.

Examples only. No implementation is defined.

## Case 1: Valid Artifact

Input:

Approved awareness artifact with required fields and valid authority outputs.

Result:

Rendered.

Reason:

The artifact satisfies the Surface Contract Validation rules.

## Case 2: Missing Evidence

Input:

Approved awareness artifact missing evidence.

Result:

Rejected.

Reason:

No evidence -> do not display.

## Case 3: Trust Outcome REJECT

Input:

Artifact with trust_outcome set to REJECT.

Result:

Rejected.

Reason:

Trust rejection prevents display.

## Case 4: Missing Why Now

Input:

Artifact missing why_now.

Result:

Rejected.

Reason:

No why-now explanation -> do not display.

## Non-Implementation Boundary

These examples do not define UI, notifications, reminders, actions, database behavior, or agents.
