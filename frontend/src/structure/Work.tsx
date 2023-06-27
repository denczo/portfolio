import data from "../data/dataWork"
import Hexagon from "../elements/Hexagon/Hexagon";


const Work = () => {
  return (<div className="snap-start flex justify-center items-center bg-slate-200 h-screen">
    <div className="flex flex-col">

      {data.reverse().map((item, index) => <>
        {index > 0 ?
        <div className="border-l-4 border-gray-900 h-20 ml-8"></div> : <></>}
        <div className="flex items-center">
        {/* <div className="ml-4">{item.company}</div> */}
          <Hexagon image={item.image} title={item.year.toString()}/>
          <div className="ml-4">{item.title+" @ "+item.company}</div>
        </div>
      </>)}
    </div>
  </div>);
}

export default Work;
