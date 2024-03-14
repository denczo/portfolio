import Project from "../navigation/links/Project";
import data from "../../data/data"

const Projects = () => {
  return (<div id="Work" className="flex flex-col bg-gradient-to-r from-gradientRight to-gradientLeft">
    <img className="w-full h-44" src="/transitions/transition_grey.svg" alt="transition" />
    <p className="flex text-4xl mb-8 mt-8 justify-center text-white font-bold">Featured Projects</p>
    <div className="flex flex-wrap w-full desktop:pl-20 desktop:pr-20 justify-center">
      {data.map((item, index) =>
        <Project key={index} headline={item.title} image={item.image} text={item.text} tags={item.tags} link={item.link} />
      )}
    </div>
  </div>);
}

export default Projects;