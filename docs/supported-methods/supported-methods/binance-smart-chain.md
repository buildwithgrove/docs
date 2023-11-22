# Binance Smart Chain (BSC)

Binance Smart Chain (BSC), formerly known as Binance Chain, is an open-source, decentralized, and highly scalable blockchain platform designed for decentralized applications (DApps) and enterprise blockchain deployments. It is a fork of the Ethereum Virtual Machine (EVM), making it compatible with Ethereum-based DApps. Launched in 2020 by Binance, the world's largest cryptocurrency exchange, BSC quickly gained popularity due to its fast transaction speeds and low fees.

BSC's rapid growth can be attributed to its address of Ethereum's limitations, such as high transaction fees and congestion. By leveraging a Proof of Staked Authority (PoSA) consensus mechanism, BSC can process up to 2,000 transactions per second at significantly lower fees compared to Ethereum. This scalability and cost-effectiveness have attracted numerous DApp developers and users, making BSC one of the most active blockchain platforms in the world.


* [BSC Developer Docs](https://docs.bnbchain.org/docs/getting-started)
* [BSC Community Forum](https://www.hottg.com/BinanceDEXchange/index.html)
* [BSC GitHub](https://github.com/bnb-chain/bsc)

---

## BSC on Grove

Grove extends robust support to Binance Smart Chain, offering developers a suite of tools and APIs for seamless interaction. Our platform facilitates the integration of BSC's features into various applications, emphasizing efficiency and ease of use. Whether it's handling transactions, smart contract interactions, or data analytics, Grove provides an optimized and reliable interface for BSC's diverse capabilities.

---
## Supported Chain Variants
Grove supports a variety of Binance Smart Chain (BSC) variants, catering to diverse development needs and use cases:

### BSC Mainnet

`bsc-mainnet`

As the primary network of Binance Smart Chain, the BSC Mainnet hosts real-world transactions and decentralized applications (DApps). It provides near-head support for the latest blocks, enabling developers to access the most current blockchain data. This variant is particularly suited for applications that demand immediate and accurate blockchain information, offering high transaction throughput and real-time data access.

### BSC Archival

`bsc-archival`

The BSC Archival network provides access to historical blockchain data. This variant is essential for developers who need to query data from older blocks, beyond the most recent 128 blocks. With BSC Archival, users can perform in-depth analyses and retrieve past transactions and states, which is invaluable for various research, auditing, and data retrieval purposes. It's ideal for applications requiring extensive historical data access.

---

## Chain Relay IDs for Supported Methods

| Blockchain | Portal API Prefix | RelayChainID | Blockheight |
|------------|-------------------|--------------|-------------|
| BSC Mainnet | `bsc-mainnet` | 0004 | Latest - 127 blocks |
| BSC (Archival) | `bsc-archival` | 0010 | 128 blocks + |

---

## Supported Methods
Supported methods are API functions specific to a given blockchain, enabling interaction with its distinct features. The following is a comprehensive list of our supported methods, along with brief descriptions to understand their purpose and functionality:

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

## Getting Started with BSC on Grove

To start integrating Binance Smart Chain functionalities into your applications using Grove, follow these straightforward steps:

### 1. Set Up an Account on Grove
Begin by [creating an account on Grove](#). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### 2. Copy your Binance Smart Chain (BSC) endpoint URL
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### 3. Integrate API Endpoints
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Example Code Snippet
Below is a basic JavaScript example to get you started with interacting with the Ethereum Mainnet:


```javascript
   // Example: Interacting with Binance Smart Chain
   const bsc_endpoint = "<Grove_BSC_API_Endpoint>";
   const apiKey = "<Your_API_Key>";
   // Add your code here to interact with BSC
   ```

---

## Additional Resources

Join our developer community for support, discussions, and sharing best practices. Connect with us on [Grove Discord](#).
