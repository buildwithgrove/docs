# Solidity & Vyper – Brownie

### Overview

Brownie is a Python-based development and testing framework for EVM compiled smart contracts.

### Resources

[Documentation](https://eth-brownie.readthedocs.io/en/stable/)

### Basic Usage

Brownie handles all of its network management via the CLI, meaning that you’ll have to specify networks individually as commands.

For example, this is how you would add Goerli.

```yarn
brownie networks add Ethereum goerli host=https://eth-goerli.rpc.grove.city/v1/<APP_ID> chainId=5
```

Note, the chainId is not related to the Pocket Relay Chain ID, but rather, the value returned by `eth_chainId`.

From here, you’d be able to connect your brownie console to this network by running:

```yarn
brownie --network goerli
```
