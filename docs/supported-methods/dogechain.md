# Dogechain Mainnet

DogeChain is the underlying blockchain for Dogecoin (DOGE), a cryptocurrency featuring a likeness of the Shiba Inu dog from the "Doge" meme as its logo. It's known for its fast block time and low transaction fees. The DogeChain Supported Methods allow developers to interact with the DogeChain in various ways, including querying account balances, executing transactions, and more.

### Chain Relay IDs for Supported Methods
Each blockchain we support has a specific Portal API prefix and RelayChainID, which are integral parts of our supported methods functionality. These are used to correctly route and process requests.

| Blockchain | Portal API Prefix | RelayChainID |
|---------|-------------|-------------|
| Dogechain Mainnet | `dogechain-mainnet` | 0059 |

### Supported Methods
Supported methods are API functions specific to a given blockchain, enabling interaction with its distinct features. The following is a comprehensive list of our supported methods, along with brief descriptions to understand their purpose and functionality:

| Methods | Description |
|---------|-------------|
| `eth_blocknumber` | Returns the most recent block |
| `eth_call` | Call any read-only function on a deployed contract |
| `eth_chainId` | Returns the current network/chain ID, used to sign replay-protected transaction introduced in EIP155 |
| `eth_estimateGas` | Generates and returns an estimate of how much gas is necessary to allow the transaction to complete |
| `eth_gasPrice` | Returns current gas price in wei |
| `eth_getBalance` | Returns the balance of the given address |
| `eth_getBlockByHash` | Returns information about a block by hash |
| `eth_getBlockByNumber` | Returns information about a block by block number |
| `eth_getBlockTransactionCountByNumber` | Returns the number of transactions in a block matching the provided block number |
| `eth_getCode` | Returns a code indicating the type of address (i.e., Wallet v Contract) |
| `eth_getFilterChanges` | Polling method for a filter, which returns an array of logs which occurred since last poll |
| `eth_getFilterLogs` | Returns an array of all logs matching filter with given id |
| `eth_getLogs` | Returns an array of all logs matching a given filter object |
| `eth_getStorageAt` | Returns the value from a storage position at a given address |
| `eth_getTransactionByHash` | Returns information about a transaction at the specified hash |
| `eth_getTransactionCount` | Returns number of transactions sent from address |
| `eth_getTransactionReceipt` | Returns the receipt of a transaction by transaction hash |
| `eth_newBlockFilter` | Creates a filter in the node, to notify when a new block arrives |
| `eth_newFilter` | Creates a filter object, based on filter options, to notify when the state changes (logs) |
| `eth_sendRawTransaction` | Creates new message call transaction or a contract creation for signed transactions |
| `eth_syncing` | Returns the sync data |
| `eth_uninstallFilter` | Uninstalls a filter with the given ID |
| `net_version` | Returns the ETH Network ID |
| `net_listening` | Returns true if client is listening for network connections |
| `net_peerCount` | Returns number of peers connected to the client |
| `web3_clientVersion` | Returns the current client version |
| `web3_sha3` | Returns Keccak-256 (not the standardized SHA3-256) of the given data |
| `txpool_content` | Returns all pending and queued transactions |
| `txpool_inspect` | Returns a textual summary of all pending and queued transactions |
| `txpool_status` | Returns the number of transactions in pending and queued states |
