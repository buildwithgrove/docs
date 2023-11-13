---
sidebar_position: 8
---

# Application Security

Securing your application is crucial to protect your data and users. Grove's security settings provide you with several layers of configurable options to enhance the security posture of your applications.

---

## Secret Key Required

Toggle this setting to enforce the use of a private secret key for all requests. This adds an additional layer of security by ensuring that only requests with the correct secret key are accepted.

- **Toggle**: Enable or disable the requirement for a secret key.

---

## Approved Chains

Limit blockchain network access for your application to prevent unauthorized use on networks outside of your operational scope.

- **Add Chain**: Select and add a blockchain network to your list of approved chains.

---

## Whitelist User-Agents

Define which HTTP User-Agents are allowed to make requests to your application. This can prevent unauthorized access from unknown or unwanted sources.

- **Add User-Agent**: Input and add the desired User-Agent string to your whitelist.

---

## Whitelist Origins

Control which HTTP Origins are permitted to interact with your application. Only requests from the origins you specify will be accepted.

- **Add Origin**: Input and add the desired HTTP Origin to your whitelist.

---

## Whitelist Contracts

By whitelisting specific smart contract addresses, you ensure that only listed contracts can interact with your application.

- **Add Contract**: Select the blockchain network and input the smart contract address to your whitelist.

---

## Whitelist Methods

Restrict the RPC methods that can be used with your application to prevent misuse or unintended operations.

- **Add Method**: Select the blockchain network and input the RPC method to your whitelist.

---

By carefully configuring each security setting, you can create a robust defense for your application, tailored to your operational needs and the unique risks of the blockchain environment.
