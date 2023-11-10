import React from "react"
import { Box, Button, Container, Stack, Title } from "@mantine/core"
import { RiArrowRightLine } from "react-icons/ri"
import Layout from "@theme/Layout"
import Section from "../components/Section/Section"
import ContactForm from "../components/Contact/ContactForm"

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Container my="6rem" size="xl">
        <Section>
          <Container size="md">
            <Stack gap="md" style={{ textAlign: "center" }}>
              <Title order={1} size="h2">
                Solutions for every size and scale.
              </Title>
              <Title order={2} size="h5" style={{ fontWeight: "normal" }}>
                At Grove, we value genuine connections and collaborations. Let's discuss
                how we can support your enterprise journey in the decentralized world.
                Please fill in the form, and let's start the conversation.
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
            <Section>
              <ContactForm />
            </Section>
          </Container>
        </Section>
      </Container>
    </Layout>
  )
}
