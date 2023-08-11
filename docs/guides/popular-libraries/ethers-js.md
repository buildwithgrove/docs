# JavaScript – ethers.js

### Overview
Ethers is a JavaScript library for interacting with Ethereum and the ecosystem that's been built on it, including first class support for Pocket Network.

### Resources
[Documentation](https://docs.ethers.io/v5/)

[Installation Guide](https://docs.ethers.io/v5/getting-started/)

### Basic Usage

```javascript
import { ethers } from "ethers";

const POCKET_URL = "https://<PREFIX>.gateway.pokt.network/v1/lb/<PORTAL-ID>"

const provider = new ethers.providers.JsonRpcProvider(POCKET_URL);

const blockNumber = await provider.getBlockNumber();

console.log(blockNumber);
