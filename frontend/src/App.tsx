import React from 'react';
import './App.scss';
import Header from './structure/Header';
import About from './structure/About';
import Contact from './structure/Contact';
import Footer from './structure/Footer';
import Hero from './structure/Hero';
import Projects from './structure/Projects';
import Work from './structure/Work';

function App() {
  return (<div className="scroll-auto	h-screen snap-y snap-mandatory">
    <Header />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Work />
    <Footer />
  </div>
  );
}

export default App;
