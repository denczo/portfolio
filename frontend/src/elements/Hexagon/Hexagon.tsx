import Tag from "../Tag";
import "./Hexagon.sass";

function Hexagon({ headline, text, tags }: { headline: string, text: string, tags: string[] }) {
    return (<div className="Hexagon">
    {/* // <div className="HexContainer"> */}
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full z-10"> */}
            {/* <div className="text-xs font-medium">{headline}</div> */}
            {/* <p>{text}</p> */}
        {/* </div> */}
        {/* <p>{text}</p> */}
        {/* <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {tags.map(item =>
                <li className="mr-1.5 mt-2"><Tag title={item} /></li>
            )}
        </ul> */}
        
        </div>);
}

export default Hexagon;