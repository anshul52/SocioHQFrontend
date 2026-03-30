import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import CaseStudies from "@/components/sections/seo-dubai/CaseStudies";

type PortfolioCard = {
  title: string;
  description: string;
  image: string;
  href: string;
  cta: string;
  wide?: boolean;
};

const topRow: PortfolioCard[] = [
  {
    title: "VAVCI",
    description:
      "VAVCI is a luxury fashion brand based in Dubai, UAE, known for crafting bespoke, pret, and couture attire that merges Eastern and Western influences. They offer a diverse collection, including wedding wear, smart casuals, and streetwear, designed to appeal to modern tastes while reflecting cultural artistry.",
    image: "/images/portfolio/vavci.jpg",
    href: "https://socio.ae/case-studies/seo/vavci",
    cta: "View Case Study",
  },
  {
    title: "Fade Fit",
    description:
      "Fade Fit is a health-focused snack brand founded by Kris Fade, offering a range of nutritious snacks, including protein bars, energy snacks, and vitamin gummies. The brand emphasizes delicious, wholesome snacking options for both adults and kids, with many products catering to active lifestyles.",
    image: "/images/portfolio/fade-fit.jpg",
    href: "https://socio.ae/case-studies/seo/fadefit",
    cta: "View Case Study",
  },
];

const spotlightCard: PortfolioCard = {
  title: "Add To Cart",
  description:
    "Addtocart.ae is an online supermarket in the UAE, offering a wide range of groceries, hotel-grade products, and household essentials. The platform caters to individuals and businesses, emphasizing convenience and quality. With a user-friendly interface and reliable delivery services, it simplifies shopping for daily needs.",
  image: "/images/portfolio/add-to-cart.jpg",
  href: "https://socio.ae/case-studies/seo/atc",
  cta: "addtocart.ae",
  wide: true,
};

const spotlightCard2: PortfolioCard = {
  title: "Ascend Scaffolding",
  description:
    "Bringing of a traditional lighting factory in Venice in 2024 with a complete rebranding.",
  image: "/images/portfolio/add-to-cart.jpg",
  href: "https://socio.ae/case-studies/seo/atc",
  cta: "addtocart.ae",
  wide: true,
};

const bottomRow: PortfolioCard[] = [
  {
    title: "CC Limo",
    description:
      "CCLimo offer easy and simple online limousine car rental service in Dubai. Save time and money with a safe and comfortable trip to your destination.",
    image: "/images/portfolio/cc-limo.jpg",
    href: "https://socio.ae/case-studies/seo/cclimo",
    cta: "cclimo.ae",
  },
  {
    title: "HRG INVESTMENT",
    description:
      "HRG Investment Group is a premium holding company that specialises in innovative investment solutions. They had one deep commitment: to be the ultimate guide for investors for both short-term and long-term growth goals in unconventional industries.",
    image: "/images/portfolio/hrg-investment.jpg",
    href: "https://socio.ae/case-studies/seo/hrg",
    cta: "hrginvestment.com",
  },
];

const PortfolioTile = ({ card }: { card: PortfolioCard }) => {
  const titleClass = card.wide
    ? "max-w-[11ch] text-[clamp(2.5rem,5vw,4rem)]"
    : "max-w-[10ch] text-[clamp(2.5rem,4.2vw,4rem)]";

  const descriptionClass = card.wide ? "max-w-[36rem]" : "max-w-[24rem]";
  const aspectClass = card.wide
    ? "aspect-[1100/584] min-h-[440px] md:min-h-[520px]"
    : "aspect-[588/670] min-h-[520px] md:min-h-[640px]";

  return (
    <a
      href={card.href}
      target="_blank"
      rel="noreferrer"
      className={`group relative block overflow-hidden rounded-[20px] ${aspectClass}`}
    >
      <Image
        src={card.image}
        alt={card.title}
        fill
        sizes={
          card.wide
            ? "(min-width: 768px) 1200px, 100vw"
            : "(min-width: 768px) 50vw, 100vw"
        }
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10 backdrop-blur-[6px] opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100" />

      <div className="absolute inset-0 flex flex-col justify-between p-[30px] text-white transition-all duration-300 md:p-10 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
        <div className="pt-2 md:pt-3">
          <h3
            className={`font-lexend font-bold  leading-[0.95] tracking-[-0.04em]  text-[36px]`}
          >
            {card.title}
          </h3>
          <p
            className={`mt-5 text-sm font-inter leading-5 text-white md:text-[15px] ${descriptionClass}`}
          >
            {card.description}
          </p>
        </div>

        <div className="pb-1 md:pb-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-5 font-inter text-base font-medium text-[#010101] shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
            {card.cta}
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
          </span>
        </div>
      </div>
    </a>
  );
};

const OurPortfolio = () => {
  return (
    <section id="portfolio-dm" className="bg-white px-14 py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-8xl flex-col items-center gap-16">
        {/* <div className="flex max-w-[900px] flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center rounded-full bg-[#F8FAFC] px-4 py-1.5 shadow-[inset_0_0_0_1px_rgba(2,6,23,0.08)]">
            <span className="font-mulish text-[13px] font-medium text-[#020617]">
              Crafted Success Stories
            </span>
          </div>

          <h2 className="text-[52px] font-bold font-lexend tracking-tighter text-center mb-4">
            Our Portfolio
          </h2>

          <p className="max-w-[980px] font-mulish text-[17px] leading-8 tracking-[-0.01em] text-[#767575] md:text-[20px]">
            As the best digital marketing agency in Dubai, we combine
            cutting-edge technology with strategic insights to deliver
            measurable results that exceed expectations and drive sustainable
            growth for your business.
          </p>
        </div> */}
        {/* -----------------CaseStudies ------------------*/}

        {/* --------------------------------------- */}
        <div className="flex w-full flex-col gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {topRow.map((card) => (
              <PortfolioTile key={card.title} card={card} />
            ))}
          </div>

          <PortfolioTile card={spotlightCard} />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {bottomRow.map((card) => (
              <PortfolioTile key={card.title} card={card} />
            ))}
          </div>
          <PortfolioTile card={spotlightCard2} />
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
