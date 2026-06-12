# Expected vs Actual Matrix v1

## Purpose

This matrix records the first manual benchmark execution across the existing canonical scenarios.

## Matrix

| Scenario ID | Scenario Name | Domain | Expected Continuity Director Verdict | Actual Continuity Director Verdict | Expected Awareness QA Outcome | Actual Awareness QA Outcome | Expected Trust QA Outcome | Actual Trust QA Outcome | Expected Task Writer Artifact | Actual Task Writer Artifact | Expected Today Visibility | Actual Today Visibility | Variance Type | Severity | Root Cause | Final Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P1 | Project Momentum Loss | Project | CONCERN | CONCERN | SURFACE | SURFACE | ALLOW | ALLOW | Project Momentum Alert | Project Momentum Alert | Visible | Visible | None | Low | None | PASS |
| P2 | Hidden Abandonment | Project | HIGH_CONCERN | HIGH_CONCERN | SURFACE | SURFACE | ALLOW | ALLOW | Project Momentum Alert | Project Momentum Alert | Visible | Visible | None | Low | None | PASS |
| P3 | Completed Project Still Appearing Active | Project | WATCH | WATCH | DEFER | DEFER | ALLOW | ALLOW | Weekly Reflection Candidate | Weekly Reflection Candidate | Not visible today | Not visible today | None | Low | None | PASS |
| G1 | Goal Drift | Goal | CONCERN | CONCERN | SURFACE | SURFACE | ALLOW | ALLOW | Goal Drift Notice | Goal Drift Notice | Visible | Visible | None | Low | None | PASS |
| G2 | Competing Goal Pressure | Goal | CONCERN | CONCERN | SURFACE | SURFACE | ALLOW | ALLOW | Awareness Card | Awareness Card | Visible | Visible | None | Low | None | PASS |
| G3 | Old Goal With No Present Relevance | Goal | PASS | PASS | SUPPRESS | SUPPRESS | ALLOW | ALLOW | None | None | Not visible | Not visible | None | Low | None | PASS |
| C1 | Forgotten Commitment | Commitment | HIGH_CONCERN | HIGH_CONCERN | PRIORITIZE | PRIORITIZE | ALLOW | ALLOW | Commitment Risk | Commitment Risk | Visible | Visible | None | Low | None | PASS |
| C2 | Fulfilled Commitment Still Creating Noise | Commitment | PASS | PASS | SUPPRESS | SUPPRESS | ALLOW | ALLOW | None | None | Not visible | Not visible | None | Low | None | PASS |
| C3 | Ambiguous Promise | Commitment | UNKNOWN | UNKNOWN | SUPPRESS | SUPPRESS | DEFER | DEFER | None | None | Not visible | Not visible | None | Low | None | PASS |
| R1 | Relationship Decay | Relationship | WATCH | WATCH | DEFER | DEFER | DEFER | DEFER | Relationship Watch | Relationship Watch | Not visible | Not visible | None | Low | None | PASS |
| R2 | Relationship Decay With Direct Evidence | Relationship | CONCERN | CONCERN | SURFACE | SURFACE | ALLOW_WITH_CAUTION | ALLOW_WITH_CAUTION | Relationship Watch | Relationship Watch | Visible with trust notes | Visible with trust notes | None | Low | None | PASS |
| R3 | Frequent Contact Without Meaningful Continuity | Relationship | PASS | PASS | SUPPRESS | SUPPRESS | ALLOW | ALLOW | None | None | Not visible | Not visible | None | Low | None | PASS |
| D1 | Decision Instability | Decision | CONCERN | CONCERN | SURFACE | SURFACE | ALLOW | ALLOW | Awareness Card | Awareness Card | Visible | Visible | None | Low | None | PASS |
| D2 | Stable Decision With Preserved Rationale | Decision | PASS | PASS | SUPPRESS | SUPPRESS | ALLOW | ALLOW | None | None | Not visible | Not visible | None | Low | None | PASS |
| L1 | Learning Fragmentation | Learning | CONCERN | CONCERN | DEFER | DEFER | ALLOW | ALLOW | Learning Continuity Note | Learning Continuity Note | Not visible today | Not visible today | None | Low | None | PASS |
| L2 | Learning Integrated Into Current Project | Learning | WATCH | WATCH | DEFER | DEFER | ALLOW | ALLOW | Weekly Reflection Candidate | Weekly Reflection Candidate | Not visible | Not visible | None | Low | None | PASS |
| A1 | Attention Overload | Attention | CONCERN | CONCERN | PRIORITIZE top 2, SUPPRESS or DEFER most items | PRIORITIZE top 2, SUPPRESS or DEFER most items | ALLOW for low-sensitivity top items | ALLOW for low-sensitivity top items | Commitment Risk and Project Momentum Alert | Commitment Risk and Project Momentum Alert | Only high-value items visible | Only high-value items visible | None | Low | None | PASS |
| A2 | Silence Scenario | Attention | PASS | PASS | SUPPRESS | SUPPRESS | ALLOW | ALLOW | None | None | No Today items | No Today items | None | Low | None | PASS |
| T1 | Old Sensitive Memory | Trust | CONCERN | CONCERN | SURFACE | SURFACE | REJECT | REJECT | None | None | Not visible | Not visible | None | Low | None | PASS |
| T2 | Fresh Start Protection | Trust | WATCH | WATCH | DEFER | DEFER | REJECT | REJECT | None | None | Not visible | Not visible | None | Low | None | PASS |

## Result

All 20 existing scenarios match expected constitutional outcomes in this manual execution.
