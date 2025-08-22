---
sidebar_position: 3
sidebar_label: Web Protocols
---

# Web Protocols <!-- omit in toc -->

- [JSON-RPC](#json-rpc)
  - [JSON-RPC to HTTP Status Code Mapping](#json-rpc-to-http-status-code-mapping)
- [REST](#rest)
- [WebSockets](#websockets)
- [Comet \& Cosmos](#comet--cosmos)

## JSON-RPC

Grove API supports all blockchains that use the [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification).

Give it a shot using `curl`:

```bash
curl https://xrplevm.rpc.grove.city/v1/$GROVE_PORTAL_APP_ID \
 -X POST \
 -H 'Authorization: $GROVE_PORTAL_API_KEY' \
 -H 'Content-Type: application/json' \
 -d '{ "method": "eth_blockNumber", "params": [], "id": 1, "jsonrpc": "2.0" }'
```

### JSON-RPC to HTTP Status Code Mapping

With the implementation of [PATH](https://path.grove.city/learn/qos/http_status_code), Grove has implemented an opinionated implementation of HTTP Status codes on JSON-RPC.

<details>
<summary>JSON-RPC to HTTP Status Code Mapping</summary>

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

</details>

## REST

Grove API is able to support any RESTful API configuration.

Services that utilize a RESTful API will be provided in accordance with their individual specifications.

```yaml
curl https://xrplevm.rpc.grove.city/v1/$GROVE_PORTAL_APP_ID \
 -X POST \
 -H 'Authorization: $GROVE_PORTAL_API_KEY' \
 -H 'Content-Type: application/json' \
 -d '{ "method": "eth_blockNumber", "params": [], "id": 1, "jsonrpc": "2.0" }'
```

## WebSockets

Grove supports WebSocket subscription for a subset of its services.

Give it a shot using `wscat`:

```bash
wscat -c wss://xrplevm.rpc.grove.city/v1/$GROVE_PORTAL_APP_ID -H "Authorization: $GROVE_PORTAL_API_KEY"
```

And subscribing like so:

> {"jsonrpc":"2.0", "id": 1, "method": "eth_subscribe", "params": ["newHeads"]}

## Comet & Cosmos
