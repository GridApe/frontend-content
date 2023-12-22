"use client"
import Image from "next/image";
import Link from "next/link";
import "../../app/globals.css";
import { waitlistLinks } from "@/data/data";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShadow, setHasShadow] = useState(false);

 
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleScroll = () => {
    const scrollThreshold = 100;
    const shouldHaveShadow = window.scrollY > scrollThreshold;

    if (shouldHaveShadow !== hasShadow) {
      setHasShadow(shouldHaveShadow);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShadow]);

  return (
    <header className={`w-full py-3 dark:bg-black flex justify-center bg-[#FFFAE9] transition-all duration-300 ${hasShadow ? 'fixed shadow-md' : ''}`}>
      <nav className="flex justify-between w-[95%] md:w-[85%] items-center dark:text-white">
        <Image src="/png/logo.png" alt="logo" width={60} height={60} loading="lazy" className="w-[60px] md:w-[80px] h-[60px] md:h-[80px]" />
        <ul className="hidden md:inline-flex items-center md:gap-x-[3rem] lg:gap-x-[8rem]">
        {waitlistLinks.map((link, index) => (
        <li key={index} className="transition duration-300 delay-100 hover:text-[#2E3192] whitespace-nowrap">
          <Link href={link.link} prefetch>
            {link.name}
          </Link>
        </li>
      ))}
        </ul>
        <div className="flex items-center gap-5 md:gap-10">
        <Link href="#" className="btn-sm bg-[#2E3192] text-white whitespace-nowrap">Join our waitlist</Link>
        <MobileNav isOpen={isOpen} handleClick={handleOpen}/>
        </div>
      </nav>
    </header>
  )
}

export default Header;