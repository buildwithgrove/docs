# Velas

Velas is a self-learning and optimized blockchain platform for secure, interoperable, extremely scalable transactions, and smart contracts. The Velas supported methods provide developers with tools to build on the Velas network, such as functionalities for querying balances, executing transactions, and interacting with VLX-based smart contracts.

For Velas we maintain an Archival network. If you are accessing data from 128 blocks ago or earlier, please ensure to use Archival. This allows you to query historical data while also ensuring optimal performance. The supported methods for the archival chains are identical to their non-archival counterparts.

### Chain Relay IDs for Supported Methods
Each blockchain we support has a specific Portal API prefix and RelayChainID, which are integral parts of our supported methods functionality. These are used to correctly route and process requests.

| Blockchain | Portal API Prefix | RelayChainID | Blockheight |
|---------|-------------|-------------|-------------|
| `Velas Mainnet` | velas-mainnet | 0067 | Latest - 127 blocks |
| `Velas Mainnet Archival` | velas-mainnet-archival | 0068 | 128 blocks + |

### Archive Data
For Velas we support Archival nodes. If you are accessing data from 128 blocks ago or earlier, please ensure to use Archival chain. This allows you to query historical data while also ensuring optimal performance. The supported methods for the archival chains are identical to their non-archival counterparts.


### Supported Methods
Supported methods are API functions specific to a given blockchain, enabling interaction with its distinct features. The following is a comprehensive list of our supported methods, along with brief descriptions to understand their purpose and functionality:


| Methods                             | Description   |
|-------------------------------------|---------------|
| `eth_accounts`                      | Returns list of addresses owned by the client |
| `eth_blocknumber`                   | Returns the most recent block |
| `eth_call`                          | Call any read-only function on a deployed contract |
| `eth_chainId`                       | Returns the current network/chain ID, used to sign replay-protected transaction introduced in EIP155 |
| `eth_estimateGas`                   | Generates and returns an estimate of how much gas is necessary to allow the transaction to complete. (NOTE: This estimate is likely significantly more than the actual cost, for a variety of reasons) |
| `eth_gasPrice`                      | Returns current gas price in wei |
| `eth_getBalance`                    | Returns the balance of the given address |
| `eth_getBlockbyNumber`              | Returns information about a block by block number |
| `eth_getBlockTransactionCountByHash`| Returns the number of transactions in a block from a block matching the hash provided |
| `eth_getStorageAt`                  | Returns the value from a storage position at a given address |
| `eth_getTransactionByHash`          | Returns information about a transaction at the specified hash |
| `eth_getTransactionCount`           | Returns number of transactions sent from address |
| `eth_getTransactionReceipt`         | Returns the receipt of a transaction by transaction hash |
| `eth_getUncleByBlockHashAndIndex`   | Returns information about a uncle of a block by hash and uncle index position |
| `eth_getUncleByBlockNumberAndIndex` | Returns information about an uncle of a block by block number and index position |
| `eth_sendRawTransaction`            | Creates new message call transaction or a contract creation for signed transactions |
