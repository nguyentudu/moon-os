# Decision Identification Rules v1

## Purpose

Provide repeatable rules for identifying real decisions in Moon OS sources.

## Positive Rules

Classify an excerpt as decision when it answers at least three of these questions, including "what was chosen" and "why":

- What was chosen?
- What was not chosen?
- Why was it chosen?
- What did the choice enable?
- What did the choice prevent?
- Which constitutional law, trust rule, attention rule, or validation rule constrained it?
- Which future layer depends on it?

## Required Decision Test

Before extracting a Decision Memory record, answer:

1. What is the choice?
2. What alternatives were available?
3. What rationale is present in the source?
4. What consequence follows from the choice?
5. What source evidence supports this?

If any answer is missing, classify as unclear or not decision.

## Strong Decision Signals

- "Do NOT build..."
- "PASS only if..."
- "Verdict..."
- "Hard Gates..."
- "Must align with..."
- "The purpose is NOT..."
- "The purpose is to..."
- "Trust overrides..."
- "No evidence..."

These are signals only.

They do not automatically prove a decision.

## Weak Signals

- file created
- metric listed
- artifact deployed
- score calculated
- status reported
- UI section added
- review completed

Weak signals require surrounding rationale before extraction.

## Negative Rules

Do not classify as decision when:

- the excerpt only states a result
- the excerpt only names a file
- the excerpt only reports a count
- the excerpt only repeats a law
- the excerpt only describes a UI element
- the excerpt only records deployment status
- the excerpt is a benchmark measurement with no explicit choice

## Boundary Rule

An excerpt may be decision evidence without being the decision itself.

Example:

"No database" may support the decision to avoid storage implementation, but alone it is not enough to create a complete decision record.

