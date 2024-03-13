import MenuItem from './MenuItem';

const Menu = () => {
    return (<>
        <MenuItem title={"About"}/>
        <MenuItem title={"Work"}/>
        <MenuItem title={"Services"}/>
        <MenuItem title={"Contact Me"} customStyling='border-2 border-white rounded-3xl px-3 pb-1 hover:bg-white hover:text-black'/>
        </>);
}

export default Menu;