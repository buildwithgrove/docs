import { Box, List } from "@mantine/core"
import { PropertyType } from "../types"
import Property from "./Property"

type Props = {
  properties: PropertyType[]
}

export default function Properties({ properties }: Props) {
  return (
    <Box p="xs">
      <List pl={0}>
        {properties.map((property) => (
          <List.Item
            styles={{ itemWrapper: { width: "100%" }, itemLabel: { width: "100%" } }}
          >
            <Property property={property} />
          </List.Item>
        ))}
      </List>
    </Box>
  )
}
