# Trust Metrics v1

## Purpose

Trust metrics measure trust safety and must align with [Trust Governance](../../TRUST_GOVERNANCE.md).

## Domain Goal

Measure trust risk, consent confidence, recall sensitivity, and interruption risk without bypassing user boundaries.

## Candidate: Trust Risk Score

- Purpose: indicate whether surfacing or using a continuity object may create trust risk.
- What it measures: sensitivity, consent uncertainty, boundary conflict, and potential overreach.
- Why it matters: trust rupture prevention takes precedence over continuity optimization.
- Related entities: Memory, Relationship, Person, Insight, Commitment.
- Related graph objects: consent_level, evidence_links, relevance_state, confidence.
- Related laws: Trust Governance, Human Agency, Explicit Uncertainty.
- Potential signals: sensitive topics, weak consent, boundary conflict, hidden recall risk.
- Potential risks: trust rupture, overreach, manipulation.
- Human interpretation: trust risk means caution or silence may be required.
- Not implementation: no risk formula, enforcement engine, or policy automation is defined.

## Candidate: Consent Confidence

- Purpose: indicate how clear permission is for recall or surfacing.
- What it measures: strength and currency of consent boundaries.
- Why it matters: consent precedes recall.
- Related entities: Memory, Person, Relationship, Insight.
- Related graph objects: consent_level, Memory references Person, Insight derived_from Evidence.
- Related laws: Consent Precedes Recall, Source Before Memory, Trust Governance.
- Potential signals: explicit permission, boundary language, user confirmation, revocation, hesitation.
- Potential risks: boundary violation, inferred consent, stale permission.
- Human interpretation: consent confidence explains whether Moon should rely on or avoid prior context.
- Not implementation: no consent database or permission engine is defined.

## Candidate: Recall Sensitivity

- Purpose: indicate how sensitive a memory or context may be to recall.
- What it measures: sensitivity of content and possible emotional or relational impact.
- Why it matters: sensitive memories require higher justification.
- Related entities: Memory, Relationship, Person, Event.
- Related graph objects: Memory references Person, Event affects Relationship, confidence.
- Related laws: Sensitive Memories Require Higher Justification, Explicit Uncertainty, Attention Constitution.
- Potential signals: grief, trauma, rupture, health, identity-sensitive events, vulnerable disclosures.
- Potential risks: trust rupture, emotional overreach, hidden retrieval.
- Human interpretation: sensitivity signals stricter evidence, consent, and why-now requirements.
- Not implementation: no classifier, retrieval system, or automated sensitivity engine is defined.

## Candidate: Interruption Risk

- Purpose: indicate whether surfacing something may violate attention or trust boundaries.
- What it measures: interruption cost, boundary conflict, sensitivity, and low awareness value.
- Why it matters: silence is valid when interruption risk exceeds awareness value.
- Related entities: Insight, Memory, Commitment, Relationship, Decision.
- Related graph objects: relevance_state, consent_level, evidence_links, confidence.
- Related laws: Attention Constitution, Trust Governance, No Manipulation.
- Potential signals: uncertain confidence, sensitive recall, no clear why-now, active user boundary.
- Potential risks: boundary violation, notification inflation, pressure creation.
- Human interpretation: interruption risk helps decide whether silence is safer.
- Not implementation: no interruption engine, notification system, or ranking algorithm is defined.

## Domain Risks

- Trust rupture
- Boundary violation
- Overreach

## Governance

Trust metrics override metric enthusiasm. If trust safety is uncertain, silence remains valid.
