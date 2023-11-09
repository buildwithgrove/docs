import React from "react"
import { useColorMode } from "@docusaurus/theme-common"
import { Box, Button, Group, Title, Text, MantineColor, ButtonProps } from "@mantine/core"
import styles from "./Pricing.module.css"

type Plan = {
  type: string
  description: string
  style?: {
    light?: {
      backgroundColor?: MantineColor
    }
    dark?: {
      backgroundColor?: MantineColor
    }
  }
  action: Partial<HTMLAnchorElement> &
    ButtonProps & {
      label: string
    }
  fields: PlanFields
}

type PlanFields = {
  freeDailyRequest: string
  baseRelayRate: string
  overageRelayRate: string
  throughputLimit: string
  support: string
  blockchains: string
  regionSupport: string
  applications: string
}

export default function Pricing() {
  const { colorMode } = useColorMode()

  const fields: { [Property in keyof PlanFields]: string } = {
    freeDailyRequest: "Free daily requests",
    baseRelayRate: "Base Rate",
    overageRelayRate: "Overage Rate",
    throughputLimit: "Throughput limit",
    support: "Support",
    blockchains: "Blockchains",
    regionSupport: "Region support",
    applications: "Applications",
  }
  const plans: Plan[] = [
    {
      type: "Starter",
      description: "Free",
      action: {
        label: "Get started",
        href: "https://portal.grove.city/",
        target: "_blank",
        variant: "outline",
      },
      fields: {
        freeDailyRequest: "100,000",
        baseRelayRate: "--",
        overageRelayRate: "--",
        throughputLimit: "30 rps",
        support: "Community Discord",
        blockchains: "All supported chains",
        regionSupport: "Global",
        applications: "2",
      },
    },
    {
      type: "Auto-Scale",
      description: "Pay as you go",
      style: {
        light: {
          backgroundColor: "--mantine-color-gray-2",
        },
        dark: {
          backgroundColor: "--mantine-color-dark-7",
        },
      },
      action: {
        label: "Get started",
        href: "https://portal.grove.city/",
        color: "green",
      },
      fields: {
        freeDailyRequest: "100,000",
        baseRelayRate: "$7.456 / million",
        overageRelayRate: "--",
        throughputLimit: "No throughput limit",
        support: "Community Discord",
        blockchains: "All supported chains",
        regionSupport: "Global",
        applications: "2",
      },
    },
    {
      type: "Enterprise",
      description: "Custom",
      action: {
        label: "Talk to Sales",
        href: "https://portal.grove.city/",
        color: "blue",
        variant: "outline",
      },
      fields: {
        freeDailyRequest: "Custom",
        baseRelayRate: "Custom volume plans",
        overageRelayRate: "--",
        throughputLimit: "No throughput limit",
        support: "Dedicated support",
        blockchains: "All supported chains",
        regionSupport: "Global",
        applications: "Unlimited",
      },
    },
  ]

  return (
    <Box className={styles.grid}>
      <Box visibleFrom="sm" className={styles.stack}>
        <Box className={styles.field}></Box>
        {Object.entries(fields).map(([key, value]) => (
          <Box key={key} className={styles.field}>
            <Text>{value}</Text>
          </Box>
        ))}
      </Box>
      {plans.map((plan) => (
        <Box
          key={plan.type}
          className={`${styles.stack} ${styles.plan}`}
          style={{
            backgroundColor: `var(${
              plan.style ? plan.style[colorMode]?.backgroundColor : "transparent"
            })`,
          }}
        >
          <Box className={styles.field}>
            <Text mt="sm">{plan.description}</Text>
            <Title order={3}>{plan.type}</Title>
            <Button
              component="a"
              href={plan.action.href}
              variant={plan.action.variant ?? "filled"}
              color={plan.action.color ?? "dark"}
              fullWidth
              mt="md"
              size="lg"
            >
              {plan.action.label}
            </Button>
          </Box>
          {Object.entries(fields).map(([key, value]) => (
            <Box key={key} className={styles.field}>
              <Group align="center" justify="space-between" className={styles.planGroup}>
                <Text hiddenFrom="sm">{value}</Text>
                <Text>{plan.fields[key]}</Text>
              </Group>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  )
}
