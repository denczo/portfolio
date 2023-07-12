const Burger = ({ open, setOpen }: { open: boolean, setOpen: any }) => {
    return (<div className="absolute right-5 top-5 z-50" onClick={() => {setOpen(!open); console.log(window.location.hash)}}>
        <div className="space-y-2 mx-4 z-50">
            <div className="w-8 h-0.5 bg-white animate-pulse"></div>
            <div className="w-8 h-0.5 bg-white animate-pulse"></div>
            <div className="w-8 h-0.5 bg-white animate-pulse"></div>
        </div>
    </div>);
}

export default Burger;