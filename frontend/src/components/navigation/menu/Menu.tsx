import MenuItem from './MenuItem';
// import resume from '../../../assets/pdf/ResumeDeveloperCzogalla.pdf';

const Menu = () => {
    return (<>
        <MenuItem title={"About"}/>
        <MenuItem title={"Work"}/>
        <MenuItem title={"Experience"}/>
        <MenuItem title={"Contact"}/>
        
        {/* <a className="transition ease-in-out duration-300 hover:text-violet-400" href={resume} aria-label="Resume" target="_blank" rel="noreferrer">Resume</a> */}
        </>);
}

export default Menu;