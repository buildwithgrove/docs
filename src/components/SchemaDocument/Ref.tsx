import { Code } from "@mantine/core"
import { useContext } from "react"
import Schema from "./Schema"
import Param from "./Param"
import { SchemaDocumentContext } from "./SchemaDocumentContext"
import { $RefType } from "./types"

type Props = $RefType

function Default({ content }: { content: string }) {
  return (
    <Code mb="md" block>
      {JSON.stringify(content, null, 2)}
    </Code>
  )
}

export default function Ref({ $ref }: Props) {
  const { spec } = useContext(SchemaDocumentContext)
  const split = $ref.split("/")
  const path1 = split[1]
  const path2 = split[2]
  const path3 = split[3]

  const data = spec[path1][path2][path3]

  let Component = null
  let props = {}

  switch (path2) {
    case "schemas":
      Component = Schema
      props = {
        schema: data,
        order: 6,
      }
      break
    case "contentDescriptors":
      Component = Param
      props = {
        param: data,
      }
      break
    default:
      Component = Default
      props = {
        content: data,
      }
      break
  }

  return <Component {...props} />
}
