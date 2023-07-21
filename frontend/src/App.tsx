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

  return (<div className="scroll-auto	h-screen overflow-y-auto">
    <Burger />
    <MobileMenu />
    <Header />
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