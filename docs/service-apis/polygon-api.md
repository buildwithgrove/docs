---
title: "Polygon API Integration | Grove Web3 Infrastructure"
description: "Complete Polygon RPC API documentation for developers. Fast, reliable Polygon blockchain access with Grove's enterprise infrastructure. Get started in minutes."
keywords: [polygon, matic, rpc, api, blockchain, web3, grove, infrastructure, developers, integration]
sidebar_position: 1
sidebar_label: polygon
slug: /service-apis/polygon-api
canonical_url: https://docs.grove.city/service-apis/polygon-api
---

# Polygon API Integration

<div style={{background: "linear-gradient(135deg, #8247e5 0%, #b794f6 100%)", color: "white", padding: "1.5rem", borderRadius: "8px", margin: "1rem 0"}}>
  <h2 style={{color: "white", marginTop: 0}}>🚀 Quick Start</h2>
  <p style={{marginBottom: 0, fontSize: "1.1rem"}}>Connect to Polygon in under 5 minutes with Grove's enterprise-grade infrastructure.</p>
</div>

## Overview

Polygon provides a robust blockchain platform for decentralized applications. Grove delivers enterprise-grade Polygon RPC access with guaranteed uptime, global edge network, and developer-first tooling.

### Why Choose Grove for Polygon?

- ⚡ **Ultra-fast response times** - Sub-300ms latency globally
- 📈 **Unlimited RPS and Unlimited relays** - From Prototype to Production seamlessly
- 🌍 **Global edge network** - 99.9% uptime guarantee
- 💡 **Developer-first** - Comprehensive docs and support

## Network Information

| Property | Value |
|----------|-------|
| **Network Name** | Polygon |
| **Native Token** | POL |
| **EVM Chain ID** | `137` |
| **Pocket Service ID** | `poly` |
| **Block Explorer** | [PolygonScan](https://polygonscan.com) |
| **Official Documentation** | [Polygon Docs](https://docs.polygon.technology/) |

## Supported API Methods

### 🔌 JSON-RPC API
Access the complete Polygon RPC specification with full method support.

| Method Category | Description | Documentation |
|-----------------|-------------|---------------|
| **Standard RPC** | Core blockchain methods | [View Methods](../grove-api/api-definition/definition#json-rpc-supported-methods) |

## Integration Examples

### Quick Setup

```javascript
// Using ethers.js (for EVM-compatible chains)
import { JsonRpcProvider } from 'ethers';

const provider = new JsonRpcProvider('YOUR_GROVE_POLYGON_ENDPOINT');

// Get latest block
const blockNumber = await provider.getBlockNumber();
console.log('Latest block:', blockNumber);

// Get account balance
const balance = await provider.getBalance('WALLET_ADDRESS');
console.log('Balance:', balance.toString());
```

## Performance & Reliability

Grove's Polygon infrastructure delivers:

- **Response Time**: < 100ms average globally
- **Uptime**: 99.9% SLA guarantee  
- **Rate Limits**: Unlimited requests/second on all plans
- **Global Coverage**: Backed by the Unstoppable Pocket Network

## Developer Resources

### 📚 Essential Links
- [Grove API Documentation](../grove-api/overview/grove-api)
- [Polygon Official Docs](https://docs.polygon.technology/)
- [Network Status](https://status.grove.city)
- [Developer Discord](https://discord.gg/build-with-grove)

### 🛠️ Tools & SDKs
- [Ethers.js](https://docs.ethers.io/)
- [Web3.js](https://web3js.readthedocs.io/)

### 💬 Community & Support
- [GitHub Issues](https://github.com/buildwithgrove/path)  
- [Technical Support](https://discord.com/channels/824324475256438814/1150805396085293106)

## Getting Started

1. **Sign up** for a Grove account at [portal.grove.city](https://portal.grove.city)
2. **Create** a new application and get your API key
3. **Configure** your endpoints with Polygon
4. **Start building** with our comprehensive documentation

---

<div style={{background: "#f8f9fa", padding: "1rem", borderLeft: "4px solid #007bff", margin: "1rem 0"}}>
  <strong>Need help?</strong> Our developer success team is here to help you integrate Polygon quickly and efficiently. <a href="mailto:portal@grove.city">Contact us</a> or join our <a href="https://discord.gg/build-with-grove">Discord community</a>.
</div>
