import clsx from "clsx"
import React, { useMemo } from "react"
import useIsBrowser from "@docusaurus/useIsBrowser"
import Layout from "@theme-original/DocRoot/Layout"
import { Anchor, Box, Container, Group } from "@mantine/core"
import styles from "./DocRootLayout.module.css"
import sidebars from "@site/sidebars"
import ChainSelect from "@site/src/components/ChainSelect/ChainSelect"

export default function LayoutWrapper(props) {
  const isBrowser = useIsBrowser()
  const path = useMemo(() => {
    if (isBrowser) {
      const paths = window.location.pathname.split("/")
      return paths[2]
    }
  }, [isBrowser])

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
          <Group justify="flex-start">
            {mainLinks.map(([, sidebar]) => (
              <Anchor
                key={sidebar[0].dirName}
                px="xs"
                href={sidebar[0].customProps.link}
                className={clsx(
                  styles.link,
                  path === sidebar[0].dirName && styles.linkActive,
                )}
              >
                {sidebar[0].customProps.label}
              </Anchor>
            ))}
            <ChainSelect chains={chains} path={path} />
          </Group>
        </Container>
      </Box>
      <Container size="xl">
        <Layout {...props} />
      </Container>
    </>
  )
}
