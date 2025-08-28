// Structured Data (JSON-LD) generators for SEO optimization

export interface OrganizationData {
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
}

export interface WebSiteData {
  name: string;
  url: string;
  description: string;
  potentialAction: {
    '@type': string;
    target: string;
    'query-input': string;
  };
}

export interface WebPageData {
  name: string;
  description: string;
  url: string;
  isPartOf: {
    '@type': string;
    '@id': string;
  };
  breadcrumb?: {
    '@type': string;
    '@id': string;
  };
  mainEntity?: object;
}

export interface BreadcrumbData {
  name: string;
  url: string;
}

export interface ServiceData {
  name: string;
  description: string;
  url: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed: string;
  serviceType: string;
}

// Generate Organization structured data
export function generateOrganizationData(data: OrganizationData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
    logo: {
      '@type': 'ImageObject',
      url: data.logo,
    },
    description: data.description,
    sameAs: data.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: data.url,
    },
  };
}

// Generate Website structured data
export function generateWebSiteData(data: WebSiteData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: data.name,
    url: data.url,
    description: data.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: data.potentialAction.target,
      'query-input': data.potentialAction['query-input'],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Grove',
      url: 'https://grove.city',
    },
  };
}

// Generate WebPage structured data
export function generateWebPageData(data: WebPageData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: data.name,
    description: data.description,
    url: data.url,
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://docs.grove.city',
    },
    breadcrumb: data.breadcrumb,
    mainEntity: data.mainEntity,
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
  };
}

// Generate BreadcrumbList structured data
export function generateBreadcrumbData(breadcrumbs: BreadcrumbData[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

// Generate Service structured data
export function generateServiceData(data: ServiceData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    url: data.url,
    provider: data.provider,
    areaServed: {
      '@type': 'Country',
      name: data.areaServed,
    },
    serviceType: data.serviceType,
    category: 'Web3 Infrastructure',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: data.url,
    },
  };
}

// Generate WebAPI structured data for RPC services
export function generateWebAPIData(data: {
  name: string;
  description: string;
  url: string;
  provider: string;
  category: string;
  offers: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebAPI',
    name: data.name,
    description: data.description,
    url: data.url,
    provider: {
      '@type': 'Organization',
      name: data.provider,
    },
    applicationCategory: data.category,
    offers: {
      '@type': 'Offer',
      price: data.offers.price,
      priceCurrency: data.offers.priceCurrency,
      availability: data.offers.availability,
    },
  };
}

// Generate SoftwareApplication structured data
export function generateSoftwareApplicationData(data: {
  name: string;
  description: string;
  url: string;
  provider: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: data.name,
    description: data.description,
    url: data.url,
    provider: {
      '@type': 'Organization',
      name: data.provider,
    },
    applicationCategory: data.applicationCategory,
    operatingSystem: data.operatingSystem,
    offers: {
      '@type': 'Offer',
      price: data.offers.price,
      priceCurrency: data.offers.priceCurrency,
      availability: data.offers.availability,
    },
  };
}

// Generate FAQ structured data
export function generateFAQData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate HowTo structured data
export function generateHowToData(data: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string; url?: string }>;
  totalTime?: string;
  difficulty?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: data.name,
    description: data.description,
    totalTime: data.totalTime,
    difficulty: data.difficulty,
    step: data.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url,
    })),
  };
}

// Generate default Grove organization data
export const groveOrganizationData: OrganizationData = {
  name: 'Grove',
  url: 'https://grove.city',
  logo: 'https://grove.city/images/logo.svg',
  description: 'Enterprise Infrastructure for Public APIs - Access high-performance permissionless infrastructure for blockchains, LLMs, and privacy protocols',
  sameAs: [
    'https://twitter.com/grove_city',
    'https://github.com/pokt-foundation',
    'https://discord.gg/grove',
  ],
};

// Generate default Grove website data
export const groveWebSiteData: WebSiteData = {
  name: 'Grove - Docs',
  url: 'https://docs.grove.city',
  description: 'Complete documentation for Grove enterprise infrastructure and API services',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://docs.grove.city/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};
