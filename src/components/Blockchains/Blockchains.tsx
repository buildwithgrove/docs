import { useEffect, useState } from "react"
import DataTable from "../DataTable/DataTable"
import { supportedBlockchains, columns } from "./supported-blockchains.table-data"

export default function Blockchains() {
  const [chains, setChains] = useState<unknown | null>(null)

  useEffect(() => {
    const getChains = async () => {
      try {
        const res = await fetch("https://pub.portal-prd.v2.pokt.network/query", {
          method: "POST",
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
  }, [])

  if (chains) {
    console.log(chains)
  }

  return <DataTable columns={columns} data={supportedBlockchains} />
}
