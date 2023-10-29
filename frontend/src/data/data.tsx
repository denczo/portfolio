import frutinator from "../assets/images/MobileView.webp";
import portfolio from "../assets/images/PortfolioPage.webp";
import jblaster from "../assets/images/JBlaster.webp";
import pyblaster from "../assets/images/PyBlaster.webp";
import frem from "../assets/images/KivyDesktop.webp";
import arcreactor from "../assets/images/quarkreactor.webp";
// import raspibot from "../assets/images/RaspiBot.webp"

const data = [
    {title: "Fruitinator", image: frutinator, link: "https://github.com/denczo/fruitinator", tags: ["React","Javascript", "MobX", "SASS"], text: "An e-commerce frontend to shop for exotic fruits on desktop and mobile devices"},
    {title: "Portfolio Website", image: portfolio, link: "https://github.com/denczo/portfolio", tags: ["React","Typescript","Redux","Tailwind CSS"], text: "Portfolio single page website with mobile first design philosophy hosted on Github Pages"},
    {title: "JBlaster", image: jblaster, link: "https://github.com/denczo/jblaster", tags: ["React","Javascript","Web Audio API", "DSP"], text: "Monophonic synthesizer inspired by Korgs Kaossilator series with ADSR and Lowpass Filter"},
    {title: "PyBlaster", image: pyblaster, link: "https://github.com/denczo/pyblaster", tags: ["Python","Tkinter","Matplotlib", "PyAudio", "DSP"], text: "Monophonic synthesizer inspired by Korgs Kaossilator series with Midi, ADSR, LFO, Filter"},
    {title: "FREM", image: frem, link: "https://github.com/denczo/FREM", tags: ["Python","Kivy","Android","Buildozer"], text: "An android app to explain and demonstrate the concepts of frequency modulation for dsp"},
    {title: "Arc Reactor", image: arcreactor, link: "https://github.com/denczo/arcreactor", tags: ["C","Blender","Cura"], text: "Illuminated Arc Reactor controlled by an Arduino Nano. It was modeled in Blender and 3d printed."},
    // {title: "Raspberry Bot", image: raspibot, link: "https://github.com/denczo/RaspberryBot", tags: ["Python","Machine Learning","Raspberry Pi"], text: "A robot that uses reinforcement learning to find and follow a black line."},
]
export default data;


