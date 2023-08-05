# Ethereum

Ethereum is an open-source, blockchain-based platform that enables developers to build and deploy decentralized applications (dApps). Ethereum's core innovation, the Ethereum Virtual Machine (EVM), allows for the execution of smart contracts across the Ethereum network. The ETH supported methods provide developers with functionalities such as querying account balances, estimating gas costs, executing transactions, subscribing to events, and interacting with smart contracts on the Ethereum network.

### Chain Relay IDs for Supported Methods
Each blockchain we support has a specific Portal API prefix and RelayChainID, which are integral parts of our supported methods functionality. These are used to correctly route and process requests.

| Blockchain | Portal API Prefix | RelayChainID | Blockheight |
|---------|-------------|-------------|-------------|
| Ethereum | `eth-mainnet` | 0021 | Latest - 127 blocks |
| Ethereum Mainnet Archival | `eth-archival` | 0022 | 128 blocks + |
| Ethereum Goerli | `eth-goerli` | 0026 | - |
| Ethereum Rinkeby | `rinkeby` | 0022 | - |

### Archival Data

For Ethereum we maintain a mainnet, several testnets and archival nodes. If you are accessing data from 128 blocks or earlier, please ensure to use `eth-archival`. This allows you to query historical data while also ensuring optimal performance. The supported methods for the archival chains are identical to their non-archival counterparts.

### Supported Methods
Supported methods are API functions specific to a given blockchain, enabling interaction with its distinct features. The following is a comprehensive list of our supported methods, along with brief descriptions to understand their purpose and functionality:

| Methods | Description |
|---------|-------------|
| `eth_accounts` | Returns list of addresses owned by the client |
| `eth_blocknumber` | Returns the most recent block |
| `eth_call` | Call any read-only function on a deployed contract |
| `eth_chainId` | Returns the current network/chain ID, used to sign replay-protected transaction introduced in EIP155 |
| `eth_createAccessList` | Creates an EIP-2930 access list that you can include in a transaction |
| `eth_estimateGas` | Generates and returns an estimate of how much gas is necessary to allow the transaction to complete |
| `eth_feeHistory` | Returns historical gas information, allowing you to track trends over time |
| `eth_gasPrice` | Returns current gas price in wei |
| `eth_getBalance` | Returns the balance of the given address |
| `eth_getBlockByHash` | Returns information about a block by hash |
| `eth_getBlockByNumber` | Returns information about a block by block number |
| `eth_getBlockTransactionCountByHash` | Returns the number of transactions in a block from a block matching the hash provided |
| `eth_getBlockTransactionCountByNumber` | Returns the number of transactions in a block matching the provided block number |
| `eth_getCode` | Returns a code indicating the type of address (i.e., Wallet v Contract) |
| `eth_getLogs` | Returns an array of all logs matching a given filter object |
| `eth_getProof` | Returns the account and storage values of the specified account including the Merkle-proof |
| `eth_getStorageAt` | Returns the value from a storage position at a given address |
| `eth_getTransactionByBlockHashAndIndex` | Returns information about a transaction by block hash and transaction index position |
| `eth_getTransactionByBlockNumberAndIndex` | Returns information about a transaction by block number and transaction index position |
| `eth_getTransactionByHash` | Returns information about a transaction at the specified hash |
| `eth_getTransactionCount` | Returns number of transactions sent from address |
| `eth_getTransactionReceipt` | Returns the receipt of a transaction by transaction hash |
| `eth_getUncleByBlockHashAndIndex` | Returns information about a uncle of a block by hash and uncle index position |
| `eth_getUncleByBlockNumberAndIndex` | Returns information about an uncle of a block by block number and index position |
| `eth_GetUncleCountByBlockHash` | Returns the number of uncles in a block from a block matching the provided block hash |
| `eth_GetUncleCountByBlockNumber` | Returns the number of uncles in a block matching the provided block number |
| `eth_getWork` | Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target') |
| `eth_hashrate` | Returns the number of hashes per second that the node is mining with |
| `eth_maxPriorityFeePerGas` | Get the priority fee needed to be included in a block |
| `eth_mining` | Returns true if client is actively mining new blocks |
| `eth_protocolVersion` | Returns the current ETH protocol version |
| `eth_sendRawTransaction` | Creates new message call transaction or a contract creation for signed transactions |
| `eth_submitWork` | Used for submitting a proof-of-work solution |
| `eth_syncing` | Returns the sync data |

> Due to the permissionless, decentralized nature of the node network, not all nodes are configured the same. The following methods may be supported by some nodes but not others. It is possible to return an error if a node is hit that does not support these methods.

| Methods                                | Description                                                                                                                                                     |
|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `txpool_content` | Returns all pending and queued transactions |
| `txpool_inspect` | Returns a textual summary of all pending and queued transactions |
| `txpool_status` | Returns the number of transactions in pending and queued states |
| `net_version` | Returns the ETH Network ID |
| `net_listening` | Returns true if client is listening for network connections |
| `net_peerCount` | Returns number of peers connected to the client |
| `web3_clientVersion` | Returns the current client version |
| `web3_sha3` | Returns Keccak-256 (not the standardized SHA3-256) of the given data |

## Ethereum Trace

| Methods | Description |
|---------|-------------|
| `trace_block` | Returns traces created at given block (Parity) |
| `trace_call` | Executes the given call and returns a number of possible traces for it |
| `trace_get` | Returns trace at given position (Parity) |
| `trace_raw_transaction` | Traces a call to eth_sendRawTransaction without making the call, returning the traces |
| `trace_replayBlockTransactions` | Replays all transactions in a block returning the requested traces for each transaction |
| `trace_replayTransaction` | Replays a transaction, returning the traces |
| `trace_transaction` | Returns all traces of given transaction (Parity) |
| `debug_traceTransaction` | Attempts to run the transaction in the exact same manner as it was executed on the network |
| `debug_traceCall` | Runs an eth_call within the context of the given block execution using the final state of parent block as the base |
| `debug_traceBlockByNumber` | Replays the block that is already present in the database |
| `debug_traceBlockByHash` | Replays the block that is already present in the database |
