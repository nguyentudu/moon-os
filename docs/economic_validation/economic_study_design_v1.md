# Economic Study Design v1

## Purpose

Define the first economic validation studies for Moon.

## Study 1: TTC Study

Compare:

- Manual repo reading
- Decision Memory assisted answering

Measures:

- Time To Context
- Understanding Quality
- confidence
- perceived difficulty

Claim target:

EARLY_SIGNAL or VALIDATED_SIGNAL depending on sample quality.

## Study 2: Contributor Study

Compare:

- new contributor using docs only
- new contributor using Moon Decision Memory

Measures:

- Time To Contribution
- source evidence usage
- avoided rejected paths
- contribution usefulness

Claim target:

ECONOMIC_EVIDENCE only if contribution quality is acceptable.

## Study 3: Onboarding Study

Measure:

Time to explain Moon OS accurately enough to make a correct architecture decision.

Measures:

- explanation accuracy
- architecture placement correctness
- trust/attention/continuity constraints recalled
- time to answer

Claim target:

VALIDATED_SIGNAL if repeated across participants.

## Study 4: Mistake Avoidance Study

Test:

Whether participant avoids repeating a known rejected path after using Moon.

Measures:

- rejected path avoided yes/no
- constraint cited
- prior rationale cited
- confidence
- time to identify risk

Claim target:

ECONOMIC_EVIDENCE if mistake avoidance maps to real cost or risk.

## Study Guardrails

- preserve raw responses
- separate time from quality
- separate reliability evidence from economic evidence
- do not claim economic value from TTC alone
- keep Decision Expansion blocked unless separately approved

