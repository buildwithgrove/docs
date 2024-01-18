# Python – web3.py

### Overview

Web3.py is a Python library for interacting with Ethereum nodes; it originally began as a port of web3.js, but has evolved to better serve the needs of Python developers.

### Resources

[Documentation](https://web3py.readthedocs.io/en/stable/)

[Installation Guide](https://web3py.readthedocs.io/en/stable/quickstart.html)

### Basic Usage

```python
from web3 import Web3

POCKET_URL = "https://<CHAIN_PREFIX>.rpc.grove.city/v1/<APP_ID>"

provider = Web3(Web3.HTTPProvider(POCKET_URL))

print(provider.blockNumber)
```
