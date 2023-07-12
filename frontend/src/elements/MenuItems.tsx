import { HashLink } from 'react-router-hash-link';
import { HashRouter as Router } from 'react-router-dom';

const MenuItems = ({ setOpen }: { setOpen: any }) => {
    return (<Router>
        <HashLink onClick={setOpen(false)} smooth to="/#About">About</HashLink>
        <HashLink onClick={setOpen(false)} smooth to="/#Work">Work</HashLink>
        <HashLink onClick={setOpen(false)} smooth to="/#Experience">Experience</HashLink>
        <a onClick={setOpen(false)} href={"./content/ResumeDeveloperCzogalla.pdf"} target="_blank" rel="noreferrer">Resume</a>
    </Router>);
}

export default MenuItems;