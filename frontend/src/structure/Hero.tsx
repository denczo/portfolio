import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import bulb from "../assets/images/lightbulb.svg"
import hand from "../assets/images/Hand.webp"
import Particles from '../elements/particles/Particles';

function Hero() {
  return (<div className="flex justify-center items-center flex-col h-screen bg-gradient-to-r from-purple-600 to-blue-600">

    <div className="flex relative flex-col w-full h-full items-center justify-center">

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-6 text-center w-full z-20 pointer-events-none text-white px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="desktop:text-[72px] mobile:text-[40px] font-bold ">Hi, I'm Dennis</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <p className="desktop:text-[48px] mobile:text-[32px] animate-blinking">A developer who brings ideas to life</p>
        </motion.div>

      </div>
      <div
        className="flex justify-center flex-col items-center"
      >
        <motion.div
          className="w-1/3"
          initial={{ scale: 0}}
          animate={{ scale: 1}}
          transition={{ duration: 0.1, delay: 2.45 }}
        >
          <img className="opacity-50 animate-scalepulse" src={bulb} alt={"Lightbulb"}></img>
        </motion.div>
        <motion.div
          className="w-2/3"
          initial={{ opacity: 0, y: "-100vh" }}
          animate={{ opacity: 1, y: "0vh" }}
          transition={{ duration: 0.25, delay: 2 }}
        >
          <img className="opacity-30" src={hand} alt={"Hand"}></img>
        </motion.div>

      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <HashLink smooth to={"/#About"}>
          <div className="-mt-8 animate-bounce h-0 w-0 border-x-[16px] border-x-transparent border-t-[16px] border-b-white"></div>
        </HashLink>
      </motion.div>
      <Particles />
    </div>

  </div>);
}

export default Hero;
