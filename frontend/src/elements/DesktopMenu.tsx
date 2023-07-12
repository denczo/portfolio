import MenuItems from "./MenuItems";

function DesktopMenu({setOpen} : {setOpen: any}) {
    return ( <div className="flex justify-around w-full mobile:hidden">
    <MenuItems setOpen={setOpen}/>
    </div>);
}

export default DesktopMenu;