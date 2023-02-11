import { useEffect, useState } from 'react'

// HOOK: Custom hook using `useEffect` to listen for scroll 
// events. Returns bool indicating hasScrolled state.
export default function useScroll() {
  // init hasScrolled state as false
  const [hasScrolled, setHasScrolled] = useState(false);

  // use `setHasScrolled` method to toggle hasScrolled state
  // passing in an empty array as second argument so that
  // `useEffect` only runs once on mount
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
    };
    window.addEventListener('scroll', handleScroll);

    // return a cleanup function on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return hasScrolled;
}