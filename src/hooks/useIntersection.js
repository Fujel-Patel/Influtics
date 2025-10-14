'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * A custom hook that detects when a referenced element enters the viewport.
 * @param {object} options - Configuration options for the IntersectionObserver.
 * @returns {[React.RefObject, boolean]} A tuple containing the ref to attach to the element and a boolean indicating if it's intersecting.
 * * @example
 * const [ref, isVisible] = useIntersection({ threshold: 0.1 });
 * return <div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'opacity-0'} />;
 */
export function useIntersection(options) {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      options
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup the observer
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
}
