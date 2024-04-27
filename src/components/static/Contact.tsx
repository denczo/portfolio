const Contact = () => {
  return (
    <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 desktop:w-1/3 mobile:w-full mobile:px-4 mobile:max-w-3xl">
      <div className="px-2 mx-auto">
        <form action="https://formsubmit.co/45c9b05f4e46cacc0c6ca38c41d83f88" className="space-y-8" method="POST">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your email</label>
            <input type="email" id="email" name="email" required className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="your@mail.com" />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Subject</label>
            <input type="text" id="subject" name="subject" required className="block p-3 w-full text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Describe your subject" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-400">Your message</label>
            <textarea id="message" name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-800   bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 focus:outline-none scale-100 hover:scale-110 transition-transform">Send message</button>
        </form>
      </div>
    </section>)
}

export default Contact;