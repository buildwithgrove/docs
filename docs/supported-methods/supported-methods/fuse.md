# Fuse

Fuse is a blockchain ecosystem designed to be a platform for the easy creation and operation of community-driven currencies and payment systems. With the Fuse supported methods, developers can perform actions like querying balances, executing transactions, and interacting with smart contracts on the Fuse network.

### Chain Relay IDs for Supported Methods
Each blockchain we support has a specific Portal API prefix and RelayChainID, which are integral parts of our supported methods functionality. These are used to correctly route and process requests.

| Blockchain | Portal API Prefix | RelayChainID | Blockheight |
|---------|-------------|-------------|-------------|
| Fuse | `fuse-mainnet` | 0005 | Latest - 127 blocks |

### Supported Methods
Supported methods are API functions specific to a given blockchain, enabling interaction with its distinct features. The following is a comprehensive list of our supported methods, along with brief descriptions to understand their purpose and functionality:

| Methods | Description |
| --- | --- |
| `eth_blocknumber` | returns the most recent block |
| `eth_call` | Call any read-only function on a deployed contract |
| `eth_chainId` | Returns the current network/chain ID, used to sign replayprotected transaction introduced in EIP155. |
| `eth_estimateGas` | Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. (NOTE: This estimate is likely significantly more than the actual cost, for a variety of reasons) |
| `eth_gasPrice` | returns current gas price in wei |
| `eth_getBalance` | returns the balance of the given address |
| `eth_getBlockByHash` | Returns information about a block by hash |
| `eth_getBlockbyNumber` | Returns information about a block by block number |
| `eth_getBlockTransactionCountByNumber` | Returns the number of transactions in a block matching the provided block number |
| `eth_getCode` | Returns a code indicating the type of address (ie Wallet v Contract) |
| `eth_getLogs` | Returns an array of all logs matching a given filter object. |
| `eth_getStorageAt` | returns the value from a storage position at a given address |
| `eth_getTransactionByHash` | Returns information about a transaction at the specified hash |
| `eth_getTransactionCount` | Returns number of transactions sent from address |
| `eth_getTransactionReceipt` | Returns the receipt of a transaction by transaction hash. |
| `eth_sendRawTransaction` | Creates new message call transaction or a contract creation for signed transactions |
| `eth_syncing` | Returns the sync data |


> Due to the permissionless, decentralized nature of the node network, not all nodes are configured the same. The following methods may be supported by some nodes but not others. It is possible to return an error if a node is hit that does not support these methods.

| Methods                                | Description                                                                                                                                                     |
|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `net_version` | returns the ETH Network ID (ie Ethereum = 1, Fantom = 250, etc) |
| `net_listening` | returns true if client is listening for network connections |
| `net_peerCount` | returns number of peers connected to the client |
| `web3_clientVersion` | Returns the current client version. |
| `web3_sha3` | Returns Keccak-256 (not the standardized SHA3-256) of the given data. |
| `txpool_content` | Returns all pending and queued transactions |
| `txpool_inspect` | Returns a textual summary of all pending and queued transactions |
| `txpool_status` | Returns the number of transactions in pending and queued states |
