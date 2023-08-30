import { useDispatch } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import { actions } from '../../../Store';

const MenuItem = ({title}:{title:string}) => {
    const selected = "#"+title !== window.location.hash;
    const styling = "transition ease-in-out duration-300 hover:text-violet-400"
    const dispatch = useDispatch();
 
    return (<HashLink aria-label={title} className={selected ? styling : styling+" font-bold text-violet-400"} onClick={() => dispatch(actions.close())}smooth to={"/#"+title}>{title}</HashLink>
    );
}

export default MenuItem;