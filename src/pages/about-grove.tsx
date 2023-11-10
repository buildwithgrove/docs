import React from "react"
import { Box, Button, Container, Stack, Title } from "@mantine/core"
import { RiArrowRightLine } from "react-icons/ri"
import Layout from "@theme/Layout"
import Section from "@site/src/components/Section/Section"

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Container my="6rem" size="xl">
        <Section>
          <Container size="md">
            <Stack gap="md" style={{ textAlign: "center" }}>
              <Title order={1} size="h2">
                Grove Redefines Our Very Existence
              </Title>
              <Title order={2} size="h5" style={{ fontWeight: "normal" }}>
                ...
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
      </Container>
    </Layout>
  )
}
