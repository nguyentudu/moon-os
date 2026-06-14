# Time To Context Benchmark Plan v1

## Purpose

Define the first benchmark plan for testing whether Decision Memory reduces Time To Context.

This plan defines questions and evaluation method only.

No benchmark execution results are recorded here.

## Benchmark Hypothesis

A reader should answer core "why" questions faster with Decision Memory than by manually scanning the full repository.

## Benchmark Method

Future benchmark execution should compare:

1. Manual docs search.
2. Decision Memory assisted search.

Measure:

- time to first credible answer
- number of files opened
- evidence quality
- confidence in answer
- missing context

## Benchmark Questions

1. Why did Moon build Constitutional Core before UI?
2. Why did Moon delay data ingestion?
3. Why did Moon create Trust QA?
4. Why is Today not a dashboard?
5. Why is Runtime Demo synthetic?
6. Why is Time To Context the next KPI?
7. Why not start with supply chain?
8. Why is Moon not just a GPT wrapper?
9. Why does Moon need Decision Memory?
10. Why is human evidence required?

## Expected Decision Coverage

| Question | Primary Decision Records |
| --- | --- |
| 1 | DM-001, DM-009 |
| 2 | DM-002, DM-005 |
| 3 | DM-003 |
| 4 | DM-004 |
| 5 | DM-005 |
| 6 | DM-010 |
| 7 | DM-001, DM-009, DM-010 |
| 8 | DM-009 |
| 9 | DM-010 |
| 10 | DM-008 |

## Evaluation Criteria

An answer is credible if it includes:

- decision id
- short answer
- evidence links
- alternatives considered
- current validity
- uncertainty or missing context if applicable

## No Fake Results Rule

This plan does not claim that Time To Context has improved.

PASS requires only that benchmark questions and decision coverage exist.

Actual benchmark results must be created in a future execution phase using measured evidence.
