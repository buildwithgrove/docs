# Arbitrum One

Arbitrum One is a layer 2 scaling solution for Ethereum that enhances its capabilities by improving its transaction speed and reducing costs, while inheriting the security model of Ethereum. Arbitrum operates on top of Ethereum as a separate layer, enabling faster and more cost-effective transactions. This makes it an ideal choice for applications that require high throughput and more efficient gas usage.

* [Arbitrum One Developer Documentation](https://arbitrum.io/resources/)
* [Arbitrum One Community Forum](https://forum.arbitrum.io/)
* [Arbitrum One Discord](https://discord.gg/5C3t9jS)
* [Arbitrum One GitHub Repository](https://github.com/arbitrum/arbitrum-one)

---

## Arbitrum on Grove

Grove extends its robust blockchain interface to support Arbitrum One, providing developers with enhanced tools and APIs for interacting with this Ethereum layer 2 solution. Our platform facilitates seamless integration and interaction with Arbitrum One, offering high-performance infrastructure and developer-friendly tools. Whether you are developing DeFi applications, NFT marketplaces, or other DApps, Grove's interface with Arbitrum One ensures a smooth and efficient development experience.

---

## Supported Chain Variants
Grove supports the main network variant of Arbitrum One, tailored for specific development needs and use cases:

### Arbitrum One Mainnet

`arbitrum-one-mainnet`

Arbitrum One Mainnet is the primary network for Arbitrum, hosting a variety of decentralized applications (DApps) and transactions. It provides developers with fast and efficient layer 2 scaling solutions on top of Ethereum, offering improved transaction speed and reduced costs. This chain is ideal for DApps that require high throughput and efficient gas usage while maintaining the robust security model of Ethereum.

---

## Chain Relay IDs for Supported Methods

Each blockchain supported by Grove has a specific Portal API prefix and RelayChainID. These are essential for routing and processing requests accurately.

| Blockchain    | Portal API Prefix | RelayChainID |
|---------------|-------------------|--------------|
| Arbitrum One  | `arbitrum-one`    | 0066         |

---

## Supported Methods

The supported methods for Arbitrum One are tailored to enable developers to interact with the Arbitrum blockchain effectively. These methods cover a wide range of functionalities, including account balance queries, gas cost estimation, transaction execution, and more. For detailed information on each method's purpose and functionality, refer to our comprehensive list below:

| Methods                                     | Description                                                                                               | Documentation |
|---------------------------------------------|-----------------------------------------------------------------------------------------------------------|---------------|
| `eth_accounts`                              | Returns list of addresses owned by the client                                                             | [view method](#) |
| `eth_blocknumber`                           | Returns the most recent block                                                                             | [view method](#) |
| `eth_call`                                  | Call any read-only function on a deployed contract                                                        | [view method](#) |
| `eth_chainId`                               | Returns the current network/chain ID, used to sign replay protected transaction introduced in EIP155      | [view method](#) |
| `eth_createAccessList`                      | Creates an EIP-2930 access list that you can include in a transaction                                     | [view method](#) |
| `eth_estimateGas`                           | Generates and returns an estimate of how much gas is necessary to allow the transaction to complete       | [view method](#) |
| `eth_feeHistory`                            | Returns historical gas information, allowing you to track trends over time                                | [view method](#) |
| `eth_gasPrice`                              | Returns current gas price in wei                                                                          | [view method](#) |
| `eth_getBalance`                            | Returns the balance of the given address                                                                  | [view method](#) |
| `eth_getBlockByHash`                        | Returns information about a block by hash                                                                 | [view method](#) |
| `eth_getBlockbyNumber`                      | Returns information about a block by block number                                                         | [view method](#) |
| `eth_getBlockTransactionCountByHash`        | Returns the number of transactions in a block from a block matching the hash provided                     | [view method](#) |
| `eth_getBlockTransactionCountByNumber`      | Returns the number of transactions in a block matching the provided block number                          | [view method](#) |
| `eth_getCode`                               | Returns a code indicating the type of address (ie Wallet v Contract)                                      | [view method](#) |
| `eth_getLogs`                               | Returns an array of all logs matching a given filter object                                               | [view method](#) |
| `eth_getProof`                              | Returns the account and storage values of the specified account including the Merkle-proof                | [view method](#) |
| `eth_getStorageAt`                          | Returns the value from a storage position at a given address                                              | [view method](#) |
| `eth_getTransactionByBlockHashAndIndex`     | Returns information about a transaction by block hash and transaction index position                      | [view method](#) |
| `eth_getTransactionByBlockNumberAndIndex`   | Returns information about a transaction by block number and transaction index position                    | [view method](#) |
| `eth_getTransactionByHash`                  | Returns information about a transaction at the specified hash                                             | [view method](#) |
| `eth_getTransactionCount`                   | Returns number of transactions sent from address                                                          | [view method](#) |
| `eth_getTransactionReceipt`                 | Returns the receipt of a transaction by transaction hash                                                  | [view method](#) |
| `eth_getUncleByBlockHashAndIndex`           | Returns information about a uncle of a block by hash and uncle index position                             | [view method](#) |
| `eth_getUncleByBlockNumberAndIndex`         | Returns information about an uncle of a block by block number and index position                          | [view method](#) |
| `eth_GetUncleCountByBlockHash`              | Returns the number of uncles in a block from a block matching the provided block hash                     | [view method](#) |
| `eth_GetUncleCountByBlockNumber`            | Returns the number of uncles in a block matching the provided block number                                | [view method](#) |
| `eth_getWork`                               | Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target')      | [view method](#) |
| `eth_hashrate`                              | Returns the number of hashes per second that the node is mining with                                      | [view method](#) |
| `eth_maxPriorityFeePerGas`                  | Get the priority fee needed to be included in a block                                                     | [view method](#) |
| `eth_mining`                                | Returns true if client is actively mining new blocks                                                      | [view method](#) |
| `eth_protocolVersion`                       | Returns the current ETH protocol version                                                                  | [view method](#) |
| `eth_sendRawTransaction`                    | Creates new message call transaction or a contract creation for signed transactions                       | [view method](#) |
| `eth_submitWork`                            | Used for submitting a proof-of-work solution                                                              | [view method](#) |
| `eth_syncing`                               | Returns the sync data                                                                                     | [view method](#) |
| `net_version`                               | Returns the ETH Network ID (ie Ethereum = 1, Fantom = 250, etc)                                           | [view method](#) |
| `net_listening`                             | Returns true if client is listening for network connections                                               | [view method](#) |
| `net_peerCount`                             | Returns number of peers connected to the client                                                           | [view method](#) |
| `web3_clientVersion`                        | Returns the current client version                                                                        | [view method](#) |
| `web3_sha3`                                 | Returns Keccak-256 (not the standardized SHA3-256) of the given data                                      | [view method](#) |


---

## Getting Started with Arbitrum One on Grove

To begin using Arbitrum One functionalities with Grove, follow these steps:

### 1. Set Up an Account on Grove
Begin by [creating an account on Grove](#). Create and configure your developer account to get access to our APIs and tools. This step is crucial for obtaining the necessary API keys and access permissions.

### 2. Integrate API Endpoints

Use our extensive API documentation to incorporate Arbitrum One functionalities into your application.

### 3. Example Code Snippet

   ```javascript
   // Example: Interacting with Arbitrum One
   const arbitrum_one_endpoint = "<Grove_Arbitrum_One_API_Endpoint>";
   // Replace with your API key
   const apiKey = "<Your_API_Key>";

   // Add your code here to interact with Arbitrum One
   ```

---

## Additional Resources

Join our developer community for support, discussions, and sharing best practices. Connect with us on [Grove Discord](#).
