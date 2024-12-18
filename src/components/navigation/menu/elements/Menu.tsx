import MenuItem from './MenuItem';
import ContactBtn from './ContactBtn';

export default function Menu() {
    return (<>
        <MenuItem title={"Services"} />
        <MenuItem title={"Work"} />
        <MenuItem title={"About"} />
        <ContactBtn title={"Contact Me"} />
    </>);
}