import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  // ini untuk scroll down navbar
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="navbar py-10 flex items-center justify-between px-2 md:px-2">
      <div className="logo flex items-center">
        <h1 className="text-6xl font-bold p-1 md:bg-transparent md:text-black md:ml-0 ml-0">
          Portofolio
        </h1>
      </div>
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 md:bg-transparent bg-gray-200 p-4 rounded-br-2xl rounded-bl-2xl transition-all md:transition-none z-40 ${
          active ? "top-0 opacity-100" : "-top-10 opacity-0"
        }`}
      >
        <li>
          <a
            href="#beranda"
            className="sm:text-2xl text-xl font-medium hover:text-cyan-700 transition cursor-pointer"
          >
            Beranda
          </a>
        </li>
        <li>
          <a
            href="#tentang"
            className="sm:text-2xl text-xl font-medium hover:text-cyan-700 transition cursor-pointer"
          >
            Tentang
          </a>
        </li>
        <li>
          <a
            href="#project"
            className="sm:text-2xl text-xl font-medium hover:text-cyan-700 transition cursor-pointer"
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#kontak"
            className="sm:text-2xl text-xl font-medium hover:text-cyan-700 transition cursor-pointer"
          >
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
