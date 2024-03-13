import MenuItem from "../navigation/menu/elements/MenuItem";
import Service from "../static/Service";

const Services = () => {
  return (<div id="Services" className="flex text-white min-h-full flex-col items-center bg-slate-800">
            <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
            <p className="flex text-4xl mb-8 mt-8 justify-center text-white font-bold">Services</p>

            <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
              <Service hl="Single Page Applications" desc="Development of responsive web apps such as portfolios, landingpages and dashboards" img="/icons/SPA_Icon.svg"/>
              <Service hl="API Integration" desc="Seamless integration into your solution for dynamic content delivery" img="/icons/API_Icon.svg"/>
              <Service hl="SEO Optimization" desc="Enhancing visibility and rankings of your web application" img="/icons/SEO_Icon.svg"/>
            </div>
            
              <p className="desktop:text-[40px] mobile:text-[24px] font-bold text-center mb-4">You have a project? Get in touch</p>
              <MenuItem title={"Contact Me"} customStyling='text-2xl border-2 border-white rounded-3xl px-3 pb-1 hover:bg-white hover:text-black'/>
  </div>);
}

export default Services;