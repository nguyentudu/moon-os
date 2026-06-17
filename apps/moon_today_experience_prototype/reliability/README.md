# Moon Reliability Lab

Tiny public Research UI for the Decision Extraction Reliability Study.

## Purpose

Let 2-3 human reviewers classify 50 excerpts as:

- Decision
- Not Decision
- Unclear

The goal is to collect real classification evidence for agreement analysis.

## Boundaries

This is not product UI.

It does not include:

- agent
- chat
- auth
- database
- ingestion
- fake reviewer data
- fake agreement
- reliability calculation
- decision definition edits
- new decision records

## Data Collection

No data is submitted automatically.

Reviewers copy all results and return them manually.

## Public Route

The deployed copy is served from:

`/reliability/`

