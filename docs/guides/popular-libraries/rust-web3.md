# Rust – web3

### Overview

web3-rust is a rust implementation of web3.js.

### Resources

[Repository](https://github.com/tomusdrw/rust-web3)

### Basic Usage

```rust
async fn main() -> web3::Result<()> {
    let url = "https://<CHAIN_PREFIX>.rpc.grove.city/v1/<APP_ID>";
    let transport = web3::transports::Http::new(url)?;
    let web3 = web3::Web3::new(transport);

    let account = "00a329c0648769a73afac7f9381e08fb43dbea72";

    println!("Calling balance.");
    let balance = web3.eth().balance(account, None).await?;
    println!("Balance of {:?}: {}", account, balance);

    Ok(())
}
```
