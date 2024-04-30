export default function Contact() {
 
  return (
    <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 desktop:w-1/3 mobile:w-full mobile:px-4 mobile:max-w-3xl">
      <div className="px-2 mx-auto">
        <form data-netlify="true" name="contact" method="POST">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white ">Your email</label>
            <input type="email" id="email" name="email" required className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="your@mail.com" />
          </div>
          <div>
            <label htmlFor="subject" className="block my-2 text-sm font-medium text-white ">Subject</label>
            <input type="text" id="subject" name="subject" required className="block p-3 w-full text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Describe your subject" />
          </div>
          <div>
            <label htmlFor="message" className="block my-2 text-sm font-medium text-white">Your message</label>
            <textarea id="message" name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-800   bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 mt-4 px-5 text-sm font-medium text-center text-white rounded-lg border-white border-solid border-2 hover:bg-white hover:text-black transition-colors duration-300">Send message</button>
        </form>
      </div>
    </section>
  )
}