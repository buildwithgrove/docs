// import OpenRPCTypings from "@open-rpc/typings"
import spec from "@site/static/schemas/ethereum-core.json"
import { Box, Title, Text, Code } from "@mantine/core"

type SchemaProps = {
  methodName: string
}

export default function Schema({ methodName }: SchemaProps) {
  const method = spec.methods.find((method) => method.name === methodName)
  //   const typings = new OpenRPCTypings(spec as any)
  //   console.log(typings)
  console.log(spec)
  let result = method.result

  if (result.$ref) {
    // result = ""
  }

  return (
    <>
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
          <Code block>{JSON.stringify(method.params, null, 2)}</Code>
        </Box>
      )}

      {method.result && !method.result.$ref && (
        <Box mb="xl" display={Boolean(method.params) ? "block" : "none"}>
          <Title order={3}>Result</Title>
          <Box p="xs" mb="xl">
            <Title order={6}>Name:</Title>
            <Text mb="md">{method.result.name}</Text>

            <Title order={6}>Description:</Title>
            <Text mb="md">{method.result.description}</Text>

            <Title order={6}>Schema:</Title>
            <Code block>{JSON.stringify(method.result.schema, null, 2)}</Code>
          </Box>
        </Box>
      )}

      <Code>{JSON.stringify(method, null, 2)}</Code>
    </>
  )
}
