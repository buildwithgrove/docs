import { Anchor, Combobox, Group, useCombobox, Text } from "@mantine/core"
import clsx from "clsx"
import { useEffect, useState } from "react"
import sidebars from "@site/sidebars"
import styles from "./ChainSelect.module.css"

type ChainsSelectProps = {
  activePath: string
}

export default function ChainSelect({ activePath }: ChainsSelectProps) {
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    const isChain = chains.find((chain) => chain.id === activePath)
    if (isChain) {
      setValue(isChain.label)
      setIsActive(true)
    }
  }, [activePath])

  const [value, setValue] = useState<string | null>(null)
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })

  const chainLinks = Object.entries(sidebars).filter(
    ([key]) => key !== "guides" && key !== "groveApi" && key !== "externalResources" && key !== "exploreGrove",
  )

  const chains = chainLinks.map(([, sidebar]) => ({
    id: sidebar[0].dirName,
    label: sidebar[0].customProps.label,
    link: sidebar[0].customProps.link,
  }))

  const options = chains.map((chain) => (
    <Anchor href={chain.link}>
      <Combobox.Option value={chain.label} key={chain.id}>
        {chain.label}
      </Combobox.Option>
    </Anchor>
  ))

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val)
        combobox.closeDropdown()
      }}
      width={225}
    >
      <Combobox.Target>
        <Text
          onClick={() => combobox.toggleDropdown()}
          className={clsx(styles.input, isActive && styles.inputActive)}
          px="xs"
        >
          <Group justify="space-between">
            {value || "Chain APIs"}
            <Combobox.Chevron />
          </Group>
        </Text>
      </Combobox.Target>

      <Combobox.Dropdown className={styles.dropdown}>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  )
}
