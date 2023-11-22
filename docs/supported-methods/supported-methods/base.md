# Base

Base Blockchain is an open-source, decentralized, and highly scalable blockchain platform designed for decentralized applications (DApps) and enterprise blockchain deployments. It is built on top of the Ethereum Virtual Machine (EVM), which means that it is compatible with Ethereum-based DApps. Base has a number of advantages over Ethereum, including faster transaction speeds and lower fees. It is also incubated within Coinbase and plans to progressively decentralize in the years ahead.

Base offers a secure, low-cost, and developer-friendly way to build on-chain. It utilizes the underlying security of Ethereum, along with Coinbase's best practices, to enable users to confidently onramp into Base from Coinbase, Ethereum L1, and other interoperable chains. Base's rollup architecture reduces costs by 10x for users. It is also built to be the onchain home for Coinbase products, users, and assets, as well as an open ecosystem where anyone can build for them.


* [Base Docs](https://docs.base.org/)
* [Base Discord](https://discord.com/invite/buildonbase)
* [Base GitHub](https://github.com/base-org)

---

## Base on Grove

Grove provides a sophisticated interface for the Base blockchain, tailored to support a wide range of developer activities, from simple transaction queries to complex smart contract operations. Our platform addresses key challenges in blockchain interaction, such as node management and data indexing, ensuring a smooth and reliable experience. With a focus on scalability, Grove's infrastructure adapts to network activity variations, maintaining efficient operations even during high traffic periods on the Base network.

Understanding the diverse needs of Base-based applications, Grove offers customized solutions like historical data access and real-time transaction monitoring, along with specialized data endpoints for in-depth analytics. Our comprehensive suite of tools, detailed documentation, and dedicated support streamline the development process on Base, allowing developers to concentrate on innovation and building impactful applications.

---

## Supported Chain Variants
Grove supports both mainnet and testnet variants of Base, each with its unique features and functionalities, including archival capabilities:

### Base Mainnet

`base-mainnet`

The Base Mainnet serves as the primary network for Base's applications and transactions. It is designed for decentralized applications (DApps) and enterprise blockchain deployments, offering a high-performance and scalable platform with its unique Avalanche Consensus Protocol. The Mainnet supports both archival and non-archival requests, providing comprehensive access to blockchain data, both current and historical.

### Base Testnet

`base-testnet`

The Base Testnet is an environment for developers to test and experiment with their DApps and smart contracts before deploying them on the mainnet. Like the mainnet, the testnet also supports both archival and non-archival requests, enabling developers to access a full range of blockchain data for testing purposes, including historical data.


---


## Archival and Non-Archival Support

For both the Base and Base Testnet blockchains, both Archival and Non-Archival requests are supported. Developers can use a singular Endpoint for accessing both Archival and Non-Archival data. This simplifies the process and ensures that you have access to comprehensive blockchain data without needing to switch between different Endpoints.

---

## Chain Relay IDs for Supported Methods

Each blockchain we support has a specific Portal API prefix and RelayChainID, which are integral parts of our supported methods functionality. These are used to correctly route and process requests.

| Blockchain   | Portal API Prefix | RelayChainID | Blockheight       |
|--------------|-------------------|--------------|-------------------|
| Base Mainnet | base-mainnet      | 0079         | All block heights |
| Base Testnet | base-testnet      | 0080         | All block heights |


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

## Getting Started with Base on Grove

To start integrating Base functionalities into your applications using Grove, follow these straightforward steps:

### 1. Set Up an Account on Grove
Begin by [creating an account on Grove](#). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### 2. Copy your Base (BASE) endpoint URL
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


### 3. Integrate API Endpoints
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Example Code Snippet
Below is a basic JavaScript example to get you started with interacting with the Avalanche Mainnet:

```javascript
// Example: Interacting with Ethereum Mainnet
const eth_mainnet_endpoint = "<Grove_ETH_Mainnet_API_Endpoint>";
// Replace with your API key
const apiKey = "<Your_API_Key>";

// Add your code here to interact with Ethereum Mainnet
```

---

## Additional Resources

Join our developer community for support, discussions, and sharing best practices. Connect with us on [Grove Discord](#).