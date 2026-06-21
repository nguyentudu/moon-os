# Answer Quality Analysis v1

## Method

1. Responses were anonymized in `blinded_answer_set_v1.md`.
2. Response-level quality labels were assigned without exposing participant id or mode.
3. After scoring, aggregate comparison was performed by mode using the preserved raw evidence mapping.

## Manual vs Decision Memory Quality Comparison

| Category | Manual Observation | Decision Memory Observation |
| --- | --- | --- |
| Correctness | Mostly correct or partially correct. | Mostly correct, with fewer incomplete causal explanations. |
| Completeness | Often terse; several answers omit instability, consequence, or current status. | Generally adequate; strongest in P-005/P-006 answers. |
| Source usage | Mixed; some answers include paths, many do not. | Stronger in P-005/P-006; P-001 often lacks sources. |
| Reasoning quality | Usually identifies a cause but often compresses the reasoning chain. | More consistent causal chain, especially on boundary and no-premature-claim questions. |
| Boundary awareness | Often implicit. | More explicit on "blocked", "not validated", and "not enough evidence" answers. |

## Correctness Findings

Both modes produced mostly correct answers.

Manual answers were more likely to be partially correct when they named improvement without explaining remaining instability.

Decision Memory answers more often preserved the exact boundary condition:

- improved but not stable
- usable but insufficient
- measurement before claims

## Completeness Findings

Decision Memory answers were generally more complete, but P-001 sometimes answered correctly with minimal explanation.

Manual answers often included the main reason but omitted:

- consequence
- current validity
- source grounding

## Source Usage Findings

P-005 and P-006 frequently included source paths. P-001 mostly did not.

Manual participants used sources inconsistently.

Source usage signal is positive for Decision Memory overall, but not uniform across all Decision Memory participants.

## Reasoning Quality Findings

Decision Memory answers tended to reconstruct the same causal chain:

evidence problem -> boundary uncertainty -> blocked expansion or further validation.

Manual answers often showed correct retrieval but weaker causal explanation.

## Boundary Awareness Findings

Decision Memory answers more often preserved boundary language:

- "chưa ổn định"
- "chưa đủ"
- "không tuyên bố giá trị quá sớm"
- "chưa được xác thực"

Manual answers sometimes stated the topic but not the caution.

## P-001 Special Review

P-001 remains preserved.

P-001 was slower than P-005/P-006 and produced shorter, mostly unsourced answers.

Interpretation:

- P-001 supports that Decision Memory mode does not automatically guarantee high-quality source usage.
- P-001 does not erase the overall early quality signal because its answers were still generally correct.

## Fast-Run Participant Review

P-005 and P-006 were fast and produced source-backed answers.

This supports a possible pattern:

Decision Memory can reduce time while preserving or improving answer quality.

However, this may also indicate shared retrieval from provided context, not proven independent understanding.

## Speed vs Quality Observation

Decision Memory answers were faster and, in this internal blinded pass, at least equal or higher quality overall.

No automatic winner is declared.

This is an early quality signal, not production-grade validation.

## Decision Gate

Decision Memory answers were:

- faster: YES
- equal or higher quality: YES, in internal blinded review

QUALITY_SIGNAL = POSITIVE

Claim level: EARLY_QUALITY_SIGNAL
