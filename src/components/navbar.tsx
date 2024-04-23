"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavItem = ({ text, href, newTab, closeMobileMenu }: any) => {
  const handleClick = () => {
    try {
      closeMobileMenu();
    } catch (err) {}
  };
  return (
    <div
      className={` p-2 h-10 cursor-pointer rounded-sm text-white hover:text-[#FF6243] hover:bg-opacity-10`}
    >
      <a
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {text}
      </a>
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/#about" },
    { text: "Contact", href: "/#roadmap" },
    { text: "Services", href: "/#services" },
  ];

  return (
    <div
      className={`${
        isMobileMenuOpen
          ? "flex-col sticky h-screen top-0 w-full "
          : "flex-row sticky"
      } flex md:justify-between items-center md:py-6 md:px-12 px-4 py-2 bg-transparent backdrop-blur-xl top-0 z-[99]`}
    >
      <div className="flex flex-row w-full justify-between">
        <div>
          <h1 className="font-bold text-white text-lg max-ssm:hidden mt-2">
          WEBFLAGS
          </h1>
        </div>
        <div className="hidden mx-auto gap-6 md:flex">
          {navItems.map((item, index) => (
            <NavItem key={index} text={item.text} href={item.href} />
          ))}
           
        </div>
        <Link href="#contactus">
            <button className="before:ease relative h-10 w-32  md:block hidden overflow-hidden bg-[#ff6243] text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-[#ff3932] before:duration-300 hover:text-white hover:sbg-[#ff3932] hover:before:h-64 hover:before:-translate-y-32 rounded-lg">
              <span className="relative z-10">Contact us</span>
            </button>
        </Link>
        <div className="hidden md:block">
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="px-4 py-2 text-sm">
            {isMobileMenuOpen ? (
              <Image
                src="/cross.svg"
                width={24}
                height={24}
                alt="menu"
              />
            ) : (
              <Image
                src="/menu-square.svg"
                width={24}
                height={24}
                alt="menu"
              />
            )}
          </button>
          
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden sticky top-0 left-0 w-full h-[screen]  backdrop-blur-sm bg-transparent">
          <div className="flex flex-col items-center mt-16 gap-5 text-lg">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                text={item.text}
                href={item.href}
                closeMobileMenu={closeMobileMenu}
              />
            ))}
          </div>
          <Link
            href="#contactus"
            target="_blank"
          >
            <button className="bg-[#FF6243] text-white rounded w-full mx-auto py-2 mt-10">
              Contact us
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
