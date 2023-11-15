import { Box, Group, Title, Text, Accordion } from "@mantine/core"
import Property from "./Property"
import Ref from "./Ref"
import { OneOfItemType } from "./types"

type Props = {
  oneOf: OneOfItemType
}

export default function OneOf({ oneOf }: Props) {
  return (
    <Box p="xs">
      {oneOf.$ref ? (
        <Ref $ref={oneOf.$ref} />
      ) : (
        <Accordion>
          <Accordion.Item value={oneOf.title}>
            <Accordion.Control>
              <Group align="center" justify="space-between">
                <Title order={5} m={0}>
                  {oneOf.title}
                </Title>
                {oneOf.type && (
                  <Text size="xs" color="var(--mantine-primary-color-filled)">
                    {oneOf.type}
                  </Text>
                )}
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              {oneOf.description && <Text size="sm">{oneOf.description}</Text>}
              {oneOf.properties && (
                <Box mt="xl" p="xs">
                  <Title order={5} m={0}>
                    Properties
                  </Title>
                  {Object.values(oneOf.properties).map((property) => (
                    <Property property={property} />
                  ))}
                </Box>
              )}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      )}
    </Box>
  )
}
