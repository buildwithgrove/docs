# Swift – web3.swift

### Overview

web3.swift is a Swift API that supports a subset of the Ethereum JSON RPC, as well as additional methods to ease ENS, ERC20, and ERC721 interaction.

### Resources

[Repository](https://github.com/argentlabs/web3.swift)

### Basic Usage

```swift
import web3

guard let clientUrl = URL(string: "https://<NETWORK>.rpc.grove.city/v1/<PORTAL_ID>") else { return }
let client = EthereumClient(url: clientUrl)

client.eth_gasPrice { (error, currentPrice) in
    print("The current gas price is \(currentPrice)")
}
```
