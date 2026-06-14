const TTC_QUESTIONS = [
  {
    id: "q1",
    question: "Why did Moon build Constitutional Core before UI?",
    answer: {
      records: ["DM-001", "DM-009"],
      reason: "DM-001 records the sequencing choice to define law, knowledge, graph, metrics, and reasoning before Today UI. DM-009 explains why Moon is constitutional continuity infrastructure rather than a generic prompt wrapper.",
      evidence: ["PERSONAL_CONTINUITY_MANIFEST.md", "TRUST_GOVERNANCE.md", "ATTENTION_CONSTITUTION.md", "docs/knowledge/knowledge_base_index.md", "docs/graph/continuity_graph_schema_v1.md", "docs/metrics/awareness_metrics_v1.md", "docs/reasoning/continuity_director_charter_v1.md"],
      validity: "DM-001: valid; DM-009: valid",
      confidence: "high",
      unknowns: "No measured Time To Context test has yet shown how much faster this answer is than reading the full repo manually."
    }
  },
  {
    id: "q2",
    question: "Why did Moon delay data ingestion?",
    answer: {
      records: ["DM-002", "DM-005"],
      reason: "DM-002 records the decision to delay real email, calendar, chat, and external personal data ingestion. DM-005 records why runtime examples are synthetic while ingestion remains deferred.",
      evidence: ["TRUST_GOVERNANCE.md", "docs/reasoning/trust/trust_qa_charter_v1.md", "docs/validation/audit/CONSTITUTIONAL_AUDIT_REVIEW.md", "docs/runtime_demo/runtime_demonstration_overview_v1.md"],
      validity: "DM-002: valid; DM-005: valid",
      confidence: "high",
      unknowns: "The exact conditions for enabling real ingestion have not been specified as an implementation roadmap."
    }
  },
  {
    id: "q3",
    question: "Why did Moon create Trust QA?",
    answer: {
      records: ["DM-003"],
      reason: "DM-003 records Trust QA as a separate authority because relevance and safety are different gates.",
      evidence: ["TRUST_GOVERNANCE.md", "docs/reasoning/trust/trust_qa_charter_v1.md", "docs/reasoning/trust/consent_boundary_model.md", "docs/reasoning/trust/trust_decision_model.md"],
      validity: "DM-003: valid",
      confidence: "high",
      unknowns: "Future real-user data may reveal additional trust boundary cases that require expanding Trust QA."
    }
  },
  {
    id: "q4",
    question: "Why is Today not a dashboard?",
    answer: {
      records: ["DM-004"],
      reason: "DM-004 records the decision to make Today a calm awareness surface rather than a dashboard, feed, or productivity interface.",
      evidence: ["ATTENTION_CONSTITUTION.md", "docs/today/today_surface_constraints.md", "docs/today/today_visibility_rules.md", "apps/moon_today_experience_prototype/today_experience_overview.md", "docs/evaluation/human/campaign/experience_redesign_notes_v1.md"],
      validity: "DM-004: valid",
      confidence: "high",
      unknowns: "Human reviewers have not yet provided real feedback confirming whether the surface feels calm and useful."
    }
  },
  {
    id: "q5",
    question: "Why is Runtime Demo synthetic?",
    answer: {
      records: ["DM-005", "DM-002"],
      reason: "DM-005 directly records the synthetic runtime decision. DM-002 explains the broader no-real-ingestion boundary.",
      evidence: ["docs/runtime_demo/runtime_demonstration_overview_v1.md", "docs/runtime_demo/runtime_demo_case_mapping_v1.md", "docs/runtime_demo/runtime_demo_review_v1.md", "docs/validation/canonical_scenarios_index.md", "apps/moon_today_experience_prototype/runtime.html"],
      validity: "DM-005: valid; DM-002: valid",
      confidence: "high",
      unknowns: "It is not yet known whether reviewers will find synthetic cases sufficient to judge trust and believability."
    }
  },
  {
    id: "q6",
    question: "Why is Time To Context the next KPI?",
    answer: {
      records: ["DM-010"],
      reason: "DM-010 records Decision Memory as the next context layer and frames Time To Context as the test for whether decisions make the system easier to understand.",
      evidence: ["docs/decision_memory/decision_memory_manifest_v1.md", "docs/decision_memory/decision_entity_schema_v1.md", "docs/decision_memory/decision_graph_schema_v1.md", "docs/decision_memory/time_to_context_benchmark_plan_v1.md"],
      validity: "DM-010: valid",
      confidence: "high",
      unknowns: "No timed human comparison has been run yet."
    }
  },
  {
    id: "q7",
    question: "Why not start with supply chain?",
    answer: {
      records: ["DM-010", "DM-001", "DM-009"],
      reason: "DM-010 explicitly lists starting with a supply chain domain extension as an alternative not chosen. DM-001 and DM-009 explain why Moon first needed constitutional continuity foundations.",
      evidence: ["docs/decision_memory/decision_memory_manifest_v1.md", "docs/decision_memory/time_to_context_benchmark_plan_v1.md", "PERSONAL_CONTINUITY_MANIFEST.md", "docs/knowledge/knowledge_base_index.md", "docs/graph/continuity_graph_schema_v1.md"],
      validity: "DM-010: valid; DM-001: valid; DM-009: valid",
      confidence: "moderate",
      unknowns: "There is no detailed domain expansion plan yet, so the exact timing for supply chain or other extensions remains undefined."
    }
  },
  {
    id: "q8",
    question: "Why is Moon not just a GPT wrapper?",
    answer: {
      records: ["DM-009", "DM-001"],
      reason: "DM-009 directly records Moon's identity as constitutional continuity infrastructure. DM-001 supports the architectural sequencing behind that identity.",
      evidence: ["PERSONAL_CONTINUITY_MANIFEST.md", "docs/knowledge/knowledge_base_index.md", "docs/graph/continuity_graph_schema_v1.md", "docs/metrics/metrics_governance_v1.md", "docs/reasoning/continuity_director_charter_v1.md", "docs/reasoning/awareness/awareness_qa_charter_v1.md", "docs/reasoning/trust/trust_qa_charter_v1.md", "README.md"],
      validity: "DM-009: valid; DM-001: valid",
      confidence: "high",
      unknowns: "No model-specific implementation has been selected or tested in this layer."
    }
  },
  {
    id: "q9",
    question: "Why does Moon need Decision Memory?",
    answer: {
      records: ["DM-010"],
      reason: "DM-010 records the decision to add Decision Memory as a source-backed context layer.",
      evidence: ["docs/decision_memory/decision_memory_manifest_v1.md", "docs/decision_memory/decision_query_spec_v1.md", "docs/decision_memory/decision_ingestion_spec_v1.md", "docs/decision_memory/time_to_context_benchmark_plan_v1.md", "docs/decision_memory/DECISION_MEMORY_MVP_REVIEW.md"],
      validity: "DM-010: valid",
      confidence: "high",
      unknowns: "Decision Memory has not yet been tested with human readers against manual repo reading."
    }
  },
  {
    id: "q10",
    question: "Why is human evidence required?",
    answer: {
      records: ["DM-008", "DM-007"],
      reason: "DM-008 records that human evaluation cannot claim results without real reviewers. DM-007 explains why the Today prototype exists for human review.",
      evidence: ["docs/evaluation/human/HUMAN_EVALUATION_REPORT_V1.md", "docs/evaluation/human/execution/human_evaluation_results_v1.md", "docs/evaluation/human/campaign/review_session_log_v1.md", "docs/evaluation/human/campaign/HUMAN_REVIEW_CAMPAIGN_REVIEW.md", "docs/evaluation/human/human_evaluation_plan_v1.md"],
      validity: "DM-008: valid; DM-007: valid",
      confidence: "high",
      unknowns: "No real reviewer responses have been collected in the decision memory records."
    }
  }
];
