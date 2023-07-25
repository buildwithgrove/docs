# Starknet

StarkNet is a decentralized, permissionless, zk-STARK-based Layer 2 solution by StarkWare. It's designed to improve the scalability and privacy of Ethereum. The StarkNet Supported Methods give developers access to a variety of functions such as querying account balances, executing transactions, and interacting with smart contracts on the StarkNet network.

### Chain Relay IDs for Supported Methods
Each blockchain we support has a specific Portal API prefix and RelayChainID, which are integral parts of our supported methods functionality. These are used to correctly route and process requests.

| Blockchain | Portal API Prefix | RelayChainID |
|---------|-------------|-------------|
| Starknet Mainnet | `starknet-mainnet` | 0060 |
| Starknet Testnet | `starknet-testnet` | 0061 |


### Supported Methods
Supported methods are API functions specific to a given blockchain, enabling interaction with its distinct features. The following is a comprehensive list of our supported methods, along with brief descriptions to understand their purpose and functionality:


| Methods | Description |
| --- | --- |
| `starknet_getClassHashAt` | Get the contract class hash in the given block for the contract deployed at the given address |
| `starknet_addDeployAccountTransaction` | Submit a new deploy account transaction |
| `starknet_addDeclareTransaction` | Submit a new class declaration transaction |
| `starknet_blockHashAndNumber` | Get the most recent accepted block hash and number |
| `starknet_getStorageAt` | Get the value of the storage at the given address and key |
| `starknet_blockNumber` | Get the most recent accepted block hash and number |
| `starknet_getStateUpdate` | Get the value of the storage at the given address and key |
| `starknet_getTransactionByBlockIdAndIndex` | Get the details of the transaction given by the identified block and index in that block. If no transaction is found, null is returned. |
| `starknet_getTransactionReceipt` | Get the transaction receipt by the transaction hash |
| `starknet_getBlockTransactionCount` | Returns the number of transactions in the designated block. |
| `starknet_call` | Calls a function in a contract and returns the return value. Using this call will not create a transaction; hence, will not change the state. |
| `starknet_estimateFee` | Estimates the resources required by transactions when applied on a given state. |
| `starknet_getNonce` | Get the nonce associated with the given address in the given block |
| `starknet_chainId` | Return the currently configured StarkNet chain id |
| `starknet_getTransactionByHash` | Get the details and status of a submitted transaction |
| `starknet_syncing` | Returns an object about the sync status, or false if the node is not synching |
| `starknet_getBlockWithTxHashes` | Get block information with transaction hashes given the block id |
| `starknet_getEvents | Returns` all event objects matching the conditions in the provided filter |
| `starknet_pendingTransactions` | Returns the transactions in the transaction pool, recognized by this sequencer |
| `starknet_getClass` | Get the contract class definition in the given block associated with the given hash |
| `starknet_getBlockWithTxs` | Get block information with full transactions given the block id |
| `starknet_addInvokeTransaction` | Submit a new transaction to be added to the chain |
| `starknet_getClassAt` | Get the contract class definition in the given block at the given address |
