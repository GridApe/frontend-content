"use client"

const FAQItem = ({ title, content, isOpen, onClick }: any) => {
    return (
      <div className="border-b border-b-[#00C165]">
        <button
          aria-expanded={isOpen}
          onClick={onClick}
          className={`flex justify-between w-full text-left py-4 focus:outline-none ${isOpen ? 'border-b' : ''}`}
        >
          <span className="">{title}</span>
          <span className="icon text-lg font-extrabold pr-3">
            {isOpen ? '-' : '+'}
          </span>
        </button>
        <div
          className={`accordion-content opacity-0 max-h-0 overflow-hidden transition-all duration-200 ease-linear ${
            isOpen ? 'opacity-100 max-h-[9em]' : ''
          }`}
        >
          <p className="text-base font-normal mt-4">{content}</p>
        </div>
      </div>
    );
  };
  export default FAQItem;