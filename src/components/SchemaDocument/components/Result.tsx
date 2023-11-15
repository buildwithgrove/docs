import { Box, Group, Title, Text } from "@mantine/core"
import Ref from "./Ref"
import Schema from "./Schema"
import { ResultType } from "../types"

type Props = {
  result: ResultType
}

export default function Result({ result }: Props) {
  return (
    <Box mb="sm">
      <Title order={3}>Result</Title>
      {result.$ref ? (
        <Ref $ref={result.$ref} />
      ) : (
        <>
          <Group align="center" justify="space-between">
            <Title order={5} m={0}>
              {result.name}
            </Title>
          </Group>
          {result.description && <Text size="sm">{result.description}</Text>}
          {result.schema && <Schema schema={result.schema} />}
        </>
      )}
    </Box>
  )
}
