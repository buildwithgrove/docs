# Grove Documentation <!-- omit in toc -->

This website is built using [Docusaurus 2](https://docusaurus.io/) and deployed to [docs.grove.city](https://docs.grove.city/guides/getting-started/welcome-to-grove).

- [Quick Start](#quick-start)
- [Deployment](#deployment)
- [Installation \& Development](#installation--development)
  - [Installation](#installation)
  - [Local Development](#local-development)
  - [Build](#build)

## Quick Start

```bash
make docusaurus_start
```

## Deployment

The docs are automatically deployed via Vercel.

Configurations can be found at [vercel.com/grove-city/docs](https://vercel.com/grove-city/docs).

## Installation & Development

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
