import { useGlobalState } from "../../../../contexts/GlobalStateContext";

const ContactBtn = ({title}:{title:string}) => {
    
    const { toggleModal } = useGlobalState()

    return (<div className='flex items-center'>
        <a aria-label={title} className={"transition ease-in-out duration-300 text-center border-2 border-white rounded-3xl px-3 pb-1 hover:bg-white hover:text-black"} onClick={toggleModal} >{title}</a>
        </div>
    );
}

export default ContactBtn;