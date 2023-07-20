# Near

NEAR is a decentralized application platform designed to make apps usable on the web. The NEAR Supported Methods allow developers to engage with the NEAR network in a variety of ways including querying balances, executing transactions, and interacting with smart contracts.

| Methods | Description |
| --- | --- |
| `View access key` | retrieves information about a single access key for a given account. |
| `View access key list` | retrieves all access keys for a given account. |
| `View access key changes (single)` | retrieves individual access key changes in a specific block. |
| `View access key changes (all)` | retrieves changes to all access keys of a specific block. |
| `View account` | retrieves basic account information. |
| `View account changes` | retrieves account changes from transactions in a given account. |
| `View contract code` | retrieves the contract code (Wasm binary) deployed to the account. |
| `View contract state` | retrieves the state (key value pairs) of a contract based on the key prefix (base64 encoded). |
| `View contract state changes` | retrieves the state change details of a contract based on the key prefix (encoded to base64). |
| `View contract code changes` | retrieves code changes made when deploying a contract. |
| `Call a contract function` | calls a contract method as a view function. |
| `Block details` | retrieves the block for a given height or hash. |
| `Changes in block` | retrieves the changes in a block for a given block height or hash. |
| `Chunk details` | retrieves details of a specific chunk. |
| `Gas price` | retrieves the gas price for a specific block height or block hash. |
| `Genesis config` | retrieves the current genesis configuration. |
| `Protocol config` | retrieves the most recent protocol configuration or a specified block. |
| `Node Status` | Returns general status of a given node (sync status, nearcore node version, protocol version, etc), and the current set of validators. |
| `Network Info` | Returns the current state of node network connections (active peers, transmitted data, etc.) |
| `Validation status` | queries active validators on the network returning details and the state of validation on the blockchain. |
| `Send transaction (async)` | sends a transaction and immediately returns transaction hash. |
| `Send transaction (await)` | sends a transaction and waits until transaction is fully completed (has a 10-second timeout). |
| `Transaction status` | queries status of a transaction by hash and returns the final transaction result. |
| `Transaction status with receipts` | queries status of a transaction by hash, returning the final transaction result and details of all receipts. |
| `Receipt by ID` | retrieves a receipt by its ID (as is, without a status or execution outcome). |
