import { useDispatch, useSelector } from "react-redux";
import { AppState, actions } from "../../../Store";

const Burger = () => {

    const isOpen = useSelector((state: AppState) => state.isOpen);
    const dispatch = useDispatch();
  
    return (<div className="absolute right-5 top-5 z-50" onClick={() => dispatch(actions.toggle(!isOpen))}>
        <div className="space-y-2 mx-4 z-50">
            <div className="w-8 h-0.5 bg-white animate-pulse"></div>
            <div className="w-8 h-0.5 bg-white animate-pulse"></div>
            <div className="w-8 h-0.5 bg-white animate-pulse"></div>
        </div>
    </div>);
}

export default Burger;