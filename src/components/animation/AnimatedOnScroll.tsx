'use client'

import { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimatedOnScroll({children}:{children: ReactNode}) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 50% of the element is visible
  });

  // Update state when the element becomes visible
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      {isVisible && (
          <>{children}</>
      )}
    </div>
  );
}