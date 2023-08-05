# API Prefix & ChainIDs

In the Portal's network ecosystem, the API Prefix and ChainIDs are essential components that ensure relays are correctly routed and processed. They are used across the different blockchains that the network supports.

## API Prefix

The API Prefix is a unique identifier for each blockchain supported by the network. It is used in the API endpoint URL to specify the blockchain network you want to interact with. For example, if you're interacting with the Binance Smart Chain, you would use the API Prefix `bsc-mainnet`.

When sending a relay through the Portal, the API Prefix in your endpoint URL informs the network which blockchain node your relay should be routed to. The Portal leverages its Node Selector logic to filter out other nodes to ensure your relay is processed correctly.

## ChainIDs

The ChainID is another unique identifier, specific to each blockchain. It is used to create a unique transaction hash when you sign a transaction. This unique transaction hash ensures that your relay is processed by the correct blockchain node.

In the Portal, each blockchain that the network supports has a specific ChainID. For example, the ChainID for Binance Smart Chain is `0004`. The ChainID is not unique to the Portal, but is a standard used across different blockchains.

## How to Use API Prefix & ChainIDs

When you're using the Portal's supported methods, you'll need to include the correct API Prefix and ChainID in your relays.

For the API Prefix, you'll include this in your endpoint URL. For example, if you're making a relay to the Binance Smart Chain, your endpoint URL might look something like this: `https://<pocket-gateway-url>/v1/bsc-mainnet/<method>`

For the ChainID, you'll include this in the transaction data when you're signing a transaction. The exact method for including the ChainID will depend on the library or tool you're using to sign your transactions. However, in general, it will be included in the transaction object that you pass to your signing function.

Remember, it's crucial to use the correct API Prefix and ChainID for the blockchain you're interacting with. Using the incorrect API Prefix or ChainID can result in your relays being routed to the wrong blockchain or your transactions not being processed correctly.

For a list of the API Prefix and ChainID for each blockchain the network supports, please refer to our [Supported Blockchains](https://docs.portal.pokt.network/introduction/supported-blockchains) page.

If you have any questions or need further assistance, feel free to reach out to our support team.
