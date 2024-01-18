import { Accordion, Box, Group, Title, Text, Code } from "@mantine/core"
import Ref from "./Ref"
import Schema from "./Schema"
import { MethodType } from "../types"
import Param from "./Param"
import Result from "./Result"

type Props = {
  method: MethodType
}

export default function Method({ method }: Props) {
  return (
    <Box p="xs">
      <Accordion>
        <Accordion.Item value="method">
          <Accordion.Control>
            <Group align="center">
              <Title order={5} m={0}>
                {method.name}
              </Title>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            {method.summary && (
              <Box mb="xl">
                <Title order={3}>Summary</Title>
                <Text>{method.summary}</Text>
              </Box>
            )}
            {method.description && (
              <Box mb="xl">
                <Title order={3}>Description</Title>
                <Text>{method.description}</Text>
              </Box>
            )}
            {method.params && (
              <Box mb="xl">
                <Title order={3}>Params</Title>
                {method.params.length > 0 ? (
                  method.params.map((param, index) => <Param param={param} />)
                ) : (
                  <Code>None</Code>
                )}
              </Box>
            )}
            {method.result && (
              <Box mb="xl">
                <Title order={3}>Result</Title>
                <Result result={method.result} />
              </Box>
            )}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  )
}
