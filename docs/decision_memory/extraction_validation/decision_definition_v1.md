# Decision Definition v1

## Purpose

Define what counts as a decision for Moon Decision Memory.

This file exists to prevent Decision Memory from becoming a loose archive of notes, observations, metrics, or implementation details.

## Definition

A decision is a source-backed choice that changed or constrained Moon OS direction.

For an excerpt to qualify as a decision, it must contain or clearly support all required elements below.

## Required Elements

### Choice Made

A path was selected.

Examples:

- Build the Constitutional Core before UI.
- Delay ingestion.
- Use synthetic runtime demo data.

### Alternatives Exist

There were plausible paths not chosen.

The alternative may be explicit or strongly implied by the source.

Examples:

- Build UI first.
- Connect email or calendar now.
- Use real user data in a demo.

### Rationale Exists

The source explains why the path was selected.

The rationale must be evidence-backed, not inferred from preference.

### Consequence Exists

The choice has a continuity consequence.

Examples:

- Future layers must reference laws.
- Today cannot surface items without trust approval.
- Human evaluation cannot claim results without reviewer data.

## Classification Values

### decision

Use when all required elements are present or directly supported by nearby source context.

### not decision

Use when the excerpt is only:

- a fact
- a metric
- a deployment note
- a review result
- a preference
- a task instruction
- an implementation detail

### unclear

Use when the excerpt suggests a choice, but one or more required elements are missing.

Unclear excerpts must not become Decision Memory records without more source evidence.

## Non-Goals

Decision extraction does not:

- infer private motives
- create missing rationale
- turn every architecture statement into a decision
- record preferences as decisions without consequence
- estimate coverage or accuracy without validation evidence

## Guardrail

No source-backed rationale, no Decision Memory record.

