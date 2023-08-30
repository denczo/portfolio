import { useEffect, useState } from 'react';
import './Particles.scss';


const Particles = () => {

    const [ready, setReady] = useState(false);

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

    useEffect(() => {
        const timeout = setTimeout(() => {
            setReady(true);
        }, 2000)
    }, [ready]);

    if (!ready) return null;
    return (<div className="Particles">
        {createParticles(30)}
    </div>);
}

export default Particles;