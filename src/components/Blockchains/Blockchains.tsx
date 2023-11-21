import useIsBrowser from "@docusaurus/useIsBrowser"
import { useEffect, useState } from "react"
import DataTable from "../DataTable/DataTable"
import { supportedBlockchains, columns } from "./supported-blockchains.table-data"

export default function Blockchains() {
  const isBrowser = useIsBrowser()
  const [chains, setChains] = useState<unknown | null>(null)

  useEffect(() => {
    if (isBrowser) {
      const getChains = async () => {
        try {
          const res = await fetch("https://pub.portal-prd.v2.pokt.network/query", {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query:
                "query blockchains { blockchains(active: true) { id ticker blockchain blockchainAliases active description enforceResult chainIDCheck logLimitBlocks path } }",
            }),
          })

          if (res.ok) {
            const body = await res.json()
            setChains(body)
          }
        } catch (error) {
          console.log(error)
        }
      }
      getChains()
    }
  }, [isBrowser])

  if (chains) {
    console.log(chains)
  }

  return <DataTable columns={columns} data={supportedBlockchains} />
}
