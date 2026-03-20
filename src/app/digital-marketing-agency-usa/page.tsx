import FAQSection from "@/components/ui/faq";
import Footer from "@/components/sections/Footer";
import ContactPage from "@/components/sections/ContactPage";
import InsightsPage from "@/components/sections/InsightsPage";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HeroPage from "@/components/sections/digital-marketing-agency-dubai/HeroPage";
import OurServices from "@/components/sections/digital-marketing-agency-dubai/OurServices";
import OurServices2 from "@/components/sections/digital-marketing-agency-dubai/OurServices2";
import Nav from "@/components/sections/Nav";
import RequestCallBack from "@/components/sections/digital-marketing-agency-dubai/RequestCallBack";
import OurPortfolio from "@/components/sections/digital-marketing-agency-dubai/OurPortfolio";
import WhatPeopleSaying from "@/components/sections/WhatPeopleSaying";

const DigitalMarketingAgencyUsa = () => {
  return (
    <div>
      <Nav />
      <HeroPage />
      <RequestCallBack />
      <OurServices />
      <OurPortfolio />
      <WhatPeopleSaying />
      <OurServices2 />
      <FAQSection />
      <TestimonialsSection />
      <InsightsPage />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default DigitalMarketingAgencyUsa;
