# Boundary Case Training Packet v1

## Purpose

Prepare reviewers for excerpts that generated disagreement or strong ambiguity in Round 1.

No new excerpts are created.

## Boundary Cases

| Excerpt ID | Expected Type | Round 1 Pattern | Why Classification Was Difficult | Missing Signal |
| --- | --- | --- | --- | --- |
| EV-026 | Not Decision | decision / unclear / unclear | It is a metric, but reviewers asked why the number exists. | choice and consequence |
| EV-027 | Not Decision | decision / decision / unclear | It is a confidence metric, but looks meaningful and decision-adjacent. | choice and rationale |
| EV-028 | Not Decision | decision / unclear / unclear | It is a benchmark count, but reviewers asked why. | chosen path |
| EV-029 | Unclear | unclear / unclear / unclear | It names a possible decision but gives no rationale. | rationale and consequence |
| EV-031 | Not Decision | unclear / decision / decision | It is a status note, but may look like evidence of an evaluation process. | choice |
| EV-033 | Decision | decision / decision / unclear | No backend/no automatic submission can be a design boundary, but the local excerpt lacks rationale. | rationale visibility |
| EV-042 | Not Decision | unclear / decision / decision | It is a review check, but mentions synthetic labels, which may sound like a design choice. | rationale and selected path |
| EV-043 | Not Decision | unclear / decision / decision | It is a data flag, but malformed data can imply a handling decision. | explicit action |
| EV-047 | Not Decision | unclear / decision / decision | It is a risk observation, but risks in Moon docs often lead to governance choices. | selected path |

## Training Guidance

When an excerpt is only a metric, flag, status, count, or observation, choose Not Decision.

When it names a possible choice but does not show rationale or consequence, choose Unclear.

When it explicitly selects or constrains a path and provides why it matters, choose Decision.

