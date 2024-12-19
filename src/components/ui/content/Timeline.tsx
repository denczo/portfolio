import BounceIn from "../../animation/BounceIn";
import timelineData from 'public/data/timeline.json';
import Tag from "./Tag";

export default function Timeline() {
  return (
    <BounceIn delay={0.4}>
      <div className="desktop:text-xl">

        {timelineData.map((item, index) => <div key={"W" + index} className="flex">
          <div>
            <div className="flex justify-center items-center text-white rounded-full desktop:w-20 mobile:mt-6 desktop:h-20 mobile:w-12 mobile:h-12 bg-slate-600">
              <div className="flex desktop:h-[72px] desktop:w-[72px] mobile:h-[45px] mobile:w-[45px] bg-slate-800 desktop:font-bold rounded-full justify-center items-center">{item.year.toString()}</div>
            </div>
            {index < timelineData.length - 1 ?
              <div className="mobile:w-6 desktop:w-1 bg-slate-600 m-auto h-full"></div> : <div className="h-16"></div>}
          </div>
          <div className="flex flex-col justify-start h-max mt-5 desktop:px-6 mobile:px-4 text-white">
            <div className="font-bold">{item.title + " @ "}<span className="text-teal-400 font-bold">{item.company}</span></div>
            <div>{item.tasks}</div>
            <ul className="mt-1 flex flex-wrap" aria-label="Technologies used:">
              {item.tags.map((tag, index) =>
                <li key={"L" + index} className="mr-1.5 mt-2"><Tag title={tag} /></li>
              )}
            </ul>
          </div>
        </div>)}
      </div></BounceIn>);
}