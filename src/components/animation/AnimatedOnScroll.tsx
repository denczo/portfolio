'use client'

import { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimatedOnScroll({children}:{children: ReactNode}) {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1, // Trigger animation when 100% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      console.log("DAFUQ")
      setIsVisible(true);
    }else{
      // setIsVisible(false);
    }
  }, [inView]);

  return (<div className='h-full bg-gray-600' ref={ref}>
       {isVisible && (<>{children}</>)} 
    </div> 
  );
}