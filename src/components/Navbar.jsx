import { links } from "../data/links";

export default function Navbar({ active }) {
  return (
    <nav
      className={` ${
        active ? "" : "hidden"
      } absolute py-5  bg-white bg-opacity-75 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full
      lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none
      `}
    >
      <ul className="block lg:flex">
        {links.map((link) => (
          <li className="group">
            <a
              href={link.href}
              className="transition lg:font-bold duration-300 ease-in-out text-base text-dark py-2 mx-8 flex lg:mx-4 lg:text-[12px]  group-hover:text-primary "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
