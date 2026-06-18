# Canonical Decision Examples v1

## Purpose

Identify strong Decision examples from the existing validation set.

No new excerpts are created.

## Selection Criteria

Strong Decision examples should show:

- a selected path
- a boundary or rejected alternative
- rationale or governance reason
- consequence for Moon behavior

## Examples

| Excerpt ID | Source | Excerpt | Rationale |
| --- | --- | --- | --- |
| EV-005 | docs/graph/continuity_graph_schema_v1.md | "No evidence -> No graph link. No source -> No continuity object." | This defines a system rule that constrains graph creation and rejects unsupported continuity objects. |
| EV-006 | docs/metrics/metrics_governance_v1.md | "Metrics inform. Metrics do not decide." | This chooses a governance boundary for Metrics and prevents metrics from replacing reasoning. |
| EV-007 | docs/reasoning/continuity_director_charter_v1.md | "The Continuity Director does not create memories. The Continuity Director does not create facts. The Continuity Director does not make decisions." | This defines authority limits and rejects fact creation or user decision-making by the Director. |
| EV-009 | docs/reasoning/trust/trust_qa_charter_v1.md | "Trust QA may block surfacing even when awareness relevance is high." | This chooses trust precedence over relevance and affects whether items may surface. |
| EV-013 | docs/runtime_demo/runtime_demonstration_overview_v1.md | "No real data is used yet because the demo is meant to show reasoning shape without ingestion risk." | This selects synthetic demonstration over real data and gives the trust/risk rationale. |
| EV-015 | docs/evaluation/human/HUMAN_EVALUATION_REPORT_V1.md | "If status is NOT_RUN, verdict must be NO_CLAIM." | This defines a claim boundary and prevents fabricated evaluation conclusions. |
| EV-020 | docs/decision_memory/time_to_context_evidence/evidence_source_notes_v1.md | "Do not claim independent reviewers unless known." | This constrains what Moon may claim from evidence and rejects unsupported independence claims. |
| EV-021 | docs/decision_memory/time_to_context_results/benchmark_limitations_v1.md | "Claim only early TTC signal." | This limits interpretation of benchmark results because evidence is not strong enough for market proof. |

## Training Note

Decision does not mean "important text."

Decision means the excerpt itself selects or constrains a path.

