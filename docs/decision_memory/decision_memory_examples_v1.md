# Decision Memory Examples v1

## Purpose

Provide 10 initial Decision Memory records using the Moon OS repository as the first dataset.

These records are examples for future Time To Context testing.

## Decision Records

### DM-001: Constitutional Core Before UI

id: DM-001

title: Build Constitutional Core before UI

date: 2026-06-11

owner: Moon OS

decision: Moon OS defined law, knowledge, graph, metrics, and reasoning layers before building the Today experience surface.

reason: Moon's purpose depends on evidence, trust, attention, and continuity governance. A UI without those constraints would risk surfacing unsourced or intrusive awareness.

alternatives considered:

- Start with a Today dashboard.
- Start with a chat assistant.
- Start with reminders or notifications.

evidence links:

- ../../PERSONAL_CONTINUITY_MANIFEST.md
- ../../TRUST_GOVERNANCE.md
- ../../ATTENTION_CONSTITUTION.md
- ../knowledge/knowledge_base_index.md
- ../graph/continuity_graph_schema_v1.md
- ../metrics/awareness_metrics_v1.md
- ../reasoning/continuity_director_charter_v1.md

outcome: Moon established constitutional constraints before user-facing presentation.

current validity: valid

related docs:

- ../reasoning/reasoning_governance_v1.md
- ../today/moon_today_surface_contract_v1.md

related incidents/reviews/deployments:

- ../reasoning/CONTINUITY_DIRECTOR_REVIEW.md
- ../today/TODAY_SURFACE_REVIEW.md

status: active

### DM-002: Delay Real Data Ingestion

id: DM-002

title: Delay real data ingestion until trust and validation are proven

date: 2026-06-12

owner: Moon OS

decision: Moon OS does not ingest real email, calendar, chat, or external personal data during the MVP foundation.

reason: Trust Governance requires consent before recall and higher justification for sensitive material. Real ingestion before validation would increase trust risk.

alternatives considered:

- Connect calendar and email immediately.
- Build a memory retrieval engine first.
- Collect reviewer data through the prototype.

evidence links:

- ../../TRUST_GOVERNANCE.md
- ../reasoning/trust/trust_qa_charter_v1.md
- ../validation/audit/CONSTITUTIONAL_AUDIT_REVIEW.md
- ../runtime_demo/runtime_demonstration_overview_v1.md

outcome: Moon uses synthetic canonical scenarios and static prototypes for review.

current validity: valid

related docs:

- ../validation/canonical_scenarios_index.md
- ../evaluation/human/campaign/HUMAN_REVIEW_CAMPAIGN_REVIEW.md

related incidents/reviews/deployments:

- ../deployment/MOON_RUNTIME_DEMONSTRATION_DEPLOY_REVIEW.md
- ../deployment/MOON_TODAY_PROTOTYPE_DEPLOY_REVIEW.md

status: active

### DM-003: Create Trust QA

id: DM-003

title: Add Trust QA as a separate reasoning authority

date: 2026-06-11

owner: Moon OS

decision: Moon OS created Trust QA to evaluate consent, boundaries, sensitivity, and trust risk after Awareness QA.

reason: A continuity item can be relevant and still unsafe to surface. Trust needs its own review layer so relevance cannot bypass consent.

alternatives considered:

- Let Continuity Director decide trust.
- Let Awareness QA decide trust.
- Rely only on confidence scores.

evidence links:

- ../../TRUST_GOVERNANCE.md
- ../reasoning/trust/trust_qa_charter_v1.md
- ../reasoning/trust/consent_boundary_model.md
- ../reasoning/trust/trust_decision_model.md

outcome: Trust became an explicit gate before Task Writer and Today.

current validity: valid

related docs:

- ../reasoning/trust/trust_principles_v1.md
- ../reasoning/trust/trust_governance_alignment.md

related incidents/reviews/deployments:

- ../reasoning/trust/TRUST_QA_REVIEW.md
- ../validation/audit/expected_actual_independence_check.md

status: active

### DM-004: Today Is Not A Dashboard

id: DM-004

title: Keep Today as a calm awareness surface instead of a dashboard

date: 2026-06-12

owner: Moon Today

decision: Moon Today presents a small number of awareness items instead of dashboards, feeds, engagement mechanics, or dense productivity views.

reason: Attention Constitution prioritizes awareness over engagement and requires every surfaced item to justify its attention cost.

alternatives considered:

- Build a dashboard.
- Build a productivity feed.
- Add engagement mechanics.
- Show every valid signal.

evidence links:

- ../../ATTENTION_CONSTITUTION.md
- ../today/today_surface_constraints.md
- ../today/today_visibility_rules.md
- ../../apps/moon_today_experience_prototype/today_experience_overview.md

outcome: The prototype uses a quiet morning awareness experience with 5 artifacts grouped by human-facing states.

current validity: valid

related docs:

- ../evaluation/human/campaign/experience_redesign_notes_v1.md
- ../today/moon_today_surface_contract_v1.md

related incidents/reviews/deployments:

- ../deployment/MOON_TODAY_EXPERIENCE_REDESIGN_REVIEW.md

status: active

### DM-005: Runtime Demo Uses Synthetic Scenarios

id: DM-005

title: Use synthetic canonical scenarios for Runtime Demo

date: 2026-06-12

owner: Moon Runtime Demo

decision: The Runtime Demo uses synthetic canonical scenario states instead of real user data.

reason: The demo needs to show Evidence -> Graph -> Metrics -> Reasoning -> Trust -> Today without introducing real ingestion or consent risk.

alternatives considered:

- Use real personal data.
- Use connected calendar or email examples.
- Hide reasoning and show only final artifacts.

evidence links:

- ../runtime_demo/runtime_demonstration_overview_v1.md
- ../runtime_demo/runtime_demo_case_mapping_v1.md
- ../validation/canonical_scenarios_index.md
- ../../apps/moon_today_experience_prototype/runtime.html

outcome: Reviewers can inspect glass box reasoning while labels clearly state that data is synthetic.

current validity: valid

related docs:

- ../runtime_demo/runtime_demo_review_v1.md

related incidents/reviews/deployments:

- ../deployment/MOON_RUNTIME_DEMONSTRATION_DEPLOY_REVIEW.md

status: active

### DM-006: No Agent Yet

id: DM-006

title: Defer agent behavior until constitutional outputs are validated

date: 2026-06-11

owner: Moon OS

decision: Moon OS does not build an agent, action system, reminder engine, or autonomous executor in the MVP foundation.

reason: Moon must first prove that it can evaluate continuity significance, attention worthiness, trust safety, and presentation clarity without acting on behalf of the user.

alternatives considered:

- Build an assistant first.
- Build an autonomous reminder agent.
- Let Moon contact users or perform actions.

evidence links:

- ../reasoning/continuity_director_charter_v1.md
- ../reasoning/reasoning_governance_v1.md
- ../reasoning/task_writer/moon_task_writer_charter_v1.md
- ../../TRUST_GOVERNANCE.md

outcome: Moon produces awareness artifacts and reviewable prototypes, not autonomous actions.

current validity: valid

related docs:

- ../validation/validation_principles_v1.md
- ../validation/constitutional_failure_modes.md

related incidents/reviews/deployments:

- ../validation/execution/BENCHMARK_EXECUTION_REVIEW.md
- ../validation/audit/CONSTITUTIONAL_AUDIT_REVIEW.md

status: active

### DM-007: Build Today Prototype For Human Review

id: DM-007

title: Build Moon Today prototype as a human-reviewable surface

date: 2026-06-12

owner: Moon Today

decision: Moon OS created a static public Moon Today prototype so humans can review clarity, trust, relevance, and usefulness.

reason: Constitutional correctness is insufficient unless the awareness output feels understandable and safe to humans.

alternatives considered:

- Stop at documentation.
- Build a production app.
- Collect real user data immediately.

evidence links:

- ../../apps/moon_today_experience_prototype/EXPERIENCE_PROTOTYPE_REVIEW.md
- ../evaluation/human/human_evaluation_plan_v1.md
- ../evaluation/human/campaign/human_review_campaign_plan_v1.md
- ../evaluation/human/campaign/HUMAN_REVIEW_CAMPAIGN_REVIEW.md

outcome: A public static prototype exists for 3-5 human reviewers.

current validity: valid

related docs:

- ../../apps/moon_today_experience_prototype/reviewer_instructions.md
- ../evaluation/human/reviewer_link_pack_v1.md

related incidents/reviews/deployments:

- ../deployment/MOON_TODAY_PROTOTYPE_DEPLOY_REVIEW.md
- ../deployment/MOON_TODAY_EXPERIENCE_REDESIGN_REVIEW.md

status: active

### DM-008: Require Human Evidence Before Human Evaluation Claims

id: DM-008

title: Do not claim human evaluation results without real reviewers

date: 2026-06-11

owner: Moon Evaluation

decision: Human evaluation reports must use NO_CLAIM when real reviewer data does not exist.

reason: Moon cannot invent human feedback and still preserve trust. Evaluation status must distinguish readiness from evidence.

alternatives considered:

- Use AI-generated reviewer opinions.
- Infer likely feedback from prototype quality.
- Mark PASS based on internal review only.

evidence links:

- ../evaluation/human/HUMAN_EVALUATION_REPORT_V1.md
- ../evaluation/human/execution/human_evaluation_results_v1.md
- ../evaluation/human/campaign/review_session_log_v1.md
- ../evaluation/human/campaign/HUMAN_REVIEW_CAMPAIGN_REVIEW.md

outcome: Campaign materials are ready, but human result verdict remains NO_CLAIM until real responses are collected.

current validity: valid

related docs:

- ../evaluation/human/reviewer_instructions_v1.md
- ../evaluation/human/campaign/reviewer_response_template_v1.md

related incidents/reviews/deployments:

- ../deployment/MOON_TODAY_EXPERIENCE_REDESIGN_REVIEW.md

status: active

### DM-009: Moon Is Not Just A GPT Wrapper

id: DM-009

title: Define Moon as constitutional continuity infrastructure, not a generic GPT wrapper

date: 2026-06-11

owner: Moon OS

decision: Moon OS is organized around laws, knowledge domains, graph ontology, metrics, reasoning authorities, QA gates, and presentation contracts before runtime surfaces.

reason: Moon's differentiator is governed continuity reasoning with evidence, consent, attention control, and explainability. A generic prompt wrapper would not provide durable source-backed continuity.

alternatives considered:

- Build a single chatbot prompt.
- Store memories without graph or evidence rules.
- Use model judgment without constitutional gates.

evidence links:

- ../../PERSONAL_CONTINUITY_MANIFEST.md
- ../knowledge/knowledge_base_index.md
- ../graph/continuity_graph_schema_v1.md
- ../metrics/metrics_governance_v1.md
- ../reasoning/continuity_director_charter_v1.md
- ../reasoning/awareness/awareness_qa_charter_v1.md
- ../reasoning/trust/trust_qa_charter_v1.md

outcome: Moon has layered architecture that can be reviewed independently of a specific model.

current validity: valid

related docs:

- ../../README.md
- ../validation/report/constitutional_validation_report_v1.md

related incidents/reviews/deployments:

- ../validation/validated/VALIDATED_INTELLIGENCE_REVIEW.md

status: active

### DM-010: Add Decision Memory As Next Context Layer

id: DM-010

title: Add Decision Memory to reduce Time To Context

date: 2026-06-14

owner: Moon OS

decision: Moon OS adds a Decision Memory foundation to record why major system choices were made.

reason: As Moon's constitutional, validation, prototype, and runtime layers grow, future contributors need fast source-backed answers about why the system exists this way.

alternatives considered:

- Rely on README and docs manually.
- Wait until a chat interface exists.
- Start with a supply chain domain extension.
- Add domain extensions before recording system decisions.

evidence links:

- decision_memory_manifest_v1.md
- decision_entity_schema_v1.md
- decision_graph_schema_v1.md
- time_to_context_benchmark_plan_v1.md

outcome: Moon can begin Time To Context testing against source-backed decision records before expanding into any domain-specific extension.

current validity: valid

related docs:

- decision_query_spec_v1.md
- decision_ingestion_spec_v1.md

related incidents/reviews/deployments:

- DECISION_MEMORY_MVP_REVIEW.md

status: active
