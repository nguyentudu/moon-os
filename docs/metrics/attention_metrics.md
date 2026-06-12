# Attention Metrics v1

## Purpose

Attention metrics measure attention quality and must align with [Attention Constitution](../../ATTENTION_CONSTITUTION.md).

## Domain Goal

Measure attention load, attention debt, awareness yield, and signal density while protecting attention from overload and engagement optimization.

## Candidate: Attention Load

- Purpose: indicate how much continuity material may be competing for attention.
- What it measures: volume and intensity of active signals across graph objects.
- Why it matters: excessive load reduces clarity and decision quality.
- Related entities: Goal, Commitment, Project, Relationship, Decision, Insight.
- Related graph objects: active states, at_risk commitments, open decisions, proposed insights.
- Related laws: Attention Constitution, Awareness Value, Relevance Over Completeness.
- Potential signals: unresolved decisions, at-risk commitments, drifting goals, competing projects.
- Potential risks: awareness overload, noise accumulation, cognitive load increase.
- Human interpretation: load indicates pressure on attention, not an instruction to act.
- Not implementation: no attention meter, notification system, or ranking algorithm is defined.

## Candidate: Attention Debt

- Purpose: indicate accumulated unresolved attention claims.
- What it measures: repeated, unresolved, or low-closure signals that keep returning.
- Why it matters: attention debt increases cognitive load.
- Related entities: Commitment, Decision, Project, Thread, Insight.
- Related graph objects: Commitment states, Decision states, Thread contains Memory.
- Related laws: Attention Debt Minimization, Silence Is Valid, Trust Governance.
- Potential signals: repeated open loops, stale commitments, unresolved threads, recurring questions.
- Potential risks: attention debt, guilt framing, pressure creation.
- Human interpretation: debt suggests unresolved load; silence may still be the right outcome.
- Not implementation: no debt formula or reminder engine is defined.

## Candidate: Awareness Yield

- Purpose: indicate whether a surfaced signal is likely to improve awareness.
- What it measures: expected awareness value relative to evidence, relevance, and timing.
- Why it matters: Moon should surface only what improves awareness or decision quality.
- Related entities: Insight, Decision, Commitment, Relationship, Goal.
- Related graph objects: Insight derived_from Evidence, relevance_state, confidence.
- Related laws: Awareness Value, Why Now, Evidence Before Insight.
- Potential signals: strong evidence, clear relevance, decision impact, commitment impact, relationship impact.
- Potential risks: interesting-but-not-important surfacing, hidden inference, false urgency.
- Human interpretation: yield explains why something may matter now.
- Not implementation: no yield formula, recommender, or surfacing engine is defined.

## Candidate: Signal Density

- Purpose: indicate how concentrated or noisy attention signals are.
- What it measures: ratio of strong continuity signals to weak competing signals conceptually.
- Why it matters: one strong signal is better than ten weak signals.
- Related entities: Insight, Commitment, Decision, Project, Goal.
- Related graph objects: evidence links, confidence levels, relevance_state.
- Related laws: One Strong Signal, Reduce Noise, Attention Constitution.
- Potential signals: evidence strength, confidence, duplicate signals, weak unsupported items.
- Potential risks: notification inflation, noise accumulation, over-filtering.
- Human interpretation: density helps protect clarity by distinguishing signal from noise.
- Not implementation: no density formula or filtering algorithm is defined.

## Domain Risks

- Awareness overload
- Notification inflation
- Noise accumulation

## Governance

Attention metrics must optimize awareness, not engagement, frequency, or usage time.
