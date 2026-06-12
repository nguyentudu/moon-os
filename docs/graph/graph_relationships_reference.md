# Graph Relationships Reference v1

## Purpose

This reference defines conceptual relationship types in the Continuity Graph.

Relationships describe how continuity entities connect. They do not define database edges, storage models, retrieval logic, or reasoning behavior.

## Universal Relationship Requirements

Every relationship must define:

- direction
- meaning
- evidence requirement
- confidence requirement

No relationship may exist without evidence.

## Relationship Types

### Person participates_in Project

- direction: Person -> Project
- meaning: the person contributes to, owns, collaborates on, or is involved in the project.
- evidence requirement: conversation, note, project artifact, document, calendar event, or user confirmation showing participation.
- confidence requirement: moderate or higher unless explicitly user-confirmed.

### Person linked_to Commitment

- direction: Person -> Commitment
- meaning: the person owns, receives, depends on, or is affected by a commitment.
- evidence requirement: commitment language, due date, follow-up, user confirmation, or task artifact.
- confidence requirement: moderate or higher; confirmed for sensitive or trust-relevant commitments.

### Project supports Goal

- direction: Project -> Goal
- meaning: the project advances or exists to serve a goal.
- evidence requirement: explicit goal statement, project brief, note, document, or repeated alignment evidence.
- confidence requirement: moderate or higher.

### Goal contains Commitment

- direction: Goal -> Commitment
- meaning: the commitment is part of fulfilling or maintaining the goal.
- evidence requirement: explicit connection in notes, planning, conversation, or task artifact.
- confidence requirement: moderate or higher.

### Decision affects Project

- direction: Decision -> Project
- meaning: the decision changes project direction, scope, priority, ownership, or closure.
- evidence requirement: rationale, decision record, meeting note, project artifact, or user confirmation.
- confidence requirement: moderate or higher.

### Decision affects Goal

- direction: Decision -> Goal
- meaning: the decision changes goal alignment, priority, pursuit, drift, completion, or abandonment.
- evidence requirement: decision rationale, goal note, conversation, or user confirmation.
- confidence requirement: moderate or higher.

### Memory references Decision

- direction: Memory -> Decision
- meaning: the memory contains sourced context about a decision.
- evidence requirement: source content that directly mentions or supports the decision.
- confidence requirement: strong or confirmed for sensitive decisions; moderate or higher otherwise.

### Memory references Person

- direction: Memory -> Person
- meaning: the memory contains sourced context involving a person.
- evidence requirement: source content that names, identifies, or clearly refers to the person.
- confidence requirement: strong or confirmed when sensitive; moderate or higher otherwise.

### Memory references Project

- direction: Memory -> Project
- meaning: the memory contains sourced context involving a project.
- evidence requirement: source content linking the memory to the project.
- confidence requirement: moderate or higher.

### Thread contains Memory

- direction: Thread -> Memory
- meaning: the memory belongs to a continuing line of context.
- evidence requirement: topic continuity, explicit thread membership, or repeated source linkage.
- confidence requirement: moderate or higher.

### LearningTopic related_to Project

- direction: LearningTopic -> Project
- meaning: learning supports, informs, or arises from project work.
- evidence requirement: research note, project artifact, source link, application evidence, or user confirmation.
- confidence requirement: moderate or higher.

### LearningTopic related_to Goal

- direction: LearningTopic -> Goal
- meaning: learning supports or emerges from a goal.
- evidence requirement: goal statement, learning note, application evidence, or user confirmation.
- confidence requirement: moderate or higher.

### Document supports Decision

- direction: Document -> Decision
- meaning: the document provides source evidence, rationale, assumptions, or context for a decision.
- evidence requirement: document content or metadata tied to the decision.
- confidence requirement: strong or confirmed.

### Event affects Relationship

- direction: Event -> Relationship
- meaning: an event changes relationship activity, trust, reciprocity, boundaries, or state.
- evidence requirement: calendar event, conversation, note, document, or user confirmation.
- confidence requirement: strong or confirmed for sensitive relationships; moderate or higher otherwise.

### Insight derived_from Evidence

- direction: Insight -> Evidence
- meaning: the insight is based on explicit supporting evidence.
- evidence requirement: one or more evidence links from allowed evidence types.
- confidence requirement: moderate or higher; weak insights must not be surfaced as conclusions.

## Relationship Risks

- unsupported links: relationships inferred without evidence.
- hidden confidence: relationships used without exposing uncertainty.
- consent violation: relationship exists but should not be surfaced under active boundaries.
- false continuity: old proximity is mistaken for current relevance.
