import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  pageLoadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface PerformanceMonitorProps {
  pageName: string;
  onMetricsCollected?: (metrics: PerformanceMetrics) => void;
  showMetrics?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  pageName,
  onMetricsCollected,
  showMetrics = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isCollecting, setIsCollecting] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const collectMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
      const cls = performance.getEntriesByType('layout-shift')[0];
      const fid = performance.getEntriesByType('first-input')[0];

      const performanceMetrics: PerformanceMetrics = {
        pageLoadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        cumulativeLayoutShift: cls ? (cls as any).value : 0,
        firstInputDelay: fid ? (fid as any).processingStart - (fid as any).startTime : 0,
        timeToInteractive: navigation.domInteractive - navigation.fetchStart
      };

      setMetrics(performanceMetrics);
      onMetricsCollected?.(performanceMetrics);
      setIsCollecting(false);

      // Send metrics to analytics (if configured)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'performance_metrics', {
          page_name: pageName,
          page_load_time: performanceMetrics.pageLoadTime,
          first_contentful_paint: performanceMetrics.firstContentfulPaint,
          largest_contentful_paint: performanceMetrics.largestContentfulPaint,
          cumulative_layout_shift: performanceMetrics.cumulativeLayoutShift,
          first_input_delay: performanceMetrics.firstInputDelay
        });
      }
    };

    // Wait for page to fully load
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
      return () => window.removeEventListener('load', collectMetrics);
    }
  }, [pageName, onMetricsCollected]);

  // Monitor Core Web Vitals
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        console.log('LCP:', lastEntry.startTime);
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      console.log('CLS:', clsValue);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Monitor First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fid = (entry as any).processingStart - (entry as any).startTime;
        console.log('FID:', fid);
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    return () => {
      lcpObserver.disconnect();
      clsObserver.disconnect();
      fidObserver.disconnect();
    };
  }, []);

  if (!showMetrics || !metrics) {
    return null;
  }

  const getPerformanceGrade = (metric: number, type: 'load' | 'paint' | 'layout' | 'interaction'): string => {
    switch (type) {
      case 'load':
        return metric < 1000 ? 'A' : metric < 2000 ? 'B' : metric < 3000 ? 'C' : 'D';
      case 'paint':
        return metric < 1800 ? 'A' : metric < 3000 ? 'B' : metric < 4000 ? 'C' : 'D';
      case 'layout':
        return metric < 0.1 ? 'A' : metric < 0.25 ? 'B' : metric < 0.4 ? 'C' : 'D';
      case 'interaction':
        return metric < 100 ? 'A' : metric < 300 ? 'B' : metric < 500 ? 'C' : 'D';
      default:
        return 'N/A';
    }
  };

  return (
    <div className="performance-metrics">
      <h4>Performance Metrics - {pageName}</h4>
      
      <div className="metrics-grid">
        <div className="metric-item">
          <span className="metric-label">Page Load Time</span>
          <span className="metric-value">
            {metrics.pageLoadTime.toFixed(0)}ms 
            <span className={`grade grade-${getPerformanceGrade(metrics.pageLoadTime, 'load').toLowerCase()}`}>
              {getPerformanceGrade(metrics.pageLoadTime, 'load')}
            </span>
          </span>
        </div>

        <div className="metric-item">
          <span className="metric-label">DOM Content Loaded</span>
          <span className="metric-value">
            {metrics.domContentLoaded.toFixed(0)}ms
            <span className={`grade grade-${getPerformanceGrade(metrics.domContentLoaded, 'load').toLowerCase()}`}>
              {getPerformanceGrade(metrics.domContentLoaded, 'load')}
            </span>
          </span>
        </div>

        <div className="metric-item">
          <span className="metric-label">First Contentful Paint</span>
          <span className="metric-value">
            {metrics.firstContentfulPaint.toFixed(0)}ms
            <span className={`grade grade-${getPerformanceGrade(metrics.firstContentfulPaint, 'paint').toLowerCase()}`}>
              {getPerformanceGrade(metrics.firstContentfulPaint, 'paint')}
            </span>
          </span>
        </div>

        <div className="metric-item">
          <span className="metric-label">Largest Contentful Paint</span>
          <span className="metric-value">
            {metrics.largestContentfulPaint.toFixed(0)}ms
            <span className={`grade grade-${getPerformanceGrade(metrics.largestContentfulPaint, 'paint').toLowerCase()}`}>
              {getPerformanceGrade(metrics.largestContentfulPaint, 'paint')}
            </span>
          </span>
        </div>

        <div className="metric-item">
          <span className="metric-label">Cumulative Layout Shift</span>
          <span className="metric-value">
            {metrics.cumulativeLayoutShift.toFixed(3)}
            <span className={`grade grade-${getPerformanceGrade(metrics.cumulativeLayoutShift, 'layout').toLowerCase()}`}>
              {getPerformanceGrade(metrics.cumulativeLayoutShift, 'layout')}
            </span>
          </span>
        </div>

        <div className="metric-item">
          <span className="metric-label">First Input Delay</span>
          <span className="metric-value">
            {metrics.firstInputDelay.toFixed(0)}ms
            <span className={`grade grade-${getPerformanceGrade(metrics.firstInputDelay, 'interaction').toLowerCase()}`}>
              {getPerformanceGrade(metrics.firstInputDelay, 'interaction')}
            </span>
          </span>
        </div>

        <div className="metric-item">
          <span className="metric-label">Time to Interactive</span>
          <span className="metric-value">
            {metrics.timeToInteractive.toFixed(0)}ms
            <span className={`grade grade-${getPerformanceGrade(metrics.timeToInteractive, 'load').toLowerCase()}`}>
              {getPerformanceGrade(metrics.timeToInteractive, 'load')}
            </span>
          </span>
        </div>
      </div>

      {isCollecting && (
        <div className="collecting-indicator">
          <span>Collecting performance data...</span>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;
