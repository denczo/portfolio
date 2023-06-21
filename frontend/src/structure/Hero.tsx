import { motion } from 'framer-motion';


function Hero() {
    return (<div className="snap-start flex justify-center items-center flex-col h-screen">
<div className="relative grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
    <div className="h-96 w-96 rounded-lg bg-slate-200 grid gap-4"></div>
    <div className="h-48 w-96 rounded-lg bg-slate-200 grid gap-4"></div>
    <div className="h-96 w-96 rounded-lg bg-[url('/public/content/arcreactor.gif')] opacity-10 bg-cover bg-center bg-no-repeat grid gap-4"></div>
    <div className="h-48 w-96 rounded-lg bg-slate-200 grid gap-4"></div>
    <div className="h-96 w-96 rounded-lg bg-slate-200 grid gap-4"></div>


<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
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
          transition={{ duration: 1, delay: 1.5 }}
        >
        <p className="text-[48px]">A developer who brings ideas to life</p>
        </motion.div>
        </div>
        </div>

    </div>);
}

export default Hero;
