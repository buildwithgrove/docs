---
sidebar_position: 1
sidebar_label: Introduction
---

# Base

Base is an open-source optimistic rollup built on the Ethereum blockchain. Rollups are L2 blockchains designed to enhance the scalability of layer one (L1) blockchains by bundling hundreds of transactions and submitting them to L1 as a single transaction. Base was pioneered by Coinbase using Optimism’s OP stack, marking it as the second L2 deployed on the OP Stack after the Optimism Mainnet. Its EVM compatibility ensures that developers can effortlessly deploy their EVM codebase from Ethereum and other compatible chains directly to Base. For a deeper understanding of the specific methods for Base, refer to their [official documentation](https://docs.base.org/).

**Note:** Base Fullnodes on both mainnet and testnet are **archival nodes by default**. This means they store the entire history of the blockchain, providing access to historical states and data.

Additionally, `base-mainnet-archival` and `base-testnet-archival` are simply alternative aliases in our database. Both these aliases act as subdomain aliases for `base-mainnet` and `base-testnet`.



---

## Supported Chain Endpoints

| Blockchain                               | Portal API Prefix | RelayChainID | Blockheight         |
| ---------------------------------------- | ----------------- | ------------ | ------------------- |
| [Base Mainnet](./endpoints/base-mainnet) | base-mainnet      | 0079         | All block heights |
| [Base Testnet](./endpoints/base-testnet) | base-testnet      | 0080         | All block heights   |

---

## Ready to Get Started?

Create a [Grove Portal account](https://portal.grove.city) or check out our [Quickstart Guide](/guides/getting-started/quickstart).
