import { useEffect } from 'react';

/**
 * Custom hook to scroll to top when component mounts
 * Useful for route transitions to ensure user starts at top of new page
 */
export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
