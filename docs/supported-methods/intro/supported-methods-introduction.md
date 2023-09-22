# Supported Methods Overview

Welcome to the Supported Methods section of our documentation. This section is designed to provide you with a comprehensive understanding of the various methods we support across different blockchains. Each blockchain has its unique set of supported methods, which are API functions that enable interaction with its distinct features. 

## Supported Blockchains

Portal supports a wide range of blockchains, including but not limited to Ethereum, Binance Smart Chain, BOBA Mainnet, and many more. Each of these blockchains has unique features and capabilities, and our Portal provides the necessary tools and methods to interact with them effectively. For a detailed list of supported blockchains and their respective methods, please refer to our [Supported Blockchains](https://docs.grove.city/supported-blockchains) page.

## API Prefix & ChainIDs

Each blockchain we support has a specific Portal API prefix and RelayChainID. These identifiers are crucial for the correct routing and processing of requests. The API prefix is a unique identifier for each blockchain, while the RelayChainID is used to identify the specific chain for relaying requests. It's important to use the correct API prefix and RelayChainID when making requests to ensure accurate and efficient processing. For more information, please refer to our [API Prefix & ChainIDs](https://docs.grove.city/api-prefix-chainids) page.

## Archival Data

For some blockchains, we support Archival nodes. These nodes store the entire history of the blockchain, allowing you to query historical data. This is particularly useful for developers who need to access past states of the blockchain or businesses that need to comply with data retention regulations. If you are accessing data from a certain number of blocks or earlier, you may need to use the archival version of the blockchain. For more information, please refer to our [Archival Nodes Overview](https://docs.grove.city/archival-nodes-overview) page.

## Ethereum Trace Methods

We also support a variety of Ethereum Trace methods, which are used to retrieve internal transaction details. These methods are particularly useful for understanding the internal workings of complex transactions, such as those involving smart contracts. For more details, please visit our [Ethereum Trace Overview](https://docs.grove.city/ethereum-trace-overview) page.

## Summary

The Supported Methods section of our documentation is designed to provide you with the necessary information to effectively interact with the blockchains of your choice. If you have feedback on additional methods or chains you would like to see Portal support, please reach out to the Portal team in [Discord](https://discord.com/invite/portal).

NOTE: Due to the permissionless, decentralized nature of the node network, not all nodes are configured the same. Some methods may be supported by some nodes but not others. It is possible to return an error if a node is hit that does not support certain methods. If you have any questions or need further assistance, feel free to reach out to the Portal team in [Discord](https://discord.gg/build-with-grove).
