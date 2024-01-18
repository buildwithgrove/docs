export default async function groveChains(context, options) {
  // ...
  return {
    name: "grove-chains",
    async loadContent() {
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

        if (!res.ok) {
          throw new Error("failed blockchain request")
        }
        const body = await res.json()
        return body.data.blockchains
      } catch (error) {
        console.log(error)
        return []
      }
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions
      await setGlobalData(content)
    },
  }
}
