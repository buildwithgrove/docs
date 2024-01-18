import { useColorMode } from "@docusaurus/theme-common"
import { Container, Image, Stack, Tabs, Text } from "@mantine/core"
import styles from "./QualityTabs.module.css"

export const tabs: {
  id: string
  label: string
  icon: string
  light: string
  dark: string
  text: string
}[] = [
  {
    id: "portal",
    label: "Portal",
    icon: "/img/icon-portal.png",
    light: "/img/tab-portal.svg",
    dark: "/img/tab-portal.svg",
    text: "Grove is a platform that enables fast, decentralized multi-chain connectivity in under 3 minutes. Users can manage applications, endpoints, security and share access across teams.",
  },
  {
    id: "load-balancer",
    label: "Load Balancer",
    icon: "/img/icon-load-balancer.png",
    light: "/img/tab-load-balancer.svg",
    dark: "/img/tab-load-balancer.svg",
    text: "Routing relays globally across 20,000+ nodes in order to ensure speed and efficiency isn’t easy, Grove abstracts the need to manage regions, routing, load balancing, and maximizing performance.",
  },
  {
    id: "quality",
    label: "Quality",
    icon: "/img/icon-quality.png",
    light: "/img/tab-quality.svg",
    dark: "/img/tab-quality.svg",
    text: "Grove's proprietary Node Selection Algorithm filters through the globally distributed nodes to match user location and needs, ensuring low latency and reliability.",
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: "/img/icon-integrations.png",
    light: "/img/tab-integrations.svg",
    dark: "/img/tab-integrations.svg",
    text: "Seamlessly connect and expand your application's capabilities with vast integrations. Grove is designed to integrate effortlessly, ensuring your product remains agile and ahead of the curve.",
  },
]

export default function Partners() {
  const { colorMode } = useColorMode()

  return (
    <Tabs defaultValue="portal">
      {tabs.map((tab) => (
        <Tabs.Panel key={tab.id} value={tab.id}>
          <Container size="md">
            <Stack align="center" justify="center">
              <Image
                src={colorMode === "light" ? tab.light : tab.dark}
                alt={`${tab.label} drawing`}
              />
              <Text ta="center">{tab.text}</Text>
            </Stack>
          </Container>
        </Tabs.Panel>
      ))}
      <Tabs.List className={styles.list}>
        {tabs.map((tab) => (
          <Tabs.Tab
            key={tab.id}
            value={tab.id}
            leftSection={
              <Image
                src={tab.icon}
                alt={`${tab.id} icon`}
                style={{ maxHeight: "30px" }}
              />
            }
            className={styles.tab}
          >
            <Text fs="h4">{tab.label}</Text>
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  )
}
