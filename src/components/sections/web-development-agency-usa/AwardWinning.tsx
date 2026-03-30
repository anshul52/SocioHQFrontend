"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  MarqueeRow,
  testimonialRows,
} from "@/components/sections/TestimonialsSection";
const customerAvatars = [
  {
    src: "/images/x74TObNHAolsBXNXj0UNhs3OTyc.avif",
    alt: "Happy client portrait",
  },
  {
    src: "/images/sasGB9hURuQL8P6YdKIDa4fm0.avif",
    alt: "Happy client portrait",
  },
  {
    src: "/images/q0d9KRnw15NbEjTpLKDcPPijcU.avif",
    alt: "Happy client portrait",
  },
] as const;

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 19"
      className={`h-[18px] w-[18px] ${className}`}
      fill="none"
    >
      <path
        d="m10 1.2 2.48 5.02 5.54.8-4.01 3.91.95 5.52L10 13.84 5.04 16.45l.95-5.52L1.98 7.02l5.54-.8L10 1.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
      fill="none"
    >
      <path
        d="M4.5 11.5 11.5 4.5M11.5 4.5H6.1M11.5 4.5v5.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const AwardWinning = () => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };
  return (
    <section className="bg-[#E8E8FF] w-full">
      <div className="mx-auto flex w-full bg-[#E8E8FF] pt-15 items-center gap-12 justify-center lg:gap-1">
        <div className="w-2/3 pl-24">
          <div className="flex flex-col items-start gap-5 ">
            <div className="flex -space-x-3">
              {customerAvatars.map((avatar, index) => (
                <div
                  key={`${avatar.src}-${index}`}
                  className="relative h-12 w-12 overflow-hidden rounded-full"
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* <div className="hidden h-11 w-px bg-[#e7eaee] sm:block" /> */}

            <div>
              <p className="font-inter text-[18px] font-semibold leading-none tracking-[-0.03em] text-[#171717]">
                Trusted by 6,287 Customers
              </p>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} className="text-[#FF4D3A]" />
                  ))}
                </div>
                <span className="font-inter text-[15px] font-medium text-[#4b5563]">
                  4.8/5
                </span>
              </div>
            </div>
          </div>

          <h2 className="mt-8 font-lexend text-[42px] font-bold leading-[0.96] tracking-[-0.055em] text-[#171717] sm:text-[54px] lg:text-[75px]">
            Award Winning
            <br />
            Website Development
            <br />
            Agency in Dubai
          </h2>

          <p className="mt-6 max-w-[540px] font-mulish text-[18px] font-semibold leading-[1.58] tracking-[-0.01em] text-[#000000]">
            Our approach goes beyond just aesthetics, as we focus on showcasing
            the essence of a brand through captivating visuals and engaging
            content.
          </p>
          {/* Button */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center justify-start"
          >
            <div className="w-fit bg-black rounded-full shadow-[0_0_30px_rgba(20,179,168,0.3)]">
              <div className="relative inline-flex rounded-full p-[1.5px] overflow-hidden">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-[conic-gradient(from_90deg,transparent_0deg,transparent_295deg,#14b3a8_322deg,#0347A0_348deg,transparent_360deg)]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="pointer-events-none absolute inset-[1.5px] rounded-full bg-black" />
                <Button className="relative font-inter z-10 rounded-full bg-transparent px-8 py-6 text-lg text-white hover:bg-transparent">
                  View Portfolio
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto w-1/2">
          <div className="relative overflow-hidden rounded-[36px] pb-0 pt-8  sm:px-10 sm:pt-10">
            <div className="relative  aspect-[1700/1984]  w-full">
              <Image
                src="/images/web-development-award-winning-hero.png"
                alt="Website development specialist holding a laptop"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="origin-bottom scale-[1.15] object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex w-full flex-col bg-[#E8E8FF] gap-[0px] md:mt-2 md:gap-[0px]">
        <MarqueeRow items={testimonialRows[0]} />
      </div>
    </section>
  );
};

export default AwardWinning;
