import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly force the window to snap back to the very top coordinates
    window.scrollTo(0, 0);
  }, [pathname]); // Fires automatically every single time the route path changes

  return null;
}
