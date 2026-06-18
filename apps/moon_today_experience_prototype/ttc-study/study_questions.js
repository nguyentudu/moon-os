const TTC_QUESTIONS = [
  {
    id: "TTC-001",
    question: "Why does Moon have a Boundary Audit?",
    manual_instruction: "Use the Moon repo to find why Boundary Audit exists and what it was meant to protect.",
    decision_memory_context: {
      retrieved_records: ["Boundary Audit Review v1", "Reliability Results Review v1"],
      reason: "Boundary Audit was created after Round 1 reviewers never selected Not Decision.",
      evidence_links: [
        "docs/decision_memory/boundary_audit/DECISION_BOUNDARY_AUDIT_REVIEW.md",
        "docs/decision_memory/reliability_results/RELIABILITY_RESULTS_REVIEW.md"
      ],
      current_validity: "valid",
      unknowns: "Round 3 has not been run yet."
    }
  },
  {
    id: "TTC-002",
    question: "Why was Decision Expansion blocked?",
    manual_instruction: "Use the Moon repo to explain why Decision Memory expansion is not yet allowed.",
    decision_memory_context: {
      retrieved_records: ["Boundary Validation Review v1", "Round 2 Results Review v1"],
      reason: "Decision Expansion remains blocked because boundary discrimination improved but stayed unstable.",
      evidence_links: [
        "docs/decision_memory/boundary_validation_review/BOUNDARY_VALIDATION_REVIEW.md",
        "docs/decision_memory/reliability_round2_results/ROUND2_RESULTS_REVIEW.md"
      ],
      current_validity: "valid",
      unknowns: "A future Round 3 may change the recommendation."
    }
  },
  {
    id: "TTC-003",
    question: "Why was Reliability Round 2 executed?",
    manual_instruction: "Use the Moon repo to explain what Round 2 was trying to test after Round 1.",
    decision_memory_context: {
      retrieved_records: ["Decision Boundary Audit v1", "Round 2 Preparation Review v1"],
      reason: "Round 2 was prepared because Round 1 showed Not Decision was unusable in practice.",
      evidence_links: [
        "docs/decision_memory/boundary_audit/DECISION_BOUNDARY_AUDIT_REVIEW.md",
        "docs/decision_memory/reliability_round2_preparation/ROUND2_PREPARATION_REVIEW.md"
      ],
      current_validity: "valid",
      unknowns: "Round 2 evidence suggests improvement, not final validation."
    }
  },
  {
    id: "TTC-004",
    question: "Why was Economic Instrumentation created?",
    manual_instruction: "Use the Moon repo to explain why Moon added economic measurement before claiming value.",
    decision_memory_context: {
      retrieved_records: ["Economic Instrumentation Review v1"],
      reason: "Economic Instrumentation defines how value will be measured without claiming value prematurely.",
      evidence_links: [
        "docs/economic_validation/ECONOMIC_INSTRUMENTATION_REVIEW.md",
        "docs/economic_validation/economic_claims_policy_v1.md"
      ],
      current_validity: "valid",
      unknowns: "No real economic study has been completed yet."
    }
  },
  {
    id: "TTC-005",
    question: "Why is Team Continuity not yet validated?",
    manual_instruction: "Use the Moon repo to identify what evidence is still missing before Team Continuity can be validated.",
    decision_memory_context: {
      retrieved_records: ["Economic Instrumentation v1", "Boundary Validation Review v1"],
      reason: "Team Continuity is not validated because economic studies and reliable boundary decisions are still pending.",
      evidence_links: [
        "docs/economic_validation/economic_study_design_v1.md",
        "docs/decision_memory/boundary_validation_review/BOUNDARY_VALIDATION_REVIEW.md"
      ],
      current_validity: "valid",
      unknowns: "Contributor, onboarding, and real team trial evidence do not exist yet."
    }
  },
  {
    id: "TTC-006",
    question: "Why should Moon run Round 3 before revising the Decision Definition?",
    manual_instruction: "Use the Moon repo to explain why the current recommendation is Round 3 rather than immediate definition revision.",
    decision_memory_context: {
      retrieved_records: ["Boundary Validation Review v1", "Definition Decision Recommendation v1"],
      reason: "Round 2 showed usable but insufficient boundary evidence, so Moon should test improved excerpt quality before rewriting the definition.",
      evidence_links: [
        "docs/decision_memory/boundary_validation_review/BOUNDARY_VALIDATION_REVIEW.md",
        "docs/decision_memory/reliability_round2_results/definition_decision_recommendation_v1.md"
      ],
      current_validity: "valid",
      unknowns: "Round 3 results have not been collected."
    }
  }
];
