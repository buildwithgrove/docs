import type { MantineSize, MantineSpacing } from "@mantine/core"
import { Box } from "@mantine/core"

type SectionProps = {
  size?: MantineSize | "2x" | "3x"
  children: React.ReactNode
}

export default function Section({ size = "2x", children }: SectionProps) {
  let py: MantineSpacing = size
  if (size === "2x") {
    py = "3.5rem"
  }
  if (size === "3x") {
    py = "7rem"
  }
  return (
    <Box component="section" py={py}>
      {children}
    </Box>
  )
}
