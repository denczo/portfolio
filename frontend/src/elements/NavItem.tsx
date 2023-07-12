import { HashLink } from 'react-router-hash-link';

const NavItem = ({title}:{title:string}) => {
    const selected = "#/#"+title !== window.location.hash;
    const styling = "transition ease-in-out duration-300 hover:text-violet-400"

    return (<HashLink className={selected ? styling : styling+" font-bold text-violet-400"} smooth to={"/#"+title}>{title+window.location.hash}</HashLink>
    );
}

export default NavItem;