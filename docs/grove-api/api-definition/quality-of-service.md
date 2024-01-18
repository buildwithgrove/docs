---
sidebar_position: 2
sidebar_label: Quality of Service
---

# Elevating Quality of Service at Grove

Our mission is to build a performance layer on top of decentralized, permissionless protocols that delivers an enterprise grade service for our users. While these protocols offer a multitude of advantages, they also present unique challenges when compared with centralized alternatives. The POKT Network boasts some of the industry’s most accomplished node providers; yet, organizing and coordinating a diverse group of suppliers is a challenging task. We don’t run any nodes yet we still provide high quality service to some of the biggest projects in the industry. How? We built a robust Quality of Service module at the center of our performance layer to ensure users consistently receive the best and fastest responses possible.

## Quality Reports: A Comprehensive Overview

A node Quality Report encompasses the following key elements:

- Node ID
- Chain ID
- Success Rate
- Latency

We compile these invaluable reports through two distinct methods: firstly, by analyzing relay results passing through our API, and secondly, through a background task that actively engages with nodes to augment our historical dataset. Leveraging these historical reports, we ascertain the optimal nodes available for each request.

At Grove, our ultimate objective is to seamlessly connect each developer request with the most dependable and high-performing node accessible. To achieve this, we are diligently crafting clear definitions of the capabilities supported by each blockchain. For a detailed insight into these definitions, please refer to our Chain APIs. This concerted effort ensures that node runners are safeguarded from requests on chains that do not align with these definitions, consequently fostering high success rates from nodes.
