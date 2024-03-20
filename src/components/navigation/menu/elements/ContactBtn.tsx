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
        <div aria-label={title} className={"transition ease-in-out duration-300 text-center border-2 border-white rounded-3xl px-3 pb-1 hover:bg-white hover:text-black"} onClick={handleClick} >{title}</div>
        </button>
    );
}

export default ContactBtn;