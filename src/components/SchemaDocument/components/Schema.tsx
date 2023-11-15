import {
  Box,
  Code,
  Group,
  Title,
  Text,
  TitleOrder,
  Accordion,
  MantineSpacing,
  Stack,
} from "@mantine/core"
import OneOf from "./OneOf"
import Property from "./Property"
import Ref from "./Ref"
import { SchemaType } from "../types"

type Props = {
  schema: SchemaType
  order?: TitleOrder
}

export default function Schema({ schema, order = 5 }: Props) {
  const Header = ({ mr = 0 }: { mr?: MantineSpacing }) => (
    <Group align="center" justify="space-between" mr={mr}>
      <Title order={order} m={0}>
        {schema.title}
      </Title>
      {schema.type && (
        <Text size="xs" color="var(--mantine-primary-color-filled)">
          {schema.type}
        </Text>
      )}
    </Group>
  )

  const Body = () => (
    <Stack>
      {schema.description && (
        <Text fs="italic" size="sm">
          {schema.description}
        </Text>
      )}
      {schema.items && schema.items.$ref && <Ref $ref={schema.items.$ref} />}
      {schema.oneOf && schema.oneOf.map((one) => <OneOf oneOf={one} />)}
      {schema.pattern && (
        <Group align="center">
          <Text size="sm">Pattern:</Text>
          <Code>{schema.pattern}</Code>
        </Group>
      )}
      {schema.properties && (
        <Box mt="xl" p="xs">
          {Object.values(schema.properties).map((property) => (
            <Property property={property} />
          ))}
        </Box>
      )}
    </Stack>
  )

  return (
    <Box p="xs">
      {schema.$ref ? (
        <Ref $ref={schema.$ref} />
      ) : (
        <>
          {schema.type === "string" ||
          schema.type === "null" ||
          schema.type === undefined ? (
            <>
              <Header />
              <Body />
            </>
          ) : (
            <Accordion>
              <Accordion.Item value="schema">
                <Accordion.Control>
                  <Header mr="md" />
                </Accordion.Control>
                <Accordion.Panel>
                  <Body />
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          )}
        </>
      )}
    </Box>
  )
}
