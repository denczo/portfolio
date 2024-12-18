import Project from "../navigation/links/Project";
import projects from 'public/data/projects.json';

export default function Projects() {
  return (<div id="Work" className="flex ultra:items-center w-full flex-col bg-gradient-to-r from-gradientRight to-gradientLeft">
    <img className="w-full h-44" src="/transitions/transition_grey.svg" alt="transition" />
    <p className="flex text-4xl mb-8 mt-8 justify-center text-white font-bold text-center ">Featured Projects</p>
    <div className="flex flex-wrap w-full desktop:pl-20 desktop:pr-20 justify-center ultra:max-w-[1920px]">
      {projects.map((item, index) =>
        <Project key={index} headline={item.title} image={item.image} text={item.text} tags={item.tags} link={item.link} />
      )}
    </div>
  </div>);
}