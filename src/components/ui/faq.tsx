"use client";

import React, { useState } from "react";
import {
  type FAQSectionContent,
  usaDigitalMarketingAgencyContent,
} from "@/content/digital-marketing-agency";

type FAQSectionProps = {
  content?: FAQSectionContent;
};

const FAQSection: React.FC<FAQSectionProps> = ({
  content = usaDigitalMarketingAgencyContent.faq,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-0">
          <span className="inline-flex font-inter items-center px-4 py-1.5 rounded-lg bg-[#C8FF00] text-black font-semibold text-[12px] tracking-wide">
            {content.badge}
          </span>
        </div>

        <h2 className="text-[52px] font-bold font-lexend tracking-tighter text-center mb-4">
          {content.title}
        </h2>
        <div className="space-y-0 border border-gray-200 rounded-lg">
          {content.items.map((faq, index) => (
            <div
              key={faq.question}
              className="border-b border-gray-200 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-8 px-6 text-left transition-all duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg md:text-xl font-poppins font-semibold text-black pr-8 leading-relaxed">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  <div
                    className={`transform transition-transform duration-300 ease-in-out ${
                      openIndex === index ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-8 text-black font-poppins text-base tracking-normal leading-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
