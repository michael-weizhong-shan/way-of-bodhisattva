import React, { useLayoutEffect, useRef } from 'react';
import DocBreadcrumbs from '@theme-original/DocBreadcrumbs';
import { useLocation } from '@docusaurus/router';

export default function DocBreadcrumbsWrapper(props) {
  const { search, pathname } = useLocation();
  const containerRef = useRef(null);

  // Logic to get mode
  const getMode = () => {
    if (typeof window === 'undefined') return 'standard';
    const params = new URLSearchParams(search);
    const modeParam = params.get('mode');
    return modeParam || sessionStorage.getItem('bodhisattva_mode') || 'standard';
  };

  const activeMode = getMode();

  // This effect runs every time the path or mode changes
  useLayoutEffect(() => {
    if (activeMode === 'p') {
      const fixBreadcrumb = () => {
        if (!containerRef.current) return;
        
        // Find all breadcrumb links/labels
        const breadcrumbItems = containerRef.current.querySelectorAll('.breadcrumbs__link, .breadcrumbs__item');
        
        breadcrumbItems.forEach((el) => {
          if (el.textContent === '入造论之理') {
            el.textContent = '总序';
          }
        });
      };

      // Run immediately
      fixBreadcrumb();

      // Also observe in case of slow React renders
      const observer = new MutationObserver(fixBreadcrumb);
      if (containerRef.current) {
        observer.observe(containerRef.current, { childList: true, subtree: true });
      }
      return () => observer.disconnect();
    }
  }, [pathname, search, activeMode]);

  return (
    <div ref={containerRef} className="custom-breadcrumb-wrapper">
      <DocBreadcrumbs {...props} />
    </div>
  );
}