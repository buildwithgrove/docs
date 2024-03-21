---
sidebar_position: 6
sidebar_label: Batching
---

# Batching

At Grove API, we wholeheartedly support batching requests in strict adherence to the [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification#batch). Our enhanced batching process ensures superior performance and reliability by providing individual Quality of Service (QoS) for each request within a batch. Additionally, we've updated our relay count policy to reflect the individual attention each request receives.

Grove Batching Process:

1. **Initial Reception**: Upon receipt, batches are treated as single units for initial processing.
2. **Unpacking**: The batch is unpacked to separate individual requests, allowing for tailored processing.
3. **QoS Processing**: Each request undergoes independent QoS processing, ensuring it receives the optimal handling.
4. **Relay Counting**: Importantly, each request relay inside the batch is counted as an individual relay. This means the batch relay count directly corresponds to the number of relays packaged within the batch.
5. **Repacking**: After processing, the requests are repackaged into their original batch format.
6. **Batch Delivery**: The processed batch is then delivered back to the customer as a cohesive unit.