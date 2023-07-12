import { useCallback, useEffect, useState } from 'react';
import './App.scss';
import Header from './structure/Header';
import About from './structure/About';
import Contact from './structure/Contact';
import Footer from './structure/Footer';
import Hero from './structure/Hero';
import Projects from './structure/Projects';
import Work from './structure/Work';
import MobileMenu from './elements/MobileMenu';
import Burger from './elements/Burger';

function App() {
    const [open, setOpen] = useState(false)

  return (<div className="scroll-auto	h-screen overflow-y-auto">
    <Burger open={open} setOpen={setOpen}/>
    <MobileMenu open={open} />
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