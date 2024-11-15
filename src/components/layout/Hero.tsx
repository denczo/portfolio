import { motion } from 'framer-motion';
import Link from 'next/link';
import Typing from '../static/Typing';
import SocialMedia from '../navigation/links/SocialMedia';
import Arrow from '../static/Arrow';


const variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 0 },
}

function Hero() {
  return (<div className="flex items-center flex-col min-h-screen desktop:px-20 mobile:p-6 bg-gradient-to-r from-gradientRight to-gradientLeft">
    <div className="flex mobile:justify-center desktop:flex-row ultra:max-w-[1920px] desktop:items-center mobile:flex-col-reverse w-full flex-1">
      <div className="flex flex-col z-20 pointer-events-none text-white desktop:w-3/5 mobile:w-full mobile:text-center">
      <motion.div initial="visible" animate="hidden" variants={variants}>
        <p className="desktop:text-[5vw] ultra:text-[4vw] mobile:text-[8vw] font-bold text-lightcyan w-full">Greetings, I&apos;m Dennis</p>
        <p className="desktop:text-[3vw] ultra:text-[2vw] mobile:text-[5vw]">a fullstack developer specializing in web applications with
          <Typing />
        </p>
        <div className='flex mobile:hidden mt-6 justify-start'><SocialMedia size={35}/></div>
      </motion.div>
      </div>
      <motion.div className="flex flex-col desktop:w-2/5 aspect-square w-full justify-center"
           initial={{ opacity: 0, scale: 0.75 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 1.5,
             delay: 0.25,
             ease: [0, 0.71, 0.2, 1.01]
           }}>
        <img className="mobile:w-full mobile:max-w-xl ultra:max-h-[90%] object-contain self-center animate-scalepulse" src="/images/portraitBrush.webp" alt="Portrait" />
      </motion.div>
    </div>
    <div className="desktop:absolute inset-0 flex items-end py-2 desktop:bottom-10 justify-center z-10">
      <Link href={"/#Services"} aria-label='About' >
          <Arrow />
       </Link>
    </div>
  </div>);
}

export default Hero;
