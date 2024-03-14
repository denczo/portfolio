import MenuItem from './MenuItem';
import ContactBtn from './ContactBtn';

const Menu = () => {

    return (<>
        <MenuItem title={"About"}/>
        <MenuItem title={"Work"}/>
        <MenuItem title={"Services"}/>
        <ContactBtn title={"Contact Me"} />
        </>);
}

export default Menu;