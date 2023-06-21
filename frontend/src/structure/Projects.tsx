import Project from "../elements/Project";

function Projects() {
  return (<div className="snap-start flex justify-center items-center flex-col bg-slate-200 h-screen">
    <p className="text-2xl">Projects</p>
    <div className="container grid grid-cols-3 gap-2 mx-auto">
   <Project />
   <Project />
   <Project />
</div>
  </div>);
}

export default Projects;
