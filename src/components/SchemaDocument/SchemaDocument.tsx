import spec from "@site/static/schemas/ethereum-core.json"
import { Box, Title, Text, Code } from "@mantine/core"
import React from "react"
import Param from "./components/Param"
import Result from "./components/Result"
import { SchemaDocumentContext } from "./SchemaDocumentContext"

type SchemaProps = {
  methodName: string
  specImport: typeof spec
}

export default function SchemaDocument({ methodName, specImport }: SchemaProps) {
  const specification = specImport ?? spec
  const method = specification.methods.find((method) => method.name === methodName)

  return (
    <SchemaDocumentContext.Provider value={{ spec: specification }}>
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

      {method.result && <Result result={method.result} />}

      <Box mt="xl">
        <Title order={3}>Console Log</Title>
        <Code block>{JSON.stringify(method, null, 2)}</Code>
      </Box>
    </SchemaDocumentContext.Provider>
  )
}
