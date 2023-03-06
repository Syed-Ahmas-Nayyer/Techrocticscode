import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const ScrollToBottom = ({children}) => {
    const {About} = useLocation();
    useEffect(() => {
        window.scrollTo(1500,1500);
    }, [{About}]);
    return children || null;
}

export default ScrollToBottom
