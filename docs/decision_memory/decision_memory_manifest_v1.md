# Decision Memory Manifest v1

## Purpose

Decision Memory exists to help Moon answer:

"Why does this system exist this way?"

The goal is Time To Context reduction: a future reader should recover the reason behind core Moon OS choices faster than by manually reading the whole repository.

## Scope

This layer records architectural, constitutional, product-boundary, and validation decisions made inside the Moon OS repository.

It does not implement a query engine, agent, chat app, ingestion pipeline, or database.

## First Dataset

The first dataset is the Moon OS repository itself.

Initial decision domains:

- Manifest decisions
- Trust decisions
- Attention decisions
- Today Surface decisions
- Runtime demo decisions
- Why no ingestion yet
- Why no agent yet
- Why Today prototype exists

## Operating Principles

1. Every decision must cite evidence.
2. Every decision must expose alternatives considered.
3. Every decision must state current validity.
4. Every decision must link to related docs, reviews, deployments, or incidents where available.
5. A decision record is not a recommendation engine.
6. A decision record may become stale and must be marked accordingly.

## Non-Goals

Decision Memory does not:

- create new constitutional authority
- replace source documents
- infer undocumented intent
- store private user data
- ingest email, calendar, chat, or external systems
- build supply chain, healthcare, or logistics extensions

## Time To Context Hypothesis

If Moon can answer benchmark questions using decision records and evidence links, then future contributors can understand the system faster and with less ambiguity.

The first benchmark measures answerability, not speed results.
