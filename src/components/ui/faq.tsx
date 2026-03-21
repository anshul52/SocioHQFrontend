"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question:
        "How much does it cost to hire a digital marketing firm in Dubai?",
      answer:
        "The cost varies depending on the scope of services, campaign complexity, and agency expertise. Typically, monthly retainers range from AED 5,000 to AED 50,000+, with project-based pricing also available.",
    },
    {
      question:
        "Choosing the best digital marketing agency – how do I make this decision?",
      answer:
        "Consider factors like portfolio quality, industry experience, client testimonials, transparent pricing, strategic approach, and cultural fit. Request case studies and schedule consultations to assess their expertise.",
    },
    {
      question:
        "What services are included in your digital marketing package for Dubai businesses?",
      answer:
        "Our comprehensive packages include SEO, PPC advertising, social media management, content marketing, email campaigns, web analytics, conversion optimization, and brand strategy tailored to the Dubai market.",
    },
    {
      question: "Why should I hire a digital marketing agency in Dubai?",
      answer:
        "Dubai's competitive market requires localized expertise in multilingual campaigns, cultural nuances, regional platforms, and compliance with UAE regulations. Local agencies understand the unique digital landscape and consumer behavior.",
    },
    {
      question: "How do digital marketing strategies differ industry-wise?",
      answer:
        "Each industry has unique customer journeys, buying cycles, and platforms. B2B focuses on LinkedIn and thought leadership, retail emphasizes Instagram and influencer partnerships, while real estate leverages virtual tours and property platforms.",
    },
    {
      question:
        "Can MCS integrate my existing marketing efforts into a new digital strategy?",
      answer:
        "Absolutely. We audit your current initiatives, identify strengths and gaps, then seamlessly integrate existing campaigns with new digital channels for a cohesive, data-driven marketing ecosystem.",
    },
    {
      question: "How do agencies measure the success of digital campaigns?",
      answer:
        "Success is tracked through KPIs like ROI, conversion rates, click-through rates, engagement metrics, lead quality, customer acquisition cost, lifetime value, and attribution modeling across all touchpoints.",
    },
    {
      question: "What makes MCS's approach to digital marketing innovative?",
      answer:
        "We leverage AI-powered analytics, predictive modeling, advanced automation, cross-channel attribution, and proprietary optimization frameworks combined with creative excellence to deliver measurable results beyond industry benchmarks.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-4xl mx-auto">
        {/* FAQs Badge */}
        <div className="flex justify-center mb-0">
          <span className="inline-flex font-inter items-center px-4 py-1.5 rounded-lg bg-[#C8FF00] text-black font-semibold text-[12px] tracking-wide">
            FAQs
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[52px] font-bold font-lexend tracking-tighter text-center mb-4">
          Frequently Asked Questions
        </h2>
        {/* FAQ List */}
        <div className="space-y-0 border border-gray-200 rounded-lg">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-8 px-6 text-left  transition-all duration-200"
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

              {/* Answer - Expandable */}
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
