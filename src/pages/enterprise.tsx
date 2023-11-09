import React from "react"
import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core"
import { RiArrowRightLine } from "react-icons/ri"
import Layout from "@theme/Layout"
import Section from "../components/Section/Section"
import { useForm } from "@mantine/form"

export default function Home(): JSX.Element {
  const form = useForm({
    name: "enterprise-form",
    initialValues: {
      email: "",
      companyWebsite: "",
      tellUsMore: "",
      nodeDetails: "",
      relaysRequesting: "",
      mostImportant: "",
      comment: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  })
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
              <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                  required
                  label="Email"
                  placeholder="your@email.com"
                  name="email"
                  type="email"
                  {...form.getInputProps("email")}
                />
                <TextInput
                  label="Company Website"
                  placeholder=""
                  name="companyWebsite"
                  {...form.getInputProps("companyWebsite")}
                />
                <Textarea
                  label="Tell us more about what you are looking for"
                  placeholder="Are you seeking RPC service for your dapp, an RPC gateway for client companies, or blockchain nodes as a service?"
                  name="tellUsMore"
                  {...form.getInputProps("tellUsMore")}
                />
                <Textarea
                  label="Are you running nodes internally or using a third party"
                  placeholder="Do you run your own nodes or utilize third-party nodes?  "
                  name="nodeDetails"
                  {...form.getInputProps("nodeDetails")}
                />
                <TextInput
                  label="How many daily RPC are you currently requesting"
                  placeholder="Estimate your daily RPC request volume."
                  name="relaysRequested"
                  {...form.getInputProps("relaysRequested")}
                />
                <TextInput
                  required
                  label="What is the most important for you when choosing a RPC provider"
                  placeholder="Decentralization, cost-effectiveness, or performance?"
                  name="mostImportant"
                  {...form.getInputProps("mostImportant")}
                />
                <Textarea
                  label="Would you like to drop a comment"
                  name="comment"
                  {...form.getInputProps("comment")}
                />
                <Group justify="flex-end" mt="md">
                  <Button type="submit">Let's Talk</Button>
                </Group>
              </form>
            </Section>
          </Container>
        </Section>
      </Container>
    </Layout>
  )
}
