# Decision Extraction Validation Set v1

## Purpose

Provide 50 candidate Moon OS excerpts for validating decision extraction.

This is a validation set, not a new Decision Memory record set.

## Classification Labels

- decision
- not decision
- unclear

## Validation Set

| ID | Source | Candidate Excerpt | Expected Classification |
| --- | --- | --- | --- |
| EV-001 | PERSONAL_CONTINUITY_MANIFEST.md | "Every surfaced insight must have evidence. No evidence: DO NOT INFER." | decision |
| EV-002 | TRUST_GOVERNANCE.md | "Consent precedes recall." | decision |
| EV-003 | ATTENTION_CONSTITUTION.md | "Everything that appears must justify its claim on attention." | decision |
| EV-004 | docs/knowledge/KNOWLEDGE_BASE_FOUNDATION_REVIEW.md | "Build only the knowledge structure. No implementation." | decision |
| EV-005 | docs/graph/continuity_graph_schema_v1.md | "No evidence -> No graph link. No source -> No continuity object." | decision |
| EV-006 | docs/metrics/metrics_governance_v1.md | "Metrics inform. Metrics do not decide." | decision |
| EV-007 | docs/reasoning/continuity_director_charter_v1.md | "The Continuity Director does not create memories. The Continuity Director does not create facts. The Continuity Director does not make decisions." | decision |
| EV-008 | docs/reasoning/awareness/awareness_qa_charter_v1.md | "Awareness QA exists to determine whether a continuity concern deserves human attention." | decision |
| EV-009 | docs/reasoning/trust/trust_qa_charter_v1.md | "Trust QA may block surfacing even when awareness relevance is high." | decision |
| EV-010 | docs/reasoning/task_writer/moon_task_writer_charter_v1.md | "The Task Writer translates approved awareness into a user-facing artifact. It does not create new reasoning." | decision |
| EV-011 | docs/today/moon_today_surface_contract_v1.md | "Today may display only items that passed prior constitutional review." | decision |
| EV-012 | apps/moon_today_runtime/runtime_overview.md | "The runtime accepts an Approved Awareness Artifact and produces a Rendered Today Item." | decision |
| EV-013 | docs/runtime_demo/runtime_demonstration_overview_v1.md | "No real data is used yet because the demo is meant to show reasoning shape without ingestion risk." | decision |
| EV-014 | apps/moon_today_experience_prototype/today_experience_overview.md | "Moon Today is a morning awareness surface, not a productivity dashboard." | decision |
| EV-015 | docs/evaluation/human/HUMAN_EVALUATION_REPORT_V1.md | "If status is NOT_RUN, verdict must be NO_CLAIM." | decision |
| EV-016 | docs/evaluation/human/execution/human_evaluation_results_v1.md | "No reviewer data -> NO_CLAIM." | decision |
| EV-017 | docs/decision_memory/decision_memory_manifest_v1.md | "Decision Memory exists to reduce Time To Context." | decision |
| EV-018 | docs/decision_memory/time_to_context_benchmark_plan_v1.md | "Compare manual repo reading vs Decision Memory answers." | decision |
| EV-019 | docs/decision_memory/query_proof/decision_query_answer_set_v1.md | "Answers must cite decision records." | decision |
| EV-020 | docs/decision_memory/time_to_context_evidence/evidence_source_notes_v1.md | "Do not claim independent reviewers unless known." | decision |
| EV-021 | docs/decision_memory/time_to_context_results/benchmark_limitations_v1.md | "Claim only early TTC signal." | decision |
| EV-022 | docs/decision_memory/coverage/decision_coverage_map_v1.md | "No coverage percentage is calculated." | decision |
| EV-023 | docs/deployment/MOON_TODAY_PROTOTYPE_DEPLOY_REVIEW.md | "Public prototype URL opens the prototype." | not decision |
| EV-024 | docs/deployment/MOON_RUNTIME_DEMONSTRATION_DEPLOY_REVIEW.md | "5 demo cases visible: yes." | not decision |
| EV-025 | docs/deployment/MOON_TTC_LAB_DEPLOY_REVIEW.md | "Manual Mode works: yes." | not decision |
| EV-026 | docs/decision_memory/time_to_context_results/time_reduction_analysis_v1.md | "Memory average time: 99.4 seconds." | not decision |
| EV-027 | docs/decision_memory/time_to_context_results/confidence_analysis_v1.md | "Memory average confidence: 2.9." | not decision |
| EV-028 | docs/validation/execution/benchmark_score_summary_v1.md | "Total scenarios: 20." | not decision |
| EV-029 | docs/decision_memory/coverage/decision_inventory_v1.md | "C-030 Deploy TTC Lab publicly." | unclear |
| EV-030 | docs/decision_memory/coverage/decision_record_backlog_v1.md | "Priority 1: Create a dedicated decision record for TTC Lab measurement UI." | unclear |
| EV-031 | docs/evaluation/human/campaign/review_session_log_v1.md | "response received: no" | not decision |
| EV-032 | apps/moon_today_experience_prototype/feedback.html | "Would you want to see this in the morning?" | not decision |
| EV-033 | apps/moon_ttc_lab/README.md | "No backend. No automatic submission." | decision |
| EV-034 | apps/moon_ttc_lab/ttc_questions.js | "Why did Moon delay data ingestion?" | not decision |
| EV-035 | docs/decision_memory/decision_entity_schema_v1.md | "No decision may be recorded without source evidence." | decision |
| EV-036 | docs/decision_memory/decision_query_spec_v1.md | "Decision Memory answers must expose evidence links." | decision |
| EV-037 | docs/decision_memory/DECISION_MEMORY_MVP_REVIEW.md | "Verdict: PASS" | unclear |
| EV-038 | docs/runtime_demo/runtime_demo_case_mapping_v1.md | "Forgotten Commitment -> Graph State -> Metrics -> Authority Outputs -> Today Artifact." | not decision |
| EV-039 | docs/validation/audit/expected_actual_independence_check.md | "If Trust QA outcome is asserted without consent analysis: NOT_CREDIBLE." | decision |
| EV-040 | docs/validation/audit/CONSTITUTIONAL_AUDIT_REVIEW.md | "Today MVP blocked if benchmark credibility is not sufficient." | decision |
| EV-041 | docs/evaluation/human/campaign/experience_redesign_notes_v1.md | "Shift from artifact gallery to personal continuity experience." | decision |
| EV-042 | docs/runtime_demo/runtime_demo_review_v1.md | "synthetic labels visible: yes" | not decision |
| EV-043 | docs/decision_memory/time_to_context_evidence/imported_results_table_v1.md | "duplicate_or_malformed: yes" | not decision |
| EV-044 | docs/decision_memory/time_to_context_evidence/TTC_RAW_EVIDENCE_IMPORT_REVIEW.md | "Treat pasted logs as raw evidence." | decision |
| EV-045 | docs/decision_memory/time_to_context_results/economic_value_signal_v1.md | "This is not market proof." | decision |
| EV-046 | docs/decision_memory/coverage/DECISION_MEMORY_COVERAGE_REVIEW.md | "Coverage is scoped to known candidate decisions from cataloged sources." | decision |
| EV-047 | docs/knowledge/project_lifecycle.md | "Hidden abandonment is a risk." | not decision |
| EV-048 | docs/graph/graph_confidence_model.md | "Every derived object must expose confidence." | decision |
| EV-049 | docs/metrics/project_metrics.md | "Momentum Score is a future metric candidate." | not decision |
| EV-050 | docs/reasoning/continuity_concern_classification.md | "Goal Drift is a concern type." | not decision |

## Expected Label Counts

These are validation-set labels, not accuracy results.

- decision: 32
- not decision: 15
- unclear: 3

## Guardrail

This validation set does not prove extraction accuracy.

Accuracy requires an extraction attempt and scoring pass against this set.
