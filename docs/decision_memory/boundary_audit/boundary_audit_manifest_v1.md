# Boundary Audit Manifest v1

## Purpose

Audit why no reviewer selected Not Decision in the Moon Reliability Lab results.

## Scope

Inputs audited:

- docs/decision_memory/reliability_results/
- docs/decision_memory/extraction_validation/
- apps/moon_reliability_lab/
- apps/moon_today_experience_prototype/reliability/

## Audit Question

Why did reviewers avoid the Not Decision label?

Possible causes considered:

1. UI / instruction bias
2. weak Not Decision excerpts
3. overly broad Decision Definition
4. reviewer misunderstanding

## Current Evidence

- expected Not Decision excerpts: 15
- reviewer labels on those excerpts: 45
- labels submitted as Decision: 36
- labels submitted as Unclear: 9
- labels submitted as Not Decision: 0

## Audit Boundary

This audit does not modify the Decision Definition, Reliability Lab UI, excerpts, or decision records.

Hypotheses are marked as hypotheses.

