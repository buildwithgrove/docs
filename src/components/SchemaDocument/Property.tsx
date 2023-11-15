import { Accordion, Box, Group, Title, Text } from "@mantine/core"
import Ref from "./Ref"
import { SchemaType } from "./types"

type Props = {
  property: SchemaType
}

export default function Property({ property }: Props) {
  if (property.$ref && !property.title) {
    return <Ref $ref={property.$ref} />
  }

  return (
    <Box p="xs">
      {property.title ? (
        <Accordion>
          <Accordion.Item value="property">
            <Accordion.Control>
              <Title order={6} m={0}>
                {property.title}
              </Title>
            </Accordion.Control>
            <Accordion.Panel>
              {property.description && (
                <Text fs="italic" size="sm">
                  {property.description}
                </Text>
              )}
              {property.$ref && <Ref $ref={property.$ref} />}
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Ref $ref={property.$ref} />
      )}
    </Box>
  )
}
