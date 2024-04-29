
const Summary = () => {
    return (<>
        <p className="text-4xl mb-8 font-bold mobile:text-center">About me</p>
        <article className="desktop:text-xl mobile:text-md" itemScope itemType="https://schema.org/author">
            <p className="mb-5">I&apos;m a fullstack developer with a bachelors degree in Computer Science🎓. So far I&apos;ve had the privilege of working at an <b><a className="hover:animate-pulse" href="https://www.edataconsulting.com">IT consulting company</a></b>, a <b><a className="hover:animate-pulse" href="https://www.dkfz.de/en/index.html">large research institute</a></b> and a <b><a className="hover:animate-pulse" href="https://fmp.studio">tech startup</a></b>.
                My main focus these days is building high performance web applications for desktop and mobile devices using the latest technologies. I&apos;m also running a <a className="hover:animate-pulse font-bold" href="https://www.youtube.com/@Pygineer">Youtube channel</a> where I create tutorials about software development and 3D printing.</p>
            <p className="mb-5">When I&apos;m not at the computer, I usually go for a run &#127939;&#8205;&#9794;&#65039;, create my own tasty pizza &#127829;or explore places which are on my travel list &#128747;.</p>
        </article>
    </>);
}

export default Summary;