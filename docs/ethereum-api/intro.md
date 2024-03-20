---
sidebar_position: 1
sidebar_label: Introduction
---

# Ethereum

Ethereum, a decentralized blockchain platform, was envisioned by Vitalik Buterin, a programmer and co-founder of Bitcoin Magazine, in late 2013. He envisioned a platform that could go beyond mere financial transactions and facilitate the development of decentralized applications (DApps). In 2014, a successful initial coin offering (ICO) raised over $18 million, solidifying Ethereum's position in the cryptocurrency realm. The platform officially launched in July 2015, introducing its native cryptocurrency, Ether (ETH), and the Ethereum Virtual Machine (EVM), an execution environment for DApps. Ethereum's innovative smart contract technology, which enables self-executing contracts, has fueled the growth of a vibrant ecosystem of DApps, ranging from decentralized finance (DeFi) to non-fungible tokens (NFTs).

- [Ethereum Official Documentation](https://ethereum.org/en/developers/docs/)
- [Ethereum Developer Blog](https://blog.ethereum.org/)
- [Ethereum Developer Forum](https://ethereum.org/en/community/)

---

## Ethereum on Grove

Grove offers a robust and developer-centric interface to the Ethereum blockchain, tailored to accommodate a spectrum of needs from simple transaction queries to intricate smart contract interactions. With multiple Ethereum chain variants, our platform ensures that developers have access to the appropriate tools and data for their specific projects.

---

## Supported Chain Endpoints

| Blockchain                                    | Chain Prefix               | RelayChainID | Blockheight         |
| --------------------------------------------- | -------------------------- | ------------ | ------------------- |
| [Ethereum Mainnet](./endpoints/eth-mainnet)   | `eth-mainnet`              | 0021         | Latest - 127 blocks |
| [Ethereum Archival](./endpoints/eth-archival) | `eth-archival`             | 0022         | All block heights   |
| [Ethereum Trace](./endpoints/eth-trace)       | `eth-trace`                | 0028         | All block heights   |
| [Ethereum Goerli](./endpoints/eth-goerli)     | `eth-goerli`               | 0026         | Latest - 127 blocks |
| [Ethereum Rinkeby](./endpoints/eth-rinkeby)   | `rinkeby`                  | 0022         | Latest - 127 blocks |
| [Ethereum Holesky](./endpoints/eth-holesky)   | `holesky-fullnode-testnet` | 0081         | All block heights   |
| [Ethereum Sepolia](./endpoints/sepolia)   | `sepolia` | 0077         | Latest - 127 blocks   |
| [Ethereum Sepolia Archival](./endpoints/sepolia-archival)   | `sepolia-archival` | 0078         | All block heights   |
| [Ethereum Beacon](./endpoints/eth-beacon)     | `eth-beacon`               | B021         | Full chain support* |
| [Ethereum Beacon Holesky](./endpoints/holesky-beacon)     | `holesky-beacon`               | B081         | Full chain support* |

\* For the Beacon and Beacon Holesky networks, we offer support for full chains across all block heights. However, please note that while this includes Archival data, we cannot guarantee its consistent functionality.

---

## Ready to Get Started?

Create a [Grove Portal account](https://portal.grove.city) or check out our [Quickstart Guide](/guides/getting-started/quickstart).
