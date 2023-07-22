import SocialMedia from "../elements/SocialMedia";

function Footer() {
  return (<div className="flex justify-center flex-col items-center bg-slate-800 py-8">
    <SocialMedia />
    <div className="flex text-white font-bold text-center">Copyright &copy; {new Date().getFullYear()} Dennis-Immanuel Czogalla</div>
  </div>);
}

export default Footer;
