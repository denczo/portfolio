import Project from "../elements/Project";
import data from "../data/data"

function Projects() {
  return (<div className="flex justify-center flex-col bg-gradient-to-r from-purple-600 to-blue-600 min-h-full">
    <div className="text-white text-xl font-bold mb-8 mt-20 text-center">WORK</div>
    <div className="flex flex-wrap max-w-7xl justify-center m-auto">
      {data.map((item, index) =>
        <Project headline={item.title} image={item.image} text={item.text} tags={item.tags} />
      )}
    </div>
  </div>);
}

export default Projects;
