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
      title="Grove: Web3 Infrastructure - Decentralized RPC Gateway"
      description="High-performance decentralized RPC gateway powered by Pocket Network. Access 50+ blockchain networks with reliability, scalability, and global distribution."
    >
      <SEOOptimizer
        title="Grove: Web3 Infrastructure - Decentralized RPC Gateway"
        description="High-performance decentralized RPC gateway powered by Pocket Network. Access 50+ blockchain networks with reliability, scalability, and global distribution."
        keywords={[
          'Web3', 'blockchain', 'RPC', 'API', 'decentralized', 'infrastructure',
          'Pocket Network', 'Grove', 'cryptocurrency', 'DeFi', 'NFT', 'smart contracts'
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
