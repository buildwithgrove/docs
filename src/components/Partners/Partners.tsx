import { useColorMode } from "@docusaurus/theme-common"
import { Box, Image, SimpleGrid, Text } from "@mantine/core"

export const partners: { id: string; light: string; dark: string }[] = [
  {
    id: "trust-wallet",
    light: "/partners/trust-wallet.svg",
    dark: "/partners/trust-wallet.svg",
  },
  {
    id: "gold-sky",
    light: "/partners/gold-sky.svg",
    dark: "/partners/gold-sky.svg",
  },
  {
    id: "onfinality",
    light: "/partners/onfinality.svg",
    dark: "/partners/onfinality.svg",
  },
  {
    id: "linen",
    light: "/partners/linen.svg",
    dark: "/partners/linen.svg",
  },
  {
    id: "get-block",
    light: "/partners/get-block.svg",
    dark: "/partners/get-block.svg",
  },
  {
    id: "oasys",
    light: "/partners/oasys.svg",
    dark: "/partners/oasys.svg",
  },
  {
    id: "sub-squid",
    light: "/partners/sub-squid.svg",
    dark: "/partners/sub-squid.svg",
  },
  {
    id: "defi-kingdoms",
    light: "/partners/defi-kingdoms.svg",
    dark: "/partners/defi-kingdoms.svg",
  },
  {
    id: "li-fi",
    light: "/partners/li-fi.svg",
    dark: "/partners/li-fi.svg",
  },
  {
    id: "blockspace",
    light: "/partners/blockspace.svg",
    dark: "/partners/blockspace.svg",
  },
  {
    id: "covalent",
    light: "/partners/covalent.svg",
    dark: "/partners/covalent.svg",
  },
  {
    id: "status",
    light: "/partners/status.svg",
    dark: "/partners/status.svg",
  },
  {
    id: "biconomy",
    light: "/partners/biconomy.svg",
    dark: "/partners/biconomy.svg",
  },
]

export default function Partners() {
  const { colorMode } = useColorMode()

  return (
    <SimpleGrid
      cols={{ base: 2, xs: 3, sm: 4, md: 5, lg: 6, xl: 7 }}
      spacing="xl"
      verticalSpacing="xl"
    >
      <Box style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Text m={0} p={0}>
          Trusted by
        </Text>
      </Box>
      {partners.map((partner) => (
        <Box key={partner.id}>
          <Image
            src={colorMode === "light" ? partner.light : partner.dark}
            alt={`${partner.id} logo`}
          />
        </Box>
      ))}
    </SimpleGrid>
  )
}
