# Round 2 Label Usage Analysis v1

## Purpose

Count Decision / Not Decision / Unclear usage in Round 2.

## Overall Label Usage

- total expected entries: 150
- valid classifications: 149
- missing classifications: 1
- Decision: 122
- Not Decision: 16
- Unclear: 11

## Reviewer-Level Label Usage

| Reviewer | Decision | Not Decision | Unclear | Missing |
| --- | --- | --- | --- | --- |
| R-004 | 40 | 4 | 6 | 0 |
| R-005 | 41 | 7 | 2 | 0 |
| R-006 | 41 | 5 | 3 | 1 |


## Expected Not Decision Behavior

Expected Not Decision excerpts: 15.

| Excerpt ID | R-004 | R-005 | R-006 | Not Decision Count |
| --- | --- | --- | --- | --- |
| EV-023 | decision | decision | decision | 0 |
| EV-024 | not decision | not decision | unclear | 2 |
| EV-025 | decision | decision | not decision | 1 |
| EV-026 | not decision | not decision | decision | 2 |
| EV-027 | unclear | not decision | decision | 1 |
| EV-028 | unclear | decision | unclear | 0 |
| EV-031 | unclear | unclear | decision | 0 |
| EV-032 | decision | decision | decision | 0 |
| EV-034 | unclear | unclear | unclear | 0 |
| EV-038 | decision | decision | decision | 0 |
| EV-042 | unclear | decision | decision | 0 |
| EV-043 | decision | decision | decision | 0 |
| EV-047 | decision | decision | decision | 0 |
| EV-049 | decision | decision | decision | 0 |
| EV-050 | decision | decision | decision | 0 |


## Evidence-Supported Observation

Not Decision appeared in Round 2. This is an improvement over Round 1 where Not Decision usage was zero.

However, Not Decision was also used on expected Decision excerpts: EV-007, EV-014, EV-015, EV-016, EV-033, EV-040, EV-045. This means boundary discrimination improved but remains unstable.
