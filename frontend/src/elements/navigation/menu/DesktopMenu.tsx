import Menu from "./Menu";

function DesktopMenu() {
    return (
        <div className="sticky top-0 bottom-0 z-50">
            <div className="flex mobile:hidden desktop:justify-center mobile:justify-end bg-black text-white h-12 items-center">
                <div className="flex justify-around w-full mobile:hidden">
                    <Menu />
                </div>
            </div>
        </div>);
}

export default DesktopMenu;