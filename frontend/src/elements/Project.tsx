import Tag from "./Tag";

function Project({ headline, text, tags }: { headline: string, text: string, tags: string[] }) {
    return (<div className="bg-slate-800 rounded-md h-64 w-128 p-5 text-white">
        <div className="text-xl font-medium mb-4">{headline}</div>
        <p>{text}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {tags.map(item =>
                <li className="mr-1.5 mt-2"><Tag title={item} /></li>
            )}
        </ul>
    </div>);
}

export default Project;