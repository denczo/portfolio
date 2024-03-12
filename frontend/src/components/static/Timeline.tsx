import data from "../../data/dataWork"
import Tag from "../static/Tag";

// TODO: clean up code
const Timeline = () => {
  return (<div className="desktop:text-xl">

    {data.map((item, index) => <div key={"W" + index} className="flex max-w-3xl">
      <div>
        <div className="flex justify-center items-center text-white rounded-full desktop:w-16 mobile:mt-6 desktop:h-16 mobile:w-12 mobile:h-12 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
          <div className="flex desktop:h-[56px] desktop:w-[56px] mobile:h-[45px] mobile:w-[45px] bg-slate-800 desktop:font-bold rounded-full justify-center items-center">{item.year.toString()}</div>
        </div>
        {index < data.length - 1 ?
          <div className="mobile:w-6 desktop:w-2 bg-slate-900 m-auto h-full"></div> : <div className="h-16"></div>}
      </div>
      <div className="flex flex-col justify-start h-max mt-5 desktop:pl-6 mobile:pl-4 text-white">
        <div className="font-bold">{item.title + " @ "}<span className="text-teal-400 font-bold">{item.company}</span></div>
        <div>{item.tasks}</div>
        <ul className="mt-1 flex flex-wrap" aria-label="Technologies used:">
          {item.tags.map((tag, index) =>
            <li key={"L" + index} className="mr-1.5 mt-2"><Tag title={tag} /></li>
          )}
        </ul>
      </div>
    </div>)}
  </div>);
}

export default Timeline;