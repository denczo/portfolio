import Project from "../navigation/links/Project";
import data from "../../data/data"

function Projects() {
  return (<div id="Work" className="flex flex-col bg-gradient-to-r from-purple-600 to-blue-600 min-h-full">
    <img className="w-full h-44" src="/transitions/transition_grey.svg" alt="transition" />
    <p className="flex text-4xl mb-8 mt-8 justify-center text-white">Featured Projects</p>
    <div className="flex flex-wrap w-full pl-20 pr-20 justify-center m-auto">
      {data.map((item, index) =>
        <Project key={index} headline={item.title} image={item.image} text={item.text} tags={item.tags} link={item.link} />
      )}
    </div>
  </div>);
}

export default Projects;