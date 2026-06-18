# Canonical Not Decision Examples v1

## Purpose

Identify strong Not Decision examples from the existing validation set.

No new excerpts are created.

## Selection Criteria

Strong Not Decision examples are only:

- a metric
- a count
- a status note
- a deployment check
- a data flag
- a question
- an observation
- a taxonomy item

without choice + rationale + consequence.

## Examples

| Excerpt ID | Source | Excerpt | Rationale |
| --- | --- | --- | --- |
| EV-023 | docs/deployment/MOON_TODAY_PROTOTYPE_DEPLOY_REVIEW.md | "Public prototype URL opens the prototype." | This is a deployment verification status. It does not explain why the prototype was deployed. |
| EV-024 | docs/deployment/MOON_RUNTIME_DEMONSTRATION_DEPLOY_REVIEW.md | "5 demo cases visible: yes." | This confirms a check result. It is not itself a selected path with rationale. |
| EV-025 | docs/deployment/MOON_TTC_LAB_DEPLOY_REVIEW.md | "Manual Mode works: yes." | This is a functionality check, not a decision. |
| EV-026 | docs/decision_memory/time_to_context_results/time_reduction_analysis_v1.md | "Memory average time: 99.4 seconds." | This is a metric value. A metric may support a decision later, but the metric itself is not a decision. |
| EV-027 | docs/decision_memory/time_to_context_results/confidence_analysis_v1.md | "Memory average confidence: 2.9." | This is a measured result. It lacks a choice, rationale, and consequence. |
| EV-028 | docs/validation/execution/benchmark_score_summary_v1.md | "Total scenarios: 20." | This is a count. Counts are evidence, not decisions. |
| EV-031 | docs/evaluation/human/campaign/review_session_log_v1.md | "response received: no" | This is a status note. It does not choose a path. |
| EV-043 | docs/decision_memory/time_to_context_evidence/imported_results_table_v1.md | "duplicate_or_malformed: yes" | This is a data quality flag. It can trigger analysis, but is not itself a decision. |
| EV-047 | docs/knowledge/project_lifecycle.md | "Hidden abandonment is a risk." | This is a risk observation. It lacks a selected path. |
| EV-050 | docs/reasoning/continuity_concern_classification.md | "Goal Drift is a concern type." | This is taxonomy. It names a category rather than selecting a path. |

## Training Note

If an excerpt is only evidence, status, measurement, or taxonomy, classify it as Not Decision.

Do not classify it as Decision just because it is useful or Moon-related.

