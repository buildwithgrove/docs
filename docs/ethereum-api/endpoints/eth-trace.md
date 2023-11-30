---
sidebar_position: 3
sidebar_label: eth-trace
---

# Ethereum Trace

Eth-Trace is a specialized toolset for interacting with the Ethereum blockchain, enabling developers to trace and explore transaction history. With Eth-Trace's supported methods, developers can delve into the Ethereum network's historical data, querying transactional details, account balances, and more.

## Supported APIs

| API Spec  | Description                                               | Documentation                       |
| --------- | --------------------------------------------------------- | ----------------------------------- |
| Core API  | The core set of methods supported by all ethereum clients | [view spec](../specs/core-api.mdx)  |
| Trace API | ...                                                       | [view spec](../specs/trace-api.mdx) |
| Debug API | ...                                                       | [view spec](../specs/debug-api.mdx) |

## Supported Methods

| Methods                         | Description                                                                             | Documentation    |
| ------------------------------- | --------------------------------------------------------------------------------------- | ---------------- |
| `trace_block`                   | Returns traces created at given block (Parity)                                          | [view method](#) |
| `trace_call`                    | Executes the given call and returns a number of possible traces for it                  | [view method](#) |
| `trace_get`                     | Returns trace at given position (Parity)                                                | [view method](#) |
| `trace_raw_transaction`         | Traces a call to eth_sendRawTransaction without making the call, returning the traces   | [view method](#) |
| `trace_replayBlockTransactions` | Replays all transactions in a block returning the requested traces for each transaction | [view method](#) |
| `trace_replayTransaction`       | Replays a transaction, returning the traces                                             | [view method](#) |
| `trace_transaction`             | Returns all traces of given transaction (Parity)                                        | [view method](#) |
