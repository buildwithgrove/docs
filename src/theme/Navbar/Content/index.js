import React from "react"
import Content from "@theme-original/Navbar/Content"
import { Container } from "@mantine/core"

export default function ContentWrapper(props) {
  return (
    <Container style={{ width: "var(--container-size)" }} size="xl">
      <Content {...props} />
    </Container>
  )
}
