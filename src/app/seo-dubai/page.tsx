import React from "react";
import Nav from "@/components/sections/Nav";
import FAQSection from "@/components/ui/faq";
import Footer from "@/components/sections/Footer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactPage from "@/components/sections/ContactPage";
import ClientsSection from "@/components/sections/ClientsSection";
import RequestCallBack from "@/components/sections/digital-marketing-agency-dubai/RequestCallBack";
import InsightsPage from "@/components/sections/InsightsPage";
import DominateTopRankings from "@/components/sections/seo-dubai/DominateTopRankings";
import SeveralBigCompanies from "@/components/sections/seo-dubai/SeveralBigCompanies";
import OurPortfolio from "@/components/sections/seo-dubai/OurPortfolio";
import CaseStudies from "@/components/sections/seo-dubai/CaseStudies";
import FourSection from "@/components/sections/seo-dubai/FourSection";

const Page = () => {
  return (
    <div className="w-full min-h-screen">
      <Nav />
      <RequestCallBack />
      <DominateTopRankings />
      <SeveralBigCompanies />
      <ClientsSection />
      <CaseStudies />
      <OurPortfolio />
      <FourSection />
      <TestimonialsSection />
      <FAQSection />
      <InsightsPage />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Page;
