import Burger from './Burger';
import DesktopMenu from './DesktopMenu';

function Navbar({setOpen} : {setOpen: any}) {
  return (<div className="flex mobile:hidden desktop:justify-center mobile:justify-end bg-black text-white h-12 items-center">
    <DesktopMenu setOpen={setOpen}/>
  </div>);
}

export default Navbar;