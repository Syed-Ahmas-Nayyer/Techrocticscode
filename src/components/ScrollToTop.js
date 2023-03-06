import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const ScrollToTop = ({ children }) => {
    const { ApplyNow } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, ["./applyNow.js"]);
  
    return children || null;
  };
  
  export default ScrollToTop;
