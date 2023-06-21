import ProfilePic from "../elements/ProfilePic";

function About() {
    return (<div className="snap-start flex justify-center items-center flex-col bg-blue-300 p-3.5  h-screen">
        <p className="text-2xl">About</p>
        <div className="flex flex-wrap items-center">
        <p className="mr-10 max-w-2xl">
            I'm Dennis-Immanuel Czogalla, a software developer with a bachelors degree in Computer science.
            My main focus these days is building products for the web.
        </p>
        <ProfilePic />
        </div>
    </div>);
}
export default About;