import { Anchor, Combobox, Group, useCombobox, Text } from "@mantine/core"
import clsx from "clsx"
import { useEffect, useState } from "react"
import styles from "./ChainSelect.module.css"

type ChainsSelectProps = {
  chains: {
    id: string
    label: string
    link: string
  }[]
  path: string
}

export default function ChainSelect({ chains, path }: ChainsSelectProps) {
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    const isChain = chains.find((chain) => chain.id === path)
    if (isChain) {
      setValue(isChain.label)
      setIsActive(true)
    }
  }, [path])

  const [value, setValue] = useState<string | null>(null)
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })

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

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  )
}
