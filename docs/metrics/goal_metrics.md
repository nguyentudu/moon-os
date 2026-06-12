# Goal Metrics v1

## Purpose

Goal metrics measure alignment between effort and intention across Goal graph objects.

## Domain Goal

Measure whether goals remain aligned, drifting, pressured, or forgotten without judging the user or prescribing action.

## Candidate: Goal Alignment Score

- Purpose: indicate alignment between stated goals and observed effort.
- What it measures: consistency between intention, decisions, time, and commitments.
- Why it matters: alignment preserves continuity between past intent and present action.
- Related entities: Goal, Project, Commitment, Decision.
- Related graph objects: Project supports Goal, Goal contains Commitment, Decision affects Goal.
- Related laws: Human Agency, Evidence Before Insight, Continuity Over Recency.
- Potential signals: effort allocation, calendar allocation, decision alignment, project support.
- Potential risks: overinterpreting behavior, stale goals, false certainty.
- Human interpretation: alignment indicates coherence, not correctness.
- Not implementation: no formula, alignment engine, or recommendation is defined.

## Candidate: Goal Drift Score

- Purpose: indicate possible divergence from a stated goal.
- What it measures: mismatch between intended goal and actual allocation or decisions.
- Why it matters: invisible drift can create continuity loss.
- Related entities: Goal, Project, Commitment, Decision, Event.
- Related graph objects: Goal states, Decision affects Goal, Project supports Goal.
- Related laws: Explicit Uncertainty, Awareness Value, Relevance Over Completeness.
- Potential signals: reduced effort, conflicting decisions, competing commitments, abandoned project links.
- Potential risks: invisible drift, competing priorities, shame framing.
- Human interpretation: drift is information for awareness, not evidence of failure.
- Not implementation: no drift formula, threshold, or automated surfacing rule is defined.

## Candidate: Goal Attention Share

- Purpose: indicate how much attention a goal appears to receive relative to other goals.
- What it measures: distribution of attention across goal-linked activity.
- Why it matters: attention imbalance may reveal competing priorities or hidden shifts.
- Related entities: Goal, Thread, Project, Event.
- Related graph objects: LearningTopic related_to Goal, Project supports Goal, Thread contains Memory.
- Related laws: Attention Constitution, Attention Debt Minimization, Awareness Over Engagement.
- Potential signals: revisits, calendar events, project activity, decision references.
- Potential risks: attention distortion, overvaluing frequent mention, noise accumulation.
- Human interpretation: attention share helps examine priority allocation; it does not define priority.
- Not implementation: no tracking engine or ranking algorithm is defined.

## Candidate: Goal Progress Confidence

- Purpose: indicate confidence that a goal is progressing.
- What it measures: evidence strength around movement toward the goal.
- Why it matters: weak evidence may create false confidence or hide stagnation.
- Related entities: Goal, Project, Commitment, Document.
- Related graph objects: Goal states, Project supports Goal, Commitment states.
- Related laws: Evidence Before Insight, Explicit Uncertainty, Source Before Memory.
- Potential signals: completed commitments, artifacts, closure notes, applied decisions.
- Potential risks: forgotten goals, false progress, unsupported inference.
- Human interpretation: progress confidence explains how well-supported the progress claim is.
- Not implementation: no confidence formula or scoring implementation is defined.

## Domain Risks

- Invisible drift
- Competing priorities
- Forgotten goals

## Governance

Goal metrics must support awareness and agency. They must not imply that the user should continue, abandon, or reprioritize a goal.
