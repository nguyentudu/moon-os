# Decision Graph Schema v1

## Purpose

Define how Decision Memory records connect to Moon OS continuity objects.

This is an ontology reference only.

No graph database, query language, or implementation is defined here.

## Node Types

### Decision

A recorded architectural, constitutional, product, or validation choice.

### Document

A repository document that supports, explains, constrains, or reviews a decision.

### Review

A validation, audit, deployment, or readiness report.

### Prototype

A human-reviewable artifact such as Moon Today Experience Prototype or Runtime Demo.

### Authority

A constitutional reasoning layer such as Continuity Director, Awareness QA, Trust QA, or Task Writer.

### Law

A foundational law or governance document.

### BenchmarkQuestion

A question used to test Time To Context.

## Relationship Types

### Decision supported_by Document

Meaning:

The document provides source evidence for the decision.

Evidence requirement:

The document must exist in the repository.

### Decision constrained_by Law

Meaning:

The decision is limited or shaped by a constitutional law.

Evidence requirement:

The law file must exist and contain relevant governance.

### Decision implemented_as Prototype

Meaning:

The decision is expressed through a prototype surface.

Evidence requirement:

The prototype file or folder must exist.

### Decision reviewed_by Review

Meaning:

The decision has been checked by a review, deployment report, audit, or validation artifact.

Evidence requirement:

The review artifact must exist.

### Decision answers BenchmarkQuestion

Meaning:

The decision helps answer a Time To Context benchmark question.

Evidence requirement:

The question must be listed in the benchmark plan.

### Decision depends_on Decision

Meaning:

One decision relies on another decision remaining valid.

Evidence requirement:

Both decision records must exist.

## Graph Rules

- No decision node without evidence links.
- No decision relationship without a source document.
- No benchmark answer should depend on a decision marked stale or superseded unless that status is explicit.
- Graph relationships expose context; they do not make product decisions.
