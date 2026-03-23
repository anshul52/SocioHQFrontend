"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, Variants } from "framer-motion";
import ClientsSection from "@/components/sections/ClientsSection";
import ContactPage from "@/components/sections/ContactPage";
import Footer from "@/components/sections/Footer";
import OurServices from "@/components/sections/Home/OurServices";
import ScrollStack from "@/components/sections/Home/ScrollStack";
import InsightsPage from "@/components/sections/InsightsPage";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { heroStat } from "@/lib/home-content";
import { cn } from "@/lib/utils";
import Nav from "../sections/Nav";

const shellClassName =
  "mx-auto w-[min(1200px,calc(100vw-40px))] max-[900px]:w-[min(calc(100vw-28px),1200px)]";

const ctaButtonClassName =
  "inline-flex min-h-[56px] items-center gap-3 rounded-full bg-[#1b1d1e] px-[22px] font-semibold text-white shadow-[0_18px_50px_-28px_rgba(15,23,42,0.22)] transition duration-200 hover:-translate-y-0.5";

const heroPhrases = [
  { text: "Web Development", gradient: "from-blue-500 to-cyan-500" },
  {
    text: "Digital Marketing",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
  },
  { text: "Branding", gradient: "from-amber-400 to-orange-600" },
  { text: "Social Media", gradient: "from-emerald-400 to-teal-600" },
  { text: "SEO", gradient: "from-violet-500 to-fuchsia-500" },
] as const;

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-[18px] w-[18px] shrink-0", className)}
      viewBox="0 0 24 24"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroPhrases.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen relative flex items-center justify-center isolate overflow-hidden px-0 pb-7 pt-10 bg-[linear-gradient(145deg,rgba(235,244,255,0.92),rgba(255,247,235,0.88)),rgba(255,255,255,0.72)] max-[900px]:px-[22px] max-[900px]:pb-[34px] max-[900px]:pt-[28px]">
      <div className={`${shellClassName}`}>
        {/* <div className="relative isolate overflow-hidden rounded-[46px] border border-[rgba(125,145,190,0.12)] bg-[linear-gradient(145deg,rgba(235,244,255,0.92),rgba(255,247,235,0.88)),rgba(255,255,255,0.72)] p-[clamp(42px,8vw,92px)] shadow-[0_30px_80px_-38px_rgba(15,23,42,0.28)] max-[900px]:rounded-[30px] max-[900px]:px-[22px] max-[900px]:pb-[34px] max-[900px]:pt-[28px]"> */}
        <div className="pointer-events-none absolute left-[-6%] top-[16%] h-[280px] w-[280px] rounded-full bg-[rgba(161,172,245,0.5)] opacity-[0.55] blur-[70px]" />
        <div className="pointer-events-none absolute bottom-[6%] right-[-4%] h-[300px] w-[300px] rounded-full bg-[rgba(253,210,91,0.45)] opacity-[0.55] blur-[70px]" />
        <div className="pointer-events-none absolute bottom-[-14%] left-[40%] h-[240px] w-[240px] rounded-full bg-[rgba(148,227,205,0.34)] opacity-[0.55] blur-[70px]" />

        <div className="relative grid justify-items-center text-center">
          <h1 className="m-0 grid gap-2">
            <span className="font-inter text-[clamp(3rem,7vw,5.8rem)] font-medium leading-[0.95] tracking-[-0.075em]">
              Building bold brands with
            </span>
          </h1>

          <motion.div
            className="mt-2 flex h-[120px] items-center justify-center pointer-events-none"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "bg-gradient-to-r bg-clip-text pb-4 font-serif text-[80px] font-light italic text-transparent max-[900px]:text-[clamp(3rem,11vw,5rem)]",
                  heroPhrases[currentTextIndex].gradient,
                )}
                exit={{ opacity: 0, y: -15 }}
                initial={{ opacity: 0, y: 15 }}
                key={currentTextIndex}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {heroPhrases[currentTextIndex].text}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <p className="mx-auto mt-7 max-w-[720px] text-[1.08rem] leading-[1.85] text-black/80">
            We create high-conviction digital experiences for brands that want
            to feel premium, move faster, and grow with a distinctive presence
            online.
          </p>

          <div className="mt-[34px] flex flex-wrap items-center justify-center gap-[22px] max-[640px]:flex-col">
            <Link className={ctaButtonClassName} href="#contact">
              Get Started
              <ArrowIcon />
            </Link>

            <div className="flex items-center gap-[14px] text-base text-[#7d8597] max-[640px]:flex-col">
              <div className="flex items-center">
                {heroStat.avatars.map((avatar, index) => (
                  <span
                    key={avatar}
                    className={cn(
                      "relative grid h-[42px] w-[42px] place-items-center overflow-hidden rounded-full border-2 border-white bg-white shadow-[0_12px_24px_-18px_rgba(15,23,42,0.5)]",
                      index === 0 ? "ml-0" : "-ml-[10px]",
                    )}
                    style={{ zIndex: 5 - index }}
                  >
                    <Image alt="" fill sizes="42px" src={avatar} />
                  </span>
                ))}
                <span
                  aria-hidden="true"
                  className="-ml-[10px] grid h-[42px] w-[42px] place-items-center rounded-full border-2 border-white bg-white text-[0.8rem] text-[#8a8f98] shadow-[0_12px_24px_-18px_rgba(15,23,42,0.5)]"
                >
                  &#9654;
                </span>
              </div>
              <span>{heroStat.label}</span>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Nav />
      <HeroSection />
      <ClientsSection />
      <OurServices />
      <ScrollStack />
      {/* <AboutSection /> */}
      <TestimonialsSection />
      <InsightsPage />
      <ContactPage />
      <Footer />
    </>
  );
}
