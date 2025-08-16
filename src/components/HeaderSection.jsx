import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import LogoImg from "../../public/assets/Logo/logo2.png";
export default function HeaderSection() {
  const [active, setActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`bg-white dark:bg-dark dark:bg-opacity-45 bg-opacity-45 top-0 left-0 w-full flex items-center z-20 transition duration-300 ease-in-out  h-[50px] ${
        isScrolled ? "navbar-fixed" : "absolute"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className={`px-2 ${isScrolled ? "lg:ml-10" : "ml-0"}`}>
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6 "
            >
              <img width={40} src={LogoImg} alt="" />
            </a>
          </div>

          <div className="flex items-center px-2">
            <button
              onClick={() => setActive(!active)}
              id="hamberger-menu"
              type="button"
              name="hamburger"
              className={`block absolute right-4 lg:hidden ${
                active ? "hamburger-active" : ""
              }`}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left dark:bg-white"></span>
              <span className="hamburger-line transition duration-300 ease-in-out dark:bg-white"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left dark:bg-white"></span>
            </button>
            <Navbar active={active} />
          </div>
        </div>
      </div>
    </header>
  );
}

// Lanjut nanti bikin navbar
