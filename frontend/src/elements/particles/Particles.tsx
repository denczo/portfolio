import './Particles.scss';


const Particles = () => {

    const createParticles = (amount: number) => {
        const particles = [];
        for (let i = 0; i < amount; i++) {
            particles.push(
                <div className="circle-container" key={i}>
                    <div className="circle"></div>
                </div>)
        }
        return particles;
    }

    return (<div className="Particles">
        {createParticles(20)}
    </div>);
}

export default Particles;