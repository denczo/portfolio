import Summary from "../static/Summary";
import Timeline from "../static/Timeline";

const About = () => {
    return (<div id="About" className="flex flex-col h-full bg-slate-800">
        <img className="w-full h-44" src="/transitions/up.svg" alt="transition" />
        <div className="flex flex-grow justify-center items-center text-slate-100">
            <div className="flex flex-row w-full">
                <div className="flex w-1/2 flex-col pl-20">
                    <Summary />
                </div>
                <div className="flex w-1/2 flex-col pl-10">
                    <Timeline />
                </div>
            </div>
        </div>
    </div>);
}

export default About;