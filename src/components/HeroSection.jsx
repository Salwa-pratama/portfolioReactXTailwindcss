import heroImg from "../../public/assets/noName.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-36 dark:bg-dark transition duration-300 ease-in-out "
    >
      <div className="container">
        <div className="flex flex-wrap ">
          {/* Hero Information */}
          <div className="w-full self-center px-4 lg:w-2/3 ">
            <h1 className="text-base font-semibold text-primary md:text-xl ">
              Hey All👋, I'm{" "}
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white">
                Ananda Salwa P.{" "}
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
              FullStack Dev & <span className="text-dark">Musician</span>
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed  text-justify lg:w-[500px]">
              Saya adalah{" "}
              <span className="text-dark dark:text-white transition duration-300">
                software engineer
              </span>{" "}
              yang ramah dan ganteng, dan saya sangat gemar bermain gitar dan
              bernyanyi. saya juga seorang olahragawan, saya suka berlari
              mengejar{" "}
              <span className="text-dark dark:text-white transition duration-300">
                cita-cita{" "}
              </span>{" "}
              dan setelah itu berlari mengejar{" "}
              <span className="text-dark dark:text-white transition duration-300">
                cinta!
              </span>
            </p>
            <a
              href="#"
              className="text-base bg-primary font-semibold text-white py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Hubungi Saya
            </a>
          </div>
          {/* Hero Image */}
          <div className="w-full self-end px-4 relative lg:w-1/3">
            <div className="mt-10 lg:-mt-28 lg:left-44">
              <img
                width={400}
                height={400}
                src={heroImg}
                alt="Ananda Salwa Pratama"
                className="max-w-full mx-auto lg:ml-auto z-10 relative"
              />
              <span className="absolute -bottom-20  left-1/2 -translate-x-1/2 md:scale-100 ">
                <svg
                  width={350}
                  height={400}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#DC2626"
                    d="M30.4,-53.9C36.8,-48.9,37.7,-35.6,42.6,-25.2C47.5,-14.8,56.4,-7.4,56.6,0.1C56.8,7.6,48.2,15.2,40.3,20.5C32.5,25.8,25.3,28.7,18.8,29.2C12.2,29.7,6.1,27.8,-2.3,31.8C-10.7,35.8,-21.4,45.7,-27.5,44.9C-33.6,44.1,-35.1,32.6,-40.5,23.4C-46,14.1,-55.2,7.1,-57.9,-1.6C-60.6,-10.2,-56.8,-20.4,-50.4,-28C-44.1,-35.7,-35.4,-41,-26.6,-44.5C-17.8,-48.1,-8.9,-50,1.5,-52.7C12,-55.4,24,-58.8,30.4,-53.9Z"
                    transform="translate(100 100) scale(1.5)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
