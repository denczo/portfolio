const Burger = () => {
    return (<button aria-label="Burger Menu Button" className="relative px-6 py-6 bg-slate-200 bg-opacity-50 rounded-md">
        <div className="absolute space-y-2 z-50 -translate-y-1/2 -translate-x-1/2">
            <div className="w-8 h-1 bg-white animate-pulse"></div>
            <div className="w-8 h-1 bg-white animate-pulse"></div>
            <div className="w-8 h-1 bg-white animate-pulse"></div>
        </div>
    </button>
    )
}
export default Burger;