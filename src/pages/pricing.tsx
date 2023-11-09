import React from "react"
import {
  Box,
  Button,
  Container,
  Stack,
  Group,
  Title,
  MantineColor,
  ButtonProps,
  Text,
} from "@mantine/core"
import { RiArrowRightLine } from "react-icons/ri"
import Layout from "@theme/Layout"
import Section from "@site/src/components/Section/Section"
import Pricing from "@site/src/components/Pricing/Pricing"

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Container my="6rem" size="xl">
        <Section>
          <Container size="md">
            <Stack gap="md" style={{ textAlign: "center" }}>
              <Title order={1} size="h2">
                RPC endpoints that scale without the complexity.
              </Title>
              <Title order={2} size="h5" style={{ fontWeight: "normal" }}>
                With Grove, transparency is our promise. You're billed solely for your
                usage, without any convoluted pricing structures. Whether it's a simple or
                complex request, the equation remains straightforward: 1 relay equals 1
                request. No hidden fees, no surprises.
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
            </Stack>
          </Container>
        </Section>
        <Section>
          <Pricing />
        </Section>
      </Container>
    </Layout>
  )
}
