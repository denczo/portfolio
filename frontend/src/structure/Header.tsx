import Navbar from "../elements/Navbar";

const Header = ({setOpen} : {setOpen: any}) => {
    return (<div className="sticky top-0 bottom-0 z-50">
        <Navbar setOpen={setOpen}/>
    </div>);
}

export default Header;