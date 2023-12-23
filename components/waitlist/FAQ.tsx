"use client"
import React, { useState } from 'react';

const faqData = [
    {
        question: "What services does tifi.tv offer?",
        answer: "Tifi.tv offers a wide range of services, including video editing, content creation, motion graphics, color grading, animation, and more. Our goal is to bring your creative vision to life through visual storytelling."
    },
    {
        question: "What services does tifi.tv offer?",
        answer: "Tifi.tv offers a wide range of services, including video editing, content creation, motion graphics, color grading, animation, and more. Our goal is to bring your creative vision to life through visual storytelling."
    },
    {
        question: "What services does tifi.tv offer?",
        answer: "Tifi.tv offers a wide range of services, including video editing, content creation, motion graphics, color grading, animation, and more. Our goal is to bring your creative vision to life through visual storytelling."
    },
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = ({ index }: any) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="w-full flex justify-center mt-20">
            <div className="w-[95%] md:w-[85%] dark:text-white">
            <h2 className="w-full text-3xl md:text-4xl text-center mb-4">Frequently Asked Questions</h2>
            </div>
        </div>
    );
}

export default FAQ;