---
sidebar_position: 1
sidebar_label: solana-custom
---

# Solana Custom

`solana-custom`

Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale. Solana's unique architecture allows for fast transaction processing and high throughput. The Solana supported methods provide developers with functionalities to integrate Solana's features into their applications, such as querying balances, executing transactions, and interacting with SOL-based smart contracts.

**Solana Custom** is Grove and Pocket Network's custom flavor of the Solana Blockchain that provides enhanced historical and indexing capabilities for users while limiting the hardware and infrastructure requirements of Node Suppliers. See [Additional Capabilities](#additional-capabilities) for more information.

## Supported APIs

| API Spec   | Description                                             | Documentation                  |
| ---------- | ------------------------------------------------------- | ------------------------------ |
| Solana API | The core set of methods supported by all Solana clients | [view spec](../specs/core-api) |

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
