# Solidity & Vyper – Hardhat

### Overview

Hardhat is a highly extensible and modular TypeScript-based Ethereum development environment, with a mature Solidity debugging experience.

### Resources

[Documentation](https://hardhat.org/docs)

### Basic Usage

```javascript
Hardhat allows you to configure networks through a ``networks`` object exported in the ``hardhat.config.js`` file. Here’s an example of adding networks for Ethereum and Polygon, both mainnet and testnet.

require("@nomicfoundation/hardhat-toolbox");

const APP_ID = "<APP_ID>";

// Replace these privates key with your respective account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts

const MAINNET_PRIVATE_KEY = "YOUR MAINNET PRIVATE KEY";
const GOERLI_PRIVATE_KEY = "YOUR GOERLI PRIVATE KEY";
const POLY_PRIVATE_KEY = "YOUR MAINNET PRIVATE KEY";

module.exports = {
  solidity: "0.8.9",
  networks: {
    mainnet: {
      url: `https://eth-mainnet.rpc.grove.city/v1/${APP_ID}`,
      accounts: [MAINNET_PRIVATE_KEY]
    },
    goerli: {
      url: `https://eth-goerli.rpc.grove.city/v1/${APP_ID}`,
      accounts: [GOERLI_PRIVATE_KEY]
    },
    polygon: {
      url: `https://poly-mainnet.rpc.grove.city/v1/${APP_ID}`,
      accounts: [POLYGON_PRIVATE_KEY]
    }
  }
};
```

Then, say you wanted to deploy to Goerli, you’d simply run your deployment as follows:

```
npx hardhat run scripts/deploy.js --network goerli
```
