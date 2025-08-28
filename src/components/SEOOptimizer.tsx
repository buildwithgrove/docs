import React from 'react';
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

  // Use props directly
  const finalTitle = title;
  const finalDescription = description;
  const finalKeywords = keywords;
  const finalImage = ogImage;
  const finalCanonical = canonicalUrl;
  const finalStructuredData = structuredData;



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


      </Head>
      {children}
    </>
  );
};

export default SEOOptimizer;
