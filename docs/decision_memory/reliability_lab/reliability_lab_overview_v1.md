# Reliability Lab Overview v1

## Purpose

Moon Reliability Lab is a tiny public Research UI for the Decision Extraction Reliability Study.

It helps Moon collect real reviewer classifications for the 50-excerpt validation set.

## What It Tests

Whether human reviewers can consistently classify excerpts as:

- Decision
- Not Decision
- Unclear

## What It Does Not Test

It does not test:

- extraction accuracy
- decision coverage completeness
- product usability
- agent behavior
- retrieval quality
- ingestion readiness

## Data Boundary

No backend, auth, database, or automatic submission exists.

Reviewers copy results and send them back manually.

## Public Route

Planned route:

https://moon-today-prototype-production.up.railway.app/reliability/

