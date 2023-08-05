# Application Security

The Security page for a given app allows you to better secure your endpoints. We recommend setting some or all of these features to reduce the risk of undesired activity.

- **Private Secret Key Required:** When this is enabled every request sent to an Endpoint has to be sent using HTTP Basic Authentication with your Secret Key to be accepted. (When using curl, you would add --user :YOUR-SECRET-KEY.)

- **Approved Chains:** Limits the Endpoints to be used only with specific chains. This list need not be exactly the same as the list of Endpoints on the App Overview page.

- **Whitelist User-Agents:** Limits requests to only the HTTP User-Agents specified. If a User-Agent not on the list attempts to connect to the Endpoint, the request will be blocked. If nothing is specified, all User-Agents will be accepted.

- **Whitelist Origins:** Limits requests to only the HTTP Origins specified. If an Origin not on the list is used in a request to the Endpoint, the request will be blocked. If nothing is specified, all Origins will be accepted. Wildcards are supported.

- **Whitelist Contracts:** Limits requests to the smart contract addresses specified. If the Endpoint is used in a contract address not specified in the list, the request will be denied. Each contract address listed is chain-specific. If nothing is specified, all contract addresses on all chains will be valid.

- **Whitelist Methods:** Limits requests to use specific RPC methods. If a request uses a method not on this list, the request will be denied. Each method listed is chain-specific. If nothing is specified, all methods on all chains will be valid.

- When making changes, be sure to **click Save** at the bottom of the page.