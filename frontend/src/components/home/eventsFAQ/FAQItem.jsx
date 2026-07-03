import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";
const FAQItem = ({ faq, open, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-sm overflow-hidden">
      {/* Header */}
      <button
        onClick={() => onToggle(faq.id)}
        className="
          w-full px-4 sm:px-5 py-3 sm:py-4
          flex justify-between items-center text-left bg-white
          gap-3
        "
      >
        <div className="flex items-start sm:items-center gap-3">
          <FaQuestionCircle className="text-[#f59e0b] text-base sm:text-lg mt-1 sm:mt-0" />

          <span className="font-medium text-[#1b3356] text-sm sm:text-base">
            {faq.question}
          </span>
        </div>

        <span className="text-[#1b3356]">
          {open ? <FaMinus size={14} /> : <FaPlus size={14} />}
        </span>
      </button>

      {/* Body */}
      <div
        className={`
          overflow-hidden transition-all duration-300
          ${open ? "max-h-40 px-4 sm:px-5 pb-4" : "max-h-0 px-4 sm:px-5"}
        `}
      >
        <p className="text-gray-600 text-sm leading-6 sm:leading-7">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
