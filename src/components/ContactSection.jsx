export default function ContactSection() {
  return (
    <section
      id="contact"
      className="pt-36 pb-32 dark:bg-dark transition duration-300"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
            <h2 className="font-bold  text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
              Contact Me For Collaborations!
            </h2>
            <p className="font-medium text-md text-white md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              debitis explicabo maxime adipisci commodi asperiores!
            </p>
          </div>
        </div>

        <form>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="name"
                className="text-base font-bold text-primary"
              >
                Nama:
              </label>
              <input
                type="text"
                id="name"
                className=" mt-2 w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-1  focus:ring-primary focus:border-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="email"
                className="text-base font-bold text-primary"
              >
                Email :
              </label>
              <input
                type="email"
                id="email"
                className=" mt-2 w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-1  focus:ring-primary focus:border-1 focus:border-primary"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="message"
                className="text-base font-bold text-primary"
              >
                Message :
              </label>
              <textarea
                type="text"
                id="message"
                className=" h-32 mt-2 w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-1  focus:ring-primary focus:border-1 focus:border-primary"
              >
                {" "}
              </textarea>
            </div>
            <div className="w-full px-4">
              <button className="hover:opacity-80 hover:shadow-lg transition duration-500 text-base lg:w-[350px] block font-semibold rounded-full w-full  text-white bg-primary py-3 px-8 mx-auto">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
