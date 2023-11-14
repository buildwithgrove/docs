import React, { useEffect } from "react"

export default function Home(): JSX.Element {
  useEffect(() => {
    window.location.href = "/blog/why-grove"
  }, [])

  return <></>
}
