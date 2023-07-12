import DesktopMenu from './DesktopMenu';

function Navbar() {
  return (<div className="flex mobile:hidden desktop:justify-center mobile:justify-end bg-black text-white h-12 items-center">
    <DesktopMenu />
  </div>);
}

export default Navbar;