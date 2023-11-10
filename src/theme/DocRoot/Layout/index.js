import React from "react"
import Layout from "@theme-original/DocRoot/Layout"
import { Anchor, Group } from "@mantine/core"
import styles from "./DocRoot.module.css"

export default function LayoutWrapper(props) {
  return (
    <>
      <Group className={styles.subnav}>
        <Anchor px="xs" href="/docs/guides/getting-started/welcome">
          Guides
        </Anchor>
        <Anchor px="xs" href="/docs/grove-api/getting-started/introduction">
          Grove API
        </Anchor>
      </Group>
      <Layout {...props} />
    </>
  )
}
