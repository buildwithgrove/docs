# JavaScript – ethers.js

### Overview

Ethers is a JavaScript library for interacting with Ethereum and the ecosystem that's been built on it, including first class support for Pocket Network.

### Resources

[Documentation](https://docs.ethers.io/v5/)

[Installation Guide](https://docs.ethers.io/v5/getting-started/)

### Basic Usage

```javascript
import { ethers } from "ethers";

const POCKET_URL = "https://<NETWORK>.rpc.grove.city/v1/<PORTAL_ID>";

const provider = new ethers.providers.JsonRpcProvider(POCKET_URL);

const blockNumber = await provider.getBlockNumber();

console.log(blockNumber);
```
