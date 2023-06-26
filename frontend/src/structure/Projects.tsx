import Project from "../elements/Project";
import data from "../data/data"
import HexButton from "../elements/HexButton/HexButton";
import { motion } from "framer-motion";

function Projects() {
  return (<div className="snap-start flex justify-center items-center flex-col bg-slate-200 h-screen">
    {/* <p className="text-2xl">Projects</p> */}
    {/* <div className="container grid grid-cols-3 gap-2 mx-auto"> */}
    <div className="flex justify-center flex-wrap max-w-5xl">
      {/* {data.map(item => <Project headline={item.title} text={item.text} tags={item.tags} />)} */}
     
      {data.map((item, index) => 
      //  <motion.div
      //     initial={{ opacity: 0 }}
      //     animate={{ opacity: 1 }}
      //     transition={{ duration: 0.25, delay: 0.5*index }}
      //   >
          <HexButton  headline={item.title} image={item.image} text={item.text} tags={item.tags}/>
        // </ motion.div>
        )}
    </div>
  </div>);
}

export default Projects;
