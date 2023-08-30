import SocialMedia from "../elements/navigation/links/SocialMedia";

function Footer() {
  return (<footer className="flex justify-center flex-col items-center bg-slate-800 py-8">
    <SocialMedia />
    <div className="flex text-white font-bold text-center">Copyright &copy; {new Date().getFullYear()} Dennis-Immanuel Czogalla</div>
  </footer>);
}

export default Footer;
