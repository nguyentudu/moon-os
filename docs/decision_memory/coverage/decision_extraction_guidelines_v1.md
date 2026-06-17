# Decision Extraction Guidelines v1

## Purpose

Define how future Decision Memory records should be extracted from Moon sources.

## Extraction Rules

Extract a decision when a source answers at least one of:

- Why was this layer created?
- Why was this sequence chosen?
- Why was this feature intentionally not built?
- Why was this validation step required?
- Why was this evidence accepted or rejected?
- Why was this claim limited?

## Required Evidence

Every extracted decision must include:

- source file
- decision title
- decision statement
- reason
- alternatives considered
- current validity
- related reviews or deployments where available

## Status Rules

Use:

- captured when an existing DM record directly covers the decision
- partially captured when a DM record mentions the decision but lacks dedicated rationale
- not captured when no record represents the decision

## Do Not Extract

Do not create records for:

- implementation details with no decision rationale
- duplicate wording across docs
- inferred motives without source evidence
- fake historical decisions
- domain extensions not present in Moon sources

## Prioritization Guidance

Prioritize decisions that:

- explain major sequencing
- protect trust or attention
- affect public review
- affect TTC evidence or claims
- block future agent or ingestion work
