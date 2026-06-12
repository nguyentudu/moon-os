# Relationship Metrics v1

## Purpose

Relationship metrics measure continuity of meaningful relationships across Relationship and Person graph objects.

## Domain Goal

Measure relationship activity, reciprocity, collaboration, and stability while respecting consent, sensitivity, and uncertainty.

## Candidate: Relationship Activity Score

- Purpose: indicate whether a relationship has current activity.
- What it measures: communication, collaboration, care, or interaction evidence.
- Why it matters: relationship continuity can change silently over time.
- Related entities: Relationship, Person, Event, Thread.
- Related graph objects: Relationship states, Event affects Relationship, Memory references Person.
- Related laws: Trust Governance, Explicit Uncertainty, Relevance Over Completeness.
- Potential signals: communication frequency, events, collaboration artifacts, recent interactions.
- Potential risks: false importance, misread silence, overreach.
- Human interpretation: activity is not closeness; it is evidence of current contact.
- Not implementation: no monitoring, contact scoring, or notification logic is defined.

## Candidate: Reciprocity Signal

- Purpose: indicate whether exchange appears mutual.
- What it measures: mutual initiation, response, collaboration, or support.
- Why it matters: reciprocity can inform relationship health without defining relationship value.
- Related entities: Relationship, Person, Commitment, Event.
- Related graph objects: Person linked_to Commitment, Event affects Relationship.
- Related laws: Trust Governance, Human Agency, Explicit Uncertainty.
- Potential signals: mutual messages, shared work, accepted support, balanced follow-through.
- Potential risks: stale assumptions, private context gaps, misinterpretation.
- Human interpretation: reciprocity is a cautious signal, not a judgment of care.
- Not implementation: no reciprocity formula or relationship scoring engine is defined.

## Candidate: Collaboration Frequency

- Purpose: indicate how often a relationship appears in shared work.
- What it measures: collaboration events, projects, decisions, and artifacts.
- Why it matters: collaboration links relationships to commitments and projects.
- Related entities: Relationship, Person, Project, Decision, Document.
- Related graph objects: Person participates_in Project, Decision affects Project.
- Related laws: Evidence Before Insight, Awareness Value, Trust Governance.
- Potential signals: shared documents, project participation, meetings, decision references.
- Potential risks: false importance, activity without meaning, context loss.
- Human interpretation: frequent collaboration shows work continuity, not personal significance.
- Not implementation: no collaboration tracker or ranking algorithm is defined.

## Candidate: Relationship Stability

- Purpose: indicate whether relationship state appears stable or changing.
- What it measures: continuity or shifts in activity, reciprocity, boundaries, and tone.
- Why it matters: unnoticed decay or rupture can affect trust and commitments.
- Related entities: Relationship, Person, Event, Memory.
- Related graph objects: Relationship states, Event affects Relationship, Memory references Person.
- Related laws: Trust Governance, Attention Constitution, Explicit Uncertainty.
- Potential signals: boundary changes, tone shifts, reduced reciprocity, explicit closure.
- Potential risks: unnoticed decay, over-surfacing sensitive context, stale assumptions.
- Human interpretation: stability is an awareness signal requiring care and consent.
- Not implementation: no emotional inference engine or relationship monitor is defined.

## Domain Risks

- Unnoticed decay
- False importance
- Stale assumptions

## Governance

Relationship metrics require higher caution because they can affect trust, privacy, and emotional safety.
