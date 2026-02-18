import React, { useEffect, useRef } from 'react';
import { useLocation } from '@docusaurus/router';

export default function PoemWrapper({ children }) {
  const location = useLocation();
  const containerRef = useRef(null);

  // 1. Parse the URL
  const params = new URLSearchParams(location.search);
  const rangeStr = params.get('h');
  
  let highlightRange = [];
  if (rangeStr) {
    const parts = rangeStr.split('-').map(Number);
    if (parts.length === 2) {
      for (let i = parts[0]; i <= parts[1]; i++) highlightRange.push(i);
    } else {
      highlightRange = [parts[0]];
    }
  }

  // 2. The "Click to Clear" logic - CHANGED
  const handleClear = () => {
    if (highlightRange.length > 0) {
      // Silently update the URL without triggering a React navigation
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
      
      // Manually remove the classes from the DOM for instant feedback 
      // without waiting for a re-render if desired, or let React handle it.
      // To force React to update without a "jump", we just need to 
      // ensure the 'key' prop is gone.
      const event = new PopStateEvent('popstate');
      window.dispatchEvent(event); // Tells Docusaurus/React to check the URL again
    }
  };

  // 3. Scroll logic (unchanged, but now only triggers on highlight)
  useEffect(() => {
    if (highlightRange.length > 0) {
      const timer = setTimeout(() => {
        const firstLine = containerRef.current?.querySelector(`[data-n="${highlightRange[0]}"]`);
        if (firstLine) {
          const navHeight = 60;
          const elementPosition = firstLine.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navHeight - 20,
            behavior: 'smooth'
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [rangeStr]); // Only trigger when the range string changes

  return (
    <div 
      ref={containerRef} 
      className="poem-container"
      // key={location.search || 'root'}  <-- ❌ REMOVE THIS LINE
      onClick={handleClear} 
      style={{ cursor: highlightRange.length > 0 ? 'pointer' : 'default' }}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        
        const lineNum = parseInt(child.props?.['data-n']);
        const isHighlighted = highlightRange.includes(lineNum);
        
        return React.cloneElement(child, { 
          className: `${child.props.className || ''} ${isHighlighted ? 'highlighted-line' : ''}`.trim()
        });
      })}
    </div>
  );
}