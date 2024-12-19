import ContactBtn from "../ui/navigation/menu/elements/ContactBtn";
import Service from "../ui/content/Service";

export default function Services() {
  return (<div id="Services" className="flex h-fit text-white flex-col items-center bg-slate-800">

    <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
    <p className="text-4xl mb-8 mt-8  text-white font-bold">Services</p>
    <div className="flex desktop:flex-row mobile:flex-col flex-wrap mobile:items-center pb-8 justify-center text-center h-full">
      <Service hl="Single Page Applications" desc="Development of responsive web apps such as portfolios, landingpages and dashboards" img="/icons/SPA_Icon.svg" />
      <Service hl="API Integration" desc="Seamless integration into your solution for dynamic content delivery" img="/icons/API_Icon.svg" />
      <Service hl="SEO Optimization" desc="Enhancing visibility and rankings of your web application" img="/icons/SEO_Icon.svg" />
    </div>
    <p className="desktop:text-[40px] mobile:text-[24px] font-bold my-4 text-center">You have a project? Get in Touch</p>
    <ContactBtn title={"Contact Me"} />
  </div>);
}