import { useSelector } from "react-redux";
import MenuItems from "./MenuItems";
import SocialMedia from "./SocialMedia";
import { AppState } from "../Store";

const MobileMenu = () => {

    const isOpen = useSelector((state: AppState) => state.isOpen);

    return (<>
    {isOpen ?
    <div className="flex justify-evenly absolute flex-col text-white text-4xl pl-5 space-y-2 bg-black bg-opacity-90 w-full h-full z-40">
        <MenuItems />
        <SocialMedia />
    </div> : <></>
    }
    </>);
}

export default MobileMenu;