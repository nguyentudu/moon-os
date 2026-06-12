# Graph Entities Reference v1

## Purpose

This reference defines the core entity types in the Moon OS Continuity Graph.

All entities are conceptual continuity objects. They are not database models, classes, schemas, or implementation contracts.

## Universal Required Attributes

Every entity must support:

- id: stable identifier for the continuity object.
- created_at: when the object was first created or recognized.
- updated_at: when the object was last updated.
- source: origin of the object.
- confidence: confidence level for the object.
- status: current lifecycle state or active status.
- evidence_links: references to supporting evidence.
- owner: person or context responsible for the object.
- consent_level: permission boundary governing use or recall.
- relevance_state: whether the object is currently relevant, latent, stale, or archived.

## Person

### Purpose

Represents a human connected to the user's continuity world.

### Required Attributes

Universal required attributes.

### Optional Attributes

- name
- role
- relationship_context
- contact_context
- sensitivity_level
- last_interaction_at

### Lifecycle States

- active
- latent
- declining
- ended

### Continuity Relevance

People connect commitments, relationships, decisions, events, memories, and projects across time.

## Project

### Purpose

Represents an organized body of work with intention, context, ownership, and lifecycle.

### Required Attributes

Universal required attributes.

### Optional Attributes

- title
- description
- goals
- commitments
- artifacts
- last_activity_at
- closure_reason

### Lifecycle States

- active
- dormant
- abandoned
- completed

### Continuity Relevance

Projects preserve continuity across work, decisions, learning, obligations, and progress.

## Goal

### Purpose

Represents a desired outcome, direction, standard, or identity-aligned aim.

### Required Attributes

Universal required attributes.

### Optional Attributes

- title
- desired_outcome
- alignment_notes
- competing_goals
- target_date
- abandonment_reason

### Lifecycle States

- active
- drifting
- abandoned
- completed

### Continuity Relevance

Goals connect intention to effort, decisions, commitments, and future direction.

## Commitment

### Purpose

Represents an obligation, promise, responsibility, or intended action.

### Required Attributes

Universal required attributes.

### Optional Attributes

- description
- due_at
- promised_to
- dependency_context
- follow_up_at
- closure_evidence

### Lifecycle States

- active
- at_risk
- fulfilled
- broken

### Continuity Relevance

Commitments connect trust, action, time, and accountability.

## Decision

### Purpose

Represents a choice that changes direction, priority, commitment, or interpretation.

### Required Attributes

Universal required attributes.

### Optional Attributes

- question
- selected_option
- rationale
- assumptions
- consequences
- reversed_by

### Lifecycle States

- open
- committed
- reversed
- resolved

### Continuity Relevance

Decisions explain why the current continuity state exists.

## Memory

### Purpose

Represents sourced continuity information from an allowed source.

### Required Attributes

Universal required attributes.

### Optional Attributes

- summary
- memory_type
- sensitivity_level
- referenced_entities
- recall_reason
- expiry_context

### Lifecycle States

- active
- latent
- restricted
- obsolete

### Continuity Relevance

Memories preserve sourced context that may support awareness when justified.

## Thread

### Purpose

Represents an ongoing continuity line that can contain memories, documents, decisions, or learning over time.

### Required Attributes

Universal required attributes.

### Optional Attributes

- title
- topic
- contained_memories
- related_projects
- last_revisited_at
- thread_state

### Lifecycle States

- active
- paused
- dormant
- closed

### Continuity Relevance

Threads help Moon understand continuity across repeated sessions, topics, and unresolved lines of thought.

## LearningTopic

### Purpose

Represents an area of study, research, practice, or knowledge development.

### Required Attributes

Universal required attributes.

### Optional Attributes

- title
- questions
- sources
- applications
- last_revisited_at
- integration_notes

### Lifecycle States

- active
- paused
- abandoned
- integrated

### Continuity Relevance

Learning topics connect knowledge retention, research continuity, and future application.

## Document

### Purpose

Represents a source artifact that may support continuity objects.

### Required Attributes

Universal required attributes.

### Optional Attributes

- title
- document_type
- location
- author
- summary
- supported_entities

### Lifecycle States

- current
- superseded
- archived
- disputed

### Continuity Relevance

Documents provide source grounding for decisions, memories, commitments, projects, and insights.

## Event

### Purpose

Represents a dated occurrence that affects continuity.

### Required Attributes

Universal required attributes.

### Optional Attributes

- title
- occurred_at
- participants
- location
- related_entities
- outcome

### Lifecycle States

- planned
- occurred
- cancelled
- archived

### Continuity Relevance

Events anchor continuity in time and may affect relationships, commitments, decisions, or projects.

## Insight

### Purpose

Represents an evidence-backed interpretation that may improve awareness or decision quality.

### Required Attributes

Universal required attributes.

### Optional Attributes

- statement
- derived_from
- uncertainty_notes
- relevance_reason
- why_now
- recommended_silence

### Lifecycle States

- proposed
- confirmed
- stale
- rejected

### Continuity Relevance

Insights connect evidence to awareness, but must remain subordinate to evidence, consent, attention, and uncertainty.

## Relationship

### Purpose

Represents the continuity state between the user and another person, or between people when relevant and consented.

### Required Attributes

Universal required attributes.

### Optional Attributes

- participants
- relationship_type
- reciprocity_notes
- boundary_notes
- last_interaction_at
- sensitivity_level

### Lifecycle States

- active
- latent
- declining
- ended

### Continuity Relevance

Relationships shape trust, collaboration, obligations, emotional context, and attention priority.
