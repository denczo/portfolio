import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Typing from '../Typing';
import SocialMedia from '../static/SocialMedia';

function Hero() {
  return (<div className="flex flex-col desktop:h-screen min-h-full p-20 bg-gradient-to-r from-gradientRight to-gradientLeft">
    <div className="flex desktop:flex-row mobile:flex-col-reverse w-full desktop:h-full">
      <div className="flex flex-col justify-center z-20 pointer-events-none text-white desktop:w-3/5 mobile:w-full mobile:text-center">
        <p className="desktop:text-[100px] mobile:text-[60px] font-bold text-lightcyan">Greetings, I'm Dennis</p>
        <p className="desktop:text-[60px] mobile:text-[32px]">a fullstack developer specializing in web applications with
          <Typing />
        </p>
      </div>
      <div className="flex flex-col desktop:w-2/5 mobile:w-full">
        <img className="h-full object-contain" src="/images/portraitBrush.png" alt="Portrait" />
        <SocialMedia size={50}/>
      </div>
    </div>
    <div className="flex justify-center items-center z-10">
      <Link href={"/#About"} aria-label='About' >
        <div className="animate-bounce h-0 w-0 border-x-[16px] border-x-transparent border-t-[16px] border-b-white"></div>
      </Link>
    </div>
  </div>);
}

export default Hero;
