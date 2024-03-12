import Image from 'next/image';
import TransitionSVG from "../../../public/transitions/up.svg"

const About = () => {
    return (<div id="About" className="flex flex-col bg-slate-800 text-slate-100 min-h-screen">
          {/* <TransitionSVG className="w-full"/> */}
          <img className="-mt-1 h-44" src="/transitions/up.svg" alt="test" />
        {/* <p className="text-xl font-bold mb-8 text-center">ABOUT</p> */}
        {/* <div className="flex mobile:justify-center mobile:flex-col mobile:px-4 items-center desktopXL:flex-wrap">
            <article itemScope itemType="https://schema.org/author">
            <div className="desktop:mr-10 max-w-xl">
                <p className="mb-5">I made my first steps with coding when I was doing training in game development. 
                During an internship at that time I got in touch with web development which quickly became my new passion.</p>
                <p className="mb-5">Fastforward and today, and I’ve had the privilege of working at an <b><a className="hover:animate-pulse" href="https://www.edataconsulting.com">IT consulting company</a></b>, a <b><a className="hover:animate-pulse" href="https://www.dkfz.de/en/index.html">large research institute</a></b> and a <b><a className="hover:animate-pulse" href="https://fmp.studio">tech startup</a></b>. 
                My main focus these days is building high performance web applications for desktop and mobile devices using the latest technologies. I'm also running a <a className="hover:animate-pulse font-bold" href="https://www.youtube.com/@Pygineer">Youtube channel</a> where I create tutorials about python development and 3D printing.</p>
                <p className="mb-5">When I’m not at the computer, I usually go for a run &#127939;&#8205;&#9794;&#65039;, create my own tasty pizza &#127829;or explore places which are on my travel list &#128747;.</p>
            </div>
            </article>
        </div> */}
    </div>);
}

export default About;