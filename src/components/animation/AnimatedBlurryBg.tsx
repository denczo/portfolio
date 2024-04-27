import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedBlurryBg({ children, isVisible }: {children: ReactNode, isVisible: boolean}) {
  return (
    <motion.div
      className="fixed text-white text-4xl bg-black backdrop-blur-md bg-opacity-50 w-full h-screen min-h-screen desktop:mt-14 z-[100]"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0}}
      transition={{ duration: 0.25}}>
      {children}
    </motion.div>
  );
}