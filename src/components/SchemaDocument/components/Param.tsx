import { Accordion, Box, Group, Title, Text } from "@mantine/core"
import Ref from "./Ref"
import Schema from "./Schema"
import { ParamType } from "../types"

type Props = {
  param: ParamType
}

export default function Param({ param }: Props) {
  if (param.$ref) {
    return <Ref $ref={param.$ref} />
  }

  return (
    <Box p="xs">
      <Accordion>
        <Accordion.Item value="param">
          <Accordion.Control>
            <Group align="center">
              <Title order={5} m={0}>
                {param.name}
              </Title>
              {param.required && (
                <Text size="xs" color="var(--mantine-primary-color-filled)">
                  Required
                </Text>
              )}
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            {param.description && (
              <Text size="sm" fs="italic">
                {param.description}
              </Text>
            )}
            {param.schema && <Schema schema={param.schema} />}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  )
}
