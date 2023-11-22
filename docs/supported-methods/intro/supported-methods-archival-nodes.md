# Archival & Trace

In the intricate world of blockchain, understanding the past and present of transactions is crucial. Our "Archival and Trace" feature offers a comprehensive view into the depths of blockchain networks. With Archival Nodes, access the entire history of blockchain transactions, including each state change and contract interaction. Simultaneously, Ethereum Trace brings the present into focus, providing detailed insights into the execution of current transactions on the Ethereum Virtual Machine (EVM). Together, these tools empower developers and businesses with complete historical context and real-time analysis, essential for advanced debugging, compliance, and strategic decision-making in the blockchain ecosystem.

---

## Introduction to Archival Nodes

Archival nodes, or archive nodes, store the complete history of a blockchain, including all states (balances, contract code, storage, etc.) for every block. They offer detailed historical data, unlike full nodes, which store only the latest state, or light nodes, which hold a limited subset of data.

#### What is an Archival Node?
An archival node provides a complete transaction history of a blockchain, including every transaction, the current state of all smart contracts, balances, and on-chain data. This contrasts with a full node, which maintains recent blockchain states (e.g., the last 128 blocks for Ethereum).

Archival nodes are crucial for developers and businesses requiring historical blockchain data, such as for auditing or compliance purposes. Running an archival node, however, demands significant storage (over 7TB for Ethereum as of 2023) and computational resources.

#### Archival Node vs. Full Node
Archival nodes store the entire blockchain history, including past states, while full nodes keep only the most recent state. Archival nodes require more storage and support use cases like historical data access and audit compliance.

---

## Introduction to Ethereum Trace

Ethereum Trace provides in-depth insights into Ethereum transaction execution. It details all steps in a transaction's execution on the Ethereum Virtual Machine (EVM), including function calls, state changes, and even failed transactions.

#### Understanding Ethereum Trace
Ethereum Trace, through a set of APIs, offers detailed information on how the EVM processes transactions, including every operation, the state of the EVM at each step, and gas usage.

#### The Importance of Ethereum Trace
Ethereum Trace is vital for debugging smart contracts and understanding Ethereum transactions. It helps in identifying and fixing contract issues, optimizing gas usage, and understanding contract interactions with the Ethereum network.

#### Key Features of Ethereum Trace
- **Function Calls**: Detailed data on all function calls during a transaction.
- **State Changes**: Tracks all changes to the EVM's state during a transaction.
- **Gas Usage**: Information on gas used by each operation.
- **Error Reporting**: Details on failed transactions, aiding debugging.
- **Replay Transactions**: Allows stepping through a transaction's execution for debugging.

### Supported Methods
Ethereum Trace supports various methods for extracting trace data from individual transactions, blocks, or block ranges. These methods, such as:

- `trace_block`: Returns traces created at a given block.
- `trace_call`: Executes the given call and returns a number of possible traces for it.
- `trace_get`: Returns trace at a given position.
- `trace_raw_transaction`: Traces a call to eth_sendRawTransaction without making the call, returning the traces.
- `trace_replayBlockTransactions`: Replays all transactions in a block returning the requested traces for each transaction.
- `trace_replayTransaction`: Replays a transaction, returning the traces.
- `trace_transaction`: Returns all traces of a given transaction.
- `debug_traceTransaction`: Attempts to run the transaction in the exact same manner as it was executed on the network.
- `debug_traceCall`: Runs an eth_call within the context of the given block execution using the final state of the parent block as the base.
- `debug_traceBlockByNumber`: Replays the block that is already present in the database.
- `debug_traceBlockByHash`: Replays the block that is already present in the database.


---

Archival nodes and Ethereum Trace together play crucial roles in the blockchain ecosystem. Archival nodes offer complete historical data, invaluable for specific development and compliance needs. Ethereum Trace, meanwhile, provides detailed insights into Ethereum transaction execution, essential for effective smart contract development and optimization.
