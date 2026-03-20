"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, Variants, AnimatePresence } from "framer-motion";

export default function HeroPage() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const phrases = [
    { text: "Web Development", gradient: "from-blue-500 to-cyan-500" },
    {
      text: "Digital Marketing",
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
    },
    { text: "Branding", gradient: "from-amber-400 to-orange-600" },
    { text: "Social Media", gradient: "from-emerald-400 to-teal-600" },
    { text: "SEO", gradient: "from-violet-500 to-fuchsia-500" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

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
      {/* Heading */}
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
          Leading Digital Marketing <br /> Agency in Dubai
        </motion.h1>

        {/* Sub heading */}
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
              className={`text-[80px] italic font-serif font-light bg-gradient-to-r ${phrases[currentTextIndex].gradient} bg-clip-text text-transparent pb-4`}
            >
              {phrases[currentTextIndex].text}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-0 text-gray-700 text-[16px] font-inter leading-5 max-w-4xl mx-auto"
        >
          Our suite of comprehensive services is designed to place your brand
          front and center in the ever-evolving digital arena. We offer branding
          solutions and bespoke solutions tailored to each client's unique
          needs, ensuring a personalized approach for every project. Our team is
          dedicated to capturing your brand's essence, integrating your core
          values and identity into every aspect of our branding efforts. Through
          expert graphic design, we create compelling visual identities and
          marketing materials that engage customers and elevate your brand's
          presence.
        </motion.p>

        {/* Button */}
        {/* Button */}
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
                View Portfolio
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={imageContainerVariants}
        initial="hidden"
        animate="visible"
        className="mt-16 grid grid-cols-3 md:grid-cols-5 gap-6 items-center"
      >
        {/* Card 1 */}
        <motion.div
          variants={imageItemVariants}
          className="w-[180px] h-[180px] bg-transparent rounded-xl flex items-center justify-center overflow-hidden"
        >
          <img src="/images/q7VoRgRcB1bk3pqNCa8c20q3WHA.avif" alt="" />
        </motion.div>
        {/* ----------------------------- */}
        <div className="flex flex-col gap-6">
          {/* Card 2 */}
          <motion.div
            variants={imageItemVariants}
            className="w-[180px] h-[100px] bg-transparent rounded-xl flex items-center justify-center overflow-hidden"
          >
            <img src="/images/WFcEJt84seQLPZovlDxxU4hAwVQ.avif" alt="" />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={imageItemVariants}
            className="w-[180px] h-[220px] bg-transparent rounded-xl flex items-center justify-center overflow-hidden"
          >
            <img src="/images/VpUpzXjQyQ3p9o4fQJouorfTxTk.jpeg" alt="" />
          </motion.div>
        </div>
        {/* ----------------------------- */}
        {/* Card 4 */}
        <motion.div
          variants={imageItemVariants}
          className="w-[180px] h-[200px] bg-transparent rounded-xl flex items-center justify-center overflow-hidden"
        >
          <img src="/images/OfbB6qj6W94t14YM0Js7Ymyes.avif" alt="" />
        </motion.div>
        {/* ----------------------------- */}

        <div className="flex flex-col gap-6">
          {/* Card 5 */}
          <motion.div
            variants={imageItemVariants}
            className="w-[180px] h-[100px] bg-transparent rounded-xl flex items-center justify-center overflow-hidden"
          >
            <img src="/images/ld5V8IMn9AzIsCpKhghGUbOjwM.avif" alt="" />
          </motion.div>

          {/* Bottom Row */}

          <motion.div
            variants={imageItemVariants}
            className="w-[180px] h-[220px] bg-transparent rounded-xl flex items-center justify-center overflow-hidden"
          >
            <img src="/images/yBJIbjOci5Um6OYVL6yAKLuvw.avif" alt="" />
          </motion.div>
        </div>
        {/* ----------------------------- */}

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
