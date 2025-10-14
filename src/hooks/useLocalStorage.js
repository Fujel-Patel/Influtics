'use client';

import { useState, useEffect } from 'react';

/**
 * A custom hook that syncs state with the browser's localStorage.
 * @param {string} key - The key to use in localStorage.
 * @param {T} initialValue - The initial value to use if none is found in localStorage.
 * @returns {[T, function(T): void]} A stateful value, and a function to update it.
 * * @example
 * const [name, setName] = useLocalStorage('username', 'Guest');
 */
export function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    // Prevent build error "window is not defined" during server-side rendering
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.error(error);
      return initialValue;
    }
  });

  // useEffect to update local storage when the state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          typeof storedValue === 'function'
            ? storedValue(storedValue)
            : storedValue;
        // Save state to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error(error);
      }
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
