import { HashLink } from 'react-router-hash-link';
import { HashRouter as Router } from 'react-router-dom';

function Navbar() {
  return (<div className="flex justify-around bg-black text-white h-10 items-center">
    <Router>
      <HashLink smooth to="/#About">About</HashLink>
      <HashLink smooth to="/#Work">Work</HashLink>
      <HashLink smooth to="/#Experience">Experience</HashLink>
      <a href = {"./content/ResumeDeveloperCzogalla.pdf"} target = "_blank">Resume</a>
    </Router>
  </div>);
}

export default Navbar;