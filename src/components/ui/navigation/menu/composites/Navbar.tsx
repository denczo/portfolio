import useScrollPos from "../../../../../hooks/useScrollPos";
import Menu from "../elements/Menu";

export default function Navbar() {
    const isAtTop = useScrollPos();

    return (
        <div className={`mobile:hidden sticky -mt-14 top-0 z-50 ${isAtTop ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 hover:opacity-100 transition-opacity duration-500'}`} >
            <div className={`flex mobile:hidden desktop:justify-end ultra:justify-center bg-gradient-to-r from-transparent to-black text-white text-2xl h-14`}>
                <div className="flex justify-evenly ultra:justify-end ultra:space-x-32 ultra:px-12 w-1/2 mobile:hidden ultra:w-full ultra:max-w-[1920px]">
                    <Menu />
                </div>
            </div>
        </div>);
}