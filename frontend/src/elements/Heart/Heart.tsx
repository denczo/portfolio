import './Heart.sass';

const Heart = () => {
    return (<div className="container">
        <div className="heart" onClick={(e) => {e.stopPropagation()}}></div></div>);
}

export default Heart;