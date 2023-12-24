"use client"
import React from 'react'
import { HambergerMenu } from "iconsax-react";
import { waitlistLinks } from '@/data/data';
import Link from 'next/link';
import { MobileNavProps } from '@/interfaces/types';


const MobileNav: React.FC<MobileNavProps> = ({ isOpen, handleClick }) => {
    return (
        <div className='relative md:hidden'>
            <div className={`${isOpen ? 'bg-[#2E3192] text-white' : 'bg-white text-black'} rounded-[10px]  shadow-md p-2 cursor-pointer`}>
                <HambergerMenu size="32" onClick={handleClick} />
            </div>
            {isOpen ?
                <nav className='bg-[#F6F7FF] z-10 absolute right-0 shadow-md px-5 py-8 rounded-[10px] transition-all duration-300 mt-2'>
                    <ul className="flex flex-col text-sm whitespace-nowrap">
                        {waitlistLinks.map((link, index) => (
                            <li key={index} className="cursor-pointer transition duration-300 delay-100 border-[#F6F7FF] hover:text-white hover:bg-[#2E3192] btn-xs justify-start py-3">
                                <Link href={link.link} className='text-left' prefetch>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                : ""}
        </div>
    )
}

export default MobileNav