import React from "react"
import { composeProviders } from "@docusaurus/theme-common"
import {
  ColorModeProvider,
  AnnouncementBarProvider,
  DocsPreferredVersionContextProvider,
  ScrollControllerProvider,
  NavbarProvider,
  PluginHtmlClassNameProvider,
} from "@docusaurus/theme-common/internal"
import { MantineProvider } from "@mantine/core"
import { portalTheme } from "../../portalTheme"
import "@mantine/core/styles.css"

const Provider = composeProviders([
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  DocsPreferredVersionContextProvider,
  PluginHtmlClassNameProvider,
  NavbarProvider,
])
export default function LayoutProvider({ children }) {
  return (
    <MantineProvider theme={portalTheme}>
      <Provider>{children}</Provider>
    </MantineProvider>
  )
}
