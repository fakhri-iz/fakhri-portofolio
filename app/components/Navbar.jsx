"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    }
  }, []);

  return (
    <>
      {/* Background Header */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        {/* Logo */}
        <a href="#">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer"
          />
        </a>

        {/* Menu Desktop */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-6 py-2 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:bg-transparent dark:border dark:border-white/50"
          }`}
        >
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact
            </a>
          </li>
        </ul>

        {/* Dark Mode & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Button */}
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Theme Toggle"
              className="w-6"
            />
          </button>

          {/* Contact Button (Desktop) */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-6 py-2 border border-gray-500 rounded-full font-Ovo dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow Icon"
              className="w-3"
            />
          </a>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="block md:hidden ml-3"
            onClick={() => setIsMenuOpen(true)}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu Icon"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-64 h-screen bg-rose-50 dark:bg-darkHover dark:text-white z-50 shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
        >
          <button
            className="absolute top-6 right-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close Menu"
              className="w-5"
            />
          </button>

          <ul className="flex flex-col gap-6 mt-20 px-10">
            <li>
              <a href="#top" className="font-Ovo">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-Ovo"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="font-Ovo"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="font-Ovo"
                onClick={() => setIsMenuOpen(false)}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-Ovo"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
