# Reviewer Protocol v1

## Purpose

Provide blind classification instructions for Decision Extraction reliability reviewers.

## Reviewer Task

You will classify 50 Moon OS excerpts.

For each excerpt, choose exactly one:

- decision
- not decision
- unclear

Optionally add a short rationale.

## Decision Definition Summary

A decision is a source-backed choice that changed or constrained Moon OS direction.

A decision should include or clearly imply:

- choice made
- alternatives exist
- rationale exists
- consequence exists

## Classify As Decision When

The excerpt shows a selected path and enough rationale or consequence to explain why it matters.

## Classify As Not Decision When

The excerpt is only:

- a fact
- a metric
- a deployment status
- a review result
- a task instruction
- a UI label
- a source path
- an observation

## Classify As Unclear When

The excerpt appears decision-like, but one or more required decision elements are missing.

Use unclear rather than guessing.

## Blind Review Rule

Do not look at:

- expected classifications
- author labels
- validation answers
- other reviewer responses

## Reviewer Output

Use reviewer_response_template_v1.md.

No backend or database is used.

Return the completed response by copy/paste.

