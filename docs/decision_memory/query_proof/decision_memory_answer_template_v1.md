# Decision Memory Answer Template v1

## Purpose

Define the response shape for answering "why does this exist?" questions from Decision Memory.

This is a documentation template only.

No UI, agent, ingestion, chat system, or query engine is implemented.

## Answer Shape

### Question

The user's question.

### Retrieved Decision Record(s)

Decision IDs used to answer.

### Reason

Why these records are relevant.

### Evidence Links

Repository sources cited by the decision records.

### Current Validity

Validity status from the retrieved decision records.

### Concise Answer

Short answer grounded in the decision records.

### Confidence

Confidence in the answer based on record coverage.

Allowed values:

- high
- moderate
- low

### What Is Still Unknown

Missing evidence, unmeasured result, or future validation need.

## Rules

- Cite decision records.
- Cite evidence links.
- Do not invent unsupported history.
- Do not claim Time To Context improvement without a measured test.
- If evidence is incomplete, say so.
