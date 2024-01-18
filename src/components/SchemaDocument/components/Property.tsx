import { Accordion, Box, Group, Title, Text, Stack } from "@mantine/core"
import Ref from "./Ref"
import { PropertyType } from "../types"

type Props = {
  property: PropertyType
}

export default function Property({ property }: Props) {
  if (property.$ref && !property.title) {
    return <Ref $ref={property.$ref} />
  }

  return (
    <Box p="xs" w="100%">
      {property.title ? (
        <Stack>
          <Title order={6} m={0}>
            {property.title}
          </Title>
          {property.description && (
            <Text fs="italic" size="sm">
              {property.description}
            </Text>
          )}
          {property.$ref && <Ref $ref={property.$ref} />}
        </Stack>
      ) : (
        <Ref $ref={property.$ref} />
      )}
    </Box>
  )
}
