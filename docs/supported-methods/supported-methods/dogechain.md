# Dogechain

DogeChain is a distinctive, community-driven, open-source, and decentralized blockchain platform utilizing the Proof of Work (PoW) consensus mechanism. Originating as a fork of the Ethereum blockchain, DogeChain offers seamless compatibility with Ethereum-based decentralized applications (DApps) and smart contracts. It is specifically designed to overcome the limitations of the Dogecoin blockchain, such as slow transaction speeds and high fees, while preserving its fundamental characteristics and meme-centric culture.

#### Developer Resources

- DogeChain Developer Documentation: [DogeChain Docs](https://docs.dogechain.dog/docs/overview)
- DogeChain Community Forum: [DogeChain Twitter](https://twitter.com/DogeSwap_fans)
- DogeChain Github Repository: [DogeChain GitHub](https://github.com/dogechain-lab/dogechain)

## Chain Relay IDs for Supported Methods
Each blockchain we support has a specific Portal API prefix and RelayChainID, which are integral parts of our supported methods functionality. These are used to correctly route and process requests.

| Blockchain | Portal API Prefix | RelayChainID |
|---------|-------------|-------------|
| Dogechain Mainnet | `dogechain-mainnet` | 0059 |

## Supported Methods
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
| `eth_getLogs` | Returns an array of all logs matching a given filter object |
| `eth_getStorageAt` | Returns the value from a storage position at a given address |
| `eth_getTransactionByHash` | Returns information about a transaction at the specified hash |
| `eth_getTransactionCount` | Returns number of transactions sent from address |
| `eth_getTransactionReceipt` | Returns the receipt of a transaction by transaction hash |
| `eth_sendRawTransaction` | Creates new message call transaction or a contract creation for signed transactions |
| `eth_syncing` | Returns the sync data |