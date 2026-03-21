"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Nav from "../sections/Nav";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InsightsPage from "@/components/sections/InsightsPage";
import ClientsSection from "@/components/sections/ClientsSection";
import OurServices from "@/components/sections/Home/OurServices";
import { heroStat, serviceCards, spotlightCards } from "@/lib/home-content";
import ContactPage from "@/components/sections/ContactPage";
import Footer from "@/components/sections/Footer";
function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
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

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="section-eyebrow">{children}</div>;
}

function HeroSection() {
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
      setCurrentTextIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="hero-section">
      <div className="shell">
        <div className="hero-card">
          <div className="hero-orbit hero-orbit--violet" />
          <div className="hero-orbit hero-orbit--gold" />
          <div className="hero-orbit hero-orbit--mint" />

          <div className="hero-content">
            <h1>
              <span className="text-8xl tracking-tighter font-medium font-inter">
                Building bold brands with
              </span>
            </h1>
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
            <p className="text-black/80">
              We create high-conviction digital experiences for brands that want
              to feel premium, move faster, and grow with a distinctive presence
              online.
            </p>
            <div className="hero-actions">
              <Link className="cta-button" href="#contact">
                Get Started
                <ArrowIcon />
              </Link>
              <div className="hero-proof">
                <div className="hero-proof__avatars">
                  {heroStat.avatars.map((avatar, index) => (
                    <span
                      key={avatar}
                      className="hero-proof__avatar"
                      style={{ zIndex: 5 - index }}
                    >
                      <Image alt="" fill sizes="42px" src={avatar} />
                    </span>
                  ))}
                  <span aria-hidden="true" className="hero-proof__play">
                    ▶
                  </span>
                </div>
                <span>{heroStat.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="shell">
        <SectionEyebrow>Featured</SectionEyebrow>
        <div className="section-heading">
          <h2>Our Services</h2>
          <p>Reaching the right audience has never been simpler.</p>
        </div>

        <div className="services-grid">
          {serviceCards.map((service) => (
            <Link
              key={service.title}
              className={`service-card service-card--${service.accent}`}
              href={service.href}
            >
              <div className="service-card__icon">
                <Image alt="" fill sizes="36px" src={service.icon} />
              </div>
              <div className="service-card__copy">
                <h3>{service.title}</h3>
                <span>Learn More</span>
              </div>
              <div className="service-card__image">
                <Image
                  alt={service.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 30vw"
                  src={service.image}
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="services-cta">
          <div>
            <h3>See Our Work in Action.</h3>
            <p>Start your creative journey with us.</p>
          </div>
          <Link className="cta-button cta-button--light" href="#contact">
            Let&apos;s Collaborate
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="shell">
        <div className="about-intro">
          <SectionEyebrow>Learn More</SectionEyebrow>
          <h2>
            Innovative solutions for <em>bold brands</em>
          </h2>
          <p>
            Looking to elevate your brand? We craft immersive experiences that
            captivate, engage, and make your business unforgettable in every
            interaction.
          </p>
          <Link className="cta-button" href="#contact">
            Let&apos;s craft together
            <ArrowIcon />
          </Link>
        </div>

        <div className="spotlight-grid">
          {spotlightCards.map((spotlight) => (
            <Link
              key={spotlight.title}
              className={`spotlight-card spotlight-card--${spotlight.accent}`}
              href={spotlight.href}
            >
              <div className="spotlight-card__body">
                <p className="spotlight-card__badge">{spotlight.badge}</p>
                <h3>{spotlight.title}</h3>
                <p>{spotlight.description}</p>
                <ul>
                  {spotlight.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="spotlight-card__media">
                <Image
                  alt={spotlight.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  src={spotlight.image}
                />
              </div>
            </Link>
          ))}
        </div>
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
      {/* <AboutSection /> */}

      <TestimonialsSection />
      <InsightsPage />
      <ContactPage />
      <Footer />
    </>
  );
}
