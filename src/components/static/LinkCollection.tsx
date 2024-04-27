const LinkCollection = ({ hl, links } : { hl: string, links: string[]}) => {
    return <div className="flex py-4 mobile:w-1/2">
        <div className="flex mobile:w-2/5 h-full"></div>
        <div className="flex mobile:w-3/5 flex-col text-left">
        <ul>
            <li className="text-xl font-bold">{hl}</li>
            {links.map(link => <li className="pt-2 text-base">{link}</li>)}
        </ul>
        </div>
    </div>
}

export default LinkCollection;