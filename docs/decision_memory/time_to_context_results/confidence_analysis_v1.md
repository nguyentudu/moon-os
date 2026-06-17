# Confidence Analysis v1

## Purpose

Analyze confidence patterns in Time To Context benchmark responses.

## Data Status

IMPORTED

## Source

chat-provided TTC logs

## Participant Confidence

Confidence values were imported for 30 primary Memory Mode entries and 30 primary Manual Mode entries.

## Confidence By Mode

| Mode | Average Confidence | Median Confidence | Min | Max |
| --- | ---: | ---: | ---: | ---: |
| Memory Mode | 2.9 | 3 | 1 | 5 |
| Manual Mode | 3.0 | 3 | 1 | 5 |

## Confidence By Question

| Question | Memory Confidence Avg | Manual Confidence Avg | Pattern |
| --- | ---: | ---: | --- |
| Q1 | 3 | 3 | Same |
| Q2 | 4 | 4 | Same |
| Q3 | 2 | 2 | Same, but Memory has duplicate malformed entries |
| Q4 | 3 | 5 | Manual higher |
| Q5 | 4 | 1 | Memory higher |
| Q6 | 2 | 3 | Manual higher |
| Q7 | 3 | 4 | Manual higher |
| Q8 | 2 | 1 | Memory higher |
| Q9 | 5 | 5 | Same |
| Q10 | 1 | 2 | Manual higher |

## Confidence Pattern Claim

EARLY_SIGNAL

Memory Mode was much faster, but confidence was not clearly higher overall.

Average confidence was similar:

- Memory: 2.9
- Manual: 3.0

## Interpretation

The current signal is primarily a time-to-context signal, not a confidence-improvement signal.

## Limitations

- Participant identity is unknown.
- Reviewer independence is unknown.
- Confidence may reflect question difficulty, not mode quality.
- Duplicate malformed Q3 entries included missing-confidence markers, but primary analysis uses numeric confidence from primary entries.
