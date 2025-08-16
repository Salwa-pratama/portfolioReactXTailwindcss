import { links } from "../data/links";
import DarkBtn from "./DarkBtn";
export default function Navbar({ active }) {
  return (
    <nav
      className={` ${
        active ? "" : "hidden"
      } absolute py-5   bg-opacity-75 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full
      lg:block lg:static lg:bg-transparent lg:dark:bg-transparent dark:bg-dark dark:bg-opacity-75 lg:max-w-full lg:shadow-none lg:rounded-none   bg-white transition duration-300  lg:h-[50px] lg:mr-10 pb-14
      `}
    >
      <ul className="block lg:flex">
        {links.map((link) => (
          <li className="group">
            <a
              href={link.href}
              className="transition lg:font-bold duration-300 ease-in-out text-base text-dark py-2 mx-8 flex lg:mx-4 lg:text-[12px]  group-hover:text-primary  dark:text-white "
            >
              {link.label}
            </a>
          </li>
        ))}

        <DarkBtn />
      </ul>
    </nav>
  );
}
