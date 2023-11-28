---
sidebar_position: 2
sidebar_label: API Structure
---

# API Structure

https://**\{chain-prefix\}**.rpc.grove.city/v1/**\{app-id\}**

### **chain-prefix**
A chain-prefix is made up of two parts, the specific chain and its configuration.

Example: **\{chain\}**-**\{config\}**

You can learn more about what chains and configuration types we support for each chain on the [chain endpoints](/grove-api/getting-started/chain-endpoints) page.

### app-id

The app-id is your unique application ID created by you when you signed up to the [Grove Portal](https://portal.grove.city).


## Deprecated API
https://**\{chain-prefix\}**.gateway.pokt.network/v1/lb/**\{app-id\}**

This API will no longer be active starting February 01, 2023.