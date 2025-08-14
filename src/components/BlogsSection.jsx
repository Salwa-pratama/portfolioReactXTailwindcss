import { blogsImg } from "../data/links";

export default function BlogsSection() {
  return (
    <section id="blogs" className="pt-36 pb-16 bg-white">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Blogs</h4>
            <h2 className="font-bold  text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Tulisan Terkini
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              debitis explicabo maxime adipisci commodi asperiores!
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {/* blogs */}
          {blogsImg.map((blog) => (
            <div className="mb-12 p-4 md:w-1/2  hover:scale-[1.1] cursor-pointer transition duration-300 ease-in-out ">
              <div className=" shadow-md overflow-hidden">
                <img src={blog.img} alt="" width={"w-full"} />
              </div>
              <div className="bg-white p-4 shadow-lg">
                <h3 className="font-semibold text-xl text-dark mt-5 mb-3 hover:text-primary">
                  {blog.tittle}
                </h3>
                <p className="font-medium text-base text-secondary ">
                  {blog.description}
                </p>
                <a href="#" className="underline  text-blue-500">
                  Read More{" "}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
