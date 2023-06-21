import { motion } from 'framer-motion';


function Hero() {
    return (<div className="snap-start flex justify-center items-center flex-col h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
        <p className="text-[72px] font-bold">Hi, I'm Dennis</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
        <p className="text-[48px]">A developer who brings ideas to life</p>
        </motion.div>
    </div>);
}

export default Hero;
