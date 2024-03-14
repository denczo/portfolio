import SocialMedia from "src/components/static/SocialMedia";
import Burger from "./elements/Burger";
import Close from "./elements/Close";
import Menu from "./elements/Menu";
import { useGlobalState } from "src/contexts/GlobalStateContext";

const BurgerMenu = () => {

    const { isMenuOpen, toggleMenu } = useGlobalState();

    return (<div className="desktop:hidden">
        <div className="fixed top-0 right-0 p-2 z-50" onClick={toggleMenu}>
            {isMenuOpen? <Close /> : <Burger />}
        </div>
        {isMenuOpen ?
            <div className="flex justify-between pt-20 fixed flex-col text-white text-4xl pl-5 bg-black backdrop-blur-md bg-opacity-40 w-full h-full z-40">
                <Menu />
                <SocialMedia size={42}/>
            </div> : <></>}
    </div>);
}

export default BurgerMenu;