# Moon Today Runtime MVP

## Purpose

Moon Today Runtime MVP is the first executable runtime proof for Moon OS.

It proves that the Constitutional Core can produce a valid Moon Today item from an approved awareness artifact.

## Scope

The runtime accepts:

- Approved Awareness Artifact

and produces:

- Rendered Today Item

## Non-Goals

This MVP does not include:

- external systems
- databases
- retrieval
- notifications
- user accounts
- integrations
- memory engine
- agent execution
- reminders
- UI framework

## Files

- [runtime_overview.md](runtime_overview.md)
- [sample_awareness_artifact.json](sample_awareness_artifact.json)
- [surface_contract_validator.md](surface_contract_validator.md)
- [today_item_renderer.md](today_item_renderer.md)
- [today_runtime_flow.md](today_runtime_flow.md)
- [today_runtime_examples.md](today_runtime_examples.md)
- [TODAY_RUNTIME_REVIEW.md](TODAY_RUNTIME_REVIEW.md)

## Proof Path

Approved Awareness Artifact

↓

Surface Contract Validation

↓

Valid Today Item

↓

Render

↓

User Sees Awareness

## Verdict

PASS if Moon OS can render a valid awareness item using Constitutional Core outputs without introducing product features.
