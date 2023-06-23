function Project() {
    return (<div className="bg-slate-800 rounded h-64 w-128 p-2 text-white">
        <div>Headline</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet facilisis porttitor. Donec condimentum feugiat nisl, et gravida purus tempor ut. Ut non dictum metus. Quisque viverra felis lobortis ex mattis, ac vehicula quam laoreet. Suspendisse lobortis libero mauris, et volutpat ante accumsan nec. </p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div></li>
            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">SASS</div></li>
            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Python</div></li>
            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">MongoDB</div></li></ul>
    </div>);
}

export default Project;