import SocialMedia from "../elements/SocialMedia";

function Footer() {
  return (<div className="flex justify-center flex-col items-center bg-gradient-to-r from-purple-600 to-blue-600 py-8">
    <SocialMedia />
    <div className="text-white font-bold">Copyright &copy; {new Date().getFullYear()} Dennis-Immanuel Czogalla</div>
  </div>);
}

export default Footer;
