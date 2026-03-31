"use client";

import Image from "next/image";
import { useState } from "react";

const INACTIVE_STEPS = [
  {
    number: "01.",
    title: "Writing",
    description:
      "We analyze your competitors' media coverage, social media presence, and messaging strategies to help you refine your own PR approach and maintain a competitive edge.",
  },
  {
    number: "02.",
    title: "Publishing",
    description:
      "Our team identifies and partners with relevant influencers who align with your brand values and target demographic. We orchestrate authentic collaborations that generate buzz, increase brand awareness, and drive conversions through trusted voices in your industry.",
  },
  {
    number: "03.",
    title: "Get Results",
    description:
      "We correlate PR activities with business outcomes, such as increased website traffic, lead generation, and sales conversions. Our team continuously optimizes your PR efforts based on these insights, ensuring you achieve the highest possible return on your investment.",
  },
] as const;

type Step = (typeof INACTIVE_STEPS)[number];

function StepItem({
  step,
  isOpen,
  onToggle,
}: {
  step: Step;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex w-full flex-col gap-6 py-6">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 text-left"
      >
        <span
          className={`w-fit shrink-0 font-inter text-[20px] leading-[150%] ${
            isOpen
              ? "font-semibold text-[#1B1D1C]"
              : "font-medium text-[#707A75]"
          }`}
        >
          {step.number}
        </span>

        <h3
          className={`font-lexend text-[26px] leading-[160%] font-semibold ${
            isOpen ? "text-[#020617]" : "text-[#707A75]"
          }`}
        >
          {step.title}
        </h3>
      </button>

      <div className="relative h-px w-full bg-black/12">
        {isOpen ? (
          <div className="absolute inset-y-0 left-0 w-[34%] bg-[#F26D0F] min-[1200px]:w-[38%]" />
        ) : null}
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="max-w-[482px] font-inter text-[16px] leading-[150%] font-medium text-[#0C0C0D]">
          {step.description}
        </p>
      </div>
    </div>
  );
}

const CraftingYourSuccess = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col min-[1200px]:px-[60px]">
        <div className="w-full bg-[linear-gradient(180deg,rgba(43,101,181,0.04)_0%,rgba(43,101,181,0.08)_100%)] px-5 py-[48px] min-[810px]:px-8 min-[810px]:py-[72px] min-[1200px]:rounded-[12px] min-[1200px]:px-[60px] min-[1200px]:pt-[80px] min-[1200px]:pb-[120px]">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 min-[810px]:gap-12 min-[1200px]:gap-20">
            <div className="flex w-full max-w-[800px] flex-col items-center gap-6">
              <h2 className="max-w-[640px] text-center font-lexend text-[22px] leading-[20px] font-bold tracking-[0] text-[#171717] min-[810px]:text-[42px] min-[810px]:leading-[116%] min-[810px]:tracking-[-2px] min-[1440px]:text-[52px]">
                Crafting Your Success Story With Top PR Agency In Dubai
              </h2>
            </div>

            <div className="w-full max-w-[1104px]">
              <div className="hidden w-full min-[1200px]:grid min-[1200px]:grid-cols-[1fr_1fr] min-[1200px]:items-start min-[1200px]:gap-16">
                <div className="relative h-[484px] w-full overflow-hidden p-[10px]">
                  <div className="relative h-full w-full overflow-hidden rounded-[8px]">
                    <Image
                      src="/images/pr-agency-dubai/crafting-success/writing.jpg"
                      alt="Writing strategy visual"
                      fill
                      sizes="(min-width: 1440px) 520px, (min-width: 1200px) calc((100vw - 304px) / 2), 100vw"
                      className="object-cover object-center"
                      priority={false}
                    />
                  </div>
                </div>

                <div className="flex min-h-[484px] w-full flex-col">
                  {INACTIVE_STEPS.map((step, index) => (
                    <StepItem
                      key={step.title}
                      step={step}
                      isOpen={openIndex === index}
                      onToggle={() => toggleStep(index)}
                    />
                  ))}
                </div>
              </div>

              <div className="flex w-full flex-col min-[1200px]:hidden">
                {INACTIVE_STEPS.map((step, index) => (
                  <StepItem
                    key={step.title}
                    step={step}
                    isOpen={openIndex === index}
                    onToggle={() => toggleStep(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftingYourSuccess;
