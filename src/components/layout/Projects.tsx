import Project from "../navigation/links/Project";
import data from "../../data/data"
import { useEffect, useState } from "react";
import { Repos } from "src/types/types.d";

const Projects = () => {

  const [projects, setProjects] = useState([]);

  async function fetchProjects(){
    const response = await fetch('/api/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    setProjects(result);
  }

  useEffect(() => {
    fetchProjects();
  }, [])


  return (<div id="Work" className="flex ultra:items-center w-full flex-col bg-gradient-to-r from-gradientRight to-gradientLeft">
    <img className="w-full h-44" src="/transitions/transition_grey.svg" alt="transition" />
    <p className="flex text-4xl mb-8 mt-8 justify-center text-white font-bold text-center ">Featured Projects</p>
    <div className="flex flex-wrap w-full desktop:pl-20 desktop:pr-20 justify-center ultra:max-w-[1920px]">
      {projects?.map((item: Repos, index) =><>
        <>{item.image}</>
        <Project key={index} headline={item.name} image={item.image} text={item.desc} tags={item.topics} link={""} />
        </>
      )}
    </div>
  </div>);
}

export default Projects;