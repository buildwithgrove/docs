---
sidebar_position: 1
sidebar_label: eth-mainnet
---

# Ethereum Mainnet

`eth-mainnet`

This is the primary Ethereum network where real-world transactions and DApps operate. It provides near-head support for the latest blocks (up to 127 blocks behind the current one), ensuring developers have access to up-to-date blockchain information. This chain is ideal for applications that require immediate and accurate blockchain data, with a high transaction throughput and real-time data access.

## Supported APIs

| API Spec | Description                                               | Documentation                      |
| -------- | --------------------------------------------------------- | ---------------------------------- |
| Core API | The core set of methods supported by all ethereum clients | [view spec](../specs/core-api.mdx) |

## Supported Methods

| Methods                                   | Description                                                                                          | Documentation    |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------- |
| `eth_accounts`                            | Returns list of addresses owned by the client                                                        | [view method](#) |
| `eth_blocknumber`                         | Returns the most recent block                                                                        | [view method](#) |
| `eth_call`                                | Call any read-only function on a deployed contract                                                   | [view method](#) |
| `eth_chainId`                             | Returns the current network/chain ID, used to sign replay-protected transaction introduced in EIP155 | [view method](#) |
| `eth_createAccessList`                    | Creates an EIP-2930 access list that you can include in a transaction                                | [view method](#) |
| `eth_estimateGas`                         | Generates and returns an estimate of how much gas is necessary to allow the transaction to complete  | [view method](#) |
| `eth_feeHistory`                          | Returns historical gas information, allowing you to track trends over time                           | [view method](#) |
| `eth_gasPrice`                            | Returns current gas price in wei                                                                     | [view method](#) |
| `eth_getBalance`                          | Returns the balance of the given address                                                             | [view method](#) |
| `eth_getBlockByHash`                      | Returns information about a block by hash                                                            | [view method](#) |
| `eth_getBlockByNumber`                    | Returns information about a block by block number                                                    | [view method](#) |
| `eth_getBlockTransactionCountByHash`      | Returns the number of transactions in a block from a block matching the hash provided                | [view method](#) |
| `eth_getBlockTransactionCountByNumber`    | Returns the number of transactions in a block matching the provided block number                     | [view method](#) |
| `eth_getCode`                             | Returns a code indicating the type of address (i.e., Wallet v Contract)                              | [view method](#) |
| `eth_getLogs`                             | Returns an array of all logs matching a given filter object                                          | [view method](#) |
| `eth_getProof`                            | Returns the account and storage values of the specified account including the Merkle-proof           | [view method](#) |
| `eth_getStorageAt`                        | Returns the value from a storage position at a given address                                         | [view method](#) |
| `eth_getTransactionByBlockHashAndIndex`   | Returns information about a transaction by block hash and transaction index position                 | [view method](#) |
| `eth_getTransactionByBlockNumberAndIndex` | Returns information about a transaction by block number and transaction index position               | [view method](#) |
| `eth_getTransactionByHash`                | Returns information about a transaction at the specified hash                                        | [view method](#) |
| `eth_getTransactionCount`                 | Returns number of transactions sent from address                                                     | [view method](#) |
| `eth_getTransactionReceipt`               | Returns the receipt of a transaction by transaction hash                                             | [view method](#) |
| `eth_getUncleByBlockHashAndIndex`         | Returns information about a uncle of a block by hash and uncle index position                        | [view method](#) |
| `eth_getUncleByBlockNumberAndIndex`       | Returns information about an uncle of a block by block number and index position                     | [view method](#) |
| `eth_GetUncleCountByBlockHash`            | Returns the number of uncles in a block from a block matching the provided block hash                | [view method](#) |
| `eth_GetUncleCountByBlockNumber`          | Returns the number of uncles in a block matching the provided block number                           | [view method](#) |
| `eth_getWork`                             | Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target') | [view method](#) |
| `eth_hashrate`                            | Returns the number of hashes per second that the node is mining with                                 | [view method](#) |
| `eth_maxPriorityFeePerGas`                | Get the priority fee needed to be included in a block                                                | [view method](#) |
| `eth_mining`                              | Returns true if client is actively mining new blocks                                                 | [view method](#) |
| `eth_protocolVersion`                     | Returns the current ETH protocol version                                                             | [view method](#) |
| `eth_sendRawTransaction`                  | Creates new message call transaction or a contract creation for signed transactions                  | [view method](#) |
| `eth_submitWork`                          | Used for submitting a proof-of-work solution                                                         | [view method](#) |
| `eth_syncing`                             | Returns the sync data                                                                                | [view method](#) |
