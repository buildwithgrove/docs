# API Prefix & Chain IDs

With Grove, the API Prefix and ChainID are critical for ensuring that relays are correctly routed and processed. These identifiers are unique for each blockchain supported by the network, facilitating accurate relay direction and execution.

---

## API Prefix
The API Prefix is a unique identifier for each blockchain supported by Grove. It specifies the blockchain network for interaction within the API endpoint URL. For example, the API Prefix for Binance Smart Chain is `bsc-mainnet`.

## ChainID
The ChainID is a unique numerical identifier specific to each blockchain. It is used to create a unique transaction hash, ensuring that your relay is processed by the correct blockchain node. For example, the ChainID for Binance Smart Chain is `0004`.

## EVM Chain ID
The EVM Chain ID is a unique identifier used within the Ethereum Virtual Machine (EVM) compatible blockchains. It is crucial for transaction signing and helps differentiate between different EVM-compatible networks.

---

## How to Use

#### **API Prefix**

Include this in your endpoint URL. Example for Binance Smart Chain: `https://<grove-gateway-url>/v1/bsc-mainnet/<method>`


#### **ChainID**

Include this in the transaction data when signing a transaction. The inclusion method depends on the tools you use.


--- 

## Supported Blockchains

Below is a list of the supported blockchains along with their respective API Prefix, RelayChainID, and EVM Chain IDs:

| Name                      | Portal API Prefix         | RelayChainID | EVM Chain ID |
|---------------------------|---------------------------|--------------|--------------|
| Arbitrum One              | arbitrum-one              | 0066         | 42161        |
| AVAX                      | avax-mainnet              | 0003         | 43114        |
| Base Mainnet              | base-mainnet              | 0079         | 8453         |
| Base Testnet              | base-testnet              | 0080         | 84531        |
| BOBA Mainnet              | boba-mainnet              | 0048         | 288          |
| Binance Smart Chain       | bsc-mainnet               | 0004         | 56           |
| Binance Smart Chain (Archival) | bsc-archival         | 0010         | 56           |
| Celo Mainnet              | celo-mainnet              | 0065         | 42220        |
| DFKchain Subnet           | avax-dfk                  | 03DF         | 53935        |
| Dogechain Mainnet         | dogechain-mainnet         | 0059         | 2000         |
| Ethereum Mainnet          | eth-mainnet               | 0021         | 0001         |
| Ethereum Mainnet Archival | eth-archival              | 0022         | 0001         |
| Evmos Mainnet             | evmos-mainnet             | 0046         | 9001         |
| Fantom Mainnet            | fantom-mainnet            | 0049         | 250          |
| Fuse                      | fuse-mainnet              | 0005         | 122          |
| Fuse Archival             | fuse-archival             | 000A         | 122          |
| Gnosis Chain Mainnet      | gnosischain-mainnet       | 0027         | 100          |
| Gnosis Chain Archival     | gnosischain-archival      | 000C         | 100          |
| Harmony Shard 0           | harmony-0                 | 0040         | 1666600000   |
| IoTeX Mainnet             | iotex-mainnet             | 0044         | 4689         |
| Kava Mainnet              | kava-mainnet              | 0071         | 2222         |
| Kava Mainnet Archival     | kava-mainnet-archival     | 0072         | 2222         |
| Klaytn Mainnet            | klaytn-mainnet            | 0056         | 8217         |
| Meter Mainnet             | meter-mainnet             | 0057         | 82           |
| Metis Mainnet             | metis-mainnet             | 0058         | 1088         |
| Moonbeam Mainnet          | moonbeam-mainnet          | 0050         | 1284         |
| Moonriver Mainnet         | moonriver-mainnet         | 0051         | 1285         |
| NEAR Mainnet              | near-mainnet              | 0052         |              |
| OKC Mainnet               | oKc-mainnet               | 0047         | 66           |
| Oasys Mainnet             | oasys-mainnet             | 0070         | 248          |
| Oasys Mainnet Archival    | oasys-mainnet-archival    | 0069         | 248          |
| Optimism Mainnet          | optimism-mainnet          | 0053         | 10           |
| Osmosis Mainnet           | osmosis-mainnet           | 0054         |              |
| Pocket Network Mainnet    | mainnet                   | 0001         |              |
| Polygon Matic             | poly-mainnet              | 0009         | 137          |
| Polygon Matic Archival    | poly-archival             | 000B         | 137          |
| Polygon zkEVM Mainnet     | polygon-zkevm-mainnet     | 0074         | 1101         |
| Scroll Mainnet            | scroll-mainnet            | 0082         | 534352       |
| Solana                    | solana-mainnet            | 0006         |              |
| Sui Mainnet               | sui-mainnet               | 0076         |              |
| Ethereum Goerli           | eth-goerli                | 0026         | 005          |
| Ethereum Archival         | goerli-archival           | 0063         | 005          |
| Ethereum Rinkeby          | rinkeby                   | 0022         | 004          |
| Ethereum Holešky          | holesky-fullnode-testnet  | 0081         | 17000        |
| Polygon Mumbai            | polygon-mumbai            | 000F         | 80001        |
| Pocket Network Testnet    |                           | 0002         |              |
| Scroll Testnet            | scroll-testnet-alpha      | 0075         | 534353       |

### Note
It's important to use the correct API Prefix and ChainID for the blockchain you're interacting with. Incorrect usage can lead to relays being routed incorrectly or transactions not being processed as intended. If you have any questions or need assistance, please contact our support team.
