import "@mantine/core/styles.css"
import React from "react"
import { Box, Button, Container, MantineProvider, Stack, Title } from "@mantine/core"
import { RiArrowRightLine } from "react-icons/ri"

import Layout from "@theme/Layout"

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Container size="xl">
        <Container size="sm" my={"7rem"}>
          <Stack gap="md" style={{ textAlign: "center" }}>
            <Title order={1}>
              Dive into the decentralized era with Grove's robust RPC infrastructure.
            </Title>
            <Title order={2} size="h5" style={{ fontWeight: "normal" }}>
              Backed by 20,000+ independent, globally distributed nodes, Grove enables
              teams to deliver a multi-chain user experience at scale.
            </Title>
            <Box>
              <Button
                component="a"
                href="https://portal.grove.city"
                target="_blank"
                variant="transparent"
                rightSection={<RiArrowRightLine />}
                color="dark"
              >
                Build Now
              </Button>
            </Box>
            {/* <Rive width={300} height={300} src="/rive/portal-loader.riv" /> */}
          </Stack>
        </Container>
      </Container>
    </Layout>
  )
}
