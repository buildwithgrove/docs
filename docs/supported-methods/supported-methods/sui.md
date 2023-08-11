# SUI

SUI is a robust blockchain designed to support complex financial applications. It provides a suite of on-chain features, tools, and services. The SUI supported methods offer a wide range of functionalities for developers to integrate with the SUI network, such as querying balances, executing transactions, interacting with SUI-based smart contracts, and more.

### Chain Relay IDs for Supported Methods
Each blockchain we support has a specific Portal API prefix and RelayChainID, which are integral parts of our supported methods functionality. These are used to correctly route and process requests.

| Blockchain | Portal API Prefix | RelayChainID |
|---------|-------------|-------------|
| Sui Mainnet | `sui-mainnet` | 0076 |

### Supported Methods
Supported methods are API functions specific to a given blockchain, enabling interaction with its distinct features. The following is a comprehensive list of our supported methods, along with brief descriptions to understand their purpose and functionality:

| Methods | Description |
| --- | --- |
| `sui_devInspectTransactionBlock` | Runs the transaction in dev-inspect mode. Detailed results are provided, including both the transaction effects and any return values. |
| `sui_dryRunTransactionBlock` | Returns transaction execution effects including the gas cost summary, without committing the effects to the chain. |
| `sui_executeTransactionBlock` | Executes the transaction and waits for results if desired. |
| `sui_getChainIdentifier` | Returns the chain's identifier. |
| `sui_getCheckpoint` | Returns a checkpoint. |
| `sui_getCheckpoints` | Returns a paginated list of checkpoints. |
| `sui_getEvents` | Returns transaction events. |
| `sui_getLatestCheckpointSequenceNumber` | Returns the sequence number of the latest executed checkpoint. |
| `sui_getLoadedChildObjects` | Return loaded child objects for specified transaction digest |
| `sui_getMoveFunctionArgTypes` | Returns the argument types of a Move function, based on normalized Type. |
| `sui_getNormalizedMoveFunction` | Returns a structured representation of a Move function. |
| `sui_getNormalizedMoveModule` | Returns a structured representation of a Move module. |
| `sui_getNormalizedMoveModulesByPackage` | Returns structured representations of all modules in a given package. |
| `sui_getNormalizedMoveStruct` | Returns a structured representation of a Move struct. |
| `sui_getObject` | Returns the object information for a specified object. |
| `sui_getProtocolConfig` | Returns the protocol config table for a specified version number. |
| `sui_getTotalTransactionBlocks` | Returns the total number of transactions known to the server. |
| `sui_getTransactionBlock` | Returns the transaction response object. |
| `sui_multiGetObjects` | Returns the object data for a list of objects. |
| `sui_multiGetTransactionBlocks` | Returns an ordered list of transaction responses. |
| `sui_tryGetPastObject` | Returns the object information for a specified version. |
| `sui_tryMultiGetPastObjects` | Returns the object information for a specified version. |
| `suix_getAllBalances` | Returns the total coin balance for all coin types, owned by the address owner. |
| `suix_getAllCoins` | Returns all Coin objects owned by an address. |
| `suix_getBalance` | Returns the total coin balance for one coin type, owned by the address owner. |
| `suix_getCoinMetadata` | Returns metadata(e.g., symbol, decimals) for a coin. |
| `suix_getCoins` | Returns all Coin `coin_type` objects owned by an address. |
| `suix_getCommitteeInfo` | Returns the committee information for the asked `epoch`. |
| `suix_getDynamicFieldObject` | Returns the dynamic field object information for a specified object. |
| `suix_getDynamicFields` | Returns the list of dynamic field objects owned by an object. |
| `suix_getLatestSuiSystemState` | Returns the latest SUI system state object on-chain. |
| `suix_getOwnedObjects` | Returns the list of objects owned by an address. |
| `suix_getReferenceGasPrice` | Returns the reference gas price for the network. |
| `suix_getStakes` | Returns all [DelegatedStake]. |
| `suix_getStakesByIds` | Returns one or more [DelegatedStake]. |
| `suix_getTotalSupply` | Returns the total supply for a coin. |
| `suix_getValidatorsApy` | Returns the validator APY. |
| `suix_queryEvents` | Returns a list of events for a specified query criteria. |
| `suix_queryTransactionBlocks` | Returns a list of transactions for a specified query criteria. |
| `suix_resolveNameServiceAddress` | Returns a list of transactions for a specified query criteria. |
| `suix_resolveNameServiceNames` | Returns the resolved names given address. |
| `suix_subscribeEvent` | Subscribes to a stream of Sui event. |
| `suix_subscribeTransaction` | Subscribes to a stream of Sui transaction effects. |
| `unsafe_batchTransaction` | Creates an unsigned batched transaction. |
| `unsafe_mergeCoins` | Creates an unsigned transaction to merge multiple coins into one coin. |
| `unsafe_moveCall` | Creates an unsigned transaction to execute a Move call on the network. |
| `unsafe_pay` | Sends `Coin<T>` to a list of addresses. |
| `unsafe_payAllSui` | Sends all SUI coins to one recipient. |
| `unsafe_paySui` | Sends SUI coins to a list of addresses. |
