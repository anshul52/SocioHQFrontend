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
import ClientsSection from "@/components/sections/ClientsSection";
import FAQSection from "@/components/ui/faq";
import type { DigitalMarketingAgencyPageContent } from "@/content/digital-marketing-agency";

type DigitalMarketingAgencyPageProps = {
  content: DigitalMarketingAgencyPageContent;
};

const DigitalMarketingAgencyPage = ({
  content,
}: DigitalMarketingAgencyPageProps) => {
  return (
    <div>
      <Nav />
      <HeroPage content={content.hero} />
      <RequestCallBack content={content.requestCallBack} />
      <ClientsSection content={content.clients} />
      <OurServices content={content.services} />
      <OurPortfolio content={content.portfolio} />
      <TestimonialsSection />
      <OurServices2 content={content.servicesDeepDive} />
      <FAQSection content={content.faq} />
      <InsightsPage />
      <ContactPage content={content.contact} />
      <Footer />
    </div>
  );
};

export default DigitalMarketingAgencyPage;
