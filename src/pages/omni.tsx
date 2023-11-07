import React, { useEffect } from "react"

export default function Home(): JSX.Element {
  useEffect(() => {
    // window.location.href = '/category/introduction';
    window.location.href = "/blog/omni-wallet"
  }, [])

  return <></>
}
