---
sidebar_position: 9
sidebar_label: Relay Flow
---

# Relay Flow

This is a high level view of the path a request takes within the Grove API.

## Pre Processor

Our quality starts before we ever hit a node. Our Pre Processor logic confirms a request has been structured correctly and protects the nodes from calls that are not supported.

## Plugins Processor

From there we

## Node Selector

To ensure you always get the best and fastest response possible, we continously measure and rank each node and their responses. Nodes earn "tickets" based on their performance, and the more tickets earns, the more relays we send them. Any node who does not meet our high standards are discarded from that session, and will have the chance to try again and improve in the next session.

## Relayer

The relayer connects your request with the node to get a response.

## Post Processor

After a node response we review. In the times where we recieve an error we are able to leverage the value of the POKT Network and initiate retry against the next best node avaiable. Using the POKT Network in this way, Grove is able archive unparalelled redundancy and fault tolerance.

## Metrics & Montioring

At Grove we take privacy very seriously. We never keep or store the details of your requests or responses.
