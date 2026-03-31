import Image from "next/image";

type PortfolioItem = {
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
  wide?: boolean;
};

const portfolioRows: Array<
  | { type: "pair"; items: [PortfolioItem, PortfolioItem] }
  | { type: "wide"; item: PortfolioItem }
> = [
  {
    type: "wide",
    item: {
      title: "Flex",
      image: "/images/branding-agency-dubai/our-portfolio/flex.jpg",
      href: "https://socio.ae/case-studies/branding/flex",
      width: 1600,
      height: 900,
      wide: true,
    },
  },
  {
    type: "pair",
    items: [
      {
        title: "Katoora",
        image: "/images/branding-agency-dubai/our-portfolio/katoora.png",
        href: "https://socio.ae/case-studies/branding/katoora",
        width: 1188,
        height: 1350,
      },
      {
        title: "Domo Italiano",
        image:
          "/images/branding-agency-dubai/our-portfolio/domo-italiano.png",
        href: "https://socio.ae/case-studies/branding/domo-italiano",
        width: 1188,
        height: 1350,
      },
    ],
  },
  {
    type: "wide",
    item: {
      title: "Boonz",
      image: "/images/branding-agency-dubai/our-portfolio/boonz.png",
      href: "https://socio.ae/case-studies/branding/boonz",
      width: 2451,
      height: 1350,
      wide: true,
    },
  },
  {
    type: "pair",
    items: [
      {
        title: "House Of Burgers",
        image:
          "/images/branding-agency-dubai/our-portfolio/house-of-burgers.png",
        href: "https://socio.ae/case-studies/branding/house-of-burgers",
        width: 1188,
        height: 1350,
      },
      {
        title: "MOAI Connect",
        image: "/images/branding-agency-dubai/our-portfolio/moai-connect.png",
        href: "https://socio.ae/case-studies/branding/moai-connect",
        width: 1188,
        height: 1350,
      },
    ],
  },
  {
    type: "wide",
    item: {
      title: "Carlos",
      image: "/images/branding-agency-dubai/our-portfolio/carlos.png",
      href: "https://socio.ae/case-studies/branding/carloz",
      width: 2451,
      height: 1350,
      wide: true,
    },
  },
  {
    type: "pair",
    items: [
      {
        title: "Lucia Lach",
        image: "/images/branding-agency-dubai/our-portfolio/lucia-lach.png",
        href: "https://socio.ae/case-studies/branding/lucia-lach",
        width: 1188,
        height: 1350,
      },
      {
        title: "Cuddly",
        image: "/images/branding-agency-dubai/our-portfolio/cuddly.png",
        href: "https://socio.ae/case-studies/branding/cuddly",
        width: 1188,
        height: 1350,
      },
    ],
  },
  {
    type: "wide",
    item: {
      title: "SweetCha",
      image: "/images/branding-agency-dubai/our-portfolio/sweetcha.png",
      href: "https://socio.ae/case-studies/branding/sweetcha",
      width: 2451,
      height: 1350,
      wide: true,
    },
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
  const titleClass = item.wide
    ? "max-w-[12ch] text-[36px] leading-[0.96] min-[810px]:text-[48px] min-[1200px]:text-[64px]"
    : "max-w-[10ch] text-[36px] leading-[0.96] min-[810px]:text-[48px] min-[1200px]:text-[64px]";

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group relative block w-full overflow-hidden rounded-[20px]"
    >
      <Image
        src={item.image}
        alt={item.title}
        width={item.width}
        height={item.height}
        sizes={
          item.wide
            ? "(min-width: 1440px) 1320px, (min-width: 1200px) calc(100vw - 120px), (min-width: 810px) calc(100vw - 64px), calc(100vw - 32px)"
            : "(min-width: 1440px) 636px, (min-width: 1200px) calc((100vw - 168px) / 2), (min-width: 810px) calc((100vw - 88px) / 2), calc(100vw - 32px)"
        }
        className="h-auto w-full"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/28 to-black/10 opacity-100 transition-opacity duration-300 min-[810px]:opacity-0 min-[810px]:group-hover:opacity-100 min-[810px]:group-focus-visible:opacity-100" />

      <div className="absolute inset-0 flex flex-col justify-between p-[24px] text-white transition-all duration-300 min-[810px]:p-[30px] min-[810px]:opacity-0 min-[810px]:translate-y-5 min-[810px]:group-hover:translate-y-0 min-[810px]:group-hover:opacity-100 min-[810px]:group-focus-visible:translate-y-0 min-[810px]:group-focus-visible:opacity-100">
        <h3
          className={`font-medium tracking-[-0.01em] text-white ${titleClass}`}
          style={{
            fontFamily:
              '"BDO Grotesk Medium", "Lexend", var(--font-lexend), sans-serif',
          }}
        >
          {item.title}
        </h3>

        <span className="inline-flex w-fit items-center gap-3 rounded-[130px] bg-white px-[24px] py-[16px] font-inter text-[14px] font-medium tracking-[-0.01em] text-[#010101] shadow-[0_14px_30px_rgba(0,0,0,0.18)] min-[810px]:px-[30px] min-[810px]:py-[20px] min-[810px]:text-[16px]">
          View Case Study
          <ArrowIcon />
        </span>
      </div>
    </a>
  );
}

const OurPortfolio = () => {
  return (
    <section
      id="portfolio-branding"
      aria-labelledby="portfolio-branding-heading"
      className="w-full bg-white px-4 py-[60px] min-[810px]:px-8 min-[810px]:py-[62px] min-[1200px]:px-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-6 min-[1200px]:gap-12">
        <div className="flex w-full max-w-[860px] flex-col items-center gap-4 text-center">
          <div className="rounded-[50px] bg-[#f5f5f5] px-[22px] py-[2px]">
            <p className="font-inter text-[12px] font-semibold tracking-[0.05em] text-[#525252] min-[810px]:text-[14px] min-[810px]:leading-[160%]">
              Our Customers
            </p>
          </div>

          <h2
            id="portfolio-branding-heading"
            className="font-lexend text-[40px] font-bold leading-[1.16] tracking-[-2px] text-[#171717] min-[810px]:text-[52px]"
          >
            Our Portfolio
          </h2>

          <p className="font-lexend text-[16px] font-medium leading-[1.4] tracking-[-0.1px] text-[#767575] min-[810px]:text-[20px] min-[810px]:leading-[1.5] min-[810px]:tracking-[-0.5px]">
            Whether you&apos;re looking to launch a dynamic e-commerce
            platform, an engaging informational site, or a custom application,
            our team of expert developers utilizes the latest technologies to
            deliver scalable, user-friendly websites tailored to your business
            needs.
          </p>
        </div>

        <div className="flex w-full flex-col gap-6 min-[1200px]:gap-12">
          {portfolioRows.map((row, index) =>
            row.type === "pair" ? (
              <div
                key={`pair-${index}`}
                className="grid w-full grid-cols-1 gap-6 min-[810px]:grid-cols-2 min-[1200px]:gap-12"
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
