import React, { useEffect } from "react"
import PrimaryMenu from "@theme-original/Navbar/MobileSidebar/PrimaryMenu"
import { useNavbarSecondaryMenu } from "@docusaurus/theme-common/internal"
import sidebars from "@site/sidebars"
import { Anchor, List } from "@mantine/core"

export default function PrimaryMenuWrapper(props) {
  const secondaryMenu = useNavbarSecondaryMenu()

  console.log(secondaryMenu)
  const mainLinks = Object.entries(sidebars)
  // .filter(
  //   ([key]) => key === "guides" || key === "groveApi",
  // )

  useEffect(() => {
    if (secondaryMenu.shown === false) {
      secondaryMenu.shown = true
    }
  }, [secondaryMenu])

  return (
    <>
      <List className="menu__list" mb="xl">
        {mainLinks.map(([, sidebar]) => (
          <List.Item key={sidebar[0].dirName} className="menu__list-item">
            <Anchor px="xs" href={sidebar[0].customProps.link}>
              {sidebar[0].customProps.label}
            </Anchor>
          </List.Item>
        ))}
      </List>
      <PrimaryMenu {...props} />
    </>
  )
}
