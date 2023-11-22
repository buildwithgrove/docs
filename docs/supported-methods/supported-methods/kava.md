# Kava

Kava is a DeFi platform which offers its users the ability to mint stablecoins, earn interest on deposits, and access synthetic assets. By using Kava's supported methods, developers can engage with this multi-chain DeFi platform in several ways including querying balances, executing transactions, and interacting with smart contracts. For Kava, we offer direct access to its mainnet and archival nodes, providing both real-time and historical data functionalities.

- [Kava Developer Documentation](https://docs.kava.io)
- [Kava Community Forum](https://forum.kava.io)
- [Kava Github Repository](https://github.com/kava-labs)

---

## Kava on Grove

Grove supports Kava, enabling developers to harness the capabilities of this innovative DeFi platform. We provide access to both standard and archival nodes, facilitating seamless interaction with the network.

---

## Supported Chain Variants

Grove supports the mainnet and archival nodes of Kava:

### Kava Mainnet

`kava-mainnet`

The standard node, suitable for most current transaction and data queries.

### Kava Mainnet Archival

`kava-mainnet-archival`

For accessing historical data beyond 128 blocks, offering extensive archival capabilities.

---

## Chain Relay IDs for Supported Methods

| Blockchain           | Portal API Prefix       | RelayChainID | Blockheight         |
|----------------------|-------------------------|--------------|---------------------|
| Kava Mainnet         | `kava-mainnet`          | 0071         | Latest - 127 blocks |
| Kava Mainnet Archival| `kava-mainnet-archival` | 0072         | 128 blocks +        |

---

## Supported Methods

The following methods are supported on both the Kava Mainnet and Kava Mainnet Archival networks:

| Methods                                | Description                                                                                                                                                     | Documentation Link |
|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| `eth_accounts`                         | Returns list of addresses owned by the client                                                                                                                   | [View method](#)  |
| `eth_blocknumber`                      | Returns the most recent block                                                                                                                                   | [View method](#)  |
| `eth_call`                             | Call any read-only function on a deployed contract                                                                                                              | [View method](#)  |
| `eth_chainId`                          | Returns the current network/chain ID, used to sign replay protected transaction introduced in EIP155                                                           | [View method](#)  |
| `eth_createAccessList`                 | Creates an EIP-2930 access list that you can include in a transaction                                                                                          | [View method](#)  |
| `eth_estimateGas`                      | Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. The estimate is likely significantly more than the actual cost, for a variety of reasons | [View method](#) |
| `eth_feeHistory`                       | Returns historical gas information, allowing you to track trends over time                                                                                     | [View method](#)  |
| `eth_gasPrice`                         | Returns current gas price in wei                                                                                                                               | [View method](#)  |
| `eth_getBalance`                       | Returns the balance of the given address                                                                                                                       | [View method](#)  |
| `eth_getBlockByHash`                   | Returns information about a block by hash                                                                                                                      | [View method](#)  |
| `eth_getBlockbyNumber`                 | Returns information about a block by block number                                                                                                              | [View method](#)  |
| `eth_getBlockTransactionCountByHash`   | Returns the number of transactions in a block from a block matching the hash provided                                                                          | [View method](#)  |
| `eth_getBlockTransactionCountByNumber` | Returns the number of transactions in a block matching the provided block number                                                                               | [View method](#)  |
| `eth_getCode`                          | Returns a code indicating the type of address (ie Wallet v Contract)                                                                                           | [View method](#)  |
| `eth_getLogs`                          | Returns an array of all logs matching a given filter object                                                                                                    | [View method](#)  |
| `eth_getProof`                         | Returns the account and storage values of the specified account including the Merkle-proof                                                                     | [View method](#)  |
| `eth_getStorageAt`                     | Returns the value from a storage position at a given address                                                                                                   | [View method](#)  |
| `eth_getTransactionByBlockHashAndIndex`| Returns information about a transaction by block hash and transaction index position                                                                           | [View method](#)  |
| `eth_getTransactionByBlockNumberAndIndex`| Returns information about a transaction by block number and transaction index position                                                                         | [View method](#)  |
| `eth_getTransactionByHash`             | Returns information about a transaction at the specified hash                                                                                                  | [View method](#)  |
| `eth_getTransactionCount`              | Returns number of transactions sent from address                                                                                                               | [View method](#)  |
| `eth_getTransactionReceipt`            | Returns the receipt of a transaction by transaction hash                                                                                                       | [View method](#)  |
| `eth_getUncleByBlockHashAndIndex`      | Returns information about a uncle of a block by hash and uncle index position                                                                                  | [View method](#)  |
| `eth_getUncleByBlockNumberAndIndex`    | Returns information about an uncle of a block by block number and index position                                                                               | [View method](#)  |
| `eth_GetUncleCountByBlockHash`         | Returns the number of uncles in a block from a block matching the provided block hash                                                                           | [View method](#)  |
| `eth_GetUncleCountByBlockNumber`       | Returns the number of uncles in a block matching the provided block number                                                                                     | [View method](#)  |
| `eth_getWork`                          | Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target')                                                           | [View method](#)  |
| `eth_hashrate`                         | Returns the number of hashes per second that the node is mining with                                                                                           | [View method](#)  |
| `eth_maxPriorityFeePerGas`             | Get the priority fee needed to be included in a block                                                                                                          | [View method](#)  |
| `eth_mining`                           | Returns true if client is actively mining new blocks                                                                                                           | [View method](#)  |
| `eth_protocolVersion`                  | Returns the current ETH protocol version                                                                                                                       | [View method](#)  |
| `eth_sendRawTransaction`               | Creates new message call transaction or a contract creation for signed transactions                                                                            | [View method](#)  |
| `eth_submitWork`                       | Used for submitting a proof-of-work solution                                                                                                                   | [View method](#)  |
| `eth_syncing`                          | Returns the sync data                                                                                                                                          | [View method](#)  |

---

## Getting Started with Kava on Grove

To begin using Kava functionalities via Grove, follow these steps:

### 1. Set Up an Account on Grove

Create an account on Grove by [signing up here](#). [Instructions for account setup and management].

### 2. Copy your Kava endpoint URL

Find and copy the endpoint URL specific to Kava Mainnet or Kava Mainnet Archival on Grove.

### 3. Integrate API Endpoints

Integrate Grove's API endpoints into your application as needed.

### Example Code Snippet

A basic JavaScript example to get started with the Kava Mainnet or Kava Mainnet Archival:

```javascript
// Example: Interacting with Kava Mainnet or Kava Mainnet Archival
const kava_endpoint = "<Grove_Kava_API_Endpoint>";
const apiKey = "<Your_API_Key>";
// Insert your Kava interaction code here
