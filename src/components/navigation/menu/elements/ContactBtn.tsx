import { useEffect } from "react";
import { useGlobalState } from "../../../../contexts/GlobalStateContext";

const ContactBtn = ({title}:{title:string}) => {
    
    const { isModalOpen, isMenuOpen, toggleModal, exitMenu } = useGlobalState();

    const handleClick = () => {
        exitMenu();
        toggleModal();
    }

    useEffect(() => {
        if (isMenuOpen || isModalOpen) {
            document.body.classList.add("overflow-y-hidden")
        } else {
            document.body.classList.remove("overflow-y-hidden")
        }
    }, [isMenuOpen, isModalOpen]);
    
    return (<button className='flex items-center cursor-pointer'>
        {/* <a href="https://formsubmit.co/el/gewusa"> */}
        <div aria-label={title} className={"transition ease-in-out duration-300 text-center text-2xl border-2 border-white rounded-3xl px-3 pb-1 hover:bg-white hover:text-black"} onClick={handleClick} >{title}</div>
        {/* </a> */}
        </button>
    );
}

export default ContactBtn;