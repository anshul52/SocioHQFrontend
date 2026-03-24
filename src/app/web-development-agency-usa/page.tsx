import FAQSection from "@/components/ui/faq";
import Footer from "@/components/sections/Footer";
import ContactPage from "@/components/sections/ContactPage";
import InsightsPage from "@/components/sections/InsightsPage";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HeroPage from "@/components/sections/digital-marketing-agency-dubai/HeroPage";
import OurServices from "@/components/sections/web-development-agency-usa/OurServices";
import OurServices2 from "@/components/sections/digital-marketing-agency-dubai/OurServices2";
import Nav from "@/components/sections/Nav";
import RequestCallBack from "@/components/sections/digital-marketing-agency-dubai/RequestCallBack";
import OurPortfolio from "@/components/sections/web-development-agency-usa/OurPortfolio";
import ClientsSection from "@/components/sections/ClientsSection";
import AwardsAchievements from "@/components/sections/web-development-agency-usa/AwardsAchievements";

const Page = () => {
  return (
    <div>
      <Nav />
      {/* <HeroPage />   */}
      <RequestCallBack />
      <OurServices />
      <ClientsSection />
      <OurPortfolio />
      <AwardsAchievements />
      <TestimonialsSection />
      <OurServices2 />
      <FAQSection />
      <InsightsPage />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Page;
