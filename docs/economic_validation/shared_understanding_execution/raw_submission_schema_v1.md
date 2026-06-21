# Raw Submission Schema v1

## Payload

```json
{
  "study": "moon_shared_understanding_study_v1",
  "study_status_at_collection": "RAW_CAPTURE_ONLY",
  "participant_id": "string",
  "language": "en | vi",
  "run_started_at": "ISO-8601 timestamp",
  "run_completed_at": "ISO-8601 timestamp",
  "answers": [
    {
      "participant_id": "string",
      "language": "en | vi",
      "case_id": "SU-001",
      "case_title": "string",
      "case_question": "string",
      "recommendation": "string",
      "rationale": "string",
      "evidence_used": "string",
      "risks_tradeoffs": "string",
      "uncertainty": "string",
      "confidence": "1-5",
      "start_time": "ISO-8601 timestamp",
      "end_time": "ISO-8601 timestamp",
      "elapsed_seconds": 0,
      "created_at": "ISO-8601 timestamp"
    }
  ]
}
```

## Storage Rules

- Preserve raw participant answers exactly.
- Do not rewrite answers.
- Do not score answers during collection.
- Do not infer claims from one submission.
- Preserve language metadata.
