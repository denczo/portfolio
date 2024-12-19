import SocialMedia from "../../links/SocialMedia";
import Burger from "../elements/Burger";
import Close from "../elements/Close";
import Menu from "../elements/Menu";
import { useGlobalState } from "../../../../../contexts/GlobalStateContext";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedBlurryBg from "src/components/animation/AnimatedBlurryBg";

export default function BurgerMenu() {
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
    }, [isMenuOpen, exitMenu]);

    return (
        <div className="desktop:hidden">
            {!isMenuOpen && <div className="fixed top-0 right-0 p-2 z-50" onClick={toggleMenu}><Burger /></div>}
            <AnimatePresence>
                {isMenuOpen &&
                    <AnimatedBlurryBg isVisible={isMenuOpen}>
                        <div className="fixed top-0 right-0 p-2 z-[101] mt-0 text-base" onClick={toggleMenu}><Close /></div>
                        <div className="flex flex-col justify-evenly items-center h-full">
                            <Menu />
                            <SocialMedia size={42} />
                        </div>
                    </AnimatedBlurryBg>}
            </AnimatePresence>
        </div>
    );
}