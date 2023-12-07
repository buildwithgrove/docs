---
sidebar_position: 8
sidebar_label: Quality of Service
---

# Quality of Service

At Grove our mission is to provide enterprise grade quality of service on top of a decentralized network. There are many great benefits to decentralized networks, but they do also come with many unique challenges as well. The POKT Network is made up of some the best node runners in the industry, but aligning and incentivizing all our suppliers can be a challenge. Since we do not run any nodes our selves, we have built a robust Quality of Service module that helps us ensure you always get the best and fastest response posible.

## Quality Reports

A node Quality Reports consists of:

- node id
- chain id
- success rate
- latency

We gather node Quality Reports in two different ways, through the results of relays going through our API, and also through a background task that actively hits nodes to suppliment our historical definition. From these historical reports we are able to determine for the best nodes available for each request.

At Grove, our goal is to connect each developer request the most consistent and performant node available. To do this we are working to have clear definitions of what each chain supports. See the Chain APIs for more information. With this aligned definition we are working to protect node runners from requests on chains that do not match these definitions and in turn will expect high success rates from nodes.
