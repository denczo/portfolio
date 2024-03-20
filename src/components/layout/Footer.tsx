import SocialMedia from "../navigation/links/SocialMedia";

function Footer() {
  return (<footer className="flex flex-col items-center bg-gradient-to-r from-gradientRight to-gradientLeft">
    <img className="w-full h-44" src="/transitions/transition_grey.svg" alt="transition" />
    <div className="pt-5">
    <SocialMedia size={35}/>
    </div>
    <div className="flex text-white font-bold text-center p-5">&copy; {new Date().getFullYear()} Dennis-Immanuel Czogalla. All rights reserved.</div>
  </footer>);
}

export default Footer;
