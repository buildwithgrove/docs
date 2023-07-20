# Ethereum Trace

Eth-Trace is a specialized toolset for interacting with the Ethereum blockchain, enabling developers to trace and explore transaction history. With Eth-Trace's Supported Methods, developers can delve into the Ethereum network's historical data, querying transactional details, account balances, and more.

| Methods | Description |
|---------|-------------|
| `trace_block` | Returns traces created at given block (OpenEthereum or Parity only) |
| `trace_call` | Executes the given call and returns a number of possible traces for it |
| `trace_filter` | Returns traces matching given filter |
| `trace_get` | Returns trace at given position (OpenEthereum or Parity only) |
| `trace_raw_transaction` | Traces a call to eth_sendRawTransaction without making the call, returning the traces |
| `trace_replayBlockTransactions` | Replays all transactions in a block returning the requested traces for each transaction |
| `trace_replayTransaction` | Replays a transaction, returning the traces |
| `trace_transaction` | Returns all traces of given transaction (OpenEthereum or Parity only) |
| `debug_traceTransaction` | Attempts to run the transaction in the exact same manner as it was executed on the network |
| `debug_traceCall` | Runs an eth_call within the context of the given block execution using the final state of parent block as the base |
| `debug_traceBlockByNumber` | Replays the block that is already present in the database |
| `debug_traceBlockByHash` | Replays the block that is already present in the database |