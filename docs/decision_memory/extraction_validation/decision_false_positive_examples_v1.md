# Decision False Positive Examples v1

## Purpose

Document cases where Moon might mistakenly extract a decision from non-decision material.

## Example 1: Deployment Status

Excerpt:

"Runtime page opens: yes."

Why it is not a decision:

It confirms deployment status. It does not explain why deployment was chosen or what alternatives were rejected.

False positive risk:

Decision Memory would fill with operational checkmarks.

## Example 2: Metric Result

Excerpt:

"Memory average time: 99.4 seconds."

Why it is not a decision:

It is a measurement. The decision would be what Moon is allowed to claim because of the measurement.

False positive risk:

Moon could confuse evidence with rationale.

## Example 3: Review Verdict Alone

Excerpt:

"Verdict: PASS."

Why it is not automatically a decision:

The verdict confirms a gate. Without the gate rationale, it does not identify a choice.

False positive risk:

Decision records become summaries of review outcomes instead of historical reasoning.

## Example 4: Candidate Backlog Item

Excerpt:

"Priority 1: Create a dedicated decision record for TTC Lab measurement UI."

Why it is unclear, not decision:

It identifies a future extraction need. It does not itself prove the original decision rationale.

False positive risk:

Backlog items could become decision records before source validation.

## Example 5: UI Copy

Excerpt:

"Would you want to see this in the morning?"

Why it is not a decision:

It is a reviewer question. It may support evaluation design, but it does not itself record the design decision.

False positive risk:

Questionnaire wording becomes mistaken for product rationale.

