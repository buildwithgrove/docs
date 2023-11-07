// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer")
const lightTheme = themes.github
const darkTheme = themes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Grove Portal",
  favicon: "img/favicon.ico",
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
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          routeBasePath: "blog",
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
            to: "/docs/guides/getting-started/welcome",
            label: "Docs",
            position: "left",
          },
          {
            to: "blog",
            label: "Blog",
            position: "left",
          },
          {
            to: "pricing",
            label: "Pricing",
            position: "left",
          },
          {
            type: "dropdown",
            to: "about-grove",
            label: "About",
            position: "left",
            items: [
              {
                label: "Status",
                href: "https://status.grove.city",
              },
              {
                label: "Enterprise",
                to: "enterprise",
              },
            ],
          },
          {
            href: "https://www.portal.grove.city/api/auth/auth0",
            position: "right",
            className: "header-link-button header-portal-link",
            label: "Launch Portal",
            "aria-label": "Launch Grove Portal",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "introduction/what-is-the-portal",
              },
              {
                label: "Quick Start",
                to: "quick-start/wallet-rpc",
              },
              {
                label: "Navigation",
                to: "navigating-the-portal/app-overview",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Blog",
                href: "https://www.blog.pokt.network/",
              },
              {
                label: "Discord",
                href: "https://discord.gg/portal-rpc",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/poktnetwork",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "About",
                href: "https://www.portal.pokt.network/about-us",
              },
              {
                label: "Terms of Service",
                href: "https://www.portal.pokt.network/terms-and-conditions",
              },
              {
                label: "Privacy Policy",
                href: "https://www.portal.pokt.network/privacy-policy",
              },
            ],
          },
        ],
        logo: {
          alt: "Grove",
          width: 120,
          src: "img/logo_dark.svg",
          href: "https://www.grove.city",
        },
        copyright: `© ${new Date().getFullYear()} Grove`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
}

module.exports = config
