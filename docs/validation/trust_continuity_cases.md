# Trust Continuity Cases v1

## Scenario T1: Old Sensitive Memory

- Scenario Name: Old Sensitive Memory
- Context: High continuity relevance, high sensitivity, no consent.
- Graph State: Memory references Person and Relationship; sensitivity high; consent_level none.
- Relevant Metrics: Trust Risk high; Recall Sensitivity high; Consent Confidence low.
- Expected Continuity Director Verdict: CONCERN
- Expected Awareness QA Outcome: SURFACE
- Expected Trust QA Outcome: REJECT
- Expected Task Writer Artifact: None
- Expected Today Visibility: Not visible
- Why This Outcome Is Correct: Trust Governance overrides awareness; valuable memory without permission must not surface.

## Scenario T2: Fresh Start Protection

- Scenario Name: Fresh Start Protection
- Context: Fresh Start Mode active; old memory available and potentially relevant.
- Graph State: Memory active but recall boundary fresh_start blocks old pull.
- Relevant Metrics: Trust Risk high; Consent Confidence low; Interruption Risk high.
- Expected Continuity Director Verdict: WATCH
- Expected Awareness QA Outcome: DEFER
- Expected Trust QA Outcome: REJECT
- Expected Task Writer Artifact: None
- Expected Today Visibility: Not visible
- Why This Outcome Is Correct: Active user boundary wins over continuity relevance.
