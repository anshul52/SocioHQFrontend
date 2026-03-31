import Nav from "@/components/sections/Nav";
import HeroSection from "@/components/sections/branding-agency-dubai/HeroSection";
import OurBrandingServices from "@/components/sections/branding-agency-dubai/OurBrandingServices";
import FiveSection from "@/components/sections/branding-agency-dubai/FiveSection";
import OurPortfolio from "@/components/sections/branding-agency-dubai/OurPortfolio";
import FAQSection from "@/components/ui/faq";
import Footer from "@/components/sections/Footer";
import ContactPage from "@/components/sections/ContactPage";
import InsightsPage from "@/components/sections/InsightsPage";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

const Page = () => {
  return (
    <div className="w-full min-h-screen">
      <Nav />
      <HeroSection />
      <OurBrandingServices />
      <OurPortfolio />
      <FiveSection />
      <FAQSection />
      <TestimonialsSection />
      <InsightsPage />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Page;
