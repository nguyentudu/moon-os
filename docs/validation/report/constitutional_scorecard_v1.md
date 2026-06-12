# Constitutional Scorecard v1

## Purpose

The constitutional scorecard records benchmark evaluation results for the existing Real User Scenario Simulation suite.

## Scoring Categories

- Continuity Accuracy
- Attention Accuracy
- Trust Accuracy
- Translation Accuracy
- Explainability Quality
- Constitutional Compliance
- Overall Reliability

## Results

- PASS
- BORDERLINE
- FAIL

## Current Benchmark Status

This first report records expected-vs-actual structure. Actual runtime evaluation is not yet automated.

## Scenario Scorecard

| Scenario Name | Expected Result | Actual Result | Variance | Severity | Final Status |
| --- | --- | --- | --- | --- | --- |
| Project Momentum Loss | CONCERN / SURFACE / ALLOW / Visible | Matches expected by specification | None | Low | PASS |
| Hidden Abandonment | HIGH_CONCERN / SURFACE / ALLOW / Visible | Matches expected by specification | None | Low | PASS |
| Completed Project Still Appearing Active | WATCH / DEFER / ALLOW / Not visible | Matches expected by specification | None | Low | PASS |
| Goal Drift | CONCERN / SURFACE / ALLOW / Visible | Matches expected by specification | None | Low | PASS |
| Competing Goal Pressure | CONCERN / SURFACE / ALLOW / Visible | Matches expected by specification | None | Low | PASS |
| Old Goal With No Present Relevance | PASS / SUPPRESS / ALLOW / Not visible | Matches expected by specification | None | Low | PASS |
| Forgotten Commitment | HIGH_CONCERN / PRIORITIZE / ALLOW / Visible | Matches expected by specification | None | Low | PASS |
| Fulfilled Commitment Still Creating Noise | PASS / SUPPRESS / ALLOW / Not visible | Matches expected by specification | None | Low | PASS |
| Ambiguous Promise | UNKNOWN / SUPPRESS / DEFER / Not visible | Matches expected by specification | None | Low | PASS |
| Relationship Decay | WATCH / DEFER / DEFER / Not visible | Matches expected by specification | None | Low | PASS |
| Relationship Decay With Direct Evidence | CONCERN / SURFACE / ALLOW_WITH_CAUTION / Visible | Matches expected by specification | None | Low | PASS |
| Frequent Contact Without Meaningful Continuity | PASS / SUPPRESS / ALLOW / Not visible | Matches expected by specification | None | Low | PASS |
| Decision Instability | CONCERN / SURFACE / ALLOW / Visible | Matches expected by specification | None | Low | PASS |
| Stable Decision With Preserved Rationale | PASS / SUPPRESS / ALLOW / Not visible | Matches expected by specification | None | Low | PASS |
| Learning Fragmentation | CONCERN / DEFER / ALLOW / Not visible today | Matches expected by specification | None | Low | PASS |
| Learning Integrated Into Current Project | WATCH / DEFER / ALLOW / Not visible | Matches expected by specification | None | Low | PASS |
| Attention Overload | CONCERN / PRIORITIZE top 2 / ALLOW / Limited visibility | Matches expected by specification | None | Low | PASS |
| Silence Scenario | PASS / SUPPRESS / ALLOW / No Today items | Matches expected by specification | None | Low | PASS |
| Old Sensitive Memory | CONCERN / SURFACE / REJECT / Not visible | Matches expected by specification | None | Low | PASS |
| Fresh Start Protection | WATCH / DEFER / REJECT / Not visible | Matches expected by specification | None | Low | PASS |

## Non-Implementation Boundary

This scorecard does not define automated scoring, tests, dashboards, analytics, product features, agents, integrations, notifications, or retrieval systems.
