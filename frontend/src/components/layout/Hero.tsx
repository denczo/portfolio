import { motion } from 'framer-motion';
import Particles from '../particles/Particles';
import Link from 'next/link';

const bulb = "/images/lightbulb.svg"
const hand = "/images/Hand.webp"

function Hero() {
  return (<div className="flex justify-center items-center flex-col h-screen bg-gradient-to-r from-purple-600 to-blue-600">

    <div className="flex relative flex-col w-full h-full items-center justify-center">

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-6 text-center w-full z-20 pointer-events-none text-white px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="desktop:text-[72px] mobile:text-[40px] font-bold">Hi, I'm Dennis</p>
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
        className="flex justify-center flex-col items-center h-full z-10"
      >
        <motion.div
          className="w-1/3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1, delay: 2.45 }}
        >
          <img className="opacity-50 animate-scalepulse w-full h-full" src={bulb} alt={"Lightbulb"}></img>
        </motion.div>
        <motion.div
          className="w-2/3"
          initial={{ opacity: 0, y: "-100vh" }}
          animate={{ opacity: 1, y: "0vh" }}
          transition={{ duration: 0.25, delay: 2 }}
        >
          <img className="opacity-30 w-full h-full" srcSet="../assets/images/Hand-0.5x.webp 0.5x, ../assets/images/Hand-0.25x.webp 0.25x" src={hand} alt={"Hand"} ></img>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3 }}
        >
          <Link href={"/#About"} aria-label='About'>
            <div className="animate-bounce h-0 w-0 border-x-[16px] border-x-transparent border-t-[16px] border-b-white"></div>
          </Link>
        </motion.div>
      </div>

      <Particles />
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" height="300" width="100%">
    {/* <path fill="#1E293B" fill-opacity="1" d="M0,128L60,122.7C120,117,240,107,360,101.3C480,96,600,96,720,122.7C840,149,960,203,1080,218.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path> */}
    <path fill="#1E293B" fill-opacity="1" d="M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,144C560,160,640,192,720,176C800,160,880,96,960,74.7C1040,53,1120,75,1200,96C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>

      </svg>
  </div>);
}

export default Hero;
