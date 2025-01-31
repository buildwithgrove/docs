---
title: "Grove - Base RPC API Documentation"
description: "Comprehensive documentation for Grove's Base RPC API, covering endpoint details and integration strategies for blockchain developers."
keywords: [base, rpc, api, blockchain, ethereum, layer2, web3, grove, pocket, pokt, L2]
sidebar_position: 1
sidebar_label: Introduction
---

# Base

Base is an open-source optimistic rollup built on the Ethereum blockchain. Rollups are L2 blockchains designed to enhance the scalability of layer one (L1) blockchains by bundling hundreds of transactions and submitting them to L1 as a single transaction. Base was pioneered by Coinbase using Optimism’s OP stack, marking it as the second L2 deployed on the OP Stack after the Optimism Mainnet. Its EVM compatibility ensures that developers can effortlessly deploy their EVM codebase from Ethereum and other compatible chains directly to Base. For a deeper understanding of the specific methods for Base, refer to their [official documentation](https://docs.base.org/).

---

## Supported Chain Endpoints

| Blockchain                               | Portal API Prefix | RelayChainID | Blockheight         |
| ---------------------------------------- | ----------------- | ------------ | ------------------- |
| [Base](./endpoints/base) | `base`      | `F005`         | All block heights |
| [Base Testnet](./endpoints/base-testnet) | `base-testnet`      | `F006`         | All block heights   |

---

## Ready to Get Started?

Create a [Grove Portal account](https://portal.grove.city) or check out our [Quickstart Guide](/guides/getting-started/quickstart).
