import React from 'react';

const faqData = [
  {
    question: "What services does tifi.tv offer?",
    answer: "Tifi.tv offers a wide range of services, including video editing, content creation, motion graphics, color grading, animation, and more. Our goal is to bring your creative vision to life through visual storytelling."
  },
];

function FAQ() {
  return (
    <div className="py-20">
      <h2 className="w-full text-3xl md:text-4xl text-center mb-4">FAQ</h2>
      <section className="faq grid grid-cols-1 md:grid-cols-2 gap-4 p-6 lg:w-[80%] lg:mx-auto">
        {faqData.map(({ question, answer }, index) => (
          <div key={index} className="p-4 bg-[#F2F4F7] rounded">
            <details>
              <summary className="font-semibold cursor-pointer relative flex items-center">
                {question}
                <span className="plus-icon absolute right-0 bg-gray-300 rounded p-1 px-3 text-black text-center align-items-center">+</span>
                <span className="minus-icon absolute right-0 bg-[#ff601f] rounded p-1 px-3 text-white text-center hidden">-</span>
              </summary>
              <p className="mt-2">{answer}</p>
            </details>
          </div>
        ))}
      </section>
    </div>
  );
}

export default FAQ;
