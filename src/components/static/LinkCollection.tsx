export default function LinkCollection({ hl, links } : { hl: string, links: string[]}){
    return <div className="flex p-4 mobile:w-1/2 justify-center">
        <ul>
            <li className="text-xl font-bold">{hl}</li>
            {links.map((link, index) => <li key={index} className="pt-2 text-base">{link}</li>)}
        </ul>
    </div>
}