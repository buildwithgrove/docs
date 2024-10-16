---
sidebar_position: 1
sidebar_label: solana
---

# Solana

`solana`

Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale. Solana's unique architecture allows for fast transaction processing and high throughput. The Solana supported methods provide developers with functionalities to integrate Solana's features into their applications, such as querying balances, executing transactions, and interacting with SOL-based smart contracts.

 Grove and Pocket Network offer **a custom configuration of the Solana Blockchain** that provides enhanced historical and indexing capabilities for users while limiting the hardware and infrastructure requirements of Node Suppliers. See [Additional Capabilities](#additional-capabilities) for more information.

## Supported APIs

| API Spec   | Description                                             | Documentation                                 |
| ---------- | ------------------------------------------------------- | --------------------------------------------- |
| Solana API | The core set of methods supported by all Solana clients | [view spec](https://docs.solana.com/api/http) |

### Additional Capabilities

Our **Solana Custom Configuration** also offers the following Programs and [SPL](https://spl.solana.com/)s as well as historical data retention:

- Supports 7 epochs of historical data
- Solana [Kin Program](https://solana.com/ecosystem/kin)
- [Token Program](https://spl.solana.com/token) with Indexing
- [Associated Token Account Program](https://spl.solana.com/associated-token-account)

### Node Configuration

Our **Solana Custom Configuration** uses a unique configuration. In addition to custom pruning logic to retain at least the previous 7 epochs, our recommended configuration flags are:

```
--account-index program-id spl-token-owner spl-token-mint
```
