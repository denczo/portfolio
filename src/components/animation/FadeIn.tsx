'use client'

import { motion } from "framer-motion";
import { Children, ReactNode } from "react";

export default function FadeIn({ children, delay }: { children: ReactNode, delay: number }) {

  function FadingBox({ delay, children }: { children: ReactNode, delay: number }) {
    return (
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: delay }} >
        {children}
      </motion.div>
    );
  }

  return (
    <>
      {Children.map(children, (child, index) => (
        <FadingBox key={index} delay={delay * index}>
          {child}
        </FadingBox>
      ))}
    </>
  );

};