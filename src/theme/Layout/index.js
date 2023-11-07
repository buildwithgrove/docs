import "@mantine/core/styles.css"
import React from "react"
import Layout from "@theme-original/Layout"
import { portalTheme } from "../portalTheme"
import { MantineProvider } from "@mantine/core"

export default function LayoutWrapper(props) {
  return (
    <MantineProvider theme={portalTheme}>
      <Layout {...props} />
    </MantineProvider>
  )
}
