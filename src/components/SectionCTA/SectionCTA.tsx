import { useColorMode } from "@docusaurus/theme-common"
import { Group, Title, Button } from "@mantine/core"
import Section from "../Section/Section"
import Card from "../Card/Card"

export default function SectionCTA() {
  const { colorMode } = useColorMode()
  return (
    <Section>
      <Card color="gray">
        <Group justify="space-between">
          <Title order={2}>The last RPC you'll ever need</Title>
          <Group>
            <Button
              component="a"
              href="https://portal.grove.city"
              target="_blank"
              size="lg"
              px="3rem"
            >
              Build now
            </Button>
            <Button
              component="a"
              href="https://portal.grove.city"
              target="_blank"
              variant="outline"
              size="lg"
              px="3rem"
              color={colorMode === "light" ? "dark" : "gray"}
            >
              Talk to sales
            </Button>
          </Group>
        </Group>
      </Card>
    </Section>
  )
}
