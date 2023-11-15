import { Box, Group, Title, Text, Stack } from "@mantine/core"
import Ref from "./Ref"
import Schema from "./Schema"
import { ResultType } from "../types"

type Props = {
  result: ResultType
}

export default function Result({ result }: Props) {
  if (result.$ref) {
    return <Ref $ref={result.$ref} />
  }

  return (
    <Stack p="xs">
      <Group align="center">
        <Title order={5} m={0}>
          {result.name}
        </Title>
      </Group>
      {result.description && <Text size="sm">{result.description}</Text>}
      {result.schema && <Schema schema={result.schema} />}
    </Stack>
  )
}
