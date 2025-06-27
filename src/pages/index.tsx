import React, { useEffect } from "react"

export default function Home(): JSX.Element {
  useEffect(() => {
    window.location.href = "guides/getting-started/welcome-to-grove"
  }, [])

  return <></>
}
