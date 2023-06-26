import Tag from "../Tag";
import "./HexButton.sass";

function HexButton({ headline, image, text, tags }: { headline: string, image: string, text: string, tags: string[] }) {
    return (<>
    <div className="HexagonButton">
    <div className="HexButtonImage"><img className="" src={image} /></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 text-white p-4 -mt-12 h-full">
            <div className="text-xl font-medium text-center mb-2">{headline}</div>
            
            <div className="flex items-center">
            <p>{text}</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                {tags.map(item =>
                    <li className="mr-1.5 mt-2"><Tag title={item} /></li>
                )}
            </ul>
            </div>
            </div>
        </div></>);
}

export default HexButton;