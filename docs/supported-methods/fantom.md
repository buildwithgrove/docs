# Fantom

Fantom is a high-performance, scalable, and secure smart-contract platform. It is designed to overcome the limitations of previous generation blockchain platforms. Fantom's supported methods offer developers a wide array of functions to interact with the network, such as executing transactions, querying balances, and more.

| Methods | Description |
| --- | --- |
| `eth_accounts` | returns list of addresses owned by the client |
| `eth_blocknumber` | returns the most recent block |
| `eth_call` | Call any read-only function on a deployed contract |
| `eth_chainId` | Returns the current network/chain ID, used to sign replayprotected transaction introduced in EIP155. |
| `eth_createAccessList` | Creates an EIP-2930 access list that you can include in a transaction. |
| `eth_estimateGas` | Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. (NOTE: This estimate is likely significantly more than the actual cost, for a variety of reasons) |
| `eth_feeHistory` | Returns historical gas information, allowing you to track trends over time. |
| `eth_gasPrice` | returns current gas price in wei |
| `eth_getBalance` | returns the balance of the given address |
| `eth_getBlockByHash` | Returns information about a block by hash |
| `eth_getBlockbyNumber` | Returns information about a block by block number |
| `eth_getBlockTransactionCountByHash` | Returns the number of transactions in a block from a block matching the hash provided |
| `eth_getBlockTransactionCountByNumber` | Returns the number of transactions in a block matching the provided block number |
| `eth_getCode` | Returns a code indicating the type of address (ie Wallet v Contract) |
| `eth_getFilterChanges` | Polling method for a filter, which returns an array of logs which occurred since last poll. |
| `eth_getFilterLogs` | Returns an array of all logs matching filter with given id. |
| `eth_getLogs` | Returns an array of all logs matching a given filter object. |
| `eth_getProof` | Returns the account and storage values of the specified account including the Merkle-proof. This call can be used to verify that the data you are pulling from is not tampered with. |
| `eth_getStorageAt` | returns the value from a storage position at a given address |
| `eth_getTransactionByBlockHashAndIndex` | Returns information about a transaction by block hash and transaction index position. |
| `eth_getTransactionByBlockNumberAndIndex` | Returns information about a transaction by block number and transaction index position. |
| `eth_getTransactionByHash` | Returns information about a transaction at the specified hash |
| `eth_getTransactionCount` | Returns number of transactions sent from address |
| `eth_getTransactionReceipt` | Returns the receipt of a transaction by transaction hash. |
| `eth_getUncleByBlockHashAndIndex` | Returns information about a uncle of a block by hash and uncle index position. |
| `eth_getUncleByBlockNumberAndIndex` | Returns information about an uncle of a block by block number and index position |
| `eth_GetUncleCountByBlockHash` | Returns the number of uncles in a block from a block matching the provided block hash. |
| `eth_GetUncleCountByBlockNumber` | Returns the number of uncles in a block matching the provided block number |
| `eth_getWork` | Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target') |
| `eth_hashrate` | returns the number of hashes per second that the node is mining with |
| `eth_maxPriorityFeePerGas` | Get the priority fee needed to be included in a block. |
| `eth_mining` | returns true if client is actively mining new blocks |
| `eth_newBlockFilter` | Creates a filter in the node, to notify when a new block arrives. The resulting value from the filter is immediately returned using eth_getFilterChanges |
| `eth_newFilter` | Creates a filter object, based on filter options, to notify when the state changes (logs). The resulting value from the filter is immediately returned using eth_getFilterChanges |
| `eth_newPendingTransactionFilter` | Creates a filter in the node, to notify when new pending transactions arrive. The resulting value from the filter is immediately returned using eth_getFilterChanges |
| `eth_protocolVersion` | returns the current ETH protocol version |
| `eth_sendRawTransaction` | Creates new message call transaction or a contract creation for signed transactions |
| `eth_submitWork` | Used for submitting a proof-of-work solution. |
| `eth_syncing` | Returns the sync data |
| `eth_uninstallFilter` | Uninstalls a filter with the given ID |
| `net_version` | returns the ETH Network ID (ie Ethereum = 1, Fantom = 250, etc) |
| `net_listening` | returns true if client is listening for network connections |
| `net_peerCount` | returns number of peers connected to the client |
| `web3_clientVersion` | Returns the current client version. |
| `web3_sha3` | Returns Keccak-256 (not the standardized SHA3-256) of the given data. |
