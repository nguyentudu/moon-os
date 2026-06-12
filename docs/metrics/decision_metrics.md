# Decision Metrics v1

## Purpose

Decision metrics measure decision continuity across Decision graph objects.

## Domain Goal

Measure decision pressure, stability, reversals, and context preservation without implementing reasoning or decision-making.

## Candidate: Decision Pressure Score

- Purpose: indicate whether an unresolved decision may be creating continuity pressure.
- What it measures: unresolved choices, dependencies, time sensitivity, and affected entities.
- Why it matters: unresolved decisions can block goals, projects, commitments, and attention.
- Related entities: Decision, Goal, Project, Commitment, Event.
- Related graph objects: Decision affects Project, Decision affects Goal, Decision states.
- Related laws: Human Agency, Awareness Value, Evidence Before Insight.
- Potential signals: repeated deferral, open questions, blocked commitments, upcoming events.
- Potential risks: pressure creation, false urgency, overreach.
- Human interpretation: pressure means a decision may deserve awareness, not that Moon should decide.
- Not implementation: no decision engine, ranking algorithm, or recommendation logic is defined.

## Candidate: Decision Stability

- Purpose: indicate whether a committed decision appears durable.
- What it measures: consistency of later actions and evidence with an earlier decision.
- Why it matters: instability may signal changed assumptions or unresolved conflict.
- Related entities: Decision, Project, Goal, Document.
- Related graph objects: Decision affects Project, Decision affects Goal, Document supports Decision.
- Related laws: Continuity Over Recency, Explicit Uncertainty, Source Before Memory.
- Potential signals: reinforcing actions, contradictory actions, updated documents, new assumptions.
- Potential risks: stale assumptions, false certainty, repeated mistakes.
- Human interpretation: stability helps contextualize current direction; it does not validate the decision.
- Not implementation: no stability formula or automatic reversal detection is defined.

## Candidate: Reversal Frequency

- Purpose: indicate how often decisions are reversed in a continuity area.
- What it measures: evidence of repeated changes from committed to reversed states.
- Why it matters: frequent reversal may reveal uncertainty, changing conditions, or missing context.
- Related entities: Decision, Project, Goal, Thread.
- Related graph objects: Decision states, Decision affects Project, Decision affects Goal.
- Related laws: Evidence Before Insight, Explicit Uncertainty, Awareness Value.
- Potential signals: reversal notes, changed plans, contradicted rationale, replaced assumptions.
- Potential risks: repeated mistakes, overinterpreting adaptation as failure, context loss.
- Human interpretation: reversals can be healthy adaptation or instability; interpretation requires context.
- Not implementation: no reversal counter, threshold, or alert is defined.

## Candidate: Context Preservation

- Purpose: indicate whether decision rationale and assumptions remain available.
- What it measures: recoverability of why a decision was made.
- Why it matters: forgotten rationale leads to repeated uncertainty and poor continuity.
- Related entities: Decision, Document, Memory, Thread.
- Related graph objects: Document supports Decision, Memory references Decision, Thread contains Memory.
- Related laws: Source Before Memory, Justification Before Recall, Evidence Before Insight.
- Potential signals: rationale, assumptions, source documents, consequence notes, decision records.
- Potential risks: forgotten rationale, fragmented evidence, unsupported recall.
- Human interpretation: preserved context helps future reasoning understand history.
- Not implementation: no retrieval system, database, or context index is defined.

## Domain Risks

- Forgotten rationale
- Repeated mistakes
- Unresolved decisions

## Governance

Decision metrics must inform awareness and preserve human agency. Moon does not decide.
