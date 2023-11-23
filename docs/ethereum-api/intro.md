---
sidebar_position: 1
---

# Ethereum

Ethereum, a decentralized blockchain platform, was envisioned by Vitalik Buterin, a programmer and co-founder of Bitcoin Magazine, in late 2013. He envisioned a platform that could go beyond mere financial transactions and facilitate the development of decentralized applications (DApps). In 2014, a successful initial coin offering (ICO) raised over $18 million, solidifying Ethereum's position in the cryptocurrency realm. The platform officially launched in July 2015, introducing its native cryptocurrency, Ether (ETH), and the Ethereum Virtual Machine (EVM), an execution environment for DApps. Ethereum's innovative smart contract technology, which enables self-executing contracts, has fueled the growth of a vibrant ecosystem of DApps, ranging from decentralized finance (DeFi) to non-fungible tokens (NFTs).

- [Ethereum Official Documentation](https://ethereum.org/en/developers/docs/)
- [Ethereum Developer Blog](https://blog.ethereum.org/)
- [Ethereum Developer Forum](https://ethereum.org/en/community/)

---

## Ethereum on Grove

Grove offers a robust and developer-centric interface to the Ethereum blockchain, tailored to accommodate a spectrum of needs from simple transaction queries to intricate smart contract interactions. With multiple Ethereum chain variants, our platform ensures that developers have access to the appropriate tools and data for their specific projects. Designed for enhanced access and reliability, Grove's infrastructure maximizes uptime and mitigates common blockchain interaction challenges, such as node management and data indexing. Our scalable platform dynamically adjusts to workload variations, facilitating smooth, efficient operations even during high network traffic. Recognizing the diverse requirements of Ethereum-based applications, we provide customized solutions including historical data access, real-time transaction tracking, and specialized data endpoints for in-depth analysis. Furthermore, Grove equips developers with advanced tools, comprehensive documentation, and dedicated support, simplifying the Ethereum development process and ensuring a seamless experience.

---

## Supported Chain Variants

Grove supports a variety of Ethereum chain variants, each tailored to specific development needs and use cases:

### Ethereum Mainnet

`eth-mainnet`

This is the primary Ethereum network where real-world transactions and DApps operate. It provides near-head support for the latest blocks (up to 127 blocks behind the current one), ensuring developers have access to up-to-date blockchain information. This chain is ideal for applications that require immediate and accurate blockchain data, with a high transaction throughput and real-time data access.

### Ethereum Mainnet Archival

`eth-archival`

Catering to applications that need comprehensive historical blockchain data, ETH-Archival offers access to all Ethereum blockchain data, including blocks 128 and earlier. This variant is crucial for detailed analysis and audits of past transactions and state changes, providing deep insights and extensive data retrieval capabilities.

### Ethereum Goerli

`eth-goerli`

As a testnet, ETH-Goerli allows developers to test and experiment with their DApps in a risk-free environment that mimics the main Ethereum network. This variant is perfect for development, testing, and trial runs before deployment on the mainnet.

### Ethereum Rinkeby

`rinkeby`

Another testnet variant, Rinkeby offers a sandbox for developers to test Ethereum DApps and smart contracts. It uses a different consensus mechanism (proof-of-authority) compared to the main Ethereum network, providing a controlled environment for experimentation and testing.

### Ethereum Holešky

`holesky-fullnode-testnet`

This is a specialized Ethereum testnet designed for specific testing and development purposes. It provides a unique environment for developers to experiment with Ethereum functionalities and test applications under different network conditions and parameters.

---

## Ethereum API Prefix & Chain IDs

Each blockchain we support has a specific Portal API prefix and RelayChainID, which are integral parts of our supported methods functionality. These are used to correctly route and process requests.

| Blockchain                | Portal API Prefix          | RelayChainID | Blockheight         |
| ------------------------- | -------------------------- | ------------ | ------------------- |
| Ethereum                  | `eth-mainnet`              | 0021         | Latest - 127 blocks |
| Ethereum Mainnet Archival | `eth-archival`             | 0022         | 128 blocks +        |
| Ethereum Goerli           | `eth-goerli`               | 0026         | -                   |
| Ethereum Rinkeby          | `rinkeby`                  | 0022         | -                   |
| Ethereum Holešky          | `holesky-fullnode-testnet` | 0081         | -                   |

---

## Supported Methods

### Ethereum

Supported methods are API functions specific to a given blockchain, enabling interaction with its distinct features. The following is a comprehensive list of our supported methods, along with brief descriptions to understand their purpose and functionality:

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

### Ethereum Trace

Eth-Trace is a specialized toolset for interacting with the Ethereum blockchain, enabling developers to trace and explore transaction history. With Eth-Trace's supported methods, developers can delve into the Ethereum network's historical data, querying transactional details, account balances, and more.

| Methods                         | Description                                                                             | Documentation    |
| ------------------------------- | --------------------------------------------------------------------------------------- | ---------------- |
| `trace_block`                   | Returns traces created at given block (Parity)                                          | [view method](#) |
| `trace_call`                    | Executes the given call and returns a number of possible traces for it                  | [view method](#) |
| `trace_get`                     | Returns trace at given position (Parity)                                                | [view method](#) |
| `trace_raw_transaction`         | Traces a call to eth_sendRawTransaction without making the call, returning the traces   | [view method](#) |
| `trace_replayBlockTransactions` | Replays all transactions in a block returning the requested traces for each transaction | [view method](#) |
| `trace_replayTransaction`       | Replays a transaction, returning the traces                                             | [view method](#) |
| `trace_transaction`             | Returns all traces of given transaction (Parity)                                        | [view method](#) |

---

## Getting Started with Ethereum on Grove

To start integrating Ethereum functionalities into your applications using Grove, follow these straightforward steps:

### 1. Set Up an Account on Grove

Begin by [creating an account on Grove](#). Create and configure your developer account to get access to our APIs and tools. This step is crucial for obtaining the necessary API keys and access permissions.

### 2. Choose the Ethereum Chain Variant

Grove offers various Ethereum chain variants to suit different development needs:

- **ETH-Mainnet**: Ideal for applications that require real-time blockchain data.
- **ETH-Archival**: Best for applications needing access to the complete historical blockchain data.
- **ETH-Trace**: Suitable for applications that require detailed transaction tracing and debugging.

Select the one that aligns with your application's requirements.

### 3. Integrate API Endpoints

Utilize our extensive API documentation to seamlessly integrate Ethereum functionalities into your application. Our APIs are designed for ease of use, ensuring a smooth integration process.

### Example Code Snippet

Below is a basic JavaScript example to get you started with interacting with the Ethereum Mainnet:

```javascript
// Example: Interacting with Ethereum Mainnet
const eth_mainnet_endpoint = "<Grove_ETH_Mainnet_API_Endpoint>"
// Replace with your API key
const apiKey = "<Your_API_Key>"

// Add your code here to interact with Ethereum Mainnet
```

---

## Additional Resources

Join our developer community for support, discussions, and sharing best practices. Connect with us on [Grove Discord](#).
