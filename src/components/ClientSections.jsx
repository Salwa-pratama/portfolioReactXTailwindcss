import { clientLogo } from "../data/links";

export default function ClientSection() {
  return (
    <section id="clients" className="pt-36 pb-32 bg-slate-800 ">
      <div className="container">
        <div className="w-full px-4">
          <div className=" mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Clients</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Yang Pernah Bekerja Sama
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              debitis explicabo maxime adipisci commodi asperiores!
            </p>
          </div>
        </div>

        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            {clientLogo.map((logo) => (
              <a
                href="#"
                className="max-w-[120px] mx-4 py-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 trasition duration-500 lg:mx-6 xl:mx-8"
              >
                <img src={logo.src} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
