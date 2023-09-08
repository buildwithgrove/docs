// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Grove Portal',
  favicon: 'img/favicon.ico',
  // Enable mermaid diagrams support
  markdown: {
    mermaid: true,
  },
  themes: [
      '@docusaurus/theme-mermaid',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} **/
      {
        docsRouteBasePath: '/',
        hashed: false,
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
    url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pokt-foundation', // Usually your GitHub org/user name.
  projectName: 'portal-platform-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('./src/css/header-icons.css'),]
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark'
      },
      docs: {
        sidebar: {
          hideable: true,
        }
      },
      image: 'img/logo.svg',
      navbar: {
        title: '',
        logo: {
          alt: 'Grove Portal Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'docSidebar',
            label: 'Supported Methods',
            sidebarId: 'supportedBlockchainsSidebar',
            position: 'left',
          },
          {
            href: 'https://docs.pokt.network/api-docs/pokt/',
            label: 'API References',
            position: 'left',
          },
          {
            href: 'https://github.com/pokt-foundation',
            position: 'right',
            className: 'header-link-icon header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://discord.gg/portal-rpc',
            position: 'right',
            className: 'header-link-icon header-discord-link',
            'aria-label': 'Discord',
          },
          {
            href: 'https://twitter.com/poktnetwork',
            position: 'right',
            className: 'header-link-icon header-twitter-link',
            'aria-label': 'Twitter Account',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [{
      //     title: 'Docs',
      //     items: [{
      //       label: 'Introduction',
      //       to: 'introduction/what-is-the-portal',
      //     }, {
      //       label: 'Quick Start',
      //       to: 'quick-start/wallet-rpc',
      //     }, {
      //       label: 'Navigation',
      //       to: 'navigating-the-portal/app-overview',
      //     }],
      //   }, {
      //     title: 'Community',
      //     items: [{
      //       label: 'Blog',
      //       href: 'https://www.blog.pokt.network/',
      //     }, {
      //       label: 'Discord',
      //       href: 'https://discord.gg/portal-rpc',
      //     }, {
      //       label: 'Twitter',
      //       href: 'https://twitter.com/poktnetwork',
      //     }],
      //   }, {
      //     title: 'Company',
      //     items: [{
      //       label: 'About',
      //       href: 'https://www.portal.pokt.network/about-us',
      //     }, {
      //       label: 'Terms of Service',
      //       href: 'https://www.portal.pokt.network/terms-and-conditions',
      //     }, {
      //       label: 'Privacy Policy',
      //       href: 'https://www.portal.pokt.network/privacy-policy',
      //     }],
      //   }],
      //   logo: {
      //     alt: 'Pocket Network Portal Logo',
      //     width: 120,
      //     src: 'img/logo_dark.svg',
      //     href: 'https://www.portal.pokt.network/'
      //   },
      //   copyright: `© ${new Date().getFullYear()} Pocket Network Inc.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
