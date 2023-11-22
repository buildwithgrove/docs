# SUI

SUI is a robust blockchain designed to support complex financial applications. It offers a suite of on-chain features, tools, and services, making it ideal for developers to build and deploy advanced applications. The SUI supported methods enable a wide range of functionalities, such as querying balances, executing transactions, and interacting with SUI-based smart contracts.

- [SUI Developer Documentation](#)
- [SUI Community Forum](#)
- [SUI Github Repository](#)

---

## SUI on Grove

Grove offers extensive support for SUI, providing developers with the tools and services necessary to build on this advanced blockchain platform. Our integration allows for seamless interaction with the SUI network, enhancing the development experience for complex financial applications.

---

## Supported Chain Variants

Grove supports the mainnet of SUI:

### SUI Mainnet

`sui-mainnet`

This is the primary network of SUI, optimized for high-performance financial applications.

---

## Chain Relay IDs for Supported Methods

| Blockchain  | Portal API Prefix | RelayChainID |
|-------------|-------------------|--------------|
| SUI Mainnet | `sui-mainnet`     | 0076         |

---

## Supported Methods

The following methods are supported on the SUI Mainnet, with links to detailed documentation:

| Methods                              | Description                                                                                                       | Documentation Link |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------|--------------------|
| `sui_devInspectTransactionBlock`     | Runs the transaction in dev-inspect mode, providing detailed results including transaction effects and return values. | [View method](#)  |
| `sui_dryRunTransactionBlock`         | Executes a transaction and returns the execution effects including gas cost summary, without committing to the chain. | [View method](#)  |
| `sui_executeTransactionBlock`        | Executes a transaction and waits for results if desired.                                                        | [View method](#)  |
| `sui_getChainIdentifier`             | Retrieves the chain's identifier.                                                                                | [View method](#)  |
| `sui_getCheckpoint`                  | Provides information on a specific checkpoint.                                                                   | [View method](#)  |
| `sui_getCheckpoints`                 | Returns a paginated list of checkpoints.                                                                         | [View method](#)  |
| `sui_getEvents`                      | Returns transaction events.                                                                                      | [View method](#)  |
| `sui_getLatestCheckpointSequenceNumber` | Returns the sequence number of the latest executed checkpoint.                                                  | [View method](#)  |
| `sui_getLoadedChildObjects`          | Return loaded child objects for specified transaction digest.                                                    | [View method](#)  |
| `sui_getMoveFunctionArgTypes`        | Returns the argument types of a Move function, based on normalized Type.                                         | [View method](#)  |
| `sui_getNormalizedMoveFunction`      | Returns a structured representation of a Move function.                                                          | [View method](#)  |
| `sui_getNormalizedMoveModule`        | Returns a structured representation of a Move module.                                                            | [View method](#)  |
| `sui_getNormalizedMoveModulesByPackage` | Returns structured representations of all modules in a given package.                                          | [View method](#)  |
| `sui_getNormalizedMoveStruct`        | Returns a structured representation of a Move struct.                                                            | [View method](#)  |
| `sui_getObject`                      | Returns the object information for a specified object.                                                           | [View method](#)  |
| `sui_getProtocolConfig`              | Returns the protocol config table for a specified version number.                                                | [View method](#)  |
| `sui_getTotalTransactionBlocks`      | Returns the total number of transactions known to the server.                                                    | [View method](#)  |
| `sui_getTransactionBlock`            | Returns the transaction response object.                                                                         | [View method](#)  |
| `sui_multiGetObjects`                | Returns the object data for a list of objects.                                                                   | [View method](#)  |
| `sui_multiGetTransactionBlocks`      | Returns an ordered list of transaction responses.                                                                | [View method](#)  |
| `sui_tryGetPastObject`               | Returns the object information for a specified version.                                                          | [View method](#)  |
| `sui_tryMultiGetPastObjects`         | Returns the object information for a specified version.                                                          | [View method](#)  |
| `suix_getAllBalances`                | Returns the total coin balance for all coin types, owned by the address owner.                                    | [View method](#)  |
| `suix_getAllCoins`                   | Returns all Coin objects owned by an address.                                                                    | [View method](#)  |
| `suix_getBalance`                    | Returns the total coin balance for one coin type, owned by the address owner.                                     | [View method](#)  |
| `suix_getCoinMetadata`               | Returns metadata(e.g., symbol, decimals) for a coin.                                                             | [View method](#)  |
| `suix_getCoins`                      | Returns all Coin `coin_type` objects owned by an address.                                                        | [View method](#)  |
| `suix_getCommitteeInfo`              | Returns the committee information for the asked `epoch`.                                                         | [View method](#)  |
| `suix_getDynamicFieldObject`         | Returns the dynamic field object information for a specified object.                                             | [View method](#)  |
| `suix_getDynamicFields`              | Returns the list of dynamic field objects owned by an object.                                                    | [View method](#)  |
| `suix_getLatestSuiSystemState`       | Returns the latest SUI system state object on-chain.                                                             | [View method](#)  |
| `suix_getOwnedObjects`               | Returns the list of objects owned by an address.                                                                 | [View method](#)  |
| `suix_getReferenceGasPrice`          | Returns the reference gas price for the network.                                                                 | [View method](#)  |
| `suix_getStakes`                     | Returns all [DelegatedStake].                                                                                    | [View method](#)  |
| `suix_getStakesByIds`                | Returns one or more [DelegatedStake].                                                                            | [View method](#)  |
| `suix_getTotalSupply`                | Returns the total supply for a coin.                                                                             | [View method](#)  |
| `suix_getValidatorsApy`              | Returns the validator APY.                                                                                       | [View method](#)  |
| `suix_queryEvents`                   | Returns a list of events for a specified query criteria.                                                         | [View method](#)  |
| `suix_queryTransactionBlocks`        | Returns a list of transactions for a specified query criteria.                                                   | [View method](#)  |
| `suix_resolveNameServiceAddress`     | Returns the resolved names given address.                                                                        | [View method](#)  |
| `suix_resolveNameServiceNames`       | Returns the resolved names given address.                                                                        | [View method](#)  |
| `suix_subscribeEvent`                | Subscribes to a stream of Sui event.                                                                             | [View method](#)  |
| `suix_subscribeTransaction`          | Subscribes to a stream of Sui transaction effects.                                                               | [View method](#)  |
| `unsafe_batchTransaction`            | Creates an unsigned batched transaction.                                                                         | [View method](#)  |
| `unsafe_mergeCoins`                  | Creates an unsigned transaction to merge multiple coins into one coin.                                           | [View method](#)  |
| `unsafe_moveCall`                    | Creates an unsigned transaction to execute a Move call on the network.                                           | [View method](#)  |
| `unsafe_pay`                         | Sends `Coin<T>` to a list of addresses.                                                                          | [View method](#)  |
| `unsafe_payAllSui`                   | Sends all SUI coins to one recipient.                                                                            | [View method](#)  |
| `unsafe_paySui`                      | Sends SUI coins to a list of addresses.                                                                          | [View method](#)  |

---

## Getting Started with SUI on Grove

To start utilizing SUI's features via Grove, follow these steps:

### 1. Set Up an Account on Grove

Create your Grove account [here](#). [Instructions for account setup and management].

### 2. Copy your SUI endpoint URL

Locate and copy the SUI Mainnet endpoint URL on Grove.

### 3. Integrate API Endpoints

Incorporate Grove's API endpoints into your application as required.

### Example Code Snippet

A basic JavaScript example to connect with SUI Mainnet:

```javascript
// Example: Interacting with SUI Mainnet
const sui_endpoint = "<Grove_SUI_API_Endpoint>";
const apiKey = "<Your_API_Key>";
// Insert your SUI interaction code here
