'use client'

import { motion } from "framer-motion";
import { Children, ReactNode } from "react";

export default function BounceIn({ children, delay }: { children: ReactNode, delay: number }) {

  function BouncingBox({ delay, children }: { children: ReactNode, delay: number }) {
    return (
      <motion.div
        className=""
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay }}>
        {children}
      </motion.div>
    );
  }

  return (
    <div className="flex justify-evenly mobile:flex-wrap">
      {Children.map(children, (child, index) => (
        <BouncingBox key={index} delay={delay * index}>
          {child}
        </BouncingBox>
      ))}
    </div>
  );
};