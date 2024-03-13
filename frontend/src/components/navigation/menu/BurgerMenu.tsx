import SocialMedia from "src/components/static/SocialMedia";
import useGlobalState from "src/hooks/useGlobalState";
import Burger from "./elements/Burger";
import Close from "./elements/Close";
import Menu from "./elements/Menu";

const BurgerMenu = () => {

    const { isMenuOpen, toggleState } = useGlobalState();

    return (<div className="desktop:hidden">
        <div className="fixed top-0 right-0 p-2 z-50" onClick={toggleState}>
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