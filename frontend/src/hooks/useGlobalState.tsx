import { useState } from 'react';

const useGlobalState = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleState = () => {
        setMenuOpen((prevState) => !prevState);
    };
    
  return { isMenuOpen, toggleState };
};

export default useGlobalState;