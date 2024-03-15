import { motion } from 'framer-motion';
import Link from 'next/link';
import Typing from '../static/Typing';
import SocialMedia from '../static/SocialMedia';


const variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 0, y: -50 },
}
function Hero() {
  return (<div className="flex mobile:justify-center flex-col desktop:h-screen min-h-full desktop:p-20 mobile:p-6 bg-gradient-to-r from-gradientRight to-gradientLeft">
    <div className="flex desktop:flex-row mobile:flex-col-reverse w-full desktop:h-full">
      <div className="flex flex-col justify-center z-20 pointer-events-none text-white desktop:w-3/5 mobile:w-full mobile:text-center">
      <motion.div initial="visible" animate="hidden" variants={variants}>
        <p className="desktop:text-[100px] mobile:text-[50px] font-bold text-lightcyan w-full">Greetings, I&apos;m Dennis</p>
        <p className="desktop:text-[60px] mobile:text-[26px]">a fullstack developer specializing in web applications with
          <Typing />
        </p>
      </motion.div>
      </div>
      <motion.div className="flex flex-col desktop:w-2/5 mobile:w-full"
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 0.8,
             delay: 0.25,
             ease: [0, 0.71, 0.2, 1.01]
           }}>
        <img className="h-full object-contain" src="/images/portraitBrush.webp" alt="Portrait" />
        <div className='mobile:hidden'><SocialMedia size={50}/></div>
      </motion.div>
    </div>
    <div className="flex justify-center items-center z-10">
      <Link href={"/#About"} aria-label='About' >
        <div className="animate-bounce h-0 w-0 border-x-[16px] border-x-transparent border-t-[16px] mobile:mt-6 border-b-white"></div>
      </Link>
    </div>
  </div>);
}

export default Hero;
