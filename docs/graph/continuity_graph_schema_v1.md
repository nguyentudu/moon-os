# Continuity Graph Schema v1

## Purpose

The Continuity Graph defines the ontology of personal continuity for Moon OS.

It answers:

What entities exist in a person's continuity world, and how are they connected?

This layer sits below LAW and KNOWLEDGE, and above future METRICS, REASONING, and TODAY layers.

## Architecture Position

LAW

- Personal Continuity Manifest
- Trust Governance
- Attention Constitution

KNOWLEDGE

- Continuity Knowledge Base

GRAPH

- Continuity Graph

FUTURE LAYERS

- Metrics
- Reasoning
- Today

## Non-Implementation Boundary

This schema is conceptual only.

It does not define storage, database tables, vector stores, retrieval behavior, agents, reminders, user interfaces, formulas, or reasoning engines.

## Core Entity Types

- Person
- Project
- Goal
- Commitment
- Decision
- Memory
- Thread
- LearningTopic
- Document
- Event
- Insight
- Relationship

## Required Attributes for All Entities

Every continuity entity must support:

- id
- created_at
- updated_at
- source
- confidence
- status
- evidence_links
- owner
- consent_level
- relevance_state

## Relationship Rule

No relationship may exist without evidence.

Every graph relationship must expose:

- direction
- meaning
- evidence requirement
- confidence requirement

## Evidence Rule

No evidence -> No graph link.

No source -> No continuity object.

## Confidence Rule

Every derived object must expose confidence.

Confidence must never be hidden.

## References

- [Graph Entities Reference](graph_entities_reference.md)
- [Graph Relationships Reference](graph_relationships_reference.md)
- [Graph States Reference](graph_states_reference.md)
- [Graph Lifecycle Reference](graph_lifecycle_reference.md)
- [Graph Evidence Model](graph_evidence_model.md)
- [Graph Confidence Model](graph_confidence_model.md)
- [Graph Query Examples](graph_query_examples.md)
