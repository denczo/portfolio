import { NavHashLink as Link } from 'react-router-hash-link';

function Navbar() {
  return (<div className="flex justify-around bg-black text-white h-10 items-center">
    <div>About</div>
    <div>Experience</div>
    <div>Work</div>
    <div>Contact</div>
    <div>Resume</div>
    </div>);
}

export default Navbar;