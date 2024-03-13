
'use client'

import React, { createContext, useState, useContext } from 'react';
import { GlobalState } from '../app/types/types.d';


const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export const GlobalStateProvider = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(prevState => !prevState);
  };

  const value: GlobalState = {
    isMenuOpen,
    toggleMenu,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};
