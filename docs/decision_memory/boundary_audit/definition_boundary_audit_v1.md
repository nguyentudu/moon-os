# Definition Boundary Audit v1

## Purpose

Assess whether the current Decision Definition may be too broad.

## Current Definition Signal

Decision Definition v1 defines a decision as a source-backed choice that changed or constrained Moon OS direction.

Required elements:

- choice made
- alternatives exist
- rationale exists
- consequence exists

## Definition Weakness Suspected

YES, but not proven.

Evidence:

- Reviewers classified many status, metric, mapping, taxonomy, and question excerpts as Decision.
- No reviewer used Not Decision.
- Comments often asked for rationale or intent rather than rejecting the excerpt as Not Decision.

Hypothesis:

The phrase "changed or constrained Moon OS direction" may be broad enough that reviewers treat any architecture-related statement as a decision.

## Counter-Evidence

- The formal definition already requires rationale and consequence.
- reviewer_protocol_v1.md clearly lists facts, metrics, deployment status, review result, task instruction, UI label, source path, and observation as Not Decision.
- This suggests the problem may be more about UI/instruction delivery and excerpt ambiguity than the definition alone.

## Boundary

Do not rewrite the Decision Definition based only on this audit.

Use the audit to design Reliability Round 2.

