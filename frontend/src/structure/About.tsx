import ProfilePic from "../elements/ProfilePic";

function About() {
    return (<div className="snap-start flex justify-center items-center flex-col bg-slate-800 text-slate-100 p-3.5 h-screen">
        <p className="text-2xl">About</p>
        <div className="flex flex-wrap items-center">
            <p className="mr-10 max-w-2xl">
                <p className="mb-5">I made my first steps with coding when I was doing training in game development. 
                During an internship at that time I got in touch with web development which quickly became my new passion.</p>
                <p className="mb-5">Fastforward and today, and I’ve had the privilege of working at an <b>IT consulting company</b>, a <b>large research institute</b> and a <b>tech startup</b>. 
                My main focus these days is building high performance web applications for desktop and mobile devices using the latest technologies.</p>
                <p className="mb-5">When I’m not at the computer, I usually go for a run &#127939;&#8205;&#9794;&#65039;, create my own tasty pizza &#127829;or explore places which are on my travel list &#128747;.</p>
            </p>
            <ProfilePic />
        </div>
    </div>);
}
export default About;