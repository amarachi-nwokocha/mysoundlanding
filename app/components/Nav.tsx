"use client";
// import { a } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="flex flex-row justify-between items-center p-2 md:px-32 bg-black text-white sticky shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <Link href="/">
          <Image src="/brl.png" alt="" width={100} height={100} />
          </Link>
        </div>
        <nav className="hidden md:flex gap-5 font-medium p-1 cursor-pointer">
          <Link
            href="#"
            className="text-[#d4ff03] text-[20px] hover:text-white transition-all"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-[#d4ff03] text-[20px] hover:text-white transition-all"
          >
            Objectives
          </Link>
          <Link
            href="#"
            className="text-[#d4ff03] text-[20px] hover:text-white transition-all"
          >
            Values
          </Link>
          <Link
            href="#"
            className="text-[#d4ff03] text-[20px] hover:text-white transition-all"
          >
            Team
          </Link>
        </nav>
        <div className="flex md:hidden cursor-pointer" onClick={handleNav}>
          <div className="p-2">
            <AiOutlineMenu size={30} />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 text-base">
          <Link
            href="/create"
            className={`bg-[#313133] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity`}
          >
            Sign up
          </Link>
          <Link
            href="/signIn"
            className={`bg-[#CCFF00] text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity`}
          >
            Sign in
          </Link>
        </div>
      </div>
      <div
        className={`${
          nav ? "translate-y-[-100%]" : "hidden"
        } md:hidden flex flex-col absolute bg-[#CCFF00] left-0 top-0 text-center text-black text-[20px] hover:text-yellow pb-4 gap-8 w-full h-fit transition-transform duration-300 font-semibold`}
      >
        {/* mobile nav */}
        <Link
          href="# "
          className="text-black text-[20px] hover:text-yellow transition-all "
        >
          About Us
        </Link>
        <Link
          href="#"
          className="text-black text-[20px] hover:text-yellow transition-all "
        >
          Our Objectives
        </Link>
        <Link
          href="#"
          className="text-black text-[20px] hover:text-yellow transition-all "
        >
          Our Values
        </Link>
        <Link
          href="#"
          className="text-black text-[20px] hover:text-yellow transition-all"
        >
          Our Team
        </Link>
        <Link
          href="# "
          className="text-black text-[20px] hover:text-yellow transition-all"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
