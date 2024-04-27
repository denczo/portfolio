import SocialMedia from "../navigation/links/SocialMedia";
import LinkCollection from "../static/LinkCollection";

function Footer() {
  return (<footer className="flex flex-col items-center bg-gradient-to-r from-gradientRight to-gradientLeft">
    <img className="w-full h-44" src="/transitions/transition_grey.svg" alt="transition" />

    <div className="flex desktop:justify-evenly mobile:justify-center mobile:flex-wrap w-full text-white pt-8">      
    <div className="flex text-2xl mobile:w-full mobile:justify-center mobile:mb-8 font-bold self-center">Fullstacklab.net</div>
    <LinkCollection hl="Links" links={['Home', 'About', 'Projects', 'Contact']}/>
    <LinkCollection hl="Socials" links={['LinkedIn', 'Youtube', 'Instagram', 'Github']}/>
    <LinkCollection hl="Services" links={['Single Page Application', 'API Integration', 'SEO Optimization']}/>
    <LinkCollection hl="Misc" links={['Privacy Policy', 'Imprint']}/>

    </div>
    <div className="pt-5">
    {/* <SocialMedia size={35}/> */}
    </div>
    <hr className="flex-grow" />
    <div className="flex text-white text-center p-5">&copy; {new Date().getFullYear()} Dennis-Immanuel Czogalla. All rights reserved.</div>
  </footer>);
}

export default Footer;
