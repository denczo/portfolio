'use client'
 
import React from 'react'
import About from 'src/components/layout/About';
import Footer from 'src/components/layout/Footer'
import Hero from 'src/components/layout/Hero';
import Projects from 'src/components/layout/Projects';
import Services from 'src/components/layout/Services';
import DesktopMenu from 'src/components/navigation/menu/DesktopMenu';
 
 
export function Client() {
  return (
    <div className="scroll-auto	h-screen overflow-y-auto">
    {/* <Burger /> */}
    {/* <MobileMenu /> */}
    {/* <DesktopMenu /> */}
    <Hero />
    <About /> 
    <Projects />
    <Services />
    <Footer /> 
  </div>
  )
}


export default Client;