import MenuItems from "./MenuItems";

function DesktopMenu() {
    return ( <div className="flex justify-around w-full mobile:hidden">
    <MenuItems />
    </div>);
}

export default DesktopMenu;