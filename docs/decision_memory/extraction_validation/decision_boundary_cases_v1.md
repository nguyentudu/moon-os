# Decision Boundary Cases v1

## Purpose

Document examples that distinguish decisions from nearby non-decision artifacts.

## Boundary Table

| Case Type | Example | Classification | Why |
| --- | --- | --- | --- |
| Decision | "Build only the continuity ontology." | decision | It selects a scope and rejects implementation alternatives |
| Decision | "Delay real email, calendar, chat, and external personal data ingestion." | decision | It chooses deferral, has trust rationale, and constrains implementation |
| Decision | "PASS only if Moon can render a valid awareness item using Constitutional Core outputs without product features." | decision | It defines acceptance conditions and rejects broader product scope |
| Not Decision | "Total scenarios: 20+" | not decision | It is a count, not a choice |
| Not Decision | "Runtime page opens: yes" | not decision | It is verification status |
| Discussion | "Which items should reviewers evaluate?" | unclear | It may lead to a decision, but the choice is not present |
| Observation | "Manual Mode took longer than Memory Mode." | not decision | It is a result; a later claim boundary may be a decision |
| Metric | "Memory median time: 101 seconds." | not decision | It measures an outcome without selecting a path |
| Review | "Verdict: PASS" | unclear | PASS confirms a gate; extract only if the gate rationale is present |
| Deployment note | "Railway deployment status: successful." | not decision | It reports execution, not why deployment was chosen |
| Preference | "UI should feel calm." | unclear | It may be design rationale, but needs consequence and alternatives |

## Decision vs Review

A review can contain decision evidence, but a review result is not automatically a decision.

Extract from reviews only when they explain a selected path or a boundary that changes future behavior.

## Decision vs Metric

A metric becomes decision evidence only when Moon chooses what claim is allowed because of that metric.

Example:

- Metric: time reduction appears large.
- Decision: claim only "early TTC signal" because participant independence is unknown.

## Decision vs Deployment Note

Deployment status is not a decision.

The decision is the reason for deploying publicly, such as enabling 3-5 reviewers to access the prototype.

## Decision vs Preference

Preferences become decisions only when they constrain future work.

Example:

"Today should be calm" is a preference by itself.

"Today is not a dashboard because Attention Constitution requires low interruption cost" can be a decision.

