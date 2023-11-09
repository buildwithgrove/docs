# Solana Custom

Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale. Solana's unique architecture allows for fast transaction processing and high throughput. The Solana supported methods provide developers with functionalities to integrate Solana's features into their applications, such as querying balances, executing transactions, and interacting with SOL-based smart contracts.

**Solana Custom** is Grove and Pocket Network's custom flavor of the Solana Blockchain that provides enhanced historical and indexing capabilities for users while limiting the hardware and infrastructure requirements of Node Suppliers.  See [Additional Capabilities](#additional-capabilities) for more information.

### Chain Relay IDs for Supported Methods
Each blockchain we support has a specific Portal API prefix and RelayChainID, which are integral parts of our supported methods functionality. These are used to correctly route and process requests.

| Blockchain | Portal API Prefix | RelayChainID |
|---------|-------------|-------------|
| Solana | `solana-mainnet-custom` | C006 |

### Supported Methods
Supported methods are API functions specific to a given blockchain, enabling interaction with its distinct features. The following is a comprehensive list of our supported methods, along with brief descriptions to understand their purpose and functionality:

| Methods | Description |
| --- | --- |
| `getAccountInfo` | Returns all information associated with the account of provided Pubkey |
| `getBalance` | Returns the balance of the account of provided Pubkey |
| `getBlockHeight` | Returns the current block height of the node |
| `getBlock` | Returns identity and transaction information about a confirmed block in the ledger |
| `getBlockProduction` | Returns recent block production information from the current or previous epoch. |
| `getBlockCommitment` | Returns commitment for particular block |
| `getBlocks` | Returns a list of confirmed blocks between two slots |
| `getBlocksWithLimit` | Returns a list of confirmed blocks starting at the given slot |
| `getBlockTime` | Returns the estimated production time of a block. |
| `getClusterNodes` | Returns information about all the nodes participating in the cluster |
| `getEpochInfo` | Returns information about the current epoch |
| `getEpochSchedule` | Returns the epoch schedule information from this cluster's genesis config |
| `getFeeForMessage` | Get the fee the network will charge for a particular Message |
| `getFirstAvailableBlock` | Returns the slot of the lowest confirmed block that has not been purged from the ledger |
| `getGenesisHash` | Returns the genesis hash |
| `getHealth` | Returns the current health of the node. |
| `getHighestSnapshotSlot` | Returns the highest slot information that the node has snapshots for. |
| `getIdentity` | Returns the identity pubkey for the current node |
| `getInflationGovernor` | Returns the current inflation governor |
| `getInflationRate` | Returns the specific inflation values for the current epoch |
| `getInflationReward` | Returns the inflation / staking reward for a list of addresses for an epoch |
| `getLargestAccounts` | Returns the 20 largest accounts, by lamport balance (results may be cached up to two hours) |
| `getLatestBlockhash` | Returns the latest blockhash |
| `getLeaderSchedule` | Returns the leader schedule for an epoch |
| `getMaxRetransmitSlot` | Get the max slot seen from retransmit stage. |
| `getMaxShredInsertSlot` | Get the max slot seen from after shred insert. |
| `getMinimumBalanceForRentExemption` | Returns minimum balance required to make account rent exempt. |
| `getMultipleAccounts` | Returns the account information for a list of Pubkeys. |
| `getProgramAccounts` | Returns all accounts owned by the provided program Pubkey |
| `getRecentPerformanceSamples` | Returns a list of recent performance samples, in reverse slot order. Performance samples are taken every 60 seconds and include the number of transactions and slots that occur in a given time window. |
| `getRecentPrioritizationFees` | Returns a list of prioritization fees from recent blocks. |
| `getSignaturesForAddres` | Returns signatures for confirmed transactions that include the given address in their accountKeys list. Returns signatures backwards in time from the provided signature or most recent confirmed block |
| `getSignatureStatuses` | Returns the statuses of a list of signatures. Each signature must be a txid, the first signature of a transaction. |
| `getSlot` | Returns the slot that has reached the given or default commitment level |
| `getSlotLeader` | Returns the current slot leader |
| `getSlotLeaders` | Returns the slot leaders for a given slot range |
| `getStakeActivation` | Returns epoch activation information for a stake account |
| `getStakeMinimumDelegation` | Returns the stake minimum delegation, in lamports. |
| `getSupply` | Returns information about the current supply. |
| `getTokenAccountBalance` | Returns the token balance of an SPL Token account. |
| `getTokenAccountsByDelegate` | Returns all SPL Token accounts by approved Delegate. |
| `getTokenAccountsByOwner` | Returns all SPL Token accounts by token owner. |
| `getTokenLargestAccounts` | Returns the 20 largest accounts of a particular SPL Token type. |
| `getTokenSupply` | Returns the total supply of an SPL Token type. |
| `getTransaction` | Returns transaction details for a confirmed transaction |
| `getTransactionCount` | Returns the current Transaction count from the ledger |
| `getVersion` | Returns the current Solana version running on the node |
| `getVoteAccounts` | Returns the account info and associated stake for all the voting accounts in the current bank. |
| `isBlockhashValid` | Returns whether a blockhash is still valid or not |
| `minimumLedgerSlot` | Returns the lowest slot that the node has information about in its ledger. |
| `requestAirdrop` | Requests an airdrop of lamports to a Pubkey |
| `sendTransaction` | Submits a signed transaction to the cluster for processing. |
| `simulateTransaction` | Simulate sending a transaction |

### Additional Capabilities

**Solana Custom** also offers the following Programs and [SPL](https://spl.solana.com/)s as well as historical data retention:
- Supports 6 epochs of historical data
- Solana [Kin Program](https://solana.com/ecosystem/kin)
- [Token Program](https://spl.solana.com/token) with Indexing
- [Associated Token Account Program](https://spl.solana.com/associated-token-account)

### Node Configuration

**Solana Custom** uses a unique configuration. In addition to custom pruning logic to retain at least the previous 6 epochs, our recommended configuration flags are: 
```
--account-index program-id spl-token-owner spl-token-mint
```