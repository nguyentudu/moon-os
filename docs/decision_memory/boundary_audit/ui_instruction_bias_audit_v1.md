# UI Instruction Bias Audit v1

## Purpose

Inspect Reliability Lab UI and instructions for possible bias toward Decision.

## UI Evidence

Observed in apps/moon_reliability_lab/index.html and the served reliability copy:

- Header: Moon Reliability Lab / Decision Extraction Study
- Intro: You are helping Moon test whether its definition of Decision is clear.
- Instruction: Classify each excerpt. There are no right answers shown here.
- Buttons: Decision, Not Decision, Unclear
- Warning: Do not use AI assistance while classifying.

## Possible UI Bias

Hypothesis: YES, UI bias is suspected.

Evidence:

- The intro centers the word Decision, but does not define Not Decision on the page.
- The UI does not show examples of Not Decision.
- Decision is the first classification button.
- The task name Decision Extraction Study may prime reviewers to look for decisions.
- The UI does not remind reviewers that status, metrics, UI copy, observations, and counts are usually Not Decision.

## Instruction Bias

Hypothesis: YES, instruction bias is suspected.

Evidence:

- reviewer_protocol_v1.md defines Not Decision clearly, but the public UI intro does not include that definition.
- The UI states there are no right answers shown, but does not explain the distinction between related-to-a-decision and itself-a-decision.

## Boundary

This file does not recommend changing the UI immediately.

It identifies likely bias sources for a future Round 2.

