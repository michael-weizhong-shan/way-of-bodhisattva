import React, { useEffect, useState } from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import { useLocation } from '@docusaurus/router';
import allSidebars from '../../../sidebars'; 

export default function DocSidebarWrapper(props) {
  const { search } = useLocation();

  const getMode = () => {
    if (typeof window === 'undefined') return 'standard';
    const params = new URLSearchParams(search);
    const modeParam = params.get('mode');
    
    if (modeParam) {
      sessionStorage.setItem('bodhisattva_mode', modeParam);
      return modeParam;
    }
    return sessionStorage.getItem('bodhisattva_mode') || 'standard';
  };

  const activeMode = getMode();

  // Helper to ensure categories in our raw sidebars are collapsible
  const applyCollapsible = (items) => {
    return items.map(item => {
      if (item.type === 'category') {
        return {
          ...item,
          collapsible: true,
          collapsed: item.collapsed !== undefined ? item.collapsed : true,
          items: applyCollapsible(item.items),
        };
      }
      return item;
    });
  };

  let sidebarToRender;
  if (activeMode === 'p') {
    sidebarToRender = applyCollapsible(allSidebars.bodhisattvaSidebar_p);
  } else {
    // For standard mode, try to use the defined sidebar in sidebars.js
    // This prevents the sidebar from disappearing on p2-p10
    sidebarToRender = applyCollapsible(allSidebars.bodhisattvaSidebar);
  }

  // Force re-render on mode change
  return (
    <DocSidebar 
      {...props} 
      key={activeMode} 
      sidebar={sidebarToRender} 
    />
  );
}