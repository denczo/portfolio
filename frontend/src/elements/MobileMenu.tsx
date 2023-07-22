import { useSelector } from "react-redux";
import MenuItems from "./MenuItems";
import SocialMedia from "./SocialMedia";
import { AppState } from "../Store";

const MobileMenu = () => {

    const isOpen = useSelector((state: AppState) => state.isOpen);

    return (<>
    {isOpen ?
    <div className="flex justify-between pt-20 absolute flex-col text-white text-4xl pl-5 bg-black backdrop-blur-md bg-opacity-40 w-full h-full z-40">
        <MenuItems />
        <SocialMedia />
    </div> : <></>
    }
    </>);
}

export default MobileMenu;