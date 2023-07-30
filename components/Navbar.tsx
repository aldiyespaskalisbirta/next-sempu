"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Budaya", to: "/culture" },
  { name: "Gallery Foto", to: "/gallery" },
  { name: "Kontak", to: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Menambahkan event listener saat komponen dipasang (mounted)
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen dilepas (unmounted)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "bg-[#577865]" : "bg-transparent"
      } opacity-80 px-4 md:px-24  fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out`}
    >
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto py-2 md:py-4">
        <Link href="/" className="flex items-center">
          <span
            className={`${
              scrolled ? "text-white" : "text-black"
            } font-bold text-xl`}
          >
            SEMPU
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className={`${
            scrolled ? "text-white" : "text-black"
          } inline-flex items-center p-2 w-10 h-10 justify-center text-md  rounded-lg md:hidden hover:bg-white hover:text-black focus:ring-2 focus:ring-white`}
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isMenuOpen ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.to}
                  className={`${
                    scrolled ? "text-gray-300 font-black" : "text-gray-950"
                  } hover:text-white  rounded-md px-3 py-2 text-sm font-medium transition-colors duration-500`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <div className="flex justify-center items-center">
              <Link href="/login">
                <h1
                  className={`${
                    scrolled ? "text-gray-300" : "text-gray-950"
                  } px-3 ring-1 rounded-md ring-gray-950`}
                >
                  LOGIN
                </h1>
              </Link>
            </div>
          </ul>
        </div>
      </div>
      {/* {isLoggedIn && (
        <div className="bg-green-500 text-white fixed bottom-4 right-4 p-2 rounded-md shadow-lg">
          Admin Mode
        </div>
      )} */}
    </nav>
  );
}
