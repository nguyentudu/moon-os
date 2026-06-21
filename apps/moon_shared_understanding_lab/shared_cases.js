const SHARED_UNDERSTANDING_CASES = [
  {
    id: "SU-001",
    title: {
      en: "Decision Expansion Gate",
      vi: "Cổng mở Decision Expansion"
    },
    context: {
      en: "Boundary Validation completed. The Decision Definition survived testing. Decision Expansion remains blocked.",
      vi: "Boundary Validation đã hoàn tất. Decision Definition đã qua được kiểm tra. Decision Expansion vẫn đang bị chặn."
    },
    question: {
      en: "Should Decision Expansion be opened now? Why?",
      vi: "Có nên mở Decision Expansion ngay bây giờ không? Vì sao?"
    },
    required: {
      en: ["rationale", "evidence", "risks", "recommendation"],
      vi: ["rationale", "bằng chứng", "rủi ro", "khuyến nghị"]
    }
  },
  {
    id: "SU-002",
    title: {
      en: "Reliability Round 3 Design",
      vi: "Thiết kế Reliability Round 3"
    },
    context: {
      en: "Round 1 exposed a Not Decision boundary problem. Round 2 improved boundary discrimination but did not fully settle the definition question.",
      vi: "Round 1 làm lộ vấn đề boundary của Not Decision. Round 2 cải thiện khả năng phân biệt boundary nhưng chưa giải quyết dứt điểm câu hỏi về định nghĩa."
    },
    question: {
      en: "If you were Moon Architect, how would you design Reliability Round 3?",
      vi: "Nếu bạn là Moon Architect, bạn sẽ thiết kế Reliability Round 3 như thế nào?"
    },
    required: {
      en: ["purpose", "evidence requirements", "reviewer strategy", "success criteria"],
      vi: ["mục đích", "yêu cầu bằng chứng", "chiến lược reviewer", "tiêu chí thành công"]
    }
  },
  {
    id: "SU-003",
    title: {
      en: "Economic Validation Priority",
      vi: "Ưu tiên xác thực kinh tế"
    },
    context: {
      en: "TTC evidence shows an early speed signal. Blinded answer quality review shows an early quality signal. Shared Understanding is not confirmed.",
      vi: "Bằng chứng TTC cho thấy tín hiệu tốc độ ban đầu. Blinded answer quality review cho thấy tín hiệu chất lượng ban đầu. Shared Understanding chưa được xác nhận."
    },
    question: {
      en: "What should Moon validate next: Shared Understanding, Time To Contribution, Team Continuity, or Decision Expansion? Justify your choice.",
      vi: "Moon nên xác thực điều gì tiếp theo: Shared Understanding, Time To Contribution, Team Continuity, hay Decision Expansion? Hãy giải thích lựa chọn của bạn."
    },
    required: {
      en: ["selected priority", "rejected alternatives", "evidence", "risks"],
      vi: ["ưu tiên được chọn", "phương án bị loại", "bằng chứng", "rủi ro"]
    }
  },
  {
    id: "SU-004",
    title: {
      en: "Boundary Interpretation",
      vi: "Diễn giải boundary"
    },
    context: {
      en: "A new reliability round shows reviewers agree on clear Decision examples, but still disagree on cases where an excerpt includes intention without consequence.",
      vi: "Một reliability round mới cho thấy reviewers đồng ý ở các ví dụ Decision rõ ràng, nhưng vẫn bất đồng ở các đoạn có intention mà thiếu consequence."
    },
    question: {
      en: "What does this evidence imply? What should Moon do next?",
      vi: "Bằng chứng này hàm ý điều gì? Moon nên làm gì tiếp theo?"
    },
    required: {
      en: ["interpretation", "likely boundary issue", "risk if ignored", "next action"],
      vi: ["diễn giải", "vấn đề boundary có khả năng xảy ra", "rủi ro nếu bỏ qua", "hành động tiếp theo"]
    }
  }
];
