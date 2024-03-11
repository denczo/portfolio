import Menu from "./Menu";

function DesktopMenu() {
    return (
        <div className="sticky top-0 bottom-0 z-50">
            <div className="flex mobile:hidden desktop:justify-evenly mobile:justify-end bg-black text-white h-12 items-center">
                <div className="flex justify-evenly w-1/2 mobile:hidden">
                    <Menu />
                </div>
            </div>
        </div>);
}

export default DesktopMenu;