import React, { useEffect } from 'react';
import Head from '@docusaurus/Head';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { generatePageSpecificStructuredData } from '@site/src/utils/structuredData';

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
  // Try to get front-matter from the current doc page
  let frontMatter = null;
  let pagePath = '';
  try {
    const doc = useDoc();
    frontMatter = doc?.frontMatter;
    pagePath = doc?.metadata?.source || '';
  } catch (error) {
    // Not on a doc page, continue with props
  }

  // Check if this is a preview deployment
  const isPreview = typeof process !== 'undefined' && process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production';
  const shouldNoIndex = noindex || isPreview;

  // Priority: front-matter > props > defaults
  const finalTitle = frontMatter?.title || title;
  const finalDescription = frontMatter?.description || description;
  const finalKeywords = frontMatter?.keywords || keywords;
  const finalImage = frontMatter?.image || ogImage;
  const finalCanonical = frontMatter?.canonical || canonicalUrl;

  // Generate page-specific structured data if not provided
  const finalStructuredData = structuredData || (frontMatter && pagePath ?
    generatePageSpecificStructuredData(frontMatter, pagePath, finalTitle, finalDescription) :
    undefined);

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

  const allKeywords = [...new Set([...defaultKeywords, ...finalKeywords])].join(', ');

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        {finalTitle && <title>{finalTitle}</title>}
        {finalDescription && <meta name="description" content={finalDescription} />}
        <meta name="keywords" content={allKeywords} />
        {finalCanonical && <link rel="canonical" href={finalCanonical} />}

        {/* Robots Meta */}
        {shouldNoIndex ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        )}

        {/* Open Graph Meta Tags */}
        {finalTitle && <meta property="og:title" content={finalTitle} />}
        {finalDescription && <meta property="og:description" content={finalDescription} />}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Grove - Docs" />
        <meta property="og:image" content={finalImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        {finalTitle && <meta name="twitter:title" content={finalTitle} />}
        {finalDescription && <meta name="twitter:description" content={finalDescription} />}
        <meta name="twitter:image" content={finalImage} />
        <meta name="twitter:site" content="@grove_city" />
        <meta name="twitter:creator" content="@grove_city" />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Grove" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Structured Data */}
        {finalStructuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(finalStructuredData),
            }}
          />
        )}

        {/* Performance optimization links */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </Head>
      {children}
    </>
  );
};

export default SEOOptimizer;
