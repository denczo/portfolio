import NavItem from './NavItem';
import resume from '../assets/pdf/ResumeDeveloperCzogalla.pdf';

const MenuItems = () => {
    return (<>
        <NavItem title={"About"}/>
        <NavItem title={"Work"}/>
        <NavItem title={"Experience"}/>
        <NavItem title={"Contact"}/>
        
        <a className="transition ease-in-out duration-300 hover:text-violet-400" href={resume} target="_blank" rel="noreferrer">Resume</a>
        </>);
}

export default MenuItems;