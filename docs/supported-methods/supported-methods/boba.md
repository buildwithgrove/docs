# BOBA Mainnet

Boba Network is a Layer 2 Ethereum rollup, designed to enhance scalability, security, and offer low transaction fees. It incorporates a unique optimistic rollup technology, which provides faster transaction processing and reduced fees compared to Ethereum's mainnet. An important aspect of Boba Network is its full compatibility with the Ethereum Virtual Machine (EVM), simplifying the process for developers to migrate their existing Ethereum DApps to the Boba Network.

- [Boba Network Developer Documentation](https://docs.boba.network/)
- [Boba Network Community Forum](https://forum.boba.network/)
- [Boba Network Github Repository](https://github.com/bobanetwork/boba)

---

## BOBA on Grove

Grove offers an efficient and developer-friendly interface to the Boba Network, enhancing the capabilities of Ethereum Layer 2 solutions. Our platform provides tools for interacting with Boba's advanced rollup technology, ensuring scalability and reduced transaction costs. Grove's infrastructure is designed to maximize reliability and uptime, addressing common challenges in blockchain interactions, including node management and efficient data processing. We cater to a variety of development needs, from simple queries to complex contract interactions, offering both real-time and historical data access.

---

## Supported Chain Variants

Grove supports the BOBA Mainnet variant, designed to meet the specific requirements of applications built on Boba Network:



### BOBA Mainnet

`boba-mainnet`

The BOBA Mainnet is the primary network for real-world transactions and DApps built on Boba's Layer 2 solution. It provides up-to-date blockchain data with enhanced transaction processing speed and reduced fees.

---

## Chain Relay IDs for Supported Methods

| Blockchain   | Portal API Prefix | RelayChainID |
|--------------|-------------------|--------------|
| BOBA Mainnet | `boba-mainnet`    | 0048         |

---

## Supported Methods

Below is a list of supported methods for the BOBA Mainnet, enabling diverse functionalities:

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

## Getting Started with BOBA on Grove

To integrate Boba Network functionalities using Grove, follow these steps:

### 1. Set Up an Account on Grove

Begin by [creating an account on Grove](#). [Instructions for account setup and management].

### 2. Copy your BOBA Mainnet endpoint URL

[Instructions on locating and copying the endpoint URL for BOBA Mainnet].

### 3. Integrate API Endpoints

[Guidance on how to integrate Grove's API endpoints with your application].

### Example Code Snippet

Here's a basic example in JavaScript to get started with interacting with the BOBA Mainnet:

```javascript
// Example: Interacting with BOBA Mainnet
const boba_mainnet_endpoint = "<Grove_BOBA_Mainnet_API_Endpoint>";
const apiKey = "<Your_API_Key>";
// Add your code here to interact with BOBA Mainnet
