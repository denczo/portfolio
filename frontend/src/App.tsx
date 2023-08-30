import About from './structure/About';
import Contact from './structure/Contact';
import Footer from './structure/Footer';
import Hero from './structure/Hero';
import Projects from './structure/Projects';
import Work from './structure/Work';
import MobileMenu from './elements/navigation/menu/MobileMenu';
import Burger from './elements/navigation/menu/Burger';
import DesktopMenu from './elements/navigation/menu/DesktopMenu';

function App() {

  return (<div className="scroll-auto	h-screen overflow-y-auto">
    <Burger />
    <MobileMenu />
    <DesktopMenu />
    <Hero />
    <About />
    <Projects />
    <Work />
    <Contact />
    <Footer />
  </div>
  );
}

export default App;