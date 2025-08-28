import React, { useEffect } from 'react';
import Head from '@docusaurus/Head';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
  noindex?: boolean;
  children?: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = 'https://docs.grove.city/img/logo.svg',
  structuredData,
  noindex = false,
  children
}) => {
  // Check if this is a preview deployment
  const isPreview = typeof process !== 'undefined' && process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production';
  const shouldNoIndex = noindex || isPreview;
  // Performance monitoring
  useEffect(() => {
    // Track page load performance
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.loadEventStart);
          }
        }
      });

      observer.observe({ entryTypes: ['navigation'] });

      return () => observer.disconnect();
    }
  }, []);

  // Generate meta keywords
  const defaultKeywords = [
    'blockchain infrastructure', 'decentralized RPC', 'web3 infrastructure', 'blockchain API',
    'decentralized protocols', 'Pocket Network', 'blockchain scaling', 'web3 development',
    'RPC provider', 'node infrastructure', 'blockchain gateway', 'DeFi infrastructure',
    'permissionless network', 'Web3 API', 'blockchain node provider', 'decentralized infrastructure',
    'LLM infrastructure', 'AI model access', 'privacy protocols', 'open protocols', 'machine learning API'
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])].join(', ');

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        <meta name="keywords" content={allKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

        {/* Robots Meta */}
        {shouldNoIndex ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        )}

        {/* Open Graph Meta Tags */}
        {title && <meta property="og:title" content={title} />}
        {description && <meta property="og:description" content={description} />}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Grove - Docs" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        {title && <meta name="twitter:title" content={title} />}
        {description && <meta name="twitter:description" content={description} />}
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@grove_city" />
        <meta name="twitter:creator" content="@grove_city" />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Grove" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Structured Data */}
        {structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
        )}

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://portal.grove.city" />
        <link rel="preconnect" href="https://grove.city" />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//portal.grove.city" />
        <link rel="dns-prefetch" href="//grove.city" />
      </Head>
      {children}
    </>
  );
};

export default SEOOptimizer;
