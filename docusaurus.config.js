// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import "dotenv/config"

const { themes } = require("prism-react-renderer")
const lightTheme = themes.github
const darkTheme = themes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Grove: Web3 Infrastructure - Decentralized RPC Gateway",
  favicon: "img/favicon.ico",
  // Enable mermaid diagrams support
  markdown: {
    mermaid: true,
  },
  // AI SEO Optimizations
  metadata: [
    {name: 'keywords', content: 'Web3, blockchain, RPC, API, decentralized, infrastructure, Pocket Network, Grove, cryptocurrency, DeFi, NFT, smart contracts'},
    {name: 'author', content: 'Grove Team'},
    {name: 'robots', content: 'index, follow'},
    {name: 'googlebot', content: 'index, follow'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
    {name: 'theme-color', content: '#000000'},
    {name: 'msapplication-TileColor', content: '#000000'},
    {name: 'apple-mobile-web-app-capable', content: 'yes'},
    {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'},
  ],
  // Open Graph and Twitter Card meta tags
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://docs.grove.city',
    siteName: 'Grove Documentation',
    title: 'Grove: Web3 Infrastructure - Decentralized RPC Gateway',
    description: 'High-performance decentralized RPC gateway powered by Pocket Network. Access 50+ blockchain networks with reliability, scalability, and global distribution.',
    images: [
      {
        url: 'https://docs.grove.city/img/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Grove Web3 Infrastructure',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@grove_city',
    creator: '@grove_city',
  },
  stylesheets: ["https://fonts.googleapis.com/css?family=Inter:regular,500,600,700"],
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
  url: "https://docs.grove.city",
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
  plugins: [
    "./plugins/chain-endpoints",
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
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
          src: "img/logo.svg",
          srcDark: "img/logo_dark.svg",
        },
        items: [
          {
            href: "https://grove.city/public-endpoints",
            position: "right",
            className: "public-endpoints-btn",
            label: "Public Endpoints",
            "aria-label": "Grove Public Endpoints",
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
