# Disagreement Reason Analysis v1

## Purpose

Identify the most likely causes of Round 2 boundary disagreement.

## Cause Matrix

| Cause | Evidence | Affected Excerpts | Strength |
| --- | --- | --- | --- |
| missing rationale | reviewer comments repeatedly ask "Tại sao" | EV-027, EV-033, EV-040, EV-045 | strong |
| missing consequence | claim/status excerpts do not explain what changes if accepted | EV-033, EV-040, EV-045 | strong |
| missing context | short excerpts are detached from their source rationale | EV-024, EV-040, EV-045 | strong |
| metric vs decision confusion | metrics received Not Decision, Unclear, and Decision labels | EV-026, EV-027 | strong |
| status vs decision confusion | review/deployment status can look like evidence of an intentional gate | EV-024 | moderate |
| Decision Definition ambiguity | reviewers still disagree when an excerpt is a constraint but not self-explanatory | EV-033, EV-040, EV-045 | moderate |
| missing alternative | excerpts rarely show the path not chosen | EV-033, EV-040, EV-045 | moderate |

## Main Disagreement Causes

The strongest causes are:

1. Missing rationale.
2. Missing consequence.
3. Missing context.
4. Metric/status text being too short to classify without training.

## Evidence vs Interpretation

Evidence:

- Reviewer comments include repeated "Tại sao".
- EV-027 received all three labels.
- EV-040 and EV-045 were expected Decision but often labeled Not Decision.
- EV-026 was expected Not Decision but still received one Decision label.

Interpretation:

Reviewers are not only confused by the definition. They are often missing enough excerpt-local context to apply the definition.

