import React from "react"
import { Box, Button, Container, Stack, Title } from "@mantine/core"
import { RiArrowRightLine } from "react-icons/ri"
import Layout from "@theme/Layout"
import Section from "../components/Section/Section"

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Container my="6rem" size="xl">
        <Section>
          <Container size="md">
            <Stack gap="md" style={{ textAlign: "center" }}>
              <Title order={1} size="h2">
                RPC endpoints that scale without the complexity.
              </Title>
              <Title order={2} size="h5" style={{ fontWeight: "normal" }}>
                With Grove, transparency is our promise. You're billed solely for your
                usage, without any convoluted pricing structures. Whether it's a simple or
                complex request, the equation remains straightforward: 1 relay equals 1
                request. No hidden fees, no surprises.
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
        </Section>
        <Section>
          <div
            data-w-id="a7af2127-f86f-2f4c-fd02-4ab6a94c7be1"
            className="w-layout-grid brix---grid-4-columns-pricing-tablet"
          >
            <div className="brix---pricing-column-first">
              <div className="brix---pricing-table-top left">
                <div className="brix---text-300-medium"></div>
              </div>
              <div className="brix---pricing-content-wrapper-left">
                <div className="brix---text-300-medium">Free daily requests</div>
              </div>
              <div className="brix---pricing-content-wrapper-left">
                <div className="brix---text-300-medium">Auto-Scale</div>
              </div>
              <div className="brix---pricing-content-wrapper-left">
                <div className="brix---text-300-medium">Throughput limit</div>
              </div>
              <div className="brix---pricing-content-wrapper-left">
                <div className="brix---text-300-medium">Support</div>
              </div>
              <div className="brix---pricing-content-wrapper-left">
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">Blockchains</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper-left">
                <div className="brix---text-300-medium">Region support</div>
              </div>
              <div className="brix---pricing-content-wrapper-left">
                <div className="brix---text-300-medium">Applications</div>
              </div>
            </div>
            <div className="brix---pricing-column">
              <div className="brix---pricing-table-top">
                <div className="brix---mg-bottom-8px-2">
                  <div className="brix---color-neutral-810">
                    <div className="brix---text-201">Free</div>
                  </div>
                </div>
                <div className="brix---mg-bottom-16px-2">
                  <div className="brix---color-neutral-809">
                    <div className="brix---text-400-bold">Starter</div>
                  </div>
                </div>
                <a
                  href="https://portal.grove.city"
                  className="brix---btn-primary-small-full-width w-button"
                >
                  Get started
                </a>
              </div>
              <div className="brix---pricing-content-wrapper">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">Free daily requests</div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">100,000</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">Auto-Scale</div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">None</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">Throughput limit</div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">30 rps</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">Support</div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">Community Discord</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">Blockchains</div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">All supported chains</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">Region support</div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">Global</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">Applications</div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">2</div>
                </div>
              </div>
            </div>
            <div className="brix---pricing-column-featured">
              <div className="brix---pricing-table-top-featured">
                <div className="brix---mg-bottom-8px-2">
                  <div className="brix---color-neutral-810">
                    <div className="brix---text-201">Pay as you go</div>
                  </div>
                </div>
                <div className="brix---mg-bottom-16px-2">
                  <div className="brix---color-neutral-809">
                    <div className="brix---text-400-bold as">Auto-Scale</div>
                  </div>
                </div>
                <a
                  href="https://portal.grove.city"
                  className="brix---btn-primary-small-full-width miod w-button"
                >
                  Get started
                </a>
              </div>
              <div className="brix---pricing-content-wrapper ww">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">Free daily requests</div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">100,000</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper ww">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">
                    Auto-Scale
                    <br />
                  </div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">
                    $7.456 / additional million
                  </div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper ww">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">
                    Throughput limit
                    <br />
                  </div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">No throughput limit</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper ww">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">Support</div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">Community Discord</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper ww">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">Blockchains</div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">All supported chains</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper ww">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">
                    Region support
                    <br />
                  </div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">Global </div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper ww">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">Applications</div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">2</div>
                </div>
              </div>
            </div>
            <div className="brix---pricing-column">
              <div className="brix---pricing-table-top">
                <div className="brix---mg-bottom-8px-2">
                  <div className="brix---color-neutral-810">
                    <div className="brix---text-201">Custom</div>
                  </div>
                </div>
                <div className="brix---mg-bottom-16px-2">
                  <div className="brix---color-neutral-809">
                    <div className="brix---text-400-bold ee">Enterprise</div>
                  </div>
                </div>
                <a
                  href="/enterprise"
                  className="brix---btn-primary-small-full-width enterprise w-button"
                >
                  Talk to Sales
                </a>
              </div>
              <div className="brix---pricing-content-wrapper">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">
                    Free daily requests
                    <br />
                  </div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">Custom</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">
                    Auto-Scale
                    <br />
                  </div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">Custom volume plans</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">
                    Throughput limit
                    <br />
                  </div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">No throughput limit</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">Support</div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">Dedicated support</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">Blockchains</div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">All supported chains</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">
                    Region support
                    <br />
                  </div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">Global</div>
                </div>
              </div>
              <div className="brix---pricing-content-wrapper">
                <div className="brix---pricing-v8-title-table">
                  <div className="brix---text-300-medium">Applications</div>
                </div>
                <div className="brix---color-neutral-809">
                  <div className="brix---text-300-medium">Unlimited</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </Layout>
  )
}
