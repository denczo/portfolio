import SocialMedia from "../links/SocialMedia";
import Burger from "./elements/Burger";
import Close from "./elements/Close";
import Menu from "./elements/Menu";
import { useGlobalState } from "../../../contexts/GlobalStateContext";
import { useEffect } from "react";
import { motion } from "framer-motion";

const BurgerMenu = () => {
    const variants = {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 0, y: -50 },
    }
    const { isMenuOpen, toggleMenu, exitMenu } = useGlobalState();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("overflow-y-hidden")
        } else {
            document.body.classList.remove("overflow-y-hidden")
        }

        window.addEventListener('resize', exitMenu);

        return () => {
          window.removeEventListener('resize', exitMenu);
        };
    }, [isMenuOpen]);

    return (<div className="desktop:hidden">
        <div className="fixed top-0 right-0 p-2 z-50" onClick={toggleMenu}>
            {isMenuOpen ? <Close /> : <Burger />}
        </div>
        {isMenuOpen ?
            <motion.div initial="visible" animate="hidden" variants={variants} className="flex justify-between pt-20 fixed flex-col text-white text-4xl pl-5 bg-black backdrop-blur-md bg-opacity-40 w-full h-full z-40">
                <Menu />
                <SocialMedia size={42} />
            </motion.div> : <></>}
    </div>);
}

export default BurgerMenu;