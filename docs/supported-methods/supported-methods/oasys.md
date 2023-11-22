# Oasys

Oasys is a blockchain platform designed for developers to create and deploy decentralized applications (dApps). It provides a range of supported methods that enable developers to interact effectively with the Oasys network. These functionalities include querying account balances, executing transactions, estimating gas costs, and interacting with smart contracts.

Oasys also offers an Archival network, which is crucial for accessing historical data. This feature is especially important for users who need to retrieve information from 128 blocks ago or earlier, providing both historical data access and optimal performance.

- [Oasys Developer Documentation](https://docs.oasys.blockchain/)
- [Oasys Community Forum](https://community.oasys.blockchain/)
- [Oasys Github Repository](https://github.com/oasys/blockchain)

---

## Oasys on Grove

Grove's integration with Oasys enhances the platform's capabilities, allowing developers to seamlessly access Oasys's features and services. This integration ensures a smooth development experience for those building on the Oasys network.

---

## Supported Chain Variants

Grove supports both the mainnet and archival network of Oasys:

### Oasys Mainnet

`oasys-mainnet`

This network is the primary environment for developers to deploy and run their dApps.

### Oasys Mainnet Archival

`oasys-mainnet-archival`

This archival network provides access to historical data from 128 blocks or earlier.

---

## Chain Relay IDs for Supported Methods

| Blockchain           | Portal API Prefix           | RelayChainID | Blockheight     |
|----------------------|-----------------------------|--------------|-----------------|
| Oasys Mainnet        | `oasys-mainnet`             | 0070         | Latest - 127 blocks |
| Oasys Mainnet Archival | `oasys-mainnet-archival` | 0069         | 128 blocks +   |

---

## Supported Methods

The following methods are supported on both the Oasys Mainnet and Mainnet Archival:

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

## Getting Started with Oasys on Grove

To start using Oasys via Grove, follow these steps:

### 1. Set Up an Account on Grove

Create your Grove account [here](#). [Instructions for account setup and management].

### 2. Copy your Oasys endpoint URL

Locate and copy the Oasys Mainnet or Archival endpoint URL on Grove.

### 3. Integrate API Endpoints

Incorporate Grove's API endpoints into your application as needed.

### Example Code Snippet

A simple JavaScript example to connect with Oasys Mainnet or Archival:

```javascript
// Example: Interacting with Oasys Mainnet or Archival
const oasys_endpoint = "<Grove_Oasys_API_Endpoint>";
const apiKey = "<Your_API_Key>";
// Insert your Oasys interaction code here
