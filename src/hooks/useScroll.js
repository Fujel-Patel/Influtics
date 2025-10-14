'use client';

import { useState, useEffect } from 'react';

/**
 * A custom hook that tracks the window's scroll position.
 * @returns {{x: number, y: number}} An object containing the current scroll X and Y coordinates.
 * * @example
 * const { x, y } = useScroll();
 * // Use x and y to apply styles or trigger effects.
 */
export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Handler to call on scroll
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Call handler right away so state gets updated with initial position
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty array ensures effect is only run on mount and unmount

  return scrollPosition;
}
