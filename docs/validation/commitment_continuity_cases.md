# Commitment Continuity Cases v1

## Scenario C1: Forgotten Commitment

- Scenario Name: Forgotten Commitment
- Context: Open commitment with upcoming deadline and no follow-up activity.
- Graph State: Commitment active; due date near; Person linked_to Commitment; no closure evidence.
- Relevant Metrics: Commitment Risk high; Follow-up Pressure high; Attention Load moderate.
- Expected Continuity Director Verdict: HIGH_CONCERN
- Expected Awareness QA Outcome: PRIORITIZE
- Expected Trust QA Outcome: ALLOW
- Expected Task Writer Artifact: Commitment Risk
- Expected Today Visibility: Visible
- Why This Outcome Is Correct: The commitment is current, high-impact, and still actionable.

## Scenario C2: Fulfilled Commitment Still Creating Noise

- Scenario Name: Fulfilled Commitment Still Creating Noise
- Context: Commitment appears open, but delivery confirmation exists.
- Graph State: Commitment fulfilled; closure evidence present; stale active label.
- Relevant Metrics: Fulfillment Confidence strong; Commitment Risk low; Attention Debt low.
- Expected Continuity Director Verdict: PASS
- Expected Awareness QA Outcome: SUPPRESS
- Expected Trust QA Outcome: ALLOW
- Expected Task Writer Artifact: None
- Expected Today Visibility: Not visible
- Why This Outcome Is Correct: Evidence supports closure; surfacing would add noise.

## Scenario C3: Ambiguous Promise

- Scenario Name: Ambiguous Promise
- Context: User casually said they might help someone, but no explicit agreement or due date exists.
- Graph State: Possible Commitment weak; Person linked_to Commitment uncertain.
- Relevant Metrics: Commitment Risk weak; Consent Confidence moderate; Confidence weak.
- Expected Continuity Director Verdict: UNKNOWN
- Expected Awareness QA Outcome: SUPPRESS
- Expected Trust QA Outcome: DEFER
- Expected Task Writer Artifact: None
- Expected Today Visibility: Not visible
- Why This Outcome Is Correct: Weak evidence cannot create obligation pressure.
