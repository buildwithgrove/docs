# Osmosis

Osmosis is a self-evolving, customizable, and interoperable DeFi hub built on the Cosmos network. With Osmosis's supported methods, developers can effectively interact with the Osmosis chain, executing transactions, querying balances, and leveraging other functionalities to build and optimize their decentralized applications.

- [Osmosis Developer Documentation](https://docs.osmosis.zone/)
- [Osmosis Community Forum](https://forum.osmosis.zone/)
- [Osmosis Github Repository](https://github.com/osmosis-labs/osmosis)

---

## Osmosis on Grove

Grove's integration with Osmosis extends its capabilities to the Cosmos network, offering developers the tools needed to interact with and leverage the Osmosis chain in their projects.

---

## Supported Chain Variants

Grove supports the mainnet of Osmosis:

### Osmosis Mainnet
`osmosis-mainnet`

This is the primary network of Osmosis, enabling a variety of DeFi operations and cross-chain functionality.

---

## Chain Relay IDs for Supported Methods

| Blockchain     | Portal API Prefix  | RelayChainID |
|----------------|--------------------|--------------|
| Osmosis Mainnet| `osmosis-mainnet`  | 0054         |

---

## Supported Methods

The following methods are available on Osmosis:

| Methods                      | Description                                                                                                   | Documentation Link |
|------------------------------|---------------------------------------------------------------------------------------------------------------|--------------------|
| `health`                     | Get node health. Returns empty result (200 OK) on success, no response - in case of an error.                 | [View method](#)  |
| `status`                     | Get Tendermint status including node info, pubkey, latest block hash, app hash, block height, and more.       | [View method](#)  |
| `net_info`                   | Get network info.                                                                                             | [View method](#)  |
| `blockchain`                 | Get block headers within a specified height range, in descending order.                                       | [View method](#)  |
| `header`                     | Retrieve the block header for a specified height.                                                             | [View method](#)  |
| `header_by_hash`             | Retrieve the block header by block hash.                                                                      | [View method](#)  |
| `block`                      | Get Block information.                                                                                        | [View method](#)  |
| `block_by_hash`              | Get block information by hash.                                                                                | [View method](#)  |
| `block_results`              | Get block_results information.                                                                                | [View method](#)  |
| `get_commit`                 | Get Commit information.                                                                                       | [View method](#)  |
| `validators`                 | Get Validators information, sorted by voting power and address.                                               | [View method](#)  |
| `genesis`                    | Get the genesis document.                                                                                     | [View method](#)  |
| `genesis_chunked`            | Get genesis document in a paginated format.                                                                   | [View method](#)  |
| `dump_consensus_state`       | Get consensus state (unsafe to call during block execution).                                                  | [View method](#)  |
| `consensus_state`            | Get consensus state information.                                                                              | [View method](#)  |
| `consensus_params`           | Get consensus parameters.                                                                                     | [View method](#)  |
| `unconfirmed_txs`            | Get list of unconfirmed transactions.                                                                         | [View method](#)  |
| `num_unconfirmed_txs`        | Get data about unconfirmed transactions.                                                                      | [View method](#)  |
| `tx_search`                  | Search for transactions with results.                                                                         | [View method](#)  |
| `block_search`               | Search for blocks by BeginBlock and EndBlock events.                                                          | [View method](#)  |
| `tx`                         | Get a transaction.                                                                                            | [View method](#)  |
| `abci_info`                  | Get information about the application.                                                                        | [View method](#)  |
| `abci_query`                 | Query the application for information.                                                                        | [View method](#)  |
| `broadcast_evidence`         | Broadcast evidence of misbehavior.                                                                            | [View method](#)  |
| `dial_seeds`                 | Dial a peer (must be manually enabled for use).                                                               | [View method](#)  |
| `dial_peers`                 | Set a persistent peer (must be manually enabled for use).                                                     | [View method](#)  |
| `unsafe_flush_mempool`       | Flushes out the mempool.                                                                                      | [View method](#)  |
| `remove_tx`                  | Removes a transaction from the mempool.                                                                       | [View method](#)  |

---

## Getting Started with Osmosis on Grove

To start using Osmosis through Grove, follow these steps:

### 1. Set Up an Account on Grove

Create your Grove account [here](#). [Instructions for account setup and management].

### 2. Copy your Osmosis endpoint URL

Locate and copy the Osmosis Mainnet endpoint URL on Grove.

### 3. Integrate API Endpoints

Implement Grove's API endpoints into your application as needed.

### Example Code Snippet

A simple JavaScript example to connect with Osmosis Mainnet:

```javascript
// Example: Interacting with Osmosis Mainnet
const osmosis_endpoint = "<Grove_Osmosis_API_Endpoint>";
const apiKey = "<Your_API_Key>";
// Insert your Osmosis interaction code here
