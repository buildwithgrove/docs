# Dogechain

DogeChain is a distinctive, community-driven, open-source, and decentralized blockchain platform utilizing the Proof of Work (PoW) consensus mechanism. Originating as a fork of the Ethereum blockchain, DogeChain offers seamless compatibility with Ethereum-based decentralized applications (DApps) and smart contracts. It is specifically designed to overcome the limitations of the Dogecoin blockchain, such as slow transaction speeds and high fees, while preserving its fundamental characteristics and meme-centric culture.

- [DogeChain Developer Documentation](https://docs.dogechain.dog/docs/overview)
- [DogeChain Community Forum](https://twitter.com/DogeSwap_fans)
- [DogeChain Github Repository](https://github.com/dogechain-lab/dogechain)

---

## Dogechain on Grove

Grove provides an accessible and intuitive interface to Dogechain, enabling developers to harness the unique features of this PoW-based blockchain. Our platform supports the integration of Dogechain with existing Ethereum DApps and smart contracts, fostering an environment that encourages creativity and innovation in the blockchain space.

---

## Supported Chain Variants

Grove supports the Dogechain Mainnet, ensuring developers can fully utilize the capabilities of this unique blockchain network:

### Dogechain Mainnet

`dogechain-mainnet`

The Dogechain Mainnet is tailored for fast transactions and low fees, making it an ideal choice for DApps that seek to leverage Dogecoin's popular appeal and community-driven ethos.

---

## Chain Relay IDs for Supported Methods

| Blockchain        | Portal API Prefix     | RelayChainID |
|-------------------|-----------------------|--------------|
| Dogechain Mainnet | `dogechain-mainnet`   | 0059         |

---

## Supported Methods

The following methods are supported on the Dogechain Mainnet, offering diverse functionalities:


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

## Getting Started with Dogechain on Grove

To begin using Dogechain functionalities via Grove, follow these steps:

### 1. Set Up an Account on Grove

Create an account on Grove by [signing up here](#). [Instructions for account setup and management].

### 2. Copy your Dogechain Mainnet endpoint URL

Find and copy the endpoint URL specific to the Dogechain Mainnet on Grove.

### 3. Integrate API Endpoints

Integrate Grove's API endpoints into your DApp or smart contract as needed.

### Example Code Snippet

A basic JavaScript example to get started with the Dogechain Mainnet:

```javascript
// Example: Interacting with Dogechain Mainnet
const dogechain_mainnet_endpoint = "<Grove_Dogechain_Mainnet_API_Endpoint>";
const apiKey = "<Your_API_Key>";
// Insert your Dogechain Mainnet interaction code here
