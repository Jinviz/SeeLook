import React, { useState, useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
    let [count, setCount] = useState(callback);
    
    useEffect(() => {
        const handler = setTimeout(() => {
            setCount(count+1);
        }, delay);
      return () => {
        clearTimeout(handler);
      }
    }, [])
    
    return sequence;
}