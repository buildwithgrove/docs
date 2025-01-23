---
title: "Grove - Celestia RPC API Documentation"
description: "Comprehensive documentation for Grove's Celestia RPC API, covering endpoint details and integration strategies for blockchain developers."
keywords: [celestia, rpc, api, blockchain, modular, web3, grove, pocket, pokt]
sidebar_position: 1
sidebar_label: Introduction
---

# Celestia

Celestia is a modular data availability (DA) network making transaction data available for anyone to download. Celestia provides high-throughput DA that can be verified easily with a light node. Celestia offers a modular stack designed to allow anyone to launch their own blockchain without needing a validator set.

- [Celestia Homepage](https://celestia.org/)
- [Celestia Node API](https://node-rpc-docs.celestia.org/?version=v0.12.4)
- [Celestia Discord](https://discord.com/invite/YsnTPcSfWQ)
- [Celestia GitHub](https://github.com/celestiaorg)

---

## Celestia on Grove

Grove extends its robust blockchain interface to support Celestia, providing developers with enhanced tools and APIs for interacting with this modular blockchain network. Our platform facilitates seamless integration and interaction with Celestia, offering high-performance infrastructure and developer-friendly tools. Whether you are developing DeFi applications, NFT marketplaces, or other DApps, Grove's interface with Celestia ensures a smooth and efficient development experience.

---

## Supported Chain Endpoints

| Blockchain                                         | Chain Prefix        | RelayChainID | Blockheight       |
| -------------------------------------------------- | ------------------- | ------------ | ----------------- |
| [Celestia Archival](./endpoints/celestia-archival) | `celestia-archival` | A0CA         | All block heights |
| [Celestia Consensus Archival](./endpoints/celestia-archival) | `celestia-consensus-archival` | A0CB         | All block heights |
| [Celestia Testnet Da Archival](./endpoints/celestia-testnet-da-archival) | `celestia-testnet-da-archival` | A0CC         | All block heights |
| [Celestia Testnet Consensus Archival](./endpoints/celestia-testnet-consensus-archival) | `celestia-testnet-consensus-archival` | A0CD         | All block heights |


---

## Ready to Get Started?

Create a [Grove Portal account](https://portal.grove.city) or check out our [Quickstart Guide](/guides/getting-started/quickstart).
