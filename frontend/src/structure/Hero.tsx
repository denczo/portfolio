import { motion } from 'framer-motion';

function Hero() {
  return (<div className="flex justify-center items-center flex-col h-screen bg-gradient-to-r from-purple-600 to-blue-600">

    <div className="flex relative w-full h-full items-center justify-center">

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-6 text-center w-full z-20 pointer-events-none text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-[72px] font-bold ">Hi, I'm Dennis</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.25 }}
        >
          <p className="text-[48px]">A developer who brings ideas to life</p>
        </motion.div>

      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <div className="mt-[500px] animate-bounce h-0 w-0 border-x-[16px] border-x-transparent border-t-[16px] border-b-white"></div>
      </motion.div>
    </div>

  </div>);
}

export default Hero;
