import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/social-media-marketing-dubai/Hero";
import FAQSection from "@/components/ui/faq";
import Footer from "@/components/sections/Footer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactPage from "@/components/sections/ContactPage";
import ClientsSection from "@/components/sections/ClientsSection";
import OurDigitalWorks from "@/components/sections/social-media-marketing-dubai/OurDigitalWorks";

const Page = () => {
  return (
    <div className="w-full min-h-screen">
      <Nav />
      <Hero />
      <OurDigitalWorks />
      <ClientsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Page;
