'use client'

import React from 'react'
import About from 'src/components/layout/About';
import Footer from 'src/components/layout/Footer'
import Hero from 'src/components/layout/Hero';
import Projects from 'src/components/layout/Projects';
import Services from 'src/components/layout/Services';
import BurgerMenu from 'src/components/navigation/menu/BurgerMenu';
import Navbar from 'src/components/navigation/menu/Navbar';
import { GlobalStateProvider } from '../contexts/GlobalStateContext';
import Modal from 'src/components/layout/Modal';

export function Client() {
  return (
    <GlobalStateProvider>
      <Modal />
      <BurgerMenu />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Footer />
    </GlobalStateProvider>)
}

export default Client;