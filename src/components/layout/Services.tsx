import SlideIn from "../animation/SlideIn";
import ContactBtn from "../navigation/menu/elements/ContactBtn";
import Service from "../static/Service";

const Services = () => {
  return (<div id="Services" className="flex text-white min-h-full flex-col items-center bg-slate-800">
    <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
    <p className="flex text-4xl mb-8 mt-8 justify-center text-white font-bold">Services</p>
    <div className="flex desktop:flex-row mobile:flex-col mobile:items-center pb-8 flex-grow justify-around text-center">
      <SlideIn delay={0.4}>
        <Service hl="Single Page Applications" desc="Development of responsive web apps such as portfolios, landingpages and dashboards" img="/icons/SPA_Icon.svg" />
        <Service hl="API Integration" desc="Seamless integration into your solution for dynamic content delivery" img="/icons/API_Icon.svg" />
        <Service hl="SEO Optimization" desc="Enhancing visibility and rankings of your web application" img="/icons/SEO_Icon.svg" />
      </SlideIn>
    </div>
    <p className="desktop:text-[40px] mobile:text-[24px] font-bold text-center my-4">You have a project? Get in Touch</p>
    <ContactBtn title={"Contact Me"}/>
  </div>);
}

export default Services;