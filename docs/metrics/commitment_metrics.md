# Commitment Metrics v1

## Purpose

Commitment metrics measure obligation health across Commitment graph objects.

## Domain Goal

Measure commitment risk, freshness, follow-up pressure, and fulfillment confidence without creating reminders, notifications, or obligation enforcement.

## Candidate: Commitment Risk Score

- Purpose: indicate whether a commitment may be at risk.
- What it measures: evidence of possible non-fulfillment, delay, ambiguity, or dependency pressure.
- Why it matters: commitment risk can become trust risk.
- Related entities: Commitment, Person, Project, Event.
- Related graph objects: Person linked_to Commitment, Goal contains Commitment, Commitment states.
- Related laws: Trust Governance, Human Agency, Evidence Before Insight.
- Potential signals: due dates, inactivity, dependencies, missed follow-ups, blocked projects.
- Potential risks: commitment debt, silent failure, overreach.
- Human interpretation: risk means review may be useful; it does not create an automatic reminder.
- Not implementation: no risk formula, alerting, reminder, or task engine is defined.

## Candidate: Commitment Freshness

- Purpose: indicate whether a commitment has current evidence.
- What it measures: recency and continuity of relevant commitment context.
- Why it matters: stale commitments can remain psychologically active without being valid.
- Related entities: Commitment, Memory, Thread, Document.
- Related graph objects: Memory references Project, Thread contains Memory, Commitment states.
- Related laws: Continuity Over Recency, Relevance Over Completeness, Source Before Memory.
- Potential signals: recent updates, closure evidence, renegotiation notes, follow-up messages.
- Potential risks: stale urgency, forgotten promises, false currentness.
- Human interpretation: freshness helps distinguish live obligations from old context.
- Not implementation: no freshness threshold or automated status transition is defined.

## Candidate: Follow-up Pressure

- Purpose: indicate whether a commitment may need follow-up attention.
- What it measures: unresolved dependency, due-date proximity, or lack of response evidence.
- Why it matters: follow-up pressure can accumulate into commitment debt.
- Related entities: Commitment, Person, Event, Project.
- Related graph objects: Person linked_to Commitment, Event affects Relationship.
- Related laws: Attention Constitution, Trust Governance, Awareness Value.
- Potential signals: due dates, waiting states, unresolved replies, dependency language.
- Potential risks: notification inflation, pressure creation, guilt framing.
- Human interpretation: follow-up pressure is a possible awareness signal, not a command.
- Not implementation: no notification, reminder, or escalation logic is defined.

## Candidate: Fulfillment Confidence

- Purpose: indicate confidence that a commitment has been fulfilled.
- What it measures: evidence strength for completion or closure.
- Why it matters: closure reduces cognitive load and protects trust.
- Related entities: Commitment, Document, Event, Person.
- Related graph objects: Commitment states, Document supports Decision, Person linked_to Commitment.
- Related laws: Evidence Before Insight, Explicit Uncertainty, Trust Governance.
- Potential signals: delivery artifacts, confirmations, completion notes, accepted outcomes.
- Potential risks: false closure, unsupported completion claims, broken commitments hidden as fulfilled.
- Human interpretation: fulfillment confidence says how well-supported closure is.
- Not implementation: no fulfillment scoring formula or workflow automation is defined.

## Domain Risks

- Commitment debt
- Silent failure
- Forgotten promises

## Governance

Commitment metrics must avoid creating urgency, dependency, guilt, or emotional pressure.
