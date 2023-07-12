import MenuItems from "./MenuItems";
import SocialMedia from "./SocialMedia";

const MobileMenu = ({open} : {open: boolean}) => {
    return (<>
    {open ?
    <div className="flex justify-evenly absolute flex-col text-white text-4xl pl-5 space-y-2 bg-black bg-opacity-90 w-full h-full z-40">
        <MenuItems />
        <SocialMedia />
    </div> : <></>
    }
    </>);
}

export default MobileMenu;