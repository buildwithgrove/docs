# Solidity & Vyper – Truffle

### Overview

Truffle is a JavaScript based EVM development environment, testing framework, and asset pipeline.

### Resources

[Documentation](https://trufflesuite.com/docs/truffle/)

### Basic Usage

Truffle allows you to configure networks through a `networks` object exported in the `truffler-.config.js` file. Here’s an example of adding networks for Ethereum and Polygon, both mainnet and testnet.

```javascript
const APP_ID = "<APP_ID>"

module.exports = {
  networks: {
    mainnet: {
      host: `https://eth-mainnet.rpc.grove.city/v1/${APP_ID}`,
      port: 80,
      network_id: "1",
    },
    goerli: {
      host: `https://eth-goerli.rpc.grove.city/v1/${APP_ID}`,
      port: 80,
      network_id: "5",
    },
    polygon: {
      host: `https://poly-mainnet.rpc.grove.city/v1/${APP_ID}`,
      port: 80,
      network_id: "137",
    },
    mumbai: {
      host: `https://poly-mumbai.rpc.grove.city/v1/${APP_ID}`,
      port: 80,
      network_id: "80001",
    },
  },
<<<<<<< HEAD
}
=======
};
>>>>>>> main
```

Note, the chainId is not related to the Pocket Relay Chain ID, but rather, the value returned by `eth_chainId`.

From here, you’ll be able to connect your truffle console to Pocket as follows:

```
truffle console --network mainnet
```
