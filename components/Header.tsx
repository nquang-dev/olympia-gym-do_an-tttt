"use client";

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //detect scroll
      setHeaderActive(window.scrollY > 50);
    };

    //add scroll event
    window.addEventListener("scroll", handleScroll);
    //clear scroll event
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed max-w-[1920px] top-0 w-full bg-primary-200 h-[100px] transition-all z-50`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="">
          <Image src={"/assets/img/logo.png"} width={80} height={20} alt={""} />
        </Link>
        {/* MobileNav - hidden on large devices */}
        <MobileNav
          containerStyles={`${headerActive ? "top-[90px]" : "top-[124px]"}
          ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          }
          flex flex-col text-center gap-8 fixed 
        bg-primary-200 w-full left-0 text-base uppercase font-medium
         text-white transition-all xl:hidden`}
        />
        {/* desktop nav - hidden on small device */}
        <Nav containerStyles=" flex gap-4 text-white text-base uppercase font-medium hidden xl:flex" />
        {/* hide/open menu button */}
        <div className="flex items-center gap-4">
          {/* login and register buttons */}
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-accent transition-all text-base uppercase font-medium">
              Admin Login
            </button>
            {/* <button className="hover:text-accent transition-all text-base uppercase font-medium">
              Register
            </button> */}
          </div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="text-white xl:hidden"
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
