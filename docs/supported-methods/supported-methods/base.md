# Base

Base is an open-source optimistic rollup built on the Ethereum blockchain. Rollups are L2 blockchains designed to enhance the scalability of layer one (L1) blockchains like Bitcoin and Ethereum. By bundling hundreds of transactions and submitting them to L1 as a single transaction, rollups significantly reduce gas fees for the end user. Base was pioneered by Coinbase using Optimism’s OP stack, marking it as the second L2 deployed on the OP Stack after the Optimism Mainnet. Its EVM compatibility ensures that developers can effortlessly deploy their EVM codebase from Ethereum and other compatible chains directly to Base. For a deeper understanding of the specific methods for Base, refer to their official documentation [here](#).


### Chain Relay IDs for Supported Methods

Each blockchain we support has a specific Portal API prefix and RelayChainID, which are integral parts of our supported methods functionality. These are used to correctly route and process requests.

| Blockchain   | Portal API Prefix | RelayChainID | Blockheight       |
|--------------|-------------------|--------------|-------------------|
| Base Mainnet | base-mainnet      | 0079         | All block heights |
| Base Testnet | base-testnet      | 0080         | All block heights |


### Archival and Non-Archival Support

For both the Base and Base Testnet blockchains, both Archival and Non-Archival requests are supported. Developers can use a singular Endpoint for accessing both Archival and Non-Archival data. This simplifies the process and ensures that you have access to comprehensive blockchain data without needing to switch between different Endpoints.


### Supported Methods
Supported methods are API functions specific to a given blockchain, enabling interaction with its distinct features. The following is a comprehensive list of our supported methods, along with brief descriptions to understand their purpose and functionality:

| Methods | Description |
|---------|-------------|
| `eth_accounts` | Returns list of addresses owned by the client |
| `eth_blocknumber` | Returns the most recent block |
| `eth_call` | Call any read-only function on a deployed contract |
| `eth_chainId` | Returns the current network/chain ID, used to sign replay-protected transaction introduced in EIP155 |
| `eth_createAccessList` | Creates an EIP-2930 access list that you can include in a transaction |
| `eth_estimateGas` | Generates and returns an estimate of how much gas is necessary to allow the transaction to complete |
| `eth_feeHistory` | Returns historical gas information, allowing you to track trends over time |
| `eth_gasPrice` | Returns current gas price in wei |
| `eth_getBalance` | Returns the balance of the given address |
| `eth_getBlockByHash` | Returns information about a block by hash |
| `eth_getBlockByNumber` | Returns information about a block by block number |
| `eth_getBlockTransactionCountByHash` | Returns the number of transactions in a block from a block matching the hash provided |
| `eth_getBlockTransactionCountByNumber` | Returns the number of transactions in a block matching the provided block number |
| `eth_getCode` | Returns a code indicating the type of address (i.e., Wallet v Contract) |
| `eth_getLogs` | Returns an array of all logs matching a given filter object |
| `eth_getProof` | Returns the account and storage values of the specified account including the Merkle-proof |
| `eth_getStorageAt` | Returns the value from a storage position at a given address |
| `eth_getTransactionByBlockHashAndIndex` | Returns information about a transaction by block hash and transaction index position |
| `eth_getTransactionByBlockNumberAndIndex` | Returns information about a transaction by block number and transaction index position |
| `eth_getTransactionByHash` | Returns information about a transaction at the specified hash |
| `eth_getTransactionCount` | Returns number of transactions sent from address |
| `eth_getTransactionReceipt` | Returns the receipt of a transaction by transaction hash |
| `eth_getUncleByBlockHashAndIndex` | Returns information about an uncle of a block by hash and uncle index position |
| `eth_getUncleByBlockNumberAndIndex` | Returns information about an uncle of a block by block number and index position |
| `eth_getUncleCountByBlockHash` | Returns the number of uncles in a block from a block matching the provided block hash |
| `eth_getUncleCountByBlockNumber` | Returns the number of uncles in a block matching the provided block number |
| `eth_getWork` | Returns the hash of the current block, the seedHash, and the boundary condition to be met ('target') |
| `eth_hashrate` | Returns the number of hashes per second that the node is mining with |
| `eth_maxPriorityFeePerGas` | Get the priority fee needed to be included in a block |
| `eth_mining` | Returns true if client is actively mining new blocks |
| `eth_protocolVersion` | Returns the current ETH protocol version |
| `eth_sendRawTransaction` | Creates new message call transaction or a contract creation for signed transactions |
| `eth_submitWork` | Used for submitting a proof-of-work solution |
| `eth_syncing` | Returns the sync data |

> Due to the permissionless, decentralized nature of the node network, not all nodes are configured the same. The following methods may be supported by some nodes but not others. It is possible to return an error if a node is hit that does not support these methods.

| Methods                                | Description                                                                                                                                                     |
|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `net_version` | Returns the ETH Network ID |
| `net_listening` | Returns true if client is listening for network connections |
| `net_peerCount` | Returns number of peers connected to the client |
| `web3_clientVersion` | Returns the current client version |
| `web3_sha3` | Returns Keccak-256 (not the standardized SHA3-256) of the given data |
| `txpool_content` | Returns all pending and queued transactions |
| `txpool_inspect` | Returns a textual summary of all pending and queued transactions |
| `txpool_status` | Returns the number of transactions in pending and queued states |
