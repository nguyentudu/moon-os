# Decision False Negative Examples v1

## Purpose

Document cases where Moon might fail to extract real decisions because they appear as constraints, gates, or negative scope.

## Example 1: Negative Scope as Decision

Excerpt:

"No real data is used yet because the demo is meant to show reasoning shape without ingestion risk."

Why it is a decision:

It chooses synthetic demonstration over real data, gives rationale, and avoids ingestion risk.

False negative risk:

Moon misses decisions expressed as restraint.

## Example 2: Governance Rule as Decision

Excerpt:

"Metrics inform. Metrics do not decide."

Why it is a decision:

It chooses a governance boundary for the Metrics layer and prevents metrics from replacing reasoning.

False negative risk:

Moon misses architecture decisions encoded as principles.

## Example 3: Trust Override

Excerpt:

"Trust QA may block surfacing even when awareness relevance is high."

Why it is a decision:

It chooses trust safety over relevance and defines authority precedence.

False negative risk:

Moon misses decisions about power and permission.

## Example 4: Claim Boundary

Excerpt:

"Claim only early TTC signal."

Why it is a decision:

It limits what Moon may claim from evidence because participant independence is unknown.

False negative risk:

Moon misses evidence-governance decisions.

## Example 5: No Backend Lab

Excerpt:

"No backend. No automatic submission."

Why it is a decision:

It chooses a measurement UI that avoids storage, accounts, and ingestion while still allowing human evidence collection.

False negative risk:

Moon misses implementation restraint as product governance.

