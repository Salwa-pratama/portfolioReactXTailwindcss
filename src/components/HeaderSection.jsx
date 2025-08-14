import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function HeaderSection() {
  const [active, setActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Nilai scrollY: ", window.scrollY);
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
      className={`bg-transparent top-0 left-0 w-full flex items-center z-10 transition duration-300 ease-in-out ${
        isScrolled ? "navbar-fixed" : "absolute"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4 ">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6 "
            >
              Ananda
            </a>
          </div>

          <div className="flex items-center px-4">
            <button
              onClick={() => setActive(!active)}
              id="hamberger-menu"
              type="button"
              name="hamburger"
              className={`block absolute right-4 lg:hidden ${
                active ? "hamburger-active" : ""
              }`}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <Navbar active={active} />
          </div>
        </div>
      </div>
    </header>
  );
}

// Lanjut nanti bikin navbar
