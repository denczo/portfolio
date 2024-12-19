import { useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import useContactForm from "src/hooks/useContactForm";
import SubmitButton from "./SubmitButton";

export default function ContactForm() {
  const captchaRef = useRef<HCaptcha | null>(null);

  const {
    formData,
    success,
    error,
    loading,
    handleChange,
    handleSubmit,
    setToken,
  } = useContactForm();

  function onLoad() {
    captchaRef?.current?.execute();
  };

  return (
    <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 desktop:w-1/3 ultra:w-1/4 mobile:w-full mobile:px-4 mobile:max-w-3xl">
      <div className="px-2 mx-auto">
        <div className="flex justify-center w-full">
          <img className="animate-scalepulse h-1/4 w-1/4 pb-4" src="/images/pigeon.webp" alt="Carrier Pigeon" />
        </div>

        {success ? <div className="text-xl flex justify-center items-center h-16">{<span className="animate-fadeIn">{"Message sent!"}</span>}</div> :
          <form name="contact" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white ">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="your@mail.com" />
            </div>
            <div>
              <label htmlFor="name" className="block my-2 text-sm font-medium text-white ">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="block p-3 w-full text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="message" className="block my-2 text-sm font-medium text-white">Message</label>
              <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} required className="block p-2.5 w-full text-sm text-gray-800 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Your message..."></textarea>
            </div>
            <div className="pt-4 animate-fadeIn h-24 ">
              <HCaptcha
                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY || ""}
                onLoad={() => onLoad}
                onVerify={(token) => setToken(token)}
                onExpire={() => setToken(null)}
                ref={captchaRef}
              />
            </div>
            <SubmitButton loading={loading} />
            {error && <div className="text-xl flex justify-center items-center h-16">{error}</div>}
          </form>
        }
      </div>
    </section>
  )
}