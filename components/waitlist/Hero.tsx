"use client"
// Import necessary dependencies and components
import Image from 'next/image';
import React from 'react'

// Functional component for the Hero section
const Hero = () => {
    // TSX structure for the Hero component
    return (
        <section className='w-full py-10 mb-2 md:mb-10 dark:bg-black flex justify-center'>
            <div className="flex flex-col justify-center w-[95%] md:w-[85%] items-center  dark:text-white relative">
                <div className='heading mt-20'>
                    <h1 className='text-center whitespace-nowrap'>
                        The ultimate platform for <br />
                        <span className='text-[#2E3192]'>elevating</span> your email <br />
                        marketing game!
                    </h1>
                </div>
                <div className='heroSection hidden sm:block'>
                    <Image src="/svg/hero.svg" alt='heroImage' width={1000} height={1000} priority={true} quality={75}/>
                </div>
                <Image src="/svg/puzzle2.svg" alt='puzzle' width={50} height={50} className='absolute top-40 left-7 hidden sm:block -z-10' />               
                 <Image src="/svg/puzzle1.svg" alt='puzzle' width={50} height={50} className='absolute left-8 bottom-10 hidden sm:block -z-10' />
                <Image src="/svg/puzzle1.svg" alt='puzzle' width={50} height={50} className='absolute right-0 hidden sm:block -z-10' />
                <Image src="/svg/puzzle2.svg" alt='puzzle' width={50} height={50} className='absolute right-0 bottom-0 sm:bottom-10 sm:hidden block -z-10' />
            </div>
        </section>
    )
}

// Export the Hero component as the default export
export default Hero;
