# Task Writer Output Model v1

## Purpose

The Task Writer Output Model defines the required sections for explainable awareness artifacts.

This model defines artifact structure only. It does not define UI, rendering, notifications, reminders, or actions.

## Required Sections

### Title

A clear human-readable name for the awareness artifact.

### Summary

A short explanation of the awareness item.

### Why It Matters

The continuity significance inherited from approved reasoning.

### Why Now

The timing reason inherited from Awareness QA.

### Evidence

The source-linked evidence supporting the artifact.

### Confidence

The confidence level or confidence caveat associated with the artifact.

### Suggested Reflection

A non-directive prompt that may help the user think.

### Optional Actions

Possible user-owned next steps. These are not instructions, reminders, or decisions.

### Trust Notes

Any caveats required by Trust QA, especially for ALLOW_WITH_CAUTION.

### Uncertainty Notes

Known ambiguity, missing context, or reasons for caution.

## Advancement Rule

If an artifact cannot explain what, why, and why now, it must not advance.

## Non-Implementation Boundary

This model does not define templates, UI components, database fields, notification behavior, reminder logic, or task execution.
