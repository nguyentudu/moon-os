# Graph Evidence Model v1

## Purpose

The evidence model defines what can support graph entities and relationships.

It operationalizes the law:

No evidence -> No graph link.

No source -> No continuity object.

This is a conceptual model only. It does not define storage, ingestion, retrieval, or validation implementation.

## Evidence Types

- conversation: user dialogue or exchanged communication.
- note: written personal or project note.
- document: formal or informal document artifact.
- calendar event: dated scheduled or historical event.
- user confirmation: explicit confirmation from the user.
- task artifact: project, task, work, or delivery artifact.

## Evidence Requirements

Every graph object must have at least one source.

Every relationship must have at least one evidence link.

Derived objects must identify the evidence used to derive them.

Evidence must be sufficient for the claim being made.

Sensitive claims require stronger evidence.

## Evidence Strength

- direct evidence: explicitly states the entity, relationship, state, or claim.
- supporting evidence: contributes context but does not fully establish the claim alone.
- conflicting evidence: challenges an existing claim or state.
- insufficient evidence: does not justify creating or surfacing the object.

## Evidence Rules

- No evidence -> No graph link.
- No source -> No continuity object.
- No hidden evidence: surfaced graph claims should expose their evidence basis.
- No unsupported inference: inferred graph objects require evidence and confidence.
- No sensitive surfacing without higher justification.

## Evidence Risks

- over-linking from weak signals.
- treating proximity as evidence.
- ignoring conflicting evidence.
- hiding evidence from the user.
- creating continuity objects from unsourced assumptions.
