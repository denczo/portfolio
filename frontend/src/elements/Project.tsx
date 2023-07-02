import Tag from "./Tag";

function Project({ headline, image, text, tags }: { headline: string, image: string, text: string, tags: string[] }) {
    return (<div className="flex flex-col bg-opacity-20 bg-black rounded-md aspect-square max-w-sm max-h-sm p-4 m-3 text-white">
        <div className="text-xl font-medium mb-4">{headline}</div>
        <img className="object-contain max-h-48 h-full mb-2" alt="" src={image}/>
        <p>{text}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {tags.map(item =>
                <li className="mr-1.5 mt-2"><Tag title={item} /></li>
            )}
        </ul>
    </div>);
}

export default Project;