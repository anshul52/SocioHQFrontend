import HeroSection from "@/components/sections/whatsapp-marketing/HeroSection";
import TwoSection from "@/components/sections/whatsapp-marketing/TwoSection";
import BrandsThatTrustUs from "@/components/sections/whatsapp-marketing/BrandsThatTrustUs";
import OurServices from "@/components/sections/whatsapp-marketing/OurServices";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactPage from "@/components/sections/ContactPage";
import InsightsPage from "@/components/sections/InsightsPage";

const Page = () => {
  return (
    <div className="w-full min-h-screen">
      <Nav />
      <HeroSection />
      <BrandsThatTrustUs />
      <OurServices />
      <TwoSection />
      {/*  */}
      <TestimonialsSection />
      <InsightsPage />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Page;
