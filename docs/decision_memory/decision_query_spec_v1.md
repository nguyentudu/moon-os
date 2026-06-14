# Decision Query Spec v1

## Purpose

Define the kinds of questions a future query layer should answer from Decision Memory.

This is a query behavior specification only.

No query engine, chat interface, agent, embedding store, or database is implemented.

## Query Goals

Decision Memory should help a reader quickly answer:

- why a system exists in its current form
- what alternatives were considered
- what evidence supports a decision
- whether the decision is still valid
- what docs to read next

## Supported Query Types

### Why Query

Example:

Why did Moon build Constitutional Core before UI?

Expected response shape:

- short answer
- decision records used
- evidence links
- alternatives considered
- current validity

### Boundary Query

Example:

Why no ingestion yet?

Expected response shape:

- boundary decision
- trust and attention constraints
- current validity
- conditions for reconsideration

### Dependency Query

Example:

Which decisions depend on Trust Governance?

Expected response shape:

- decision ids
- relationship type
- supporting documents

### Benchmark Query

Example:

Can Decision Memory answer benchmark question 4?

Expected response shape:

- answerable yes/no
- relevant decision ids
- missing context if any

## Query Response Rules

- Cite decision ids.
- Cite evidence links.
- Expose uncertainty.
- Do not invent missing history.
- Do not turn decision memory into advice.
- If evidence is insufficient, say so.

## Future Query Layer Readiness

The query layer can use:

- decision entity fields
- decision graph relationships
- benchmark questions
- related docs and review links

The MVP intentionally stops before implementation.
