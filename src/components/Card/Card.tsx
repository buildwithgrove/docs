import { useColorMode } from "@docusaurus/theme-common"
import type { CardProps } from "@mantine/core"
import { Card as MantineCard } from "@mantine/core"

type GroveCardProps = CardProps & {
  color?:
    | "green"
    | "green-light"
    | "green-dark"
    | "blue"
    | "blue-light"
    | "blue-dark"
    | "gray"
    | "gray-light"
    | "gray-dark"
    | "orange"
    | "orange-light"
    | "orange-dark"
}

export default function Card({
  color = "gray",
  p = "4rem",
  radius = "lg",
  children,
  ...props
}: GroveCardProps) {
  const { colorMode } = useColorMode()

  let bg
  let tc
  switch (color) {
    case "green":
      bg = "--mantine-color-green-7"
      tc = "--mantine-color-gray-1"
      break
    case "green-light":
      bg = "--mantine-color-green-5"
      tc = "--mantine-color-dark-8"
      break
    case "green-dark":
      bg = "--mantine-color-green-9"
      tc = "--mantine-color-dark-8"
      break
    case "blue":
      bg = "--mantine-color-blue-6"
      tc = "--mantine-color-gray-1"
      break
    case "blue-light":
      bg = "--mantine-color-blue-4"
      tc = "--mantine-color-dark-8"
      break
    case "blue-dark":
      bg = "--mantine-color-blue-8"
      tc = "--mantine-color-dark-8"
      break
    case "gray":
      if (colorMode === "light") {
        bg = "--mantine-color-gray-2"
        tc = "--mantine-color-dark-8"
      } else {
        bg = "--mantine-color-dark-7"
        tc = "--mantine-color-gray-2"
      }
      break
    case "gray-light":
      if (colorMode === "light") {
        bg = "--mantine-color-gray-1"
        tc = "--mantine-color-dark-8"
      } else {
        bg = "--mantine-color-dark-6"
        tc = "--mantine-color-gray-2"
      }
      break
    case "gray-dark":
      if (colorMode === "light") {
        bg = "--mantine-color-gray-3"
        tc = "--mantine-color-dark-8"
      } else {
        bg = "--mantine-color-dark-8"
        tc = "--mantine-color-gray-2"
      }
      break
    case "orange":
      bg = "--mantine-color-orange-6"
      tc = "--mantine-color-dark-8"
      break
    case "orange-light":
      bg = "--mantine-color-orange-4"
      tc = "--mantine-color-dark-8"
      break
    case "orange-dark":
      bg = "--mantine-color-orange-8"
      tc = "--mantine-color-dark-8"
      break
    default:
      bg = "--mantine-color-green-6"
      tc = "--mantine-color-dark-8"
      break
  }

  return (
    <MantineCard
      style={{ backgroundColor: `var(${bg})`, color: `var(${tc})` }}
      p={p}
      radius={radius}
      {...props}
    >
      {children}
    </MantineCard>
  )
}
