# Awareness Metrics v1

## Purpose

Awareness Metrics define how Moon OS may measure continuity health, continuity risk, continuity momentum, and continuity relevance.

Metrics are indicators, not conclusions.

Metrics may inform future reasoning, but they may not replace reasoning.

Metrics must never bypass:

- [Personal Continuity Manifest](../../PERSONAL_CONTINUITY_MANIFEST.md)
- [Trust Governance](../../TRUST_GOVERNANCE.md)
- [Attention Constitution](../../ATTENTION_CONSTITUTION.md)

## Architecture Position

LAW

- Personal Continuity Manifest
- Trust Governance
- Attention Constitution

KNOWLEDGE

- [Continuity Knowledge Base](../knowledge/knowledge_base_index.md)

GRAPH

- [Continuity Graph](../graph/continuity_graph_schema_v1.md)

METRICS

- Awareness Metrics

## Non-Implementation Boundary

This layer defines measurement concepts only.

It does not define formulas, scoring engines, dashboards, notifications, agents, reminders, user interfaces, storage, ranking algorithms, recommendation engines, or LLM reasoning logic.

## Core Metric Domains

- [Project Metrics](project_metrics.md)
- [Goal Metrics](goal_metrics.md)
- [Commitment Metrics](commitment_metrics.md)
- [Relationship Metrics](relationship_metrics.md)
- [Decision Metrics](decision_metrics.md)
- [Learning Metrics](learning_metrics.md)
- [Attention Metrics](attention_metrics.md)
- [Trust Metrics](trust_metrics.md)

## Metric Metadata Standard

Every metric candidate must define:

- Purpose
- What it measures
- Why it matters
- Related entities
- Related graph objects
- Related laws
- Potential signals
- Potential risks
- Human interpretation
- Not implementation

## Use

Future reasoning layers may consume these metrics as explainable indicators.

Future Today layers may use these metrics to explain why something was surfaced, not to force surfacing.

## Governance

Metrics are governed by [Metrics Governance v1](metrics_governance_v1.md).
