"use client";
import { Button } from "@/components/ui/button";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import OurBusinessPhilosophy from "@/components/sections/AboutUsPage/OurBusinessPhilosophy";

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="bg-white text-white py-20 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-b to-[#FFF8F5]">
        <div className="space-y-7 grid lg:grid-2 gap-12 items-center">
          <div className="items-center text-center">
            <h1 className="text-5xl lg:text-7xl text-black font-extrabold leading-tight">
              About Us
            </h1>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              Socio is a boutique agency that specializes in creating unique and
              effective{" "}
              <a
                href="#digital-marketing"
                className="underline hover:text-white transition-colors"
              >
                digital marketing
              </a>{" "}
              strategies for businesses of all sizes. Our team of experts
              understands the importance of marketing in today&apos;s digital
              landscape, and we work tirelessly to help our clients stand out
              from the crowd.
            </p>
            <Button
              size="lg"
              className="text-white hover:bg-gray-100 rounded-full text-lg px-8 py-6 bg-black transition-all hover:-translate-y-1"
            >
              Get Started
            </Button>
          </div>

          <div className="space-y-6 flex items-center justify-center">
            <img
              src="https://framerusercontent.com/images/9jpgQmhHqTmtz49LjZb8h9rDr8E.png"
              alt="Team collaboration"
              className="w-fit h-100"
            />
          </div>
        </div>
      </div>
      <div className="p-10 flex items-center justify-center">
        <img
          src="https://framerusercontent.com/images/sBVXWZCMbR1FLYwyxGcfqTaUgg.png"
          alt="Digital marketing"
          className="w-fit h-185"
        />
      </div>
    </section>
  );
};

// Main App Component
export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <HeroSection />
      <OurBusinessPhilosophy />
      <ClientsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
