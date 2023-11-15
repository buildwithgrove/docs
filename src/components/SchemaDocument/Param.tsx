import { Accordion, Box, Group, Title, Text } from "@mantine/core"
import Ref from "./Ref"
import Schema from "./Schema"
import { ParamType } from "./types"

type Props = {
  param: ParamType
}

export default function Param({ param }: Props) {
  console.log(param)
  return (
    <Box p="xs">
      {param.$ref ? (
        <Ref $ref={param.$ref} />
      ) : (
        <Accordion>
          <Accordion.Item value="param">
            <Accordion.Control>
              <Group align="center" justify="space-between" mr="md">
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
      )}
    </Box>
  )
}
