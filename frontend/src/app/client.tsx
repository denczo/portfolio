'use client'
 
import React from 'react'
import About from 'src/components/layout/About';
import Contact from 'src/components/layout/Contact';
import Footer from 'src/components/layout/Footer'
import Hero from 'src/components/layout/Hero';
import Projects from 'src/components/layout/Projects';
import Work from 'src/components/layout/Work';
import DesktopMenu from 'src/components/navigation/menu/DesktopMenu';
 
 
export function Client() {
  return (
    <div className="scroll-auto	h-screen overflow-y-auto">
    {/* <Burger /> */}
    {/* <MobileMenu /> */}
    {/* <DesktopMenu /> */}
    <Hero />
    <About />
    {/* <Projects />
    <Work />
    <Contact />
    <Footer /> */}
  </div>
  )
}


export default Client;