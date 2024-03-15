'use client'

import React from 'react'
import About from '../components/layout/About';
import Footer from '../components/layout/Footer'
import Hero from '../components/layout/Hero';
import Projects from '../components/layout/Projects';
import Services from '../components/layout/Services';
import BurgerMenu from '../components/navigation/menu/BurgerMenu';
import Navbar from '../components/navigation/menu/Navbar';
import { GlobalStateProvider } from '../contexts/GlobalStateContext';
import Modal from '../components/layout/Modal';

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