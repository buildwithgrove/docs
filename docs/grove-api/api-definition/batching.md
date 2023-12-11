---
sidebar_position: 6
sidebar_label: Batching
---

# Batching

At Grove API, we wholeheartedly support batching requests. However, in strict adherence to the [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification#batch), we handle these requests as distinct individual requests. Batching requests are processed as a group of concurrent tasks, and the results may be returned in any order.
