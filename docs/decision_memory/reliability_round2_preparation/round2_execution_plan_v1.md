# Round 2 Execution Plan v1

## Purpose

Define how to run Reliability Round 2 after instruction preparation.

No study is executed in this file.

## Reviewer Count Target

Target:

3 reviewers

Minimum useful level:

2 reviewers

## Reviewer Workflow

1. Give reviewers the revised instruction draft.
2. Give reviewers the canonical examples.
3. Give reviewers the boundary case training packet.
4. Run the same 50-excerpt classification task.
5. Require exactly one label per excerpt:
   - Decision
   - Not Decision
   - Unclear
6. Ask reviewers to add comments only when uncertain.
7. Collect copied results manually.

## Import Process

Use the existing reliability execution structure:

- reviewer_submission_tracker_v1.md
- reviewer_results_import_v1.md
- disagreement_register_v1.md
- reliability_evidence_summary_v1.md

Preserve raw reviewer responses exactly.

Flag:

- missing reviewer IDs
- missing classifications
- duplicate excerpt entries
- malformed labels

## Agreement Analysis Process

After data exists:

1. Calculate simple pairwise agreement.
2. Calculate exact three-reviewer agreement if 3 reviewers participate.
3. Count Not Decision usage.
4. Compare Not Decision usage against Round 1.
5. Identify disagreement excerpts.
6. Catalog remaining boundary cases.

Do not calculate advanced statistics unless methodology is approved first.

## Claims Allowed After Round 2

Allowed:

- observed reviewer label distribution
- simple agreement counts
- whether Not Decision became usable
- boundary cases remaining

Not allowed:

- production reliability claim
- extraction accuracy claim
- validated definition claim
- automatic extraction readiness claim

## Gate Before Decision Memory Expansion

Do not expand Decision Memory until Round 2 shows reviewers can use Not Decision and Unclear consistently enough to separate evidence from decisions.

