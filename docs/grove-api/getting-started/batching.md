---
sidebar_position: 7
sidebar_label: Batching
---

# Batching

The Grove API supports batching requests, but per the [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification#batch) we treat them like individual requests. Batching requests will be processed as a set of concurrent tasks and can be returned in any order.

