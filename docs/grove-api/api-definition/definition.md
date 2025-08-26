---
sidebar_position: 1
sidebar_label: Definition
---

# Grove API Definition

## Web Protocols

### JSON-RPC
The Grove API supports all blockchains that use the [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification).

<details>
<summary>Example request using `curl`:</summary>

```bash
curl https://xrplevm.rpc.grove.city/v1/$GROVE_PORTAL_APP_ID \
 -X POST \
 -H 'Authorization: $GROVE_PORTAL_API_KEY' \
 -H 'Content-Type: application/json' \
 -d '{ "method": "eth_blockNumber", "params": [], "id": 1, "jsonrpc": "2.0" }'
```

</details>

#### JSON-RPC to HTTP Status Code Mapping

Grove takes an opinionated approach to mapping JSON-RPC errors to HTTP status codes. For more information, see [PATH](https://path.grove.city/learn/qos/http_status_code) documentation or the table below.

It's common practice in JSON-RPC-over-HTTP implementations to map:

- `Client errors` (e.g., -32600 `Invalid Request`) to `4xx` HTTP statuses
- `Server errors` (e.g., -32603 `Internal error` or -32000 "Server error") to `5xx` HTTP statuses

PATH follows this practice and maps JSON-RPC errors to HTTP status codes as follows:

| JSON-RPC Error Code      | Common Meaning                   | HTTP Status Code          |
| ------------------------ | -------------------------------- | ------------------------- |
| **-32700**               | Parse error                      | **400** Bad Request       |
| **-32600**               | Invalid request                  | **400** Bad Request       |
| **-32601**               | Method not found                 | **404** Not Found         |
| **-32602**               | Invalid params                   | **400** Bad Request       |
| **-32603**               | Internal error                   | **500** Server Error      |
| **-32098**               | Timeout                          | **504** Gateway Timeout   |
| **-32097**               | Rate limited                     | **429** Too Many Requests |
| **-32000…-32099**        | Server error range               | **500** Server Error      |
| **> 0**                  | Application errors (client-side) | **400** Bad Request       |
| **< 0** (other negative) | Application errors (server-side) | **500** Server Error      |

#### JSON-RPC Batch Requests

At Grove, we wholeheartedly support batching requests in adherence to the [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification#batch). Our enhanced batching process ensures superior performance and reliability by providing individual Quality of Service (QoS) for each request within a batch. Additionally, we've updated our relay count policy to reflect the individual attention each request receives.

Grove Batching Process:

1. **Initial Reception**: Batches are received and processed for unpacking.
2. **Unpacking**: The batch is unpacked to individual requests, allowing for tailored processing.
3. **QoS Processing**: Each request undergoes independent QoS processing, ensuring it receives the optimal handling.
4. **Repacking**: After processing, the requests are repackaged into their original batch format.
5. **Batch Delivery**: The processed batch is then delivered back to the customer as a cohesive unit.

### REST APIs
Grove API is able to support any RESTful API configuration.

Services that utilize a RESTful API will be provided in accordance with their individual specifications.

#### Cosmos & CometBFT

The Grove API has support for the [CometBFT](https://docs.cometbft.com/main/spec/rpc/) and [Cosmos SDK](https://docs.cosmos.network/main/learn/advanced/grpc_rest) APIs.

<details>
<summary>Example RESTful `CometBFT` request to `v1/status`:</summary>

```bash
curl -X GET https://xrplevm.rpc.grove.city/v1/status \
  -H "Authorization: $GROVE_PORTAL_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Portal-Application-Id: $GROVE_PORTAL_APP_ID"
```

</details>

<details>
<summary>Example RESTful `Cosmos SDK` request to `v1/cosmos/bank/v1beta1/supply`:</summary>

```bash
curl -X GET https://xrplevm.rpc.grove.city/v1/cosmos/bank/v1beta1/supply \
  -H "Authorization: $GROVE_PORTAL_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Portal-Application-Id: $GROVE_PORTAL_APP_ID"
```

</details>

### Websockets
Grove supports WebSocket subscription for a subset of its services.

<details>
<summary>Example request using `wscat`:</summary>

```bash
wscat -c wss://xrplevm.rpc.grove.city/v1/$GROVE_PORTAL_APP_ID -H "Authorization: $GROVE_PORTAL_API_KEY"
```

And subscribe to `newHeads` like so:

```json
{ "jsonrpc": "2.0", "id": 1, "method": "eth_subscribe", "params": ["newHeads"] }
```

</details>

### gRPC
Coming soon!

## Services
