import { useColorMode } from "@docusaurus/theme-common"
import { Box, Image, SimpleGrid } from "@mantine/core"

export const chains: { id: string; light: string; dark: string }[] = [
  {
    id: "solana",
    light: "/chains/solana.png",
    dark: "/chains/solana.png",
  },
  {
    id: "ethereum",
    light: "/chains/ethereum.png",
    dark: "/chains/ethereum.png",
  },
  {
    id: "fantom",
    light: "/chains/fantom.png",
    dark: "/chains/fantom.png",
  },
  {
    id: "arbitrum",
    light: "/chains/arbitrum.png",
    dark: "/chains/arbitrum.png",
  },
  {
    id: "fuse",
    light: "/chains/fuse.png",
    dark: "/chains/fuse.png",
  },
  {
    id: "sui",
    light: "/chains/sui.png",
    dark: "/chains/sui.png",
  },
  {
    id: "avalanche",
    light: "/chains/avalanche.png",
    dark: "/chains/avalanche.png",
  },
  {
    id: "osmosis",
    light: "/chains/osmosis.png",
    dark: "/chains/osmosis.png",
  },
  {
    id: "pokt",
    light: "/chains/pokt.png",
    dark: "/chains/pokt.png",
  },
  {
    id: "polygon",
    light: "/chains/polygon.png",
    dark: "/chains/polygon.png",
  },
  {
    id: "evmos",
    light: "/chains/evmos.png",
    dark: "/chains/evmos.png",
  },
  {
    id: "starknet",
    light: "/chains/starknet.png",
    dark: "/chains/starknet.png",
  },
  {
    id: "okx",
    light: "/chains/okx.png",
    dark: "/chains/okx.png",
  },
  {
    id: "dfk-chain",
    light: "/chains/dfk-chain.png",
    dark: "/chains/dfk-chain.png",
  },
  {
    id: "iotex",
    light: "/chains/iotex.png",
    dark: "/chains/iotex.png",
  },
  {
    id: "binance-smart-chain",
    light: "/chains/binance-smart-chain.png",
    dark: "/chains/binance-smart-chain.png",
  },
  {
    id: "boba",
    light: "/chains/boba.png",
    dark: "/chains/boba.png",
  },
  {
    id: "metis",
    light: "/chains/metis.png",
    dark: "/chains/metis.png",
  },
  {
    id: "klaytn",
    light: "/chains/klaytn.png",
    dark: "/chains/klaytn.png",
  },
  {
    id: "near",
    light: "/chains/near.png",
    dark: "/chains/near.png",
  },
  {
    id: "base",
    light: "/chains/base.png",
    dark: "/chains/base.png",
  },
  {
    id: "dogechain",
    light: "/chains/dogechain.png",
    dark: "/chains/dogechain.png",
  },
  {
    id: "moonriver",
    light: "/chains/moonriver.png",
    dark: "/chains/moonriver.png",
  },
  {
    id: "gnosis-chain",
    light: "/chains/gnosis-chain.png",
    dark: "/chains/gnosis-chain.png",
  },
  {
    id: "optimism",
    light: "/chains/optimism.png",
    dark: "/chains/optimism.png",
  },
  {
    id: "moonbeam",
    light: "/chains/moonbeam.png",
    dark: "/chains/moonbeam.png",
  },
  {
    id: "celo",
    light: "/chains/celo.png",
    dark: "/chains/celo.png",
  },
  {
    id: "harmony",
    light: "/chains/harmony.png",
    dark: "/chains/harmony.png",
  },
]

export default function Chains() {
  const { colorMode } = useColorMode()

  return (
    <SimpleGrid
      cols={{ base: 2, xs: 3, sm: 4, md: 5, lg: 6, xl: 7 }}
      spacing="xl"
      verticalSpacing="xl"
    >
      {chains.map((chain) => (
        <Box key={chain.id}>
          <Image
            src={colorMode === "light" ? chain.light : chain.dark}
            alt={`${chain.id} logo`}
          />
        </Box>
      ))}
    </SimpleGrid>
  )
}
