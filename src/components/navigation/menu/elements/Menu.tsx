import MenuItem from './MenuItem';
import ContactBtn from './ContactBtn';

const Menu = () => {

    return (<>
        <MenuItem title={"Services"}/>
        <MenuItem title={"Work"}/>
        <MenuItem title={"About"}/>
        <ContactBtn title={"Contact Me"} />
        </>);
}

export default Menu;