import { HashLink } from 'react-router-hash-link';
import { HashRouter as Router } from 'react-router-dom';
import NavItem from './NavItem';

const MenuItems = () => {
    return (<Router>
        {/* <HashLink className="transition ease-in-out duration-300 hover:text-violet-400" smooth to="/#About">About</HashLink> */}
        {/* <HashLink className="transition ease-in-out duration-300 hover:text-violet-400" smooth to="/#Work">Work</HashLink> */}
        {/* <HashLink className="transition ease-in-out duration-300 hover:text-violet-400" smooth to="/#Experience">Experience</HashLink> */}
        {/* <HashLink className="transition ease-in-out duration-300 hover:text-violet-400" smooth to="/#Contact">Contact</HashLink> */}
        <NavItem title={"About"}/>
        <NavItem title={"Work"}/>
        <NavItem title={"Experience"}/>
        <NavItem title={"Contact"}/>
        
        <a className="transition ease-in-out duration-300 hover:text-violet-400" href={"./content/ResumeDeveloperCzogalla.pdf"} target="_blank" rel="noreferrer">Resume</a>
    </Router>);
}

export default MenuItems;