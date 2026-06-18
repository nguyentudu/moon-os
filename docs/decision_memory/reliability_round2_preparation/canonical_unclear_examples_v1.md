# Canonical Unclear Examples v1

## Purpose

Identify strong Unclear examples from the existing validation set.

No new excerpts are created.

## Selection Criteria

Use Unclear when an excerpt appears decision-like but lacks enough local evidence to decide.

Unclear is not the same as Not Decision.

- Not Decision: clearly only a metric/status/observation/question/taxonomy.
- Unclear: could be a decision, but required elements are missing.

## Examples

| Excerpt ID | Source | Excerpt | Rationale |
| --- | --- | --- | --- |
| EV-029 | docs/decision_memory/coverage/decision_inventory_v1.md | "C-030 Deploy TTC Lab publicly." | This names a possible decision but provides no rationale, alternatives, or consequence in the excerpt. |
| EV-030 | docs/decision_memory/coverage/decision_record_backlog_v1.md | "Priority 1: Create a dedicated decision record for TTC Lab measurement UI." | This is a future extraction backlog item. It may point to a decision, but does not itself provide the original rationale. |
| EV-037 | docs/decision_memory/DECISION_MEMORY_MVP_REVIEW.md | "Verdict: PASS" | PASS confirms a gate but does not explain what choice was made or why. |
| EV-033 | apps/moon_ttc_lab/README.md | "No backend. No automatic submission." | This can be a decision boundary, but without local rationale it may be unclear to reviewers whether it is a design decision or implementation status. |

## Training Note

Use Unclear when the excerpt is decision-shaped but incomplete.

Use Not Decision when the excerpt clearly is not a decision.

