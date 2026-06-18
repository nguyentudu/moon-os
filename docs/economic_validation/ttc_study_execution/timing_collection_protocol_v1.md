# Timing Collection Protocol v1

## Purpose

Define how TTC Study timing is collected.

## Timing Events

For each question:

- start_time: set when the question is displayed
- end_time: set when participant submits the answer
- elapsed_seconds: end_time - start_time

## Required Fields

- participant_id
- mode
- question
- answer
- start_time
- end_time
- elapsed_seconds

## Timing Boundary

Timing is raw evidence.

It is not interpreted in the UI.

Do not calculate time savings until raw data is imported and answer quality can be reviewed.

