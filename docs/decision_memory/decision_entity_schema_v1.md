# Decision Entity Schema v1

## Purpose

Define the required shape of a Decision Memory record.

This is a documentation schema only.

No database schema, code, or storage implementation is defined here.

## Required Fields

### id

Stable identifier for the decision.

Example:

DM-001

### title

Short human-readable decision title.

### date

Date the decision was recorded or became materially true.

### owner

Person, team, or system area responsible for the decision.

### decision

The choice that was made.

### reason

Why the choice was made.

### alternatives considered

Other plausible paths that were not chosen.

### evidence links

Repository files or artifacts supporting the decision.

### outcome

What the decision enabled or prevented.

### current validity

Whether the decision still appears valid.

Allowed values:

- valid
- conditionally_valid
- stale
- superseded
- unknown

### related docs

Documents that explain the surrounding context.

### related incidents/reviews/deployments

Validation reports, deployment reports, audit artifacts, or incident records that relate to the decision.

### status

Lifecycle state of the decision record.

Allowed values:

- active
- under_review
- retired

## Optional Fields

Future versions may add:

- confidence
- open questions
- reversal conditions
- decision dependencies
- benchmark coverage

## Boundary

No decision may be recorded without source evidence.

No record may present speculation as fact.
