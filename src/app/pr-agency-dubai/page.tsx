import HeroSection from "@/components/sections/pr-agency-dubai/HeroSection";
import PrStrategies from "@/components/sections/pr-agency-dubai/PrStrategies";
import CraftingYourSuccess from "@/components/sections/pr-agency-dubai/CraftingYourSuccess";
import Nav from "@/components/sections/Nav";
import FAQSection from "@/components/ui/faq";
import Footer from "@/components/sections/Footer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactPage from "@/components/sections/ContactPage";
import InsightsPage from "@/components/sections/InsightsPage";

const Page = () => {
  return (
    <div className="w-full min-h-screen">
      <Nav />
      <HeroSection />
      <PrStrategies />
      <CraftingYourSuccess />
      {/*  */}
      <TestimonialsSection />
      <FAQSection />
      <InsightsPage />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Page;
