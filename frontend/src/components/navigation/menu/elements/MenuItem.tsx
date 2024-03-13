import useGlobalState from 'src/hooks/useGlobalState';

const MenuItem = ({title, customStyling }:{title:string, customStyling?:string}) => {
    const { isMenuOpen, toggleState } = useGlobalState();
 
    return (<div className='flex items-center'>
        <a aria-label={title} className={"transition ease-in-out duration-300 text-center hover:text-violet-400 "+customStyling} onClick={toggleState} href={"/#"+title}>{title}</a>
        </div>
    );
}

export default MenuItem;