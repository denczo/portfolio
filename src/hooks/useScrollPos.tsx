import { useState, useEffect } from 'react';

const UseScrollPos = () => {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const atTop = window.scrollY <= 200
            if(atTop !== isAtTop){
                setIsAtTop(window.scrollY <= 200);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isAtTop]);

    return isAtTop;
};

export default UseScrollPos;