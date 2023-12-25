"use client"
import React, { useEffect, useState } from 'react';
import FAQItem from './FAQItem';
import { faqData } from '@/data/data';
import AOS from 'aos';
import "aos/dist/aos.css"



const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="container mt-10 mb-5 dark:bg-black flex justify-center" data-aos="fade-left" id='faq'>
      <div className="mt-10 w-[95%] md:w-[60%] dark:text-white relative">
        <h2 className="text-center mb-10">Frequently Asked Questions</h2>
        <h6 className="font-bold text-[#2E3192] text-center md:text-left">What is GridApe?</h6>
        <div className="border-b border-b-[#00C165]">
        <p className="text-base font-normal py-4">
        GridApe is at the forefront of revolutionizing email marketing. 
        Our mission is to empower businesses to create impactful email campaigns effortlessly.
        </p>
        </div>
        <div className="">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={index === openIndex}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
