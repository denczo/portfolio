import data from "../data/dataWork"
import Tag from "../elements/Tag";


const Work = () => {
  return (<div id="Experience" className="flex justify-center bg-slate-800 min-h-full mobile:py-8 mobile:px-4">
    <div className="flex flex-col justify-center">
      <div className="text-white text-xl font-bold mb-8 text-center">EXPERIENCE</div>
      {data.reverse().map((item, index) => <div key={"W"+index} className="flex max-w-3xl">
          <div>
            <div className="flex justify-center items-center text-white rounded-full w-24 h-24  bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
              <div className="flex h-[90px] w-[90px] bg-slate-800 rounded-full justify-center items-center"><b>{item.year.toString()}</b></div>
            </div>
            {index < data.length - 1 ? 
              <div className="w-1 bg-slate-900 m-auto h-full"></div> : <div className="h-16"></div>}
          </div>
          <div className="flex flex-col justify-start h-max mt-9 pl-6 text-white">
            <div><b>{item.title + " @ " + item.company}</b></div>
            <div>{item.tasks}</div>
            <ul className="mt-1 flex flex-wrap" aria-label="Technologies used:">
              {item.tags.map((tag, index) =>
                <li key={"L"+index} className="mr-1.5 mt-2"><Tag title={tag} /></li>
              )}
            </ul>
          </div>
        </div>)}
    </div>
  </div>);
}

export default Work;