import { useGlobalState } from "../../contexts/GlobalStateContext";
import Contact from "../static/Contact";
import Close from "../navigation/menu/elements/Close";
import AnimatedBlurryBg from "../animation/AnimatedBlurryBg";
import { AnimatePresence } from "framer-motion";

const Modal = () => {

    const { isModalOpen, toggleModal } = useGlobalState();

    return (<>
        <AnimatePresence>
        {isModalOpen && <>
            <AnimatedBlurryBg isVisible={isModalOpen}>
                <div className="fixed top-0 right-0 p-2 z-[101] mt-0 text-base" onClick={toggleModal}><Close /></div>
                <Contact />
            </AnimatedBlurryBg></>}
        </AnimatePresence>
        </>)
}

export default Modal;