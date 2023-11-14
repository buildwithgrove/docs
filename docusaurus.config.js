// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import "dotenv/config"

const { themes } = require("prism-react-renderer")
const lightTheme = themes.github
const darkTheme = themes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Grove: Web3 Infrastructure",
  favicon: "img/favicon.ico",
  // customFields: {
  //   // Put your custom environment here
  //   mailjet: process.env.MJKEY,
  // },
  // Enable mermaid diagrams support
  markdown: {
    mermaid: true,
  },
  themes: [
    "@docusaurus/theme-mermaid",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} **/
      {
        docsRouteBasePath: "/",
        hashed: false,
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  url: "https://grove.city",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "pokt-foundation", // Usually your GitHub org/user name.
  projectName: "portal-platform-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: "./sidebars.js",
        },
        blog: {
          routeBasePath: "blog",
          blogSidebarCount: 10,
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/header-icons.css"),
          ],
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      image: "img/logo.svg",
      navbar: {
        title: "",
        logo: {
          alt: "Grove Portal Logo",
          src: "img/grove-logo-icon-light.svg",
          srcDark: "img/grove-logo-icon-dark.svg",
        },
        items: [
          {
            to: "about-grove",
            label: "About",
            position: "left",
          },
          {
            type: "dropdown",
            to: "/docs/guides/getting-started/welcome-to-grove",
            label: "Docs",
            position: "left",
            items: [
              {
                to: "/docs/guides/getting-started/welcome-to-grove",
                label: "Guides",
              },
              {
                to: "/docs/grove-api/getting-started/introduction",
                label: "Grove API",
              },
            ],
          },
          {
            type: "dropdown",
            to: "blog",
            label: "Blog",
            position: "left",
            items: [
              {
                to: "/blog/tags/news",
                label: "News",
              },
              {
                to: "/blog/tags/case-studies",
                label: "Case Studies",
              },
            ],
          },
          {
            to: "pricing",
            label: "Pricing",
            position: "left",
          },
          {
            href: "https://www.portal.grove.city/api/auth/auth0",
            position: "right",
            // custom theme extension based on className = "buttonLink"
            className: "buttonLink",
            label: "Launch Portal",
            "aria-label": "Launch Grove Portal",
            ml: "sm",
          },
        ],
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
}

module.exports = config
