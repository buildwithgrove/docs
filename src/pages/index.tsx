import React from "react"
import Layout from "@theme/Layout"
import SEOOptimizer from "@site/src/components/SEOOptimizer"
import { generateWebSiteData, groveWebSiteData } from "@site/src/utils/structuredData"

export default function Home(): JSX.Element {
  const structuredData = generateWebSiteData(groveWebSiteData)

  return (
    <Layout
      title="Build with Grove - Docs for Enterprise Infrastructure for Public APIs"
      description="Access high-performance permissionless infrastructure for blockchains, LLMs, and privacy protocols. Serving billions of requests daily for 60+ protocols."
    >
      <SEOOptimizer
        title="Build with Grove - Docs for Enterprise Infrastructure for Public APIs"
        description="Access high-performance permissionless infrastructure for blockchains, LLMs, and privacy protocols. Serving billions of requests daily for 60+ protocols."
        keywords={[
          'blockchain infrastructure', 'decentralized RPC', 'web3 infrastructure', 'blockchain API',
          'decentralized protocols', 'Pocket Network', 'blockchain scaling', 'web3 development',
          'RPC provider', 'node infrastructure', 'blockchain gateway', 'DeFi infrastructure',
          'permissionless network', 'Web3 API', 'blockchain node provider', 'decentralized infrastructure',
          'LLM infrastructure', 'AI model access', 'privacy protocols', 'open protocols', 'machine learning API'
        ]}
        canonicalUrl="https://docs.grove.city/"
        structuredData={structuredData}
      >
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1>Welcome to Grove Documentation</h1>
          <p>Get started with Grove's documentation to build with enterprise infrastructure for public APIs.</p>
          <div style={{ marginTop: '2rem' }}>
            <a 
              href="guides/getting-started/welcome-to-grove"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                backgroundColor: '#389F58',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: '600'
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </SEOOptimizer>
    </Layout>
  )
}
