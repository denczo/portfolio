'use client'

import { motion } from "framer-motion";
import { Children, ReactNode } from "react";

export default function FadeIn({ children, delay }: { children: ReactNode, delay: number }) {

  return (
    <div className="">
      {Children.map(children, (child, index) => (
        <FadingBox key={index} delay={delay * index}>
          {child}
        </FadingBox>
      ))}
    </div>
  );

  function FadingBox({ delay, children }: { children: ReactNode, delay: number }) {
    return (
      <motion.div
        className=""
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay }}>

        {children}
      </motion.div>
    );
  }
};