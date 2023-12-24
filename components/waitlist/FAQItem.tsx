"use client"

const FAQItem = ({ title, content, isOpen, onClick }: any) => {
    return (
      <div className="">
        <button
          aria-expanded={isOpen}
          onClick={onClick}
          className={`w-full text-left p-4 focus:outline-none ${isOpen ? 'border-b border-blue' : ''}`}
        >
          <span className="">{title}</span>
          <span className="">
            {isOpen ? '-' : '+'}
          </span>
        </button>
        <div
          className={` opacity-0 max-h-0 overflow-hidden transition-all duration-200 ease-linear ${
            isOpen ? 'opacity-100 max-h-[9em]' : ''
          }`}
        >
          <p className="text-base font-normal mt-4">{content}</p>
        </div>
      </div>
    );
  };
  export default FAQItem;