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

  let paths

  if (isBrowser) {
    paths = window.location.pathname.split("/")
  }
  const path = useMemo(() => {
    if (paths) {
      return paths[1]
    }
  }, [paths])

  const mainLinks = Object.entries(sidebars).filter(
    ([key]) => key === "guides" || key === "groveApi",
  ).sort(([keyA], [keyB]) => {
    // Define the desired order: guides first, then groveApi
    const order = { guides: 0, groveApi: 1 };
    return order[keyA] - order[keyB];
  })

  const exploreGroveLink = Object.entries(sidebars).find(
    ([key]) => key === "exploreGrove"
  )


  return (
    <>
      <Box className={styles.subnav} px="md">
        <Group justify="flex-start">
          {mainLinks.map(([sidebarKey, sidebar]) => (
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
          <ChainSelect activePath={path} />
          {exploreGroveLink && (
            <Anchor
              key={exploreGroveLink[1][0].dirName}
              px="xs"
              href={exploreGroveLink[1][0].customProps.link}
              className={clsx(
                styles.link,
                path === exploreGroveLink[1][0].dirName && styles.linkActive,
              )}
            >
              {exploreGroveLink[1][0].customProps.label}
            </Anchor>
          )}
        </Group>
      </Box>

      <Layout {...props} />
    </>
  )
}
