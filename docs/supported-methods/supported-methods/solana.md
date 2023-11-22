# Solana

Solana is a high-performance blockchain that supports the development of scalable crypto applications worldwide. Its unique architecture facilitates rapid transaction processing and high throughput. Solana's supported methods allow developers to integrate its features into their applications, including querying balances, executing transactions, and interacting with SOL-based smart contracts.

- [Solana documentation](https://docs.solana.com/)
- [Solana Cookbook](https://solanacookbook.com/)
- [Solana Discord](https://discord.gg/solana)
- [Q&A platform](https://solana.stackexchange.com/)

---

## Solana on Grove

Solana is a high-performance blockchain platform designed for the development of decentralized applications (dApps). It's known for its high throughput and scalability, making it a popular choice for developers looking to build fast and efficient blockchain-based solutions.

---

## Supported Chain Variants

Grove supports both the standard and custom nodes of Solana:

### Solana Mainnet

`solana-mainnet`

The standard node, optimized for high-performance transactions and real-time data queries on the Solana blockchain.

### Solana Custom

`solana-mainnet-custom`

Solana Custom is Grove and Pocket Network's custom flavor of the Solana Blockchain that provides enhanced historical and indexing capabilities for users while limiting the hardware and infrastructure requirements of Node Suppliers.

See [Solana Custom](#solana-custom-api) for more information.

---

## Chain Relay IDs for Supported Methods

| Blockchain     | Portal API Prefix      | RelayChainID |
|----------------|------------------------|--------------|
| Solana Mainnet | `solana-mainnet`       | 0006         |
| Solana Custom  | `solana-mainnet-custom`| C006         |

---


## Supported Methods
Supported methods are API functions specific to a given blockchain, enabling interaction with its distinct features. The following is a comprehensive list of our supported methods, along with brief descriptions to understand their purpose and functionality:
| Methods | Description | Documentation Link |
| --- | --- | --- |
| `getAccountInfo` | Returns all information associated with the account of provided Pubkey | [View method](#) |
| `getBalance` | Returns the balance of the account of provided Pubkey | [View method](#) |
| `getBlockHeight` | Returns the current block height of the node | [View method](#) |
| `getBlock` | Returns identity and transaction information about a confirmed block in the ledger | [View method](#) |
| `getBlockProduction` | Returns recent block production information from the current or previous epoch. | [View method](#) |
| `getBlockCommitment` | Returns commitment for particular block | [View method](#) |
| `getBlocks` | Returns a list of confirmed blocks between two slots | [View method](#) |
| `getBlocksWithLimit` | Returns a list of confirmed blocks starting at the given slot | [View method](#) |
| `getBlockTime` | Returns the estimated production time of a block. | [View method](#) |
| `getClusterNodes` | Returns information about all the nodes participating in the cluster | [View method](#) |
| `getEpochInfo` | Returns information about the current epoch | [View method](#) |
| `getEpochSchedule` | Returns the epoch schedule information from this cluster's genesis config | [View method](#) |
| `getFeeForMessage` | Get the fee the network will charge for a particular Message | [View method](#) |
| `getFirstAvailableBlock` | Returns the slot of the lowest confirmed block that has not been purged from the ledger | [View method](#) |
| `getGenesisHash` | Returns the genesis hash | [View method](#) |
| `getHealth` | Returns the current health of the node. | [View method](#) |
| `getHighestSnapshotSlot` | Returns the highest slot information that the node has snapshots for. | [View method](#) |
| `getIdentity` | Returns the identity pubkey for the current node | [View method](#) |
| `getInflationGovernor` | Returns the current inflation governor | [View method](#) |
| `getInflationRate` | Returns the specific inflation values for the current epoch | [View method](#) |
| `getInflationReward` | Returns the inflation / staking reward for a list of addresses for an epoch | [View method](#) |
| `getLargestAccounts` | Returns the 20 largest accounts, by lamport balance (results may be cached up to two hours) | [View method](#) |
| `getLatestBlockhash` | Returns the latest blockhash | [View method](#) |
| `getLeaderSchedule` | Returns the leader schedule for an epoch | [View method](#) |
| `getMaxRetransmitSlot` | Get the max slot seen from retransmit stage. | [View method](#) |
| `getMaxShredInsertSlot` | Get the max slot seen from after shred insert. | [View method](#) |
| `getMinimumBalanceForRentExemption` | Returns minimum balance required to make account rent exempt. | [View method](#) |
| `getMultipleAccounts` | Returns the account information for a list of Pubkeys. | [View method](#) |
| `getProgramAccounts` | Returns all accounts owned by the provided program Pubkey | [View method](#) |
| `getRecentPerformanceSamples` | Returns a list of recent performance samples, in reverse slot order. Performance samples are taken every 60 seconds and include the number of transactions and slots that occur in a given time window. | [View method](#) |
| `getRecentPrioritizationFees` | Returns a list of prioritization fees from recent blocks. | [View method](#) |
| `getSignaturesForAddres` | Returns signatures for confirmed transactions that include the given address in their accountKeys list. Returns signatures backwards in time from the provided signature or most recent confirmed block | [View method](#) |
| `getSignatureStatuses` | Returns the statuses of a list of signatures. Each signature must be a txid, the first signature of a transaction. | [View method](#) |
| `getSlot` | Returns the slot that has reached the given or default commitment level | [View method](#) |
| `getSlotLeader` | Returns the current slot leader | [View method](#) |
| `getSlotLeaders` | Returns the slot leaders for a given slot range | [View method](#) |
| `getStakeActivation` | Returns epoch activation information for a stake account | [View method](#) |
| `getStakeMinimumDelegation` | Returns the stake minimum delegation, in lamports. | [View method](#) |
| `getSupply` | Returns information about the current supply. | [View method](#) |
| `getTokenAccountBalance` | Returns the token balance of an SPL Token account. | [View method](#) |
| `getTokenAccountsByDelegate` | Returns all SPL Token accounts by approved Delegate. | [View method](#) |
| `getTokenAccountsByOwner` | Returns all SPL Token accounts by token owner. | [View method](#) |
| `getTokenLargestAccounts` | Returns the 20 largest accounts of a particular SPL Token type. | [View method](#) |
| `getTokenSupply` | Returns the total supply of an SPL Token type. | [View method](#) |
| `getTransaction` | Returns transaction details for a confirmed transaction | [View method](#) |
| `getTransactionCount` | Returns the current Transaction count from the ledger | [View method](#) |
| `getVersion` | Returns the current Solana version running on the node | [View method](#) |
| `getVoteAccounts` | Returns the account info and associated stake for all the voting accounts in the current bank. | [View method](#) |
| `isBlockhashValid` | Returns whether a blockhash is still valid or not | [View method](#) |
| `minimumLedgerSlot` | Returns the lowest slot that the node has information about in its ledger. | [View method](#) |
| `requestAirdrop` | Requests an airdrop of lamports to a Pubkey | [View method](#) |
| `sendTransaction` | Submits a signed transaction to the cluster for processing. | [View method](#) |
| `simulateTransaction` | Simulate sending a transaction | [View method](#) |

---

## Solana Custom — Additional Capabilities

Solana Custom also offers the following Programs and [SPL](https://spl.solana.com/)s as well as historical data retention:
- Supports 6 epochs of historical data
- Solana [Kin Program](https://solana.com/ecosystem/kin)
- [Token Program](https://spl.solana.com/token) with Indexing
- [Associated Token Account Program](https://spl.solana.com/associated-token-account)

### Node Configuration

Solana Custom uses a unique configuration. In addition to custom pruning logic to retain at least the previous 6 epochs, our recommended configuration flags are: 
```
--account-index program-id spl-token-owner spl-token-mint
```

---

## Getting Started with Solana on Grove

To begin using Solana functionalities via Grove, follow these steps:

### 1. Set Up an Account on Grove

Create an account on Grove by [signing up here](#). Follow the provided instructions for account setup and management.

### 2. Copy Your Solana Endpoint URL

Locate and copy the endpoint URL specific to the Solana Mainnet or Solana Custom on Grove.

### 3. Integrate API Endpoints

Incorporate Grove's API endpoints into your application as required.

### Example Code Snippet

A basic JavaScript example to get started with Solana Mainnet:

```javascript
// Example: Interacting with Solana Mainnet
const solana_endpoint = "<Grove_Solana_API_Endpoint>";
const apiKey = "<Your_API_Key>";
// Insert your Solana interaction code here
