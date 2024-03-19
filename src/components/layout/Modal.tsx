import { useGlobalState } from "../../contexts/GlobalStateContext";
import Contact from "../static/Contact";
import Close from "../navigation/menu/elements/Close";

const Modal = () => {

    const { isModalOpen, toggleModal } = useGlobalState();

    return (<>
        {isModalOpen ? <>
            <div className="fixed top-0 right-0 p-2 z-[101]" onClick={toggleModal}><Close /></div> 
            <div className="fixed text-white text-4xl  bg-black backdrop-blur-md bg-opacity-40 w-full h-screen min-h-screen desktop:mt-14 z-[100]">
            <Contact />
            </div></> : <></>}
        </>)
}

export default Modal;