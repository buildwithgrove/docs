import DataTable from "../DataTable/DataTable"
import { supportedBlockchains, columns } from "./supported-blockchains.table-data"
import { usePluginData } from "@docusaurus/useGlobalData"

type Chain = {
  id: string
  description: string
  blockchain: string
}

export default function Blockchains() {
  const chains = usePluginData("grove-chains")
  return (
    <DataTable
      columns={columns}
      data={(chains as Chain[])
        .map((chain) => ({
          name: chain.description,
          portalApiPrefix: chain.blockchain,
          relayChainID: chain.id,
          evmChainID: supportedBlockchains.find((c) => c.relayChainID === chain.id)
            ?.evmChainID,
        }))
        .sort((a, b) => (a.name > b.name ? 1 : -1))}
    />
  )
}
