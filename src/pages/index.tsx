import React from "react"
import { Box, Button, Container, Grid, Stack, Text, Title } from "@mantine/core"
import { RiArrowRightLine } from "react-icons/ri"
import Layout from "@theme/Layout"
import Lottie from "lottie-react"
import groveNetworkAnimation from "@site/static/lottie/grove-network.json"
import grovePoktAnimation from "@site/static/lottie/grove-pokt.json"
import groveTreeAnimation from "@site/static/lottie/grove-tree.json"
import Section from "../components/Section/Section"
import Card from "../components/Card/Card"
import Chains from "../components/Chains/Chains"
import Partners from "../components/Partners/Partners"
import QualityTabs from "../components/QualityTabs/QualityTabs"
import SectionCTA from "../components/SectionCTA/SectionCTA"

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Container my="6rem" size="xl">
        <Section>
          <Container size="md">
            <Stack gap="md" style={{ textAlign: "center" }}>
              <Title order={1}>
                Dive into the decentralized era with Grove's robust RPC infrastructure.
              </Title>
              <Title order={2} size="h5" style={{ fontWeight: "normal" }}>
                Backed by 20,000+ independent, globally distributed nodes, Grove enables
                teams to deliver a multi-chain user experience at scale.
              </Title>
              <Box>
                <Button
                  component="a"
                  href="https://portal.grove.city"
                  target="_blank"
                  variant="transparent"
                  rightSection={<RiArrowRightLine />}
                  color="dark"
                >
                  Build Now
                </Button>
              </Box>
            </Stack>
          </Container>
          <Lottie
            animationData={groveNetworkAnimation}
            aria-aria-labelledby="Grove Network Animation"
          />
        </Section>
        <Section>
          <Partners />
        </Section>
        <Section>
          <Card color="blue">
            <Grid gutter="xl" align="center">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Title order={2} mb="sm">
                  Founders of the Pocket Network
                </Title>
                <Text mb="sm">
                  As founders and key contributors of the Pocket Network, we are the
                  pioneers of the decentralized infrastructure movement and are committed
                  to building enterprise grade tools that enable the developers of today
                  and onboards the developers of tomorrow.
                </Text>
                <Button
                  component="a"
                  href="https://pokt.network"
                  target="_blank"
                  variant="transparent"
                  c="inherit"
                  rightSection={<RiArrowRightLine />}
                  p={0}
                >
                  Learn more about Pocket Network
                </Button>
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Lottie
                  animationData={grovePoktAnimation}
                  aria-aria-labelledby="Grove To POKT Animation"
                  style={{ height: 225 }}
                />
              </Grid.Col>
            </Grid>
          </Card>
        </Section>
        <Section>
          <Grid mb="xl">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Title order={2}>40+ Supported chains</Title>
              <Text>
                Read and write on over 40 blockchains, including EVM, Cosmos, Solana, and
                others.
              </Text>
            </Grid.Col>
          </Grid>
          <Chains />
        </Section>
        <Section>
          <Card color="green">
            <Grid gutter="xl" align="center">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Title order={2} mb="sm">
                  More than 1 billion relays per day
                </Title>
                <Text mb="sm">
                  Grove’s mission is to provide access to decentralized infrastructure for
                  all web3 developers. Together with the Pocket Network, Grove serves 1B+
                  relays with low latency and consistent uptime each day.
                </Text>
                <Button
                  component="a"
                  href="https://pokt.network"
                  target="_blank"
                  variant="transparent"
                  c="inherit"
                  rightSection={<RiArrowRightLine />}
                  p={0}
                >
                  Learn how to get started
                </Button>
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Lottie
                  animationData={groveTreeAnimation}
                  aria-aria-labelledby="Grove Tree Animation"
                  style={{ height: 225 }}
                />
              </Grid.Col>
            </Grid>
          </Card>
        </Section>
        <Section>
          <Grid mb="xl">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Title order={2}>Scale without trade-offs</Title>
              <Text>
                Focus on your innovation; we'll handle the node infrastructure
                complexities. Grove is a comprehensive solution designed to streamline
                multi-chain connectivity, optimize request handling, and ensure quality of
                service all on a decentralized network that can handle even the most
                demanding traffic.
              </Text>
            </Grid.Col>
          </Grid>
          <Card color="gray">
            <QualityTabs />
          </Card>
        </Section>
        <Section>
          <Grid mb="xl">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Title order={2}>Build without complexity</Title>
              <Text>
                Teams across web3 use Grove to simplify their tech stack and deliver
                dynamic user experiences.
              </Text>
            </Grid.Col>
          </Grid>
          <Grid align="stretch">
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Card color="blue" p="xl" h="100%">
                <Title order={3} size="h4" mb="md">
                  Gateways
                </Title>
                <Text mb="xl">
                  We've partnered with leading RPC providers and other web3 projects to
                  expand their chain offerings, and minimize their infrastructure cost.
                  Our goal is to enable projects to build their own gateways and offer new
                  services on top of Pocket Network.
                </Text>
                <Button
                  component="a"
                  href="/enterprise"
                  target="_blank"
                  variant="transparent"
                  c="inherit"
                  rightSection={<RiArrowRightLine />}
                  p={0}
                  w="fit-content"
                >
                  Become a partner
                </Button>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
              <Card color="green-light" p="xl" h="100%">
                <Title order={3} size="h4" mb="md">
                  Games
                </Title>
                <Text mb="xl">
                  Offering seamless multi-chain integrations across 40+ blockchain
                  networks, our RPC elevates the gaming experience in the decentralized
                  realm.
                </Text>
                <Button
                  component="a"
                  href="/blog/defi-kingdoms"
                  target="_blank"
                  variant="transparent"
                  c="inherit"
                  rightSection={<RiArrowRightLine />}
                  p={0}
                  w="fit-content"
                >
                  DeFi Kingdoms Case Study
                </Button>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
              <Card color="green" p="xl" h="100%">
                <Title order={3} size="h4" mb="md">
                  Wallets & Exchanges
                </Title>
                <Text mb="xl">
                  Web3 wallets need to be able to provide their users with security, great
                  UX, and fast transactions. Grove always delivers.
                </Text>
                <Button
                  component="a"
                  href="/blog/omni-wallet"
                  target="_blank"
                  variant="transparent"
                  c="inherit"
                  rightSection={<RiArrowRightLine />}
                  p={0}
                  w="fit-content"
                >
                  Omni Wallet Case Study
                </Button>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
              <Card color="gray" p="xl" h="100%">
                <Title order={3} size="h4" mb="md">
                  Decentralized Finance
                </Title>
                <Text mb="xl">
                  Seamlessly integrate with the DeFi ecosystem, from lending platforms to
                  yield farming. Grove ensures reliable and fast data access, empowering
                  your DeFi solutions.
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6, lg: 4 }}>
              <Card color="blue-light" p="xl" h="100%">
                <Title order={3} size="h4" mb="md">
                  Developer Tooling
                </Title>
                <Text mb="xl">
                  We get developers want tools that help them solve the tough challenges,
                  we know because we are them. Grove removes the need for node management
                  while opening access to a larger community of builders.
                </Text>
              </Card>
            </Grid.Col>
          </Grid>
        </Section>
        <SectionCTA />
      </Container>
    </Layout>
  )
}
