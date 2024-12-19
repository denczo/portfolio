'use client'

import React from 'react'
import About from '../components/layout/About';
import Footer from '../components/layout/Footer'
import Hero from '../components/layout/Hero';
import Projects from '../components/layout/Projects';
import Services from '../components/layout/Services';
import BurgerMenu from '../components/ui/navigation/menu/composites/BurgerMenu';
import Navbar from '../components/ui/navigation/menu/composites/Navbar';
import Modal from '../components/layout/Modal';

export default function Client() {
  return (<>
    <Modal />
    <BurgerMenu />
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Services />
    <Footer /></>)
}