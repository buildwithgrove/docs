import React, { useEffect } from "react"
import Layout from "@theme/Layout"
import SEOOptimizer from "@site/src/components/SEOOptimizer"
import { generateWebSiteData, groveWebSiteData } from "@site/src/utils/structuredData"

export default function Home(): JSX.Element {
  useEffect(() => {
    // Redirect to welcome page after a brief delay for SEO purposes
    const timer = setTimeout(() => {
      window.location.href = "guides/getting-started/welcome-to-grove"
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const structuredData = generateWebSiteData(groveWebSiteData)

  return (
    <Layout
      title="Grove Documentation - Enterprise Infrastructure for Public APIs"
      description="Access high-performance permissionless infrastructure for blockchains, LLMs, and privacy protocols. Serving billions of requests daily for 60+ protocols."
    >
      <SEOOptimizer
        title="Grove Documentation - Enterprise Infrastructure for Public APIs"
        description="Access high-performance permissionless infrastructure for blockchains, LLMs, and privacy protocols. Serving billions of requests daily for 60+ protocols."
        keywords={[
          'blockchain infrastructure', 'decentralized RPC', 'web3 infrastructure', 'blockchain API',
          'decentralized protocols', 'Pocket Network', 'blockchain scaling', 'web3 development',
          'RPC provider', 'node infrastructure', 'blockchain gateway', 'DeFi infrastructure',
          'permissionless network', 'Web3 API', 'blockchain node provider', 'decentralized infrastructure',
          'LLM infrastructure', 'AI model access', 'privacy protocols', 'open protocols', 'machine learning API'
        ]}
        canonicalUrl="https://docs.grove.city"
        structuredData={structuredData}
      >
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Welcome to Grove Documentation</h1>
          <p>Redirecting to the getting started guide...</p>
        </div>
      </SEOOptimizer>
    </Layout>
  )
}
