---
sidebar_position: 3
sidebar_label: Application Security
---

# Application Security

Grove provides an extensive suite of security settings, allowing you to fine-tune the security measures applied to your application. These security settings, when judiciously applied, form a comprehensive security framework for your Grove application. Tailoring these settings to your project's specific requirements allows you to construct a fortified environment, minimizing vulnerabilities and protecting against the unique risks presented by blockchain technology. 

## Secret Key Required

Enforce stringent security by requiring a private secret key for all incoming requests. This ensures that only authenticated requests with the correct secret key are processed.

- **Toggle**: Easily activate or deactivate the secret key requirement as needed for enhanced control over application access.

## Approved Chains

Narrow down the blockchain networks your application can interact with, effectively preventing any interaction with unauthorized or unintended networks.

- **Add Chain**: Seamlessly integrate a blockchain network into your application's approved list, specifying which chains are permitted.

## Whitelist User-Agents

Control access based on the HTTP User-Agents, allowing only recognized agents to make requests. This feature is crucial for blocking unwanted or potentially harmful traffic.

- **Add User-Agent**: Input and register the User-Agent strings you trust, creating a customized access list for your application.

## Whitelist Origins 

Specify which HTTP Origins are authorized to interact with your application, creating a secure boundary that only permits requests from known sources.

- **Add Origin**: Define and add the allowed origins, ensuring that your application communicates exclusively with trusted entities.

## Whitelist Contracts

Limit interactions to predefined smart contract addresses. This selective approach ensures that your application's blockchain interactions are restricted to specified contracts.

- **Add Contract**: Designate and whitelist specific smart contract addresses, narrowing down the contracts your application can engage with.

## Whitelist Methods

By specifying which RPC methods your application can use, you prevent unauthorized operations and misuse, ensuring that only intended functionalities are accessible.

- **Add Method**: Choose and restrict the RPC methods available to your application, safeguarding against unintended or malicious use.
