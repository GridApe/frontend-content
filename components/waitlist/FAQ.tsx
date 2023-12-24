"use client"
import React, { useState } from 'react';
import FAQItem from './FAQItem';
import { faqData } from '@/data/data';



const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <div className="container mt-10 dark:bg-black flex justify-center">
    <div className="mt-10 w-[95%] md:w-[60%] dark:text-white relative">
      <h2 className="text-center">Frequently Asked Questions</h2>
      <h6 className="font-bold text-[#2E3192] inline">What is GridApe?</h6>
      <div className="accordion">
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
