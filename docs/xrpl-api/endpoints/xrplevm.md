---
title: "Grove - XRPL EVM RPC API Documentation"
description: "Comprehensive documentation for Grove's XRPL EVM RPC API, covering endpoint details and integration strategies for blockchain developers."
keywords: [xrplevm, ledger, rpc, api, blockchain, web3, grove, pocket, pokt, evm, ripple]
sidebar_position: 1
sidebar_label: xrplevm
---

# XRPL EVM

`xrplevm`

## Supported APIs

| API Spec            | Description | Documentation  | Interface Support |
| ------------------- | ----------- | -------------- |------------------ |
| Core API | The core set of methods supported by all ethereum clients | [view spec](../specs/core-api) | JSON-RPC, Websockets |
| CometBFT API  | The CometBFT API provides access to the consensus and networking layer of a Cosmos-based blockchain. It exposes RPC (Remote Procedure Call) interfaces that allow clients to interact with the underlying Tendermint-based consensus engine — including submitting transactions, querying blocks, inspecting validator sets, and monitoring node state.\ CometBFT is responsible for block propagation, peer communication, and maintaining Byzantine Fault Tolerant consensus across nodes. Its API operates independently of the Cosmos SDK’s application logic, making it essential for infrastructure tools and light clients. Formerly known as the Tendermint API, the CometBFT API is the Cosmos-standard ABCI Interface. Exposed by default on port `:26657` | [view spec](https://docs.cometbft.com/main/rpc/) | JSON-RPC, Websockets |
| Cosmos API  | The Cosmos API refers to the set of gRPC and REST interfaces exposed by a Cosmos SDK-based blockchain. These APIs allow clients to interact with the blockchain's application layer — enabling features such as token transfers, staking, governance, and more — through well-defined, high-level endpoints.\ These APIs are powered by the modular design of the Cosmos SDK, with each module (e.g., bank, staking, gov, auth, ibc) exposing query and transaction services that conform to standard protobuf definitions. Exposed by default on port `:1317`. | [view spec](https://github.com/cosmos/cosmos-sdk/blob/v0.53.0-rc.2/proto/cosmos/bank/v1beta1/query.proto) | REST |
