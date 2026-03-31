/* eslint-disable @next/next/no-img-element */
"use client";

import { Fragment, useEffect, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  type HeroSectionContent,
  usaDigitalMarketingAgencyContent,
} from "@/content/digital-marketing-agency";

type HeroPageProps = {
  content?: HeroSectionContent;
};

export default function HeroPage({
  content = usaDigitalMarketingAgencyContent.hero,
}: HeroPageProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % content.phrases.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [content.phrases.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

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

  const imageContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const imageItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#ffffff] flex flex-col items-center justify-start px-4 py-16 w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-7xl"
      >
        <motion.h1
          variants={itemVariants}
          className="text-[75px] tracking-tighter font-lexend leading-20 font-bold text-[#2d2d2d]"
        >
          {content.lines.map((line, index) => (
            <Fragment key={line}>
              {line}
              {index < content.lines.length - 1 ? <br /> : null}
            </Fragment>
          ))}
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="h-[120px] mt-2 flex items-center justify-center pointer-events-none"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTextIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`text-[80px] italic font-serif font-light bg-gradient-to-r ${content.phrases[currentTextIndex].gradient} bg-clip-text text-transparent pb-4`}
            >
              {content.phrases[currentTextIndex].text}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-0 text-gray-700 text-[16px] font-inter leading-5 max-w-4xl mx-auto"
        >
          {content.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex justify-center"
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
                {content.primaryCta}
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={imageContainerVariants}
        initial="hidden"
        animate="visible"
        className="mt-16 grid grid-cols-3 md:grid-cols-5 gap-6 items-center"
      >
        <motion.div
          variants={imageItemVariants}
          className="w-[180px] h-[180px] bg-transparent rounded-xl flex items-center justify-center overflow-hidden"
        >
          <img src="/images/q7VoRgRcB1bk3pqNCa8c20q3WHA.avif" alt="" />
        </motion.div>
        <div className="flex flex-col gap-6">
          <motion.div
            variants={imageItemVariants}
            className="w-[180px] h-[100px] bg-transparent rounded-xl flex items-center justify-center overflow-hidden"
          >
            <img src="/images/WFcEJt84seQLPZovlDxxU4hAwVQ.avif" alt="" />
          </motion.div>

          <motion.div
            variants={imageItemVariants}
            className="w-[180px] h-[220px] bg-transparent rounded-xl flex items-center justify-center overflow-hidden"
          >
            <img src="/images/VpUpzXjQyQ3p9o4fQJouorfTxTk.jpeg" alt="" />
          </motion.div>
        </div>
        <motion.div
          variants={imageItemVariants}
          className="w-[180px] h-[200px] bg-transparent rounded-xl flex items-center justify-center overflow-hidden"
        >
          <img src="/images/OfbB6qj6W94t14YM0Js7Ymyes.avif" alt="" />
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div
            variants={imageItemVariants}
            className="w-[180px] h-[100px] bg-transparent rounded-xl flex items-center justify-center overflow-hidden"
          >
            <img src="/images/ld5V8IMn9AzIsCpKhghGUbOjwM.avif" alt="" />
          </motion.div>

          <motion.div
            variants={imageItemVariants}
            className="w-[180px] h-[220px] bg-transparent rounded-xl flex items-center justify-center overflow-hidden"
          >
            <img src="/images/yBJIbjOci5Um6OYVL6yAKLuvw.avif" alt="" />
          </motion.div>
        </div>

        <motion.div
          variants={imageItemVariants}
          className="w-[180px] h-[180px] bg-transparent rounded-xl flex items-center justify-center overflow-hidden"
        >
          <img src="/images/dNZQu9YKReeg3QzNEfFwxjSHLs.avif" alt="" />
        </motion.div>
      </motion.div>
    </main>
  );
}
