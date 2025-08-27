import React, { useState, useEffect } from 'react';

interface ContentAnalysis {
  readabilityScore: number;
  keywordDensity: { [key: string]: number };
  suggestedKeywords: string[];
  contentLength: number;
  headingStructure: string[];
  internalLinks: string[];
  externalLinks: string[];
  images: string[];
}

interface ContentOptimizerProps {
  content: string;
  targetKeywords: string[];
  onAnalysisComplete?: (analysis: ContentAnalysis) => void;
  showSuggestions?: boolean;
}

const ContentOptimizer: React.FC<ContentOptimizerProps> = ({
  content,
  targetKeywords,
  onAnalysisComplete,
  showSuggestions = false
}) => {
  const [analysis, setAnalysis] = useState<ContentAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Calculate Flesch Reading Ease score
  const calculateReadability = (text: string): number => {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = text.split(/\s+/).filter(w => w.length > 0);
    const syllables = words.reduce((count, word) => {
      return count + countSyllables(word);
    }, 0);

    if (sentences.length === 0 || words.length === 0) return 0;

    const score = 206.835 - (1.015 * (words.length / sentences.length)) - (84.6 * (syllables / words.length));
    return Math.max(0, Math.min(100, score));
  };

  // Count syllables in a word
  const countSyllables = (word: string): number => {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;
    
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    
    const matches = word.match(/[aeiouy]{1,2}/g);
    return matches ? matches.length : 1;
  };

  // Analyze keyword density
  const analyzeKeywordDensity = (text: string, keywords: string[]): { [key: string]: number } => {
    const words = text.toLowerCase().split(/\s+/);
    const totalWords = words.length;
    const density: { [key: string]: number } = {};

    keywords.forEach(keyword => {
      const keywordWords = keyword.toLowerCase().split(/\s+/);
      let count = 0;
      
      for (let i = 0; i <= words.length - keywordWords.length; i++) {
        let match = true;
        for (let j = 0; j < keywordWords.length; j++) {
          if (words[i + j] !== keywordWords[j]) {
            match = false;
            break;
          }
        }
        if (match) count++;
      }
      
      density[keyword] = totalWords > 0 ? (count / totalWords) * 100 : 0;
    });

    return density;
  };

  // Extract headings from content
  const extractHeadings = (text: string): string[] => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const headings: string[] = [];
    let match;

    while ((match = headingRegex.exec(text)) !== null) {
      headings.push(match[2].trim());
    }

    return headings;
  };

  // Extract links from content
  const extractLinks = (text: string): { internal: string[], external: string[] } => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const internal: string[] = [];
    const external: string[] = [];
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      const url = match[2];
      if (url.startsWith('/') || url.includes('docs.grove.city')) {
        internal.push(url);
      } else {
        external.push(url);
      }
    }

    return { internal, external };
  };

  // Extract images from content
  const extractImages = (text: string): string[] => {
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    const images: string[] = [];
    let match;

    while ((match = imageRegex.exec(text)) !== null) {
      images.push(match[2]);
    }

    return images;
  };

  // Generate keyword suggestions
  const generateKeywordSuggestions = (text: string, targetKeywords: string[]): string[] => {
    const words = text.toLowerCase().split(/\s+/);
    const wordFreq: { [key: string]: number } = {};
    
    words.forEach(word => {
      const cleanWord = word.replace(/[^\w]/g, '');
      if (cleanWord.length > 3) {
        wordFreq[cleanWord] = (wordFreq[cleanWord] || 0) + 1;
      }
    });

    const suggestions = Object.entries(wordFreq)
      .filter(([word, freq]) => freq > 2 && !targetKeywords.some(kw => kw.toLowerCase().includes(word)))
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([word]) => word);

    return suggestions;
  };

  // Analyze content
  const analyzeContent = async () => {
    setIsAnalyzing(true);
    
    const readabilityScore = calculateReadability(content);
    const keywordDensity = analyzeKeywordDensity(content, targetKeywords);
    const suggestedKeywords = generateKeywordSuggestions(content, targetKeywords);
    const headingStructure = extractHeadings(content);
    const { internal: internalLinks, external: externalLinks } = extractLinks(content);
    const images = extractImages(content);

    const analysisResult: ContentAnalysis = {
      readabilityScore,
      keywordDensity,
      suggestedKeywords,
      contentLength: content.length,
      headingStructure,
      internalLinks,
      externalLinks,
      images
    };

    setAnalysis(analysisResult);
    onAnalysisComplete?.(analysisResult);
    setIsAnalyzing(false);
  };

  useEffect(() => {
    if (content && targetKeywords.length > 0) {
      analyzeContent();
    }
  }, [content, targetKeywords]);

  if (!showSuggestions || !analysis) {
    return null;
  }

  return (
    <div className="content-optimizer">
      <h3>Content Analysis & SEO Suggestions</h3>
      
      <div className="analysis-grid">
        <div className="analysis-card">
          <h4>Readability Score</h4>
          <div className={`score ${analysis.readabilityScore >= 60 ? 'good' : analysis.readabilityScore >= 40 ? 'medium' : 'poor'}`}>
            {analysis.readabilityScore.toFixed(1)}
          </div>
          <p>
            {analysis.readabilityScore >= 60 ? 'Excellent readability' : 
             analysis.readabilityScore >= 40 ? 'Moderate readability - consider simplifying' : 
             'Complex text - needs simplification'}
          </p>
        </div>

        <div className="analysis-card">
          <h4>Content Length</h4>
          <div className="score">{analysis.contentLength.toLocaleString()} characters</div>
          <p>
            {analysis.contentLength >= 1500 ? 'Good length for SEO' : 
             analysis.contentLength >= 300 ? 'Minimum recommended length' : 
             'Consider adding more content'}
          </p>
        </div>

        <div className="analysis-card">
          <h4>Keyword Density</h4>
          {Object.entries(analysis.keywordDensity).map(([keyword, density]) => (
            <div key={keyword} className="keyword-item">
              <span className="keyword">{keyword}:</span>
              <span className={`density ${density >= 0.5 && density <= 2.5 ? 'optimal' : 'suboptimal'}`}>
                {density.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>

        <div className="analysis-card">
          <h4>Suggested Keywords</h4>
          <div className="suggestions">
            {analysis.suggestedKeywords.map(keyword => (
              <span key={keyword} className="suggestion-tag">{keyword}</span>
            ))}
          </div>
        </div>

        <div className="analysis-card">
          <h4>Content Structure</h4>
          <div className="structure">
            <p><strong>Headings:</strong> {analysis.headingStructure.length}</p>
            <p><strong>Internal Links:</strong> {analysis.internalLinks.length}</p>
            <p><strong>External Links:</strong> {analysis.externalLinks.length}</p>
            <p><strong>Images:</strong> {analysis.images.length}</p>
          </div>
        </div>
      </div>

      <div className="recommendations">
        <h4>SEO Recommendations</h4>
        <ul>
          {analysis.readabilityScore < 60 && (
            <li>Simplify sentence structure to improve readability</li>
          )}
          {analysis.contentLength < 1500 && (
            <li>Add more detailed content to reach optimal length</li>
          )}
          {analysis.headingStructure.length < 3 && (
            <li>Add more headings to improve content structure</li>
          )}
          {analysis.internalLinks.length < 2 && (
            <li>Include more internal links to improve site navigation</li>
          )}
          {analysis.images.length === 0 && (
            <li>Consider adding relevant images to enhance engagement</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ContentOptimizer;
