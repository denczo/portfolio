import { HashLink } from 'react-router-hash-link';
import { HashRouter as Router } from 'react-router-dom';

const MenuItems = () => {
    return (<Router>
        <HashLink smooth to="/#About">About</HashLink>
        <HashLink smooth to="/#Work">Work</HashLink>
        <HashLink smooth to="/#Experience">Experience</HashLink>
        <a  href={"./content/ResumeDeveloperCzogalla.pdf"} target="_blank" rel="noreferrer">Resume</a>
    </Router>);
}

export default MenuItems;