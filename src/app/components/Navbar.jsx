"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [hash, setHash] = useState("");

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Set the initial hash value
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const isActive = (href) => {
    const [base, fragment] = href.split("#");
    if (fragment) {
      return pathname === base && hash === `#${fragment}`;
    }
    return pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#FFFBFA] bg-opacity-100 md:bg-opacity-70">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-12 p-2">
        <Link href={"/"} className="text-[#574F4A] poppins font-semibold tracking-wide">
          melaniequek
        </Link>
        <div className="block md:hidden">
          {navbarOpen ? (
            <button
              onClick={toggleNavbar}
              className="flex items-center px-3 py-2 text-[#574F4A] hover:text-opacity-70">
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={toggleNavbar}
              className="flex items-center px-3 py-2 text-[#574F4A] hover:text-opacity-70">
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex gap-4 p-4 md:p-0 flex-row items-center">
            <li>
              <Link
                href={"/#works"}
                className={`inline-block border-b-2 ${
                  isActive("/#works") ? "border-[#574F4A70] text-[#574F4A70]" : "border-transparent text-[#574F4A]"
                } rounded-t-lg hover:border-[#574F4A70] hover:text-opacity-70 font-bold py-2 pl-3 pr-4 nav_link`}>
                Works
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className={`inline-block border-b-2 ${
                  isActive("/about") ? "border-[#574F4A70] text-[#574F4A70]" : "border-transparent text-[#574F4A]"
                } rounded-t-lg hover:border-[#574F4A70] hover:text-opacity-70 font-bold py-2 pl-3 pr-4 nav_link`}>
                About Me
              </Link>
            </li>
            <li>
              <Link
                href={"/Melanie Quek_Resume.pdf"}
                target="_blank"
                className="text-[#574F4A] hover:text-opacity-70 font-bold block py-2 pl-4 pr-4 border-2 border-[#574F4A] hover:border-[#574F4A70] rounded-full nav_link">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  );
};

export default Navbar;
