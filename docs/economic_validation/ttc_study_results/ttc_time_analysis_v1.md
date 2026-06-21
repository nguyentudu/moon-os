# TTC Time Analysis v1

## Dataset

- Manual runs: 3 participants, 18 answers
- Decision Memory runs: 3 participants, 18 answers
- Language: Vietnamese
- Evidence source: chat-provided TTC logs

## Aggregate Time

| Metric | Manual | Decision Memory |
| --- | ---: | ---: |
| Total time, all answers | 12108.336 seconds | 2442.549 seconds |
| Total time, all answers | 201.81 minutes | 40.71 minutes |
| Average time per question | 672.685 seconds | 135.697 seconds |
| Average time per question | 11.21 minutes | 2.26 minutes |
| Median time per question | 711.168 seconds | 72.712 seconds |
| Median time per question | 11.85 minutes | 1.21 minutes |
| Average total run time | 4036.112 seconds | 814.183 seconds |
| Average total run time | 67.27 minutes | 13.57 minutes |
| Median total run time | 3948.917 seconds | 419.432 seconds |
| Median total run time | 65.82 minutes | 6.99 minutes |

## Early Reduction Signal

Including P-001, Decision Memory showed:

- average per-question time about 79.8% lower than manual
- median per-question time about 89.8% lower than manual

This is an early TTC signal only. It is not economic evidence.

## Per-Question Comparison

| Question | Manual avg seconds | Memory avg seconds | Manual median seconds | Memory median seconds |
| --- | ---: | ---: | ---: | ---: |
| TTC-001 | 438.803 | 261.683 | 405.550 | 105.680 |
| TTC-002 | 656.228 | 101.461 | 591.595 | 57.502 |
| TTC-003 | 526.636 | 121.737 | 513.417 | 56.448 |
| TTC-004 | 908.346 | 106.311 | 911.433 | 56.463 |
| TTC-005 | 730.271 | 113.103 | 716.444 | 62.543 |
| TTC-006 | 775.829 | 109.888 | 735.548 | 84.249 |

## Fast-Run Pattern

P-005 and P-006 were much faster than P-001:

| Metric | P-005/P-006 only |
| --- | ---: |
| Average time per question | 66.435 seconds |
| Median time per question | 59.199 seconds |
| Average total run time | 398.611 seconds |
| Average total run time | 6.64 minutes |

This suggests Decision Memory can support fast retrieval under some participant conditions, but it does not prove comprehension quality by itself.
