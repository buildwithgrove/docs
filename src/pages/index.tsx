import React from "react"

export default function Home(): JSX.Element {
  return (
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
    </div>
  )
}
