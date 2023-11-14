import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import BlogSidebar from "@theme/BlogSidebar"
import { TypographyStylesProvider } from "@mantine/core"
export default function BlogLayout(props) {
  const { sidebar, toc, children, ...layoutProps } = props

  console.log({ layoutProps })

  const hasSidebar = sidebar && sidebar.items.length > 0

  return (
    <Layout {...layoutProps}>
      <div className="container blog-layout">
        <div className="row">
          <BlogSidebar sidebar={sidebar} />
          <main
            className={clsx("col", {
              "col--7": hasSidebar && toc,
              "col--9": hasSidebar && !toc,
              "col--9 col--offset-1": !hasSidebar,
            })}
            itemScope
            itemType="https://schema.org/Blog"
          >
            <TypographyStylesProvider>{children}</TypographyStylesProvider>
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  )
}
