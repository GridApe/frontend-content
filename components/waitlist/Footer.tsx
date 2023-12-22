import { footerSocialLinks } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="w-full py-10 mb-10 dark:bg-black flex justify-center">
        <div className="flex justify-between w-[95%] md:w-[85%] items-center dark:text-white">
          <Link href="mailto:info@gridape.com" className='hover:text-[#2E3192] whitespace-nowrap max-[640px]:text-sm'>Mail us at: infor@gridape.com</Link>
          <div className='flex gap-2 md:gap-5'>
            {footerSocialLinks.map((social, index) => (
              <Link key={index} href={social.link} target='_blank'>
                <Image src={social.name} width={35} height={35} alt='social icon' className='w-[25px] md:w-[35px] h-[25px] md:h-[35px]'/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;