# Shared Understanding Analysis Framework v1

## Purpose

This framework separates evidence from interpretation when evaluating study results.

## Analysis Inputs

Future analysis may use:

- participant raw answers
- reviewer rubric results
- evidence cited by participants
- recommendation similarity
- reasoning chain similarity
- tradeoff coverage
- uncertainty handling

## Analysis Questions

1. Did participants retrieve similar evidence?
2. Did participants reconstruct similar reasoning?
3. Did participants recognize similar constraints?
4. Did participants identify similar tradeoffs?
5. Did participants reach similar recommendations?
6. Did participants justify recommendations independently?

## Evidence vs Interpretation

Evidence:

- answer text
- cited sources
- recommendation
- reviewer labels

Interpretation:

- shared retrieval signal
- shared reasoning signal
- shared judgement signal
- shared understanding claim

## Allowed Interim Signals

- SHARED_REASONING_SIGNAL
- SHARED_JUDGEMENT_SIGNAL

## Not Allowed Without Stronger Evidence

- SHARED_UNDERSTANDING_CONFIRMED
- TEAM_CONTINUITY_VALIDATED
- ECONOMIC_EVIDENCE
- PMF

## Minimum Evidence for Advancement

To move toward Time To Contribution, participants should show:

- reasoning chain similarity
- recommendation consistency
- explicit constraint awareness
- low reliance on direct copying
- reviewer agreement on judgement quality
