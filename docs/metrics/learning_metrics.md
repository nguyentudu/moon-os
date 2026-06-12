# Learning Metrics v1

## Purpose

Learning metrics measure learning continuity across LearningTopic, Thread, Document, and Project graph objects.

## Domain Goal

Measure learning continuity, retention signals, research momentum, and application frequency without implementing study systems or recommendations.

## Candidate: Learning Continuity Score

- Purpose: indicate whether a learning thread remains continuous.
- What it measures: persistence of inquiry, sources, revisits, synthesis, and application.
- Why it matters: fragmented learning reduces future capability and continuity.
- Related entities: LearningTopic, Thread, Document, Project.
- Related graph objects: LearningTopic related_to Project, Thread contains Memory.
- Related laws: Continuity Over Recency, Relevance Over Completeness, Evidence Before Insight.
- Potential signals: repeated revisits, linked notes, active questions, applied artifacts.
- Potential risks: fragmented learning, topic abandonment, false mastery.
- Human interpretation: continuity suggests learning remains recoverable and usable.
- Not implementation: no learning score formula or study engine is defined.

## Candidate: Knowledge Retention Signal

- Purpose: indicate whether learned material appears retained or reusable.
- What it measures: evidence that knowledge can be recalled, applied, summarized, or taught.
- Why it matters: exposure is not the same as retention.
- Related entities: LearningTopic, Document, Insight, Project.
- Related graph objects: Insight derived_from Evidence, LearningTopic related_to Goal.
- Related laws: Evidence Before Insight, Explicit Uncertainty, Awareness Value.
- Potential signals: summaries, applied decisions, repeated correct use, synthesis notes.
- Potential risks: knowledge decay, false mastery, unsupported confidence.
- Human interpretation: retention signal indicates evidence of usability, not mastery.
- Not implementation: no testing, quizzing, or retention algorithm is defined.

## Candidate: Research Momentum

- Purpose: indicate whether inquiry is actively moving.
- What it measures: progression through questions, sources, experiments, and synthesis.
- Why it matters: research can stall while sources accumulate.
- Related entities: LearningTopic, Thread, Document, Decision.
- Related graph objects: Document supports Decision, Thread contains Memory.
- Related laws: Attention Constitution, Relevance Over Completeness, Continuity Over Recency.
- Potential signals: new questions, resolved questions, source review, synthesis artifacts.
- Potential risks: abandoned learning, source hoarding, fragmented knowledge.
- Human interpretation: momentum means inquiry is developing, not necessarily complete.
- Not implementation: no research tracker or recommendation engine is defined.

## Candidate: Application Frequency

- Purpose: indicate whether learning is being applied.
- What it measures: use of learning in projects, goals, decisions, or insights.
- Why it matters: application connects learning to continuity and growth.
- Related entities: LearningTopic, Project, Goal, Decision, Insight.
- Related graph objects: LearningTopic related_to Project, LearningTopic related_to Goal, Insight derived_from Evidence.
- Related laws: Awareness Value, Evidence Before Insight, Human Agency.
- Potential signals: project artifacts, decision rationale, written synthesis, changed practice.
- Potential risks: knowledge decay, false application, overvaluing output.
- Human interpretation: application suggests learning has entered practice.
- Not implementation: no application scoring model or automation is defined.

## Domain Risks

- Fragmented learning
- Topic abandonment
- Knowledge decay

## Governance

Learning metrics should preserve curiosity and continuity without turning learning into a productivity pressure system.
