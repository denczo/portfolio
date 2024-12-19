import { motion } from "framer-motion";
import { Children, ReactNode } from "react";

export default function SlideIn({ children, delay }: { children: ReactNode, delay: number }) {

  function SlideBox({ children, delay }: { children: ReactNode, delay: number }) {
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
    <>
      {Children.map(children, (child, index) => (
        <SlideBox key={index} delay={delay * index}>
          {child}
        </SlideBox>
      ))}
    </>
  );
};