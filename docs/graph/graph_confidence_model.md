# Graph Confidence Model v1

## Purpose

The confidence model defines how uncertainty is represented in the Continuity Graph.

It supports explicit uncertainty and prevents Moon from presenting uncertain conclusions as facts.

This model is conceptual only. It does not define formulas, thresholds, scoring algorithms, or implementation logic.

## Confidence Levels

- confirmed: explicitly user-confirmed or directly established by strong source evidence.
- strong: well-supported by multiple or direct evidence links.
- moderate: reasonably supported by evidence but still open to revision.
- weak: lightly supported and should not be surfaced as a firm conclusion.
- uncertain: insufficiently supported for action or recall.

## Confidence Rules

Every derived object must expose confidence.

Confidence must never be hidden.

Relationships require confidence.

Lifecycle state changes require confidence.

Sensitive memories, relationship claims, health context, grief, trauma, and identity-sensitive events require higher confidence before surfacing.

If confidence is too low, silence is allowed.

## Confidence Use

Confidence can describe:

- entity existence
- relationship validity
- lifecycle state
- evidence interpretation
- insight strength
- relevance state

## Confidence Risks

- false certainty: weak evidence appears as fact.
- hidden uncertainty: confidence exists internally but is not exposed.
- overconfident inference: a relationship or state is derived from insufficient evidence.
- stale confidence: old confidence is not revised after new evidence.
- sensitivity mismatch: ordinary confidence standards are used for sensitive claims.
