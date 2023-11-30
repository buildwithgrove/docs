import spec from "@site/static/schemas/evm-core.json"
import React from "react"
import { SchemaDocumentContext } from "./SchemaDocumentContext"
import Method from "./components/Method"

type SchemaProps = {
  methodName?: string
  specImport: typeof spec
}

export default function SchemaDocument({ methodName, specImport }: SchemaProps) {
  const specification = specImport ?? spec
  const method = specification.methods.find((method) => method.name === methodName)

  return (
    <SchemaDocumentContext.Provider value={{ spec: specification }}>
      {method ? (
        <Method method={method} />
      ) : (
        specification.methods.map((method) => <Method method={method} />)
      )}
      {/* <Box mt="xl">
        <Title order={3}>Console Log</Title>
        <Code block>{JSON.stringify(method, null, 2)}</Code>
      </Box> */}
    </SchemaDocumentContext.Provider>
  )
}
