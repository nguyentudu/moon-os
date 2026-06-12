# Evaluation Methodology v1

## Purpose

This methodology defines how each existing validation scenario should be evaluated.

No new scenarios are created here.

## Per-Scenario Evaluation

For each scenario evaluate:

- Expected Continuity Verdict
- Expected Awareness Outcome
- Expected Trust Outcome
- Expected Translation Artifact
- Expected Visibility

Compare against:

- Actual Continuity Verdict
- Actual Awareness Outcome
- Actual Trust Outcome
- Actual Translation Artifact
- Actual Visibility

## Match Classification

### Match

Actual result matches the expected constitutional outcome.

### Partial Match

Actual result is directionally close but differs in severity, timing, trust handling, translation quality, or visibility.

### Mismatch

Actual result violates the expected constitutional outcome or fails a required gate.

## Final Result

### PASS

Scenario behavior satisfies constitutional expectations.

### BORDERLINE

Scenario behavior is partially acceptable but reveals a review-worthy variance.

### FAIL

Scenario behavior violates constitutional expectations or creates unacceptable trust, attention, or evidence risk.

## Readiness Rule

A system with unresolved critical trust failures cannot be VALIDATED.

A system with unresolved constitutional violations cannot be PRODUCTION_CANDIDATE.

## Non-Implementation Boundary

This methodology does not define executable tests, automation, integrations, notifications, retrieval systems, or product behavior.
