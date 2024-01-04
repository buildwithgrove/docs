# Solidity & Vyper – Apeworx

### Overview

Apeworx is an Ethereum development framework targeted at Python developers, data scientists, and security professionals.

### Resources

[Documentation](https://docs.apeworx.io/ape/stable/)

### Basic Usage

Apeworx allows you to specify multiple ecosystems, networks, and providers. Apeworx specifically has configurations in `ape-config.yaml` for connecting to live network nodes; it’s here where you would want to specify the Portal Endpoint. While this section is called `geth`, it’s not limited to just geth nodes.

For our example, let’s specify 2 ecosystems, Ethereum and Polygon, both including testnets.

```yaml
geth:
  ethereum:
    mainnet:
      uri: https://eth-mainnet.rpc.grove.city/v1/<PORTAL_ID>
    goerli:
      uri: https://eth-goerli.rpc.grove.city/v1/<PORTAL_ID>
  polygon:
    mainnet:
      uri: https://poly-mainnet.rpc.grove.city/v1/<PORTAL_ID>
    mumbai:
      uri: https://poly-mumbai.rpc.grove.city/v1/<PORTAL_ID>
```

You would then be able to connect your Apeworx console to Goerli through Pocket Network as follows:

```yaml
ape console --network ethereum:goerli:geth
```
