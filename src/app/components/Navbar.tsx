"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div
      className={`navbar bg-base-100 px-4 ${
        !top && "shadow-lg"
      } sticky top-0 z-50 w-[100vw] flex-wrap justify-center items-center flex`}
    >
      <div className="hidden md:block flex-1 relative">
        <Link className="btn btn-ghost normal-case text-xl " href="#home">
          Portifolio.
        </Link>
      </div>
      <div className="flex-none max-w-[100%]">
        <ul className="menu menu-horizontal px-1 flex items-center gap-2 justify-center">
          <li>
            <Link href="#projects">Meus projetos recentes</Link>
          </li>
          <Link className="btn btn-primary" href="#contact">
            Quero te conhecer 😀
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
