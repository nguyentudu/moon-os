# Project Metrics v1

## Purpose

Project metrics measure project continuity. They help identify continuity health, risk, momentum, and context stability across Project graph objects.

## Domain Goal

Measure project continuity without deciding whether a project should be surfaced, resumed, closed, or changed.

## Candidate: Momentum Score

- Purpose: indicate whether a project appears to be moving.
- What it measures: continuity of meaningful activity over time.
- Why it matters: momentum loss can precede dormant or abandoned project states.
- Related entities: Project, Person, Commitment, Decision, Document.
- Related graph objects: Project states, Person participates_in Project, Decision affects Project.
- Related laws: Evidence Before Insight, Relevance Over Completeness, Explicit Uncertainty.
- Potential signals: recent activity, progress artifacts, decisions, completed commitments, ownership actions.
- Potential risks: false momentum, activity without progress, overvaluing recency.
- Human interpretation: a momentum signal invites review of project movement; it does not prove value or urgency.
- Not implementation: no formula, scoring engine, threshold, ranking, or recommendation is defined.

## Candidate: Activity Health

- Purpose: indicate whether project activity remains healthy and meaningful.
- What it measures: quality and cadence of project-related activity.
- Why it matters: activity can keep context alive or mask lack of progress.
- Related entities: Project, Document, Event, Thread.
- Related graph objects: Project lifecycle, Thread contains Memory, Document supports Decision.
- Related laws: Awareness Value, Continuity Over Recency, Attention Debt Minimization.
- Potential signals: artifact creation, meeting cadence, thread revisits, resolved decisions.
- Potential risks: false progress, noise accumulation, shallow activity.
- Human interpretation: healthy activity suggests continuity is maintained; weak activity suggests context may need review.
- Not implementation: no activity formula, dashboard, or automated evaluation is defined.

## Candidate: Context Stability

- Purpose: indicate whether project context remains recoverable.
- What it measures: preservation of rationale, decisions, documents, owners, and next steps.
- Why it matters: context decay increases restart cost and continuity loss.
- Related entities: Project, Decision, Document, Memory, Thread.
- Related graph objects: Decision affects Project, Memory references Project, Document supports Decision.
- Related laws: Source Before Memory, Justification Before Recall, Evidence Before Insight.
- Potential signals: linked decisions, current documents, sourced memories, explicit next steps.
- Potential risks: context decay, hidden assumptions, fragmented evidence.
- Human interpretation: stable context means the project can be understood later with less cognitive load.
- Not implementation: no context index, storage model, or retrieval behavior is defined.

## Candidate: Ownership Strength

- Purpose: indicate whether responsibility for the project is clear.
- What it measures: clarity and continuity of ownership.
- Why it matters: unclear ownership can produce hidden abandonment.
- Related entities: Project, Person, Commitment.
- Related graph objects: Person participates_in Project, Person linked_to Commitment.
- Related laws: Human Agency, Trust Governance, Explicit Uncertainty.
- Potential signals: named owner, repeated initiative, accepted responsibility, follow-through.
- Potential risks: stale ownership, implied responsibility, overreach.
- Human interpretation: strong ownership suggests accountability is visible; weak ownership suggests ambiguity.
- Not implementation: no ownership calculation or assignment mechanism is defined.

## Candidate: Completion Progress

- Purpose: indicate whether the project is moving toward closure or intended outcome.
- What it measures: evidence of progress relative to stated project purpose.
- Why it matters: progress supports continuity without mistaking effort for completion.
- Related entities: Project, Goal, Commitment, Decision.
- Related graph objects: Project supports Goal, Goal contains Commitment, Project states.
- Related laws: Relevance Over Completeness, Awareness Value, Evidence Before Insight.
- Potential signals: completed commitments, achieved milestones, closure language, decision resolution.
- Potential risks: false completion, unclear outcomes, pressure to close prematurely.
- Human interpretation: completion progress is a signal about project state, not a command to finish or abandon.
- Not implementation: no completion formula, percentage model, or workflow is defined.

## Domain Risks

- Hidden abandonment
- False momentum
- Context decay

## Governance

Project metrics must remain subordinate to law, trust boundaries, attention cost, graph evidence, and human interpretation.
