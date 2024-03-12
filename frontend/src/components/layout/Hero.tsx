import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Typing from '../Typing';

function Hero() {
  return (<div className="flex flex-col h-screen bg-gradient-to-r from-gradientRight to-gradientLeft p-20">
    <div className="flex w-full h-full">
      <div className="flex flex-col justify-center z-20 pointer-events-none text-white w-3/5 ">
        <p className="desktop:text-[60px] mobile:text-[40px] font-bold text-lightcyan">Greetings, I'm Dennis</p>
        <p className="desktop:text-[32px] mobile:text-[32px]">a fullstack developer specializing in web applications with
          <Typing />
        </p>
      </div>
      <div className="flex flex-col w-2/5 ">
        <div className="relative h-full ">
          <Image src="/images/portraitBrush.png" alt="Portrait" fill objectFit='contain' />
        </div>
        <div className="flex justify-center gap-10">
          <Image src="/icons/linkedin.svg" alt="Icon" width="35" height="35" />
          <Image src="/icons/github.svg" alt="Icon" width="35" height="35" />
          <Image src="/icons/mail.svg" alt="Icon" width="35" height="35" />
          <Image src="/icons/youtube.svg" alt="Icon" width="35" height="35" />
        </div>
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
