import { Anchor, Combobox, Input, InputBase, useCombobox } from "@mantine/core"
import { useState } from "react"

type ChainsSelectProps = {
  chains: {
    id: string
    label: string
    link: string
  }[]
}

export default function ChainSelect({ chains }: ChainsSelectProps) {
  const [value, setValue] = useState<string | null>(null)
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })

  const options = chains.map((chain) => (
    <Combobox.Option value={chain.label} key={chain.id}>
      <Anchor href={chain.link}>{chain.label}</Anchor>
    </Combobox.Option>
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
        <InputBase
          component="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Chain APIs</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  )
}
