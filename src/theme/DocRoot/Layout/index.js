import React from "react"
import Layout from "@theme-original/DocRoot/Layout"
import { Anchor, Box, Container, Group } from "@mantine/core"
import styles from "./DocRootLayout.module.css"
import sidebars from "@site/sidebars"
import ChainSelect from "@site/src/components/ChainSelect/ChainSelect"

export default function LayoutWrapper(props) {
  const mainLinks = Object.entries(sidebars).filter(
    ([key]) => key === "guides" || key === "groveApi",
  )

  const chainLinks = Object.entries(sidebars).filter(
    ([key]) => key !== "guides" && key !== "groveApi",
  )

  const chains = chainLinks.map(([, sidebar]) => ({
    id: sidebar[0].dirName,
    label: sidebar[0].customProps.label,
    link: sidebar[0].customProps.link,
  }))

  return (
    <>
      <Box className={styles.subnav}>
        <Container size="xl">
          <Group>
            {mainLinks.map(([, sidebar]) => (
              <Anchor key={sidebar[0].dirName} px="xs" href={sidebar[0].customProps.link}>
                {sidebar[0].customProps.label}
              </Anchor>
            ))}
            <ChainSelect chains={chains} />
          </Group>
        </Container>
      </Box>
      <Container size="xl">
        <Layout {...props} />
      </Container>
    </>
  )
}
