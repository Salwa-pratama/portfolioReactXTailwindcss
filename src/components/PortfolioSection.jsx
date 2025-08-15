import { projectImg } from "../data/links";
export default function PortfolioSection() {
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-slate-200 ">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portfolio
            </h4>
            <h2 className="font-bold  text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Projek Terbaru
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              debitis explicabo maxime adipisci commodi asperiores!
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {/* Project */}
          {projectImg.map((project) => (
            <div className="mb-12 p-4 md:w-1/2  hover:scale-[1.1] cursor-pointer transition duration-300 ease-in-out ">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={project.img} alt="" width={"w-full"} />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3 p-4">
                {project.tittle}
              </h3>
              <p className="font-medium text-base text-secondary p-4">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
