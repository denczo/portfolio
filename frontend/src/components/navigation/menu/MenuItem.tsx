import { useDispatch } from 'react-redux';
// import { actions } from '../../../Store';
import Link from 'next/link';

const MenuItem = ({title}:{title:string}) => {
    const selected = "#"+title !== window.location.hash;
    const styling = "transition ease-in-out duration-300 hover:text-violet-400"
    // const dispatch = useDispatch();
 
    return (<Link aria-label={title} className={selected ? styling : styling+" font-bold text-violet-400"} onClick={undefined} href={"/#"+title}>{title}</Link>
    );
}

export default MenuItem;