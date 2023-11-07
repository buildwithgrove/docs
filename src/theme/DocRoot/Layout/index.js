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
        <Anchor px="xs" href="/docs/developers/getting-started/welcome">
          Developers
        </Anchor>
        <Anchor px="xs" href="/docs/node-runners/getting-started/welcome">
          Node Runners
        </Anchor>
        <Anchor px="xs" href="/docs/grove-api/getting-started/welcome">
          Grove API
        </Anchor>
      </Group>
      <Layout {...props} />
    </>
  )
}
