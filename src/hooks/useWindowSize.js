'use client';

import { useState, useEffect } from 'react';

/**
 * A custom hook that tracks the browser window's dimensions.
 * @returns {{width: number, height: number}} An object containing the window's width and height.
 * * @example
 * const { width, height } = useWindowSize();
 * if (width < 768) {
 * // Render mobile view
 * }
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
