import Image from "next/image";

type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  href: string;
  cta: string;
  wide?: boolean;
};

const portfolioRows: Array<
  | { type: "pair"; items: [PortfolioItem, PortfolioItem] }
  | { type: "wide"; item: PortfolioItem }
> = [
  {
    type: "pair",
    items: [
      {
        title: "HRG INVESTMENT",
        description:
          "HRG Investment Group is a premium holding company that specialises in innovative investment solutions. They had one deep commitment - to be the ultimate guide for investors for both short-term and long-term growth goals in unconventional industries.",
        image: "/images/web-development-portfolio/hrg-investment.png",
        href: "https://socio.ae/case-studies/web/hrg",
        cta: "www.hrginvestment.com",
      },
      {
        title: "Add To cart",
        description:
          "AddtoCart.ae is the premier e-commerce platform for GGFT, designed to bring high-grade, restaurant-quality Food & Beverage products directly to private customers. In response to numerous requests from individuals and families who craved access to hotel-grade products previously reserved for top food establishments, AddtoCart.ae was born. The platform aimed to transform everyday dining experiences by providing top-tier products with the convenience of online shopping.",
        image: "/images/web-development-portfolio/add-to-cart.png",
        href: "https://socio.ae/case-studies/web/atc",
        cta: "www.addtocart.ae",
      },
    ],
  },
  {
    type: "wide",
    item: {
      title: "KingsLane Group",
      description:
        "Founded in Raleigh, NC, in 2019, KingsLane Group (KLG) started with a single hotel in Germantown, TN. Since then, the company has rapidly expanded to oversee a diverse portfolio of ten hotels across the nation, with a combined asset value of over $130 million. This swift growth, accomplished in less than four years, reflects KLG's innovative approach and steadfast dedication to delivering exceptional hospitality.",
      image: "/images/web-development-portfolio/kingslane-group.png",
      href: "https://socio.ae/case-studies/web/klg",
      cta: "www.kingslanegroup.com",
      wide: true,
    },
  },
  {
    type: "pair",
    items: [
      {
        title: "VAVCI",
        description:
          "Vavci stands as Dubai's top online shopping destination, designed to merge the artistry and cultural heritage of both the East and West, all while capturing the spirit of modern sophistication. What distinguishes VAVCI is its exceptional creativity in carefully curating a wide range of styles to perfection.",
        image: "/images/web-development-portfolio/vavci.png",
        href: "https://socio.ae/case-studies/web/vavci",
        cta: "www.vavci.ae",
      },
      {
        title: "AKG",
        description:
          "AKG is the premier provider of comprehensive contracting services, renowned for its expertise in managing complex construction and infrastructure projects. With a strong focus on project leadership and innovative solutions, AKG consistently exceeded client expectations by transforming strategies into sustainable, high-quality results. From consultancy and design to construction and compliance management, AKG offered end-to-end project services that ensured flawless execution across the board.",
        image: "/images/web-development-portfolio/akg.png",
        href: "https://socio.ae/case-studies/web/akg",
        cta: "www.akg.ae",
      },
    ],
  },
  {
    type: "wide",
    item: {
      title: "Kido Protect",
      description:
        "Kido Protect is an app that is a comprehensive parental control tool designed to safeguard children's online experiences. From filtering websites to setting time limits, blocking inappropriate apps, and receiving real-time alerts, Kido Protect empowers parents to ensure their children's online safety, no matter their age or needs. Despite having a robust product, Kido Protect needed a clear, engaging online presence to reach concerned parents looking for a solution to keep their kids safe online.",
      image: "/images/web-development-portfolio/kido-protect.png",
      href: "https://socio.ae/case-studies/web/kido",
      cta: "www.kidoprotect.com",
      wide: true,
    },
  },
  {
    type: "pair",
    items: [
      {
        title: "CC LIMO",
        description:
          "Connection Chauffeur Limo is a provider of premium corporate and private transportation services throughout Dubai and the Northern Emirates at competitive rates. Since 2011, CC Limo has been delivering exceptional transportation solutions to the local community.",
        image: "/images/web-development-portfolio/cc-limo.png",
        href: "https://socio.ae/case-studies/web/cclimo",
        cta: "www.cclimo.ae",
      },
      {
        title: "MOAI Connect",
        description:
          "MOAI Connect is a groundbreaking global blockchain loyalty business network aimed at revolutionizing the loyalty marketing landscape. By creating a global exchange network for loyalty points on blockchain, MOAI Connect empowers businesses to protect their interests while offering consumers the ability to earn, burn, track, exchange, and consolidate loyalty points across the world. This innovative approach promises higher value redemption for consumers and actionable insights for businesses.",
        image: "/images/web-development-portfolio/moai-connect.png",
        href: "https://socio.ae/case-studies/web/moai-connect",
        cta: "www.moaiconnect.com",
      },
    ],
  },
  {
    type: "wide",
    item: {
      title: "Offplan Finder",
      description:
        "OffPlan Finder is a go-to platform for prospective buyers looking to invest in off-plan properties in Dubai. The platform offers accurate, up-to-date information on a wide range of projects, from layout details to estimated handover dates, providing unbiased advice to help users make well-informed decisions. OffPlan Finder connects users with developers and offers personalized support throughout the entire buying process.",
      image: "/images/web-development-portfolio/offplan-finder.png",
      href: "https://socio.ae/case-studies/web/offplanfinder",
      cta: "www.offplanfinder.ae",
      wide: true,
    },
  },
  {
    type: "pair",
    items: [
      {
        title: "Expand & Evolve",
        description:
          "'Expand and Evolve' stands today as a visionary platform designed for leveled entrepreneurs, leaders, high performers, creatives, innovators, and investors. Since the beginning, they only had one mission - to cultivate spaces that foster support and inspiration, allowing individuals to elevate their vibrations and enrich their lives through transformative experiences. By connecting like-minded individuals, Expand and Evolve created opportunities for growth, collaboration, and mutual success.",
        image: "/images/web-development-portfolio/expand-and-evolve.png",
        href: "https://socio.ae/case-studies/web/expand-evolve",
        cta: "www.expandevolve.com",
      },
      {
        title: "Community Centeral",
        description:
          "Founded in 2014, Community Central is a full-service media and marketing agency offering door-to-door advertising, elevator advertising, print, online, and digital marketing solutions. Over the past decade, the company has grown into a powerhouse, connecting local businesses with over 270,000 customers every month through targeted strategies. Their mission is to help clients maximize their return on investment with efficiency and precision.",
        image: "/images/web-development-portfolio/community-centeral.png",
        href: "https://socio.ae/case-studies/web/community-centeral",
        cta: "www.communitycentral.com",
      },
    ],
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 15 15"
      className="h-[15px] w-[15px]"
      fill="none"
    >
      <path
        d="M4 11 11 4m0 0H5.5M11 4v5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const isWide = item.wide;

  const descriptionClass = item.wide ? "max-w-[36rem]" : "max-w-[24rem]";
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className={[
        "group relative block overflow-hidden rounded-[20px]",
        isWide
          ? "aspect-[2451/1350] min-h-[280px] md:min-h-[430px] lg:min-h-[606px]"
          : "aspect-[1188/1350] min-h-[420px] md:min-h-[540px] lg:min-h-[675px]",
      ].join(" ")}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes={
          isWide
            ? "(min-width: 1280px) 1100px, (min-width: 768px) calc(100vw - 120px), 100vw"
            : "(min-width: 1280px) 526px, (min-width: 1024px) calc((100vw - 168px) / 2), 100vw"
        }
        className="object-cover transition-transform duration-500 ease-out md:group-hover:scale-[1.02]"
      />

      {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.18)_34%,rgba(0,0,0,0.74)_74%,rgba(0,0,0,0.92)_100%)] opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100" /> */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/35 to-black/30 backdrop-blur-[6px] opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100" />

      <div className="absolute inset-0 flex flex-col justify-between p-[22px] text-white transition-all duration-300 md:p-[30px] md:opacity-0 md:translate-y-5 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
        <div className="pt-2 md:pt-10">
          <h3
            className={`font-lexend font-bold  leading-[0.95] tracking-[-0.04em]  text-[36px]`}
          >
            {item.title}
          </h3>

          <p
            className={`mt-5 text-sm font-inter leading-5 text-white md:text-[15px] ${descriptionClass}`}
          >
            {item.description}
          </p>
        </div>

        <div className="pb-1 md:pb-10">
          <span className="inline-flex items-center gap-3 rounded-[130px] bg-white px-[24px] py-[16px] font-inter text-[14px] font-medium tracking-[-0.01em] text-[#010101] shadow-[0_14px_30px_rgba(0,0,0,0.18)] md:px-[30px] md:py-[20px] md:text-[16px]">
            {item.cta}
            <ArrowIcon />
          </span>
        </div>
      </div>
    </a>
  );
}

const OurPortfolio = () => {
  return (
    <section
      id="portfolio-web-dev"
      className=" px-4 py-20 md:px-[60px] md:py-24 bg-white"
    >
      <div className="mx-auto flex w-full max-w-8xl flex-col items-center gap-[62px] py-[28px]">
        <div className="flex w-full max-w-[800px] flex-col items-center gap-4 text-center">
          <div className="rounded-[50px] bg-[#f5f5f5] px-[22px] py-[2px] font-inter text-[12px] font-semibold tracking-[0.05em] text-[#525252]">
            Our Customers
          </div>

          <h2 className="font-lexend text-[40px] font-bold leading-[1.16] tracking-[-2px] text-[#171717] md:text-[52px]">
            Our Portfolio
          </h2>

          <p className="font-lexend text-[16px] font-medium leading-[1.4] tracking-[-0.1px] text-[#737373]">
            Whether you&apos;re looking to launch a dynamic e-commerce platform,
            an engaging informational site, or a custom application, our team of
            expert developers utilizes the latest technologies to deliver
            scalable, user-friendly websites tailored to your business needs.
          </p>
        </div>

        <div className="flex w-full flex-col gap-6 lg:gap-[48px]">
          {portfolioRows.map((row, index) =>
            row.type === "pair" ? (
              <div
                key={`pair-${index}`}
                className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-[48px]"
              >
                {row.items.map((item) => (
                  <PortfolioCard key={item.title} item={item} />
                ))}
              </div>
            ) : (
              <PortfolioCard key={`wide-${index}`} item={row.item} />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
