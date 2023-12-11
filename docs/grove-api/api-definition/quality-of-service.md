---
sidebar_position: 2
sidebar_label: Quality of Service
---

# Elevating Quality of Service at Grove

At Grove, our paramount mission is to deliver enterprise-grade quality of service within the realm of decentralized networks. While decentralized networks offer a multitude of advantages, they also present unique challenges. The POKT Network boasts some of the industry's most accomplished node runners; nevertheless, harmonizing and incentivizing our diverse array of suppliers can be a formidable task. As we do not operate any nodes ourselves, we have constructed a robust Quality of Service module to ensure that you consistently receive the best and fastest responses possible.

## Quality Reports: A Comprehensive Overview

A node Quality Report encompasses the following key elements:

- Node ID
- Chain ID
- Success Rate
- Latency

We compile these invaluable reports through two distinct methods: firstly, by analyzing relay results passing through our API, and secondly, through a background task that actively engages with nodes to augment our historical dataset. Leveraging these historical reports, we ascertain the optimal nodes available for each request.

At Grove, our ultimate objective is to seamlessly connect each developer request with the most dependable and high-performing node accessible. To achieve this, we are diligently crafting clear definitions of the capabilities supported by each blockchain. For a detailed insight into these definitions, please refer to our Chain APIs. This concerted effort ensures that node runners are safeguarded from requests on chains that do not align with these definitions, consequently fostering high success rates from nodes.
