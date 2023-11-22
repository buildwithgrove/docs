# Celo Mainnet

Celo is a unique open-source, decentralized blockchain platform, optimized for mobile-first decentralized applications (DApps) and enterprise blockchain deployments. Its distinct Proof-of-Stake (PoS) consensus mechanism allows for rapid transaction processing and minimal fees. Celo's compatibility with the Ethereum Virtual Machine (EVM) enables easy porting of existing Ethereum DApps to the Celo network. Focusing on mobile accessibility, Celo extends the reach of blockchain technology, especially to users without traditional computing devices. Its scalability allows handling up to 4,500 transactions per second, placing it among the fastest blockchain platforms.

- [Celo Developer Documentation](https://docs.celo.org)
- [Celo Community Forum](https://forum.celo.org)
- [Celo Github Repository](https://github.com/celo-org)

---

## Celo on Grove

Grove provides a streamlined and developer-friendly interface for the Celo blockchain, enhancing the development of mobile-first DApps. Our platform offers tools for efficient interaction with Celo's PoS technology, ensuring swift transactions and low fees. Grove's robust infrastructure ensures consistent uptime and addresses challenges like node management and data processing. We support a range of development activities, from simple queries to complex smart contract interactions, with access to both real-time and historical data.

---

## Supported Chain Variants

Grove supports the Celo Mainnet variant, tailored to the specific requirements of applications built on the Celo platform:

### Celo Mainnet

`celo-mainnet`

The Celo Mainnet is the primary network for actual transactions and DApps on Celo. It offers updated blockchain data, fast transaction processing, and low fees.

---

## Chain Relay IDs for Supported Methods

| Blockchain  | Portal API Prefix | RelayChainID |
|-------------|-------------------|--------------|
| Celo Mainnet| `celo-mainnet`    | 0065         |

---

## Supported Methods

Here is a list of supported methods for the Celo Mainnet, providing various functionalities:


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

## Getting Started with Celo on Grove

To integrate Celo functionalities using Grove, follow these steps:

### 1. Set Up an Account on Grove

Start by [creating an account on Grove](#). [Instructions for account setup and management].

### 2. Copy your Celo Mainnet endpoint URL

[Directions on finding and copying the endpoint URL for Celo Mainnet].

### 3. Integrate API Endpoints

[Guidelines on integrating Grove's API endpoints into your application].

### Example Code Snippet

Here's a simple JavaScript example to begin interacting with the Celo Mainnet:

```javascript
// Example: Interacting with Celo Mainnet
const celo_mainnet_endpoint = "<Grove_Celo_Mainnet_API_Endpoint>";
const apiKey = "<Your_API_Key>";
// Add your code here for Celo Mainnet interactions
