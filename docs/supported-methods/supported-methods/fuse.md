# Fuse

Fuse is a blockchain ecosystem designed to be a platform for the easy creation and operation of community-driven currencies and payment systems. With the Fuse supported methods, developers can perform actions like querying balances, executing transactions, and interacting with smart contracts on the Fuse network.

For Fuse, we maintain an Archival network. If you are accessing data from 128 blocks ago or earlier, please ensure to use Archival. This allows you to query historical data while also ensuring optimal performance. The supported methods for the archival chains are identical to their non-archival counterparts.

- [Fuse Developer Documentation](https://docs.fuse.io)
- [Fuse Community Forum](https://forum.fuse.io)
- [Fuse Github Repository](https://github.com/fuseio)

---

## Fuse on Grove

Grove offers comprehensive support for Fuse, facilitating the development of community-driven currencies and payment systems. Our platform provides access to both the standard and archival nodes of Fuse, enabling developers to query real-time and historical data efficiently.

---

## Supported Chain Variants

Grove supports the mainnet and archival nodes of the Fuse network:

### Fuse Mainnet

`fuse-mainnet`

The mainnet for the latest transactions and data, optimal for real-time operations.

### Fuse Archival

`fuse-archival`

For accessing historical data beyond 128 blocks, with archival capabilities.

---

## Chain Relay IDs for Supported Methods

| Blockchain       | Portal API Prefix  | RelayChainID | Blockheight         |
|------------------|--------------------|--------------|---------------------|
| Fuse             | `fuse-mainnet`     | 0005         | Latest - 127 blocks |
| Fuse Archival    | `fuse-archival`    | 000A         | 128 blocks +        |

---

## Supported Methods

The following methods are supported on both the Fuse Mainnet and Fuse Archival networks, offering diverse functionalities:

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

## Getting Started with Fuse on Grove

To begin using Fuse functionalities via Grove, follow these steps:

### 1. Set Up an Account on Grove

Create an account on Grove by [signing up here](#). [Instructions for account setup and management].

### 2. Copy your Fuse endpoint URL

Find and copy the endpoint URL specific to Fuse Mainnet or Fuse Archival on Grove.

### 3. Integrate API Endpoints

Integrate Grove's API endpoints into your application as needed.

### Example Code Snippet

A basic JavaScript example to get started with the Fuse Mainnet or Fuse Archival:

```javascript
// Example: Interacting with Fuse Mainnet or Fuse Archival
const fuse_endpoint = "<Grove_Fuse_API_Endpoint>";
const apiKey = "<Your_API_Key>";
// Insert your Fuse interaction code here
