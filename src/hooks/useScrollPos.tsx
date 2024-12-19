import { useState, useEffect } from 'react';

const UseScrollFade = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY <= 200;
      // Only set it, when top has not been reached yet
      if (atTop !== isAtTop) {
        setIsAtTop(atTop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAtTop]);

  return isAtTop;
};

export default UseScrollFade;