const TTC_QUESTIONS = [
  {
    id: "TTC-001",
    question: {
      en: "Why does Moon have a Boundary Audit?",
      vi: "Vì sao Moon có Boundary Audit?"
    },
    manual_instruction: {
      en: "Use the Moon repo to find why Boundary Audit exists and what it was meant to protect.",
      vi: "Hãy dùng repo Moon để tìm vì sao Boundary Audit tồn tại và nó nhằm bảo vệ điều gì."
    },
    decision_memory_context: {
      retrieved_records: ["Boundary Audit Review v1", "Reliability Results Review v1"],
      reason: {
        en: "Boundary Audit was created after Round 1 reviewers never selected Not Decision.",
        vi: "Boundary Audit được tạo sau khi reviewer ở Round 1 không bao giờ chọn Not Decision."
      },
      evidence_links: [
        "docs/decision_memory/boundary_audit/DECISION_BOUNDARY_AUDIT_REVIEW.md",
        "docs/decision_memory/reliability_results/RELIABILITY_RESULTS_REVIEW.md"
      ],
      current_validity: {
        en: "valid",
        vi: "còn hiệu lực"
      },
      unknowns: {
        en: "Round 3 has not been run yet.",
        vi: "Round 3 chưa được chạy."
      }
    }
  },
  {
    id: "TTC-002",
    question: {
      en: "Why was Decision Expansion blocked?",
      vi: "Vì sao Decision Expansion bị chặn?"
    },
    manual_instruction: {
      en: "Use the Moon repo to explain why Decision Memory expansion is not yet allowed.",
      vi: "Hãy dùng repo Moon để giải thích vì sao việc mở rộng Decision Memory chưa được cho phép."
    },
    decision_memory_context: {
      retrieved_records: ["Boundary Validation Review v1", "Round 2 Results Review v1"],
      reason: {
        en: "Decision Expansion remains blocked because boundary discrimination improved but stayed unstable.",
        vi: "Decision Expansion vẫn bị chặn vì khả năng phân biệt boundary đã cải thiện nhưng chưa ổn định."
      },
      evidence_links: [
        "docs/decision_memory/boundary_validation_review/BOUNDARY_VALIDATION_REVIEW.md",
        "docs/decision_memory/reliability_round2_results/ROUND2_RESULTS_REVIEW.md"
      ],
      current_validity: {
        en: "valid",
        vi: "còn hiệu lực"
      },
      unknowns: {
        en: "A future Round 3 may change the recommendation.",
        vi: "Round 3 trong tương lai có thể thay đổi khuyến nghị."
      }
    }
  },
  {
    id: "TTC-003",
    question: {
      en: "Why was Reliability Round 2 executed?",
      vi: "Vì sao Reliability Round 2 được thực hiện?"
    },
    manual_instruction: {
      en: "Use the Moon repo to explain what Round 2 was trying to test after Round 1.",
      vi: "Hãy dùng repo Moon để giải thích Round 2 muốn kiểm tra điều gì sau Round 1."
    },
    decision_memory_context: {
      retrieved_records: ["Decision Boundary Audit v1", "Round 2 Preparation Review v1"],
      reason: {
        en: "Round 2 was prepared because Round 1 showed Not Decision was unusable in practice.",
        vi: "Round 2 được chuẩn bị vì Round 1 cho thấy Not Decision chưa dùng được trong thực tế."
      },
      evidence_links: [
        "docs/decision_memory/boundary_audit/DECISION_BOUNDARY_AUDIT_REVIEW.md",
        "docs/decision_memory/reliability_round2_preparation/ROUND2_PREPARATION_REVIEW.md"
      ],
      current_validity: {
        en: "valid",
        vi: "còn hiệu lực"
      },
      unknowns: {
        en: "Round 2 evidence suggests improvement, not final validation.",
        vi: "Bằng chứng Round 2 cho thấy có cải thiện, không phải xác thực cuối cùng."
      }
    }
  },
  {
    id: "TTC-004",
    question: {
      en: "Why was Economic Instrumentation created?",
      vi: "Vì sao Economic Instrumentation được tạo?"
    },
    manual_instruction: {
      en: "Use the Moon repo to explain why Moon added economic measurement before claiming value.",
      vi: "Hãy dùng repo Moon để giải thích vì sao Moon thêm đo lường kinh tế trước khi tuyên bố giá trị."
    },
    decision_memory_context: {
      retrieved_records: ["Economic Instrumentation Review v1"],
      reason: {
        en: "Economic Instrumentation defines how value will be measured without claiming value prematurely.",
        vi: "Economic Instrumentation định nghĩa cách đo giá trị mà không tuyên bố giá trị quá sớm."
      },
      evidence_links: [
        "docs/economic_validation/ECONOMIC_INSTRUMENTATION_REVIEW.md",
        "docs/economic_validation/economic_claims_policy_v1.md"
      ],
      current_validity: {
        en: "valid",
        vi: "còn hiệu lực"
      },
      unknowns: {
        en: "No real economic study has been completed yet.",
        vi: "Chưa có study kinh tế thực tế nào được hoàn tất."
      }
    }
  },
  {
    id: "TTC-005",
    question: {
      en: "Why is Team Continuity not yet validated?",
      vi: "Vì sao Team Continuity chưa được xác thực?"
    },
    manual_instruction: {
      en: "Use the Moon repo to identify what evidence is still missing before Team Continuity can be validated.",
      vi: "Hãy dùng repo Moon để xác định bằng chứng nào còn thiếu trước khi Team Continuity có thể được xác thực."
    },
    decision_memory_context: {
      retrieved_records: ["Economic Instrumentation v1", "Boundary Validation Review v1"],
      reason: {
        en: "Team Continuity is not validated because economic studies and reliable boundary decisions are still pending.",
        vi: "Team Continuity chưa được xác thực vì study kinh tế và quyết định boundary đáng tin cậy vẫn còn đang chờ."
      },
      evidence_links: [
        "docs/economic_validation/economic_study_design_v1.md",
        "docs/decision_memory/boundary_validation_review/BOUNDARY_VALIDATION_REVIEW.md"
      ],
      current_validity: {
        en: "valid",
        vi: "còn hiệu lực"
      },
      unknowns: {
        en: "Contributor, onboarding, and real team trial evidence do not exist yet.",
        vi: "Chưa có bằng chứng từ contributor, onboarding, hoặc real team trial."
      }
    }
  },
  {
    id: "TTC-006",
    question: {
      en: "Why should Moon run Round 3 before revising the Decision Definition?",
      vi: "Vì sao Moon nên chạy Round 3 trước khi sửa Decision Definition?"
    },
    manual_instruction: {
      en: "Use the Moon repo to explain why the current recommendation is Round 3 rather than immediate definition revision.",
      vi: "Hãy dùng repo Moon để giải thích vì sao khuyến nghị hiện tại là chạy Round 3 thay vì sửa định nghĩa ngay."
    },
    decision_memory_context: {
      retrieved_records: ["Boundary Validation Review v1", "Definition Decision Recommendation v1"],
      reason: {
        en: "Round 2 showed usable but insufficient boundary evidence, so Moon should test improved excerpt quality before rewriting the definition.",
        vi: "Round 2 cho thấy boundary evidence có thể dùng được nhưng chưa đủ, nên Moon cần kiểm tra excerpt chất lượng hơn trước khi viết lại định nghĩa."
      },
      evidence_links: [
        "docs/decision_memory/boundary_validation_review/BOUNDARY_VALIDATION_REVIEW.md",
        "docs/decision_memory/reliability_round2_results/definition_decision_recommendation_v1.md"
      ],
      current_validity: {
        en: "valid",
        vi: "còn hiệu lực"
      },
      unknowns: {
        en: "Round 3 results have not been collected.",
        vi: "Kết quả Round 3 chưa được thu thập."
      }
    }
  }
];
