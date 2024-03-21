---
sidebar_position: 6
sidebar_label: Batching
---

# Batching

At Grove API, we wholeheartedly support batching requests in adherence to the [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification#batch). Our enhanced batching process ensures superior performance and reliability by providing individual Quality of Service (QoS) for each request within a batch. Additionally, we've updated our relay count policy to reflect the individual attention each request receives.

Grove Batching Process:

1. **Initial Reception**: Batches are received and processed for unpacking.
2. **Unpacking**: The batch is unpacked to individual requests, allowing for tailored processing.
3. **QoS Processing**: Each request undergoes independent QoS processing, ensuring it receives the optimal handling.
4. **Repacking**: After processing, the requests are repackaged into their original batch format.
5. **Batch Delivery**: The processed batch is then delivered back to the customer as a cohesive unit.