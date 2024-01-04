# JavaScript – web3.js

### Overview

web3.js is a collection of JavaScript libraries that enable communicating with Ethereum nodes.

### Resources

[Documentation](https://web3js.readthedocs.io/en/v1.8.0/)

[Installation Guide](https://web3js.readthedocs.io/en/v1.8.0/getting-started.html)

### Basic Usage

```javascript
import { Web3 } from "web3";

const POCKET_URL = "https://<NETWORK>.rpc.grove.city/v1/<PORTAL_ID>";

const provider = new Web3(POCKET_URL);

const blockNumber = await provider.eth.getBlockNumber();

console.log(blockNumber);
```
