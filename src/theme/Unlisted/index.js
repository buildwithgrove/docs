import { UnlistedBannerMessage, UnlistedBannerTitle } from "@docusaurus/theme-common"

import Admonition from "@theme/Admonition"
import React from "react"

export default function Unlisted() {
  return (
    <Admonition type="caution" title={<UnlistedBannerTitle />}>
      <UnlistedBannerMessage />
    </Admonition>
  )
}
