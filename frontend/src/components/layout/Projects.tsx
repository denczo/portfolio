import Project from "../navigation/links/Project";
import data from "../../data/data"

function Projects() {
  return (<div id="Work" className="flex justify-center flex-col py-8 bg-gradient-to-r from-purple-600 to-blue-600 min-h-full">
    {/* <div className="text-white text-xl font-bold mb-8 text-center">WORK</div> */}
    <div className="flex flex-wrap max-w-7xl justify-center m-auto">
      {data.map((item, index) =>
        <Project key={index} headline={item.title} image={item.image} text={item.text} tags={item.tags} link={item.link} />
      )}
    </div>
  </div>);
}

export default Projects;
