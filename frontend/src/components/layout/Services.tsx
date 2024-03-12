import MailTo from "../navigation/links/MailTo";
import Service from "../static/Service";

const Services = () => {
  return (<div id="Services" className="flex text-white desktop:h-full min-h-full flex-col items-center bg-slate-800">
            <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
            <p className="flex text-4xl mb-8 mt-8 justify-center text-white">Services</p>

            <div className="flex desktop:flex-row mobile:flex-col mobile: items-center flex-grow justify-center text-center">
              <Service hl="Single Page Applications" desc="Development of responsive web apps such as portfolios, landingpages and dashboards" img="/icons/SPA_Icon.svg"/>
              <Service hl="API Integration" desc="Seamless integration for dynamic content delivery" img="/icons/API_Icon.svg"/>
              <Service hl="SEO Optimization" desc="Enhancing website visibility and rankings" img="/icons/SEO_Icon.svg"/>
            </div>
            
              {/* <p className="desktop:text-[72px] mobile:text-[40px] font-bold ">Get in Touch</p> */}
              {/* <p className="desktop:text-[30px] text-center mobile:text-[20px] max-w-2xl px-4">Any questions, suggestions or business related inquiries, I’d love to hear from you!</p> */}
              {/* <MailTo label="✉️ d.czogalla@outlook.com" mailto="mailto:no-reply@example.com"/> */}
  </div>);
}

export default Services;