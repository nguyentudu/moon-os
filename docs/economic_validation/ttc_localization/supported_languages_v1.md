# Supported Languages v1

## Languages

Moon TTC Study v1 supports:

| Code | Language |
| --- | --- |
| `en` | English |
| `vi` | Tiếng Việt |

## Default Selection

The UI should select the browser language when it is supported.

If the browser language is not supported, the fallback language is:

`en`

## Participant Control

Participants may manually switch language before or during the study.

Switching language changes display text only. It does not change:

- question id
- study mode
- timing fields
- raw answer capture
- analysis plan
- scoring policy

## Stored Metadata

Raw evidence must include:

- `participant_language`

Participant answers must remain exactly as submitted.
