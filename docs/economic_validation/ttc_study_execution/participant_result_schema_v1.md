# Participant Result Schema v1

## Purpose

Define the raw participant result schema for TTC Study v1.

## Run-Level Fields

- study
- study_status_at_collection
- participant_id
- mode
- run_started_at
- run_completed_at
- answers

## Answer-Level Fields

- participant_id
- mode
- question_id
- question
- answer
- start_time
- end_time
- elapsed_seconds
- created_at

## Storage Boundary

Raw JSON is copied or downloaded by the participant and imported manually.

No backend storage exists.

## No Scoring Fields

The schema intentionally excludes:

- score
- winner
- quality rating
- economic value
- improvement claim

