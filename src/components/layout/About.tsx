import Summary from "../ui/content/Summary";
import Timeline from "../ui/content/Timeline";

export default function About() {
    return (<div id="About" className="flex flex-col bg-slate-800">
        <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
        <div className="flex flex-grow justify-center items-center text-slate-100">
            <div className="flex flex-row w-full ultra:max-w-[1920px]">
                <div className="flex desktop:w-1/2 mobile:w-full mobile:p-4 flex-col desktop:p-20">
                    <Summary />
                </div>
                <div className="desktop:flex mobile:hidden w-1/2 flex-col pl-10">
                    <Timeline />
                </div>
            </div>
        </div>
    </div>);
}