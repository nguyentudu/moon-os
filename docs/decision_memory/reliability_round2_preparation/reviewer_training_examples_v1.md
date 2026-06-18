# Reviewer Training Examples v1

## Purpose

Provide a concise training packet for Round 2 reviewers before classification.

This packet uses only existing validation excerpts.

## Core Rule

Ask:

Does this excerpt itself contain a choice, rationale, and consequence?

If yes, classify Decision.

If it is only a metric, status, observation, question, count, UI text, or taxonomy item, classify Not Decision.

If it seems decision-like but is missing rationale or consequence, classify Unclear.

## Decision Examples

| ID | Why Decision |
| --- | --- |
| EV-006 | Defines that metrics inform but do not decide. This is a governance boundary. |
| EV-009 | Allows Trust QA to block surfacing even when relevance is high. This sets authority precedence. |
| EV-013 | Chooses synthetic demo data to avoid ingestion risk. This has rationale and consequence. |
| EV-015 | Sets NO_CLAIM when evaluation is not run. This prevents fabricated results. |
| EV-021 | Limits TTC interpretation to early signal. This is a claim boundary. |

## Not Decision Examples

| ID | Why Not Decision |
| --- | --- |
| EV-023 | Deployment URL opens. This is status. |
| EV-026 | Memory average time is a metric. |
| EV-028 | Total scenarios is a count. |
| EV-031 | Response received is a status note. |
| EV-047 | Hidden abandonment is a risk observation. |

## Unclear Examples

| ID | Why Unclear |
| --- | --- |
| EV-029 | It names a possible decision but lacks rationale and consequence. |
| EV-030 | It is a backlog item that may point to a decision but does not provide original rationale. |
| EV-037 | Verdict PASS is a result, but the underlying choice is not visible. |
| EV-033 | No backend/no automatic submission may be a decision, but local rationale is not visible. |

## Avoid Decision-Default Bias

Do not choose Decision merely because:

- the excerpt comes from Moon docs
- the excerpt sounds important
- the excerpt mentions a system component
- the excerpt could support a future decision
- the excerpt feels related to a decision

