# Avalanche

Avalanche (AVAX) is an open-source, decentralized, and highly scalable blockchain platform designed for decentralized applications (DApps) and enterprise blockchain deployments. It offers a unique consensus mechanism called the Avalanche Consensus Protocol (ACP), enabling millions of validators to participate in the network. This results in extremely fast transaction speeds and low fees. Avalanche's compatibility with the Ethereum Virtual Machine (EVM) makes it easy for developers to port their existing Ethereum DApps to Avalanche. The platform also supports subnets, which are independent blockchain networks that can be customized to meet the specific needs of a particular application or organization. Avalanche's rapidly growing ecosystem includes a wide range of DApps, tools, and services.

- [Avalanche Official Documentation](https://docs.avax.network/)
- [Avalanche Developer Blog](https://medium.com/avalancheavax)
- [Avalanche Developer Forum](https://forum.avax.network/)

---

## AVAX on Grove
Grove offers a robust and developer-centric interface to the Avalanche blockchain, tailored to accommodate a spectrum of needs from simple transaction queries to intricate smart contract interactions. With multiple Avalanche chain variants, our platform ensures that developers have access to the appropriate tools and data for their specific projects. Designed for enhanced access and reliability, Grove's infrastructure maximizes uptime and mitigates common blockchain interaction challenges, such as node management and data indexing. Our scalable platform dynamically adjusts to workload variations, facilitating smooth, efficient operations even during high network traffic. Recognizing the diverse requirements of Avalanche-based applications, we provide customized solutions including historical data access, real-time transaction tracking, and specialized data endpoints for in-depth analysis. Furthermore, Grove equips developers with advanced tools, comprehensive documentation, and dedicated support, simplifying the Avalanche development process and ensuring a seamless experience.

---

## Supported Chain Variants
Grove supports a variety of Avalanche chain variants, each tailored to specific development needs and use cases:

### AVAX Mainnet 

`avax-mainnet`

This is the primary Avalanche network where real-world transactions and DApps operate. It provides near-head support for the latest blocks, ensuring developers have access to up-to-date blockchain information. This chain is ideal for applications that require immediate and accurate blockchain data, with high transaction throughput and real-time data access.

---

## Avalanche API Prefix & Chain IDs
Each blockchain we support has a specific Portal API prefix and RelayChainID, which are integral parts of our supported methods functionality. These are used to correctly route and process requests.

| Blockchain | Portal API Prefix | RelayChainID | Blockheight |
|------------|-------------------|--------------|-------------|
| AVAX       | `avax-mainnet`    | 0003         | Latest blocks |

---

## Supported Methods
### Avalanche
Supported methods are API functions specific to a given blockchain, enabling interaction with its distinct features. The following is a comprehensive list of our supported methods, along with brief descriptions to understand their purpose and functionality:

| Methods | Description | Documentation |
|---------|-------------|---------------|
| `eth_accounts` | Returns list of addresses owned by the client | [view method](#) |
| `eth_blocknumber` | Returns the most recent block | [view method](#) |
| `eth_call` | Call any read-only function on a deployed contract | [view method](#) |
| `eth_chainId` | Returns the current network/chain ID, used to sign replay-protected transaction introduced in EIP155 | [view method](#) |
| `eth_createAccessList` | Creates an EIP-2930 access list that you can include in a transaction | [view method](#) |
| `eth_estimateGas` | Generates and returns an estimate of how much gas is necessary to allow the transaction to complete | [view method](#) |
| `eth_feeHistory` | Returns historical gas information, allowing you to track trends over time | [view method](#) |
| `eth_gasPrice` | Returns current gas price in wei | [view method](#) |
| `eth_getBalance` | Returns the balance of the given address | [view method](#) |
| `eth_getBlockByHash` | Returns information about a block by hash | [view method](#) |
| `eth_getBlockByNumber` | Returns information about a block by block number | [view method](#) |
| `eth_getBlockTransactionCountByHash` | Returns the number of transactions in a block from a block matching the hash provided | [view method](#) |
| `eth_getBlockTransactionCountByNumber` | Returns the number of transactions in a block matching the provided block number | [view method](#) |
| `eth_getCode` | Returns a code indicating the type of address (i.e., Wallet v Contract) | [view method](#) |
| `eth_getLogs` | Returns an array of all logs matching a given filter object | [view method](#) |
| `eth_getProof` | Returns the account and storage values of the specified account including the Merkle-proof | [view method](#) |
| `eth_getStorageAt` | Returns the value from a storage position at a given address | [view method](#) |
| `eth_getTransactionByBlockHashAndIndex` | Returns information about a transaction by block hash and transaction index position | [view method](#) |
| `eth_getTransactionByBlockNumberAndIndex` | Returns information about a transaction by block number and transaction index position | [view method](#) |
| `eth_getTransactionByHash` | Returns information about a transaction at the specified hash | [view method](#) |
| `eth_getTransactionCount` | Returns number of transactions sent from address | [view method](#) |
| `eth_getTransactionReceipt` | Returns the receipt of a transaction by transaction hash | [view method](#) |
| `eth_getUncleByBlockHashAndIndex` | Returns information about a uncle of a block by hash and uncle index position | [view method](#) |
| `eth_getUncleByBlockNumberAndIndex` | Returns information about an uncle of a block by block number and index position | [view method](#) |
| `eth_GetUncleCountByBlockHash` | Returns the number of uncles in a block from a block matching the provided block hash | [view method](#) |
| `eth_GetUncleCountByBlockNumber` | Returns the number of uncles in a block matching the provided block number | [view method](#) |
| `eth_getWork` | Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target') | [view method](#) |
| `eth_hashrate` | Returns the number of hashes per second that the node is mining with | [view method](#) |
| `eth_maxPriorityFeePerGas` | Get the priority fee needed to be included in a block | [view method](#) |
| `eth_mining` | Returns true if client is actively mining new blocks | [view method](#) |
| `eth_protocolVersion` | Returns the current ETH protocol version | [view method](#) |
| `eth_sendRawTransaction` | Creates new message call transaction or a contract creation for signed transactions | [view method](#) |
| `eth_submitWork` | Used for submitting a proof-of-work solution | [view method](#) |
| `eth_syncing` | Returns the sync data | [view method](#) |

---

## Getting Started with Avalance on Grove

To start integrating Ethereum functionalities into your applications using Grove, follow these straightforward steps:

### 1. Set Up an Account on Grove
Begin by [creating an account on Grove](#). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### 2. Copy your Avalanche (AVAX) endpoint URL
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
