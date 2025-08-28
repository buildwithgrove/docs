import React, { useEffect, useState } from "react"

export default function Home(): JSX.Element {
  const [isRedirecting, setIsRedirecting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRedirecting(true)
      window.location.href = "guides/getting-started/welcome-to-grove"
    }, 100)

    return () => clearTimeout(timer)
  }, [])

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
      <p>Redirecting to getting started guide...</p>
      {isRedirecting && <p style={{ color: '#666' }}>Please wait...</p>}
    </div>
  )
}
