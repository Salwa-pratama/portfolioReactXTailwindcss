import { useState, useEffect } from "react";

export default function DarkBtn() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <li className=" flex items-center justify-center mt-2 lg:mt-0 lg:justify-normal ml-10">
      <div className="flex">
        <span className="mr-2 text-sm text-primary font-bold">Light</span>
        <input
          type="checkbox"
          onClick={() => setActive(!active)}
          className="hidden"
          id="dark-toggle"
        />
        <label htmlFor="dark-toggle">
          <div
            className={`flex h-5 w-9 cursor-pointer items-center ${active ? "bg-primary" : "bg-slate-500"} rounded-full p-1`}
          >
            <div
              className={`toggle-circle h-4 w-4 rounded-full ${active ? "translate-x-3" : "mr-auto"} transition duration-500 ease-in-out  bg-white`}
            ></div>
          </div>
        </label>
        <span className="ml-2 text-sm text-primary font-bold">Dark</span>
      </div>
    </li>
  );
}
