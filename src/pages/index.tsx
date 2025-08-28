import React from "react"

export default function Home(): JSX.Element {
  return (
    <div style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6'
    }}>
      <h1>Welcome to Grove 🌿</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        A high‑performance gateway powered by <a href="https://pocket.network" style={{ color: '#389F58' }}>Pocket Network</a>. Grove enables seamless, efficient RPC access to more than 50 networks—empowering apps, agents, and protocols alike. Through our Portal, we deliver a performance layer that elevates Pocket's reliability, scalability, and service quality.
      </p>

      <h2>What Makes Grove Unique?</h2>

      <h3>🌎 Decentralized by Design</h3>
      <p>Grove runs on a global network of thousands of nodes—no single point of failure, no centralized choke points. Diversity in clients and operators ensures resilience, neutrality, and unstoppable access.</p>

      <h3>⛓️ Built for Any Service</h3>
      <p>From blockchains to large language models to canonical data APIs—Grove is service-agnostic. One gateway, endless integrations.</p>

      <h3>🎯 Reliability and Redundancy</h3>
      <p>Powered by <a href="https://path.grove.city" style={{ color: '#389F58' }}>PATH</a> and Pocket's decentralized network, Grove routes every request through high-performance nodes—delivering consistent uptime, anywhere in the world.</p>

      <h3>📈 Scale Without Limits</h3>
      <p>Billions of requests daily. Grove is engineered to absorb surges and sustain throughput—so your apps never skip a beat.</p>

      <h3>🚀 Optimized for Speed</h3>
      <p>Globally distributed gateways slash round-trip latency. Every request is routed for the fastest possible response.</p>

      <h3>🪄 Cost That Scales with You</h3>
      <p>No hidden fees. No locked-in pricing. With Grove's model, you pay only for what you use—fair, efficient, and predictable.</p>

      <h2>Ready to Get Started?</h2>
      <p>Spin up in minutes. Create your <a href="https://portal.grove.city" style={{ color: '#389F58' }}>Grove Portal account</a> or jump into the <a href="/guides/getting-started/quickstart" style={{ color: '#389F58' }}>Quickstart Guide</a>.</p>
    </div>
  )
}
