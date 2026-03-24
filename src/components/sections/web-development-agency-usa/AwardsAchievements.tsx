/* eslint-disable @next/next/no-img-element */

type AwardItem = {
  title: string;
  description: string;
  logo: string;
  alt: string;
  logoClassName: string;
};

const awards: AwardItem[] = [
  {
    title: "GulfToday",
    description:
      "We're recognized as a top web development company in Dubai, United Arab Emirates by AppFutura for our innovative website design.",
    logo: "/images/web-development-awards/horizon-interactive-awards.svg",
    alt: "Horizon Interactive Awards",
    logoClassName: "w-[215px] md:w-[240px]",
  },
  {
    title: "Clutch",
    description:
      "We are acknowledged by Clutch as one of the top B2B companies for cultivating digitization all around the business world.",
    logo: "/images/web-development-awards/clutch.webp",
    alt: "Clutch",
    logoClassName: "h-[132px] w-[132px] md:h-[142px] md:w-[142px]",
  },
  {
    title: "MEA Business Awards",
    description:
      "Our company has been awarded Best Web Development Agency - Dubai for our excellence in web creation and design.",
    logo: "/images/web-development-awards/mea-business-awards.webp",
    alt: "dotCOMM Awards",
    logoClassName: "h-[118px] w-[148px] md:h-[126px] md:w-[164px]",
  },
  {
    title: "Acquisition Internation",
    description:
      "We are honored by Acquisition Internation as a Most Client-Focused Web Development Agency -Dubai, UAE.",
    logo: "/images/web-development-awards/topdevelopers.png",
    alt: "TopDevelopers",
    logoClassName: "w-[170px] md:w-[186px]",
  },
  {
    title: "Shopify Partners",
    description:
      "We are proud to be Shopify Partners for building high performance & innovative e commerce solutions in Dubai, UAE",
    logo: "/images/web-development-awards/shopify-partners.png",
    alt: "Shopify Partners",
    logoClassName: "w-[175px] md:w-[205px]",
  },
  {
    title: "Khaleej Times",
    description:
      "We are proud to be featured as Revolutionizing Digital Marketing for our next-gen services by Khaleej Times.",
    logo: "/images/web-development-awards/softwareworld.svg",
    alt: "SoftwareWorld",
    logoClassName: "w-[154px] md:w-[178px]",
  },
];

function AwardsCard({ award }: { award: AwardItem }) {
  return (
    <article className="flex h-full flex-col items-center bg-[#ffffff] px-6 pb-8 pt-8 text-center shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] sm:px-8 sm:pb-10">
      <div className="flex min-h-[146px] w-full items-center justify-center sm:min-h-[158px]">
        <img
          src={award.logo}
          alt={award.alt}
          className={`${award.logoClassName} h-auto max-h-[146px] object-contain`}
          loading="lazy"
          decoding="async"
        />
      </div>

      <h3 className="mt-3 font-inter text-[24px] font-medium leading-[1.12] tracking-[-0.03em] text-[#171717]">
        {award.title}
      </h3>

      <p className="mt-4 max-w-[302px] font-inter text-[15px] leading-[1.48] tracking-[-0.01em] text-[#898989]">
        {award.description}
      </p>
    </article>
  );
}

function getCardBorderClass(index: number) {
  const mobileBorder =
    index < awards.length - 1 ? "border-b border-[#e4e8e9]" : "";
  const tabletBorderRight =
    index % 2 === 0 ? "md:border-r md:border-[#e4e8e9]" : "";
  const tabletBorderBottom =
    index < awards.length - 2
      ? "md:border-b md:border-[#e4e8e9]"
      : "md:border-b-0";
  const desktopBorderRight =
    index % 3 !== 2 ? "xl:border-r xl:border-[#e4e8e9]" : "xl:border-r-0";
  const desktopBorderBottom =
    index < awards.length - 3
      ? "xl:border-b xl:border-[#e4e8e9]"
      : "xl:border-b-0";

  return [
    mobileBorder,
    tabletBorderRight,
    tabletBorderBottom,
    desktopBorderRight,
    desktopBorderBottom,
  ].join(" ");
}

const AwardsAchievements = () => {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center">
        <div className="flex w-full max-w-[920px] flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 rounded-[60px] bg-[#f8fafc] px-4 py-1.5 shadow-[inset_0_0_0_1px_rgba(2,6,23,0.06)]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#020617]">
              <span className="h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="font-inter text-[14px] leading-[1.6] text-[#020617]">
              Our Recognitions
            </span>
          </div>

          <h2 className="mt-6 font-inter text-[40px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#171717] sm:text-[46px] lg:text-[52px]">
            Awards &amp; Achievements
          </h2>

          <p className="mt-5 max-w-[860px] font-mulish text-[16px] leading-[1.8] tracking-[-0.01em] text-[#767575] sm:text-[18px] lg:text-[20px]">
            Socio stands tall as one of the top web development companies in
            Dubai. Our exceptional team of award-winning experts is the secret
            behind our success. Our ability to achieve business objectives by
            producing websites that drive sales is seamless.
          </p>
        </div>

        <div className="mt-14 w-full overflow-hidden  border border-[#e4e8e9] bg-[#ffffff]">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {awards.map((award, index) => (
              <div key={award.title} className={getCardBorderClass(index)}>
                <AwardsCard award={award} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsAchievements;
