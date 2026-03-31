import HeroSection from "@/components/sections/whatsapp-marketing/HeroSection";
import BrandsThatTrustUs from "@/components/sections/whatsapp-marketing/BrandsThatTrustUs";
import Nav from "@/components/sections/Nav";
import FAQSection from "@/components/ui/faq";
import Footer from "@/components/sections/Footer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactPage from "@/components/sections/ContactPage";
import ClientsSection from "@/components/sections/ClientsSection";
import RequestCallBack from "@/components/sections/digital-marketing-agency-dubai/RequestCallBack";
import InsightsPage from "@/components/sections/InsightsPage";

const Page = () => {
  return (
    <div className="w-full min-h-screen">
      <Nav />
      <HeroSection />
      <BrandsThatTrustUs />
      {/*  */}
      <FAQSection />
      <InsightsPage />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Page;
