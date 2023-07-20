import { HashRouter as Router } from 'react-router-dom';
import NavItem from './NavItem';

const MenuItems = () => {
    return (<Router>
        <NavItem title={"About"}/>
        <NavItem title={"Work"}/>
        <NavItem title={"Experience"}/>
        <NavItem title={"Contact"}/>
        
        <a className="transition ease-in-out duration-300 hover:text-violet-400" href={"./content/ResumeDeveloperCzogalla.pdf"} target="_blank" rel="noreferrer">Resume</a>
    </Router>);
}

export default MenuItems;