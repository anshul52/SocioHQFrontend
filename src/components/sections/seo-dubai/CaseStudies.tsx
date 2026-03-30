"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type CaseStudy = {
  id: string;
  site: string;
  href: string;
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  logoClassName?: string;
  keywords: { keyword: string; position: number }[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cclimo",
    site: "cclimo.ae",
    href: "https://socio.ae/case-studies/seo/cclimo",
    logo: "/images/seo-dubai/case-studies/cclimo-logo.png",
    logoAlt: "CC Limo",
    logoWidth: 82,
    logoHeight: 35,
    logoClassName: "w-[74px] md:w-[82px]",
    keywords: [
      { keyword: "limousine dubai", position: 1 },
      { keyword: "dubai limos", position: 1 },
      { keyword: "limousine services dubai", position: 2 },
      { keyword: "limo in dubai", position: 2 },
      { keyword: "service limousine", position: 3 },
    ],
  },
  {
    id: "vavci",
    site: "vavci.ae",
    href: "https://socio.ae/case-studies/seo/vavci",
    logo: "/images/seo-dubai/case-studies/vavci-logo.webp",
    logoAlt: "VAVCI",
    logoWidth: 82,
    logoHeight: 35,
    logoClassName: "w-[80px] md:w-[82px]",
    keywords: [
      { keyword: "tuxedo suit", position: 1 },
      { keyword: "mens wedding suits dubai", position: 1 },
      { keyword: "business formals", position: 1 },
      { keyword: "sherwani dubai", position: 1 },
      { keyword: "suits and tuxedos", position: 1 },
    ],
  },
  {
    id: "ascend",
    site: "ascenduae.com",
    href: "https://socio.ae/case-studies/seo/ascend-uae",
    logo: "/images/seo-dubai/case-studies/ascend-logo.png",
    logoAlt: "Ascend",
    logoWidth: 82,
    logoHeight: 35,
    logoClassName: "w-[82px]",
    keywords: [
      { keyword: "mobile scaffolding", position: 1 },
      { keyword: "telescopic platform ladder", position: 2 },
      { keyword: "scaffolding and ladders", position: 2 },
      { keyword: "grp ladder", position: 3 },
      { keyword: "a type ladder", position: 3 },
    ],
  },
  {
    id: "addtocart",
    site: "addtocart.ae",
    href: "https://socio.ae/case-studies/seo/atc",
    logo: "/images/seo-dubai/case-studies/addtocart-logo.webp",
    logoAlt: "Add To Cart",
    logoWidth: 82,
    logoHeight: 35,
    logoClassName: "w-[82px]",
    keywords: [
      { keyword: "rice paper", position: 1 },
      { keyword: "oreo biscuits", position: 1 },
      { keyword: "oil cooking", position: 1 },
      { keyword: "crabstick", position: 2 },
      { keyword: "philadelphia cheese", position: 2 },
    ],
  },
  {
    id: "hrg",
    site: "hrginvestments.com",
    href: "https://socio.ae/case-studies/seo/hrg",
    logo: "/images/seo-dubai/case-studies/hrg-logo.png",
    logoAlt: "HRG Investments",
    logoWidth: 82,
    logoHeight: 35,
    logoClassName: "w-[82px]",
    keywords: [
      { keyword: "investment companies in dubai", position: 2 },
      { keyword: "investment in dubai companies", position: 2 },
      { keyword: "investment companies in dubai", position: 2 },
      { keyword: "dubai investment firm", position: 3 },
      { keyword: "investments dubai", position: 6 },
    ],
  },
];

const CaseStudies = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 1 | -1) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card = slider.querySelector<HTMLElement>("[data-case-study-card]");

    if (!card) return;

    const gap = window.innerWidth >= 768 ? 12 : 14;
    const offset = card.getBoundingClientRect().width + gap;

    slider.scrollBy({
      left: direction * offset,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="w-full mx-auto bg-white flex items-center justify-center">
        <div className="flex max-w-[900px] flex-col items-center gap-6 text-center mb-8">
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
        </div>
      </div>
      <section className="relative isolate w-full overflow-hidden bg-[#071b28]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#031927_0%,#081b29_28%,#3f2a49_69%,#69466b_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_18%,rgba(144,91,155,0.46),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(9,27,39,0.7),transparent_40%)]" />

        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-0 py-6 md:min-h-[503px] md:gap-[54px] md:py-0">
          <div className="flex items-center justify-center px-5 md:justify-between md:px-0 md:pt-0">
            <h2 className="font-lexend text-[35px] leading-[75px] font-extrabold tracking-[-0.03em] text-white md:text-[52px]">
              Case Studies
            </h2>

            <div className="hidden items-center gap-6 md:flex">
              <button
                type="button"
                aria-label="Previous case study"
                onClick={() => handleScroll(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#13233A] transition-transform duration-200 hover:scale-105"
              >
                <ArrowLeft className="h-[22px] w-[22px]" strokeWidth={2.5} />
              </button>

              <button
                type="button"
                aria-label="Next case study"
                onClick={() => handleScroll(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#13233A] transition-transform duration-200 hover:scale-105"
              >
                <ArrowRight className="h-[22px] w-[22px]" strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <div ref={sliderRef}>
            <div className="-mx-[8px] overflow-x-auto px-[8px] pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:-mx-3 md:px-3">
              <div className="flex w-max gap-[14px] md:gap-3">
                {CASE_STUDIES.map((study) => (
                  <article
                    key={study.id}
                    data-case-study-card
                    className="flex w-[405px] shrink-0 flex-col gap-[10px] md:w-[393px] md:gap-[12px]"
                  >
                    <div className="flex items-end justify-between px-7 md:px-6">
                      <a
                        href={study.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-inter text-[16px] leading-[19.2px] !text-white underline !decoration-white underline-offset-[3px] visited:!text-white hover:!text-white"
                      >
                        {study.site}
                      </a>

                      <div
                        className={`relative h-[35px] shrink-0 ${study.logoClassName ?? "w-[82px]"}`}
                      >
                        <Image
                          src={study.logo}
                          alt={study.logoAlt}
                          fill
                          sizes="82px"
                          className="object-contain object-center"
                        />
                      </div>
                    </div>

                    <div className="flex min-h-[480px] flex-col rounded-[10px] bg-white px-6 pb-[28px] pt-[16px] md:min-h-[300px] md:px-[18px] md:pb-[10px] md:pt-[14px]">
                      <div className="flex items-center justify-between text-[#0A1F44]">
                        <p className="font-inter text-[24px] leading-none font-bold md:text-[18px]">
                          Keywords
                        </p>

                        <div className="flex items-center gap-[10px]">
                          <Image
                            src="/images/seo-dubai/case-studies/uae-flag.webp"
                            alt="UAE flag"
                            width={15}
                            height={8}
                            className="h-2 w-[15px]"
                          />
                          <p className="font-inter text-[24px] leading-none font-bold md:text-[18px]">
                            Position
                          </p>
                        </div>
                      </div>

                      <div className="mt-10 flex flex-1 flex-col gap-7 md:mt-5 md:gap-[14px]">
                      {study.keywords.map((item, index) => (
                        <div
                          key={`${study.id}-${index}-${item.keyword}`}
                          className="grid grid-cols-[minmax(0,1fr)_40px] items-center gap-4"
                        >
                            <p className="font-inter text-[20px] leading-[1.25] font-normal text-[#828282] md:text-[14px] md:leading-[16.8px]">
                              {item.keyword}
                            </p>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#13D186]">
                              <span className="font-inter text-[18px] leading-none font-bold text-white">
                                {item.position}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <a
                        href={study.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mx-auto mt-10 inline-flex h-[56px] items-center justify-center rounded-[10px] bg-[#020617] px-7 font-inter text-[17px] leading-none font-medium !text-white shadow-[0_0_0_1px_rgba(2,6,23,1)] transition-colors duration-200 visited:!text-white hover:bg-[#0b1730] hover:!text-white md:mt-4 md:h-[34px] md:rounded-[8px] md:px-[16px] md:text-[14px]"
                      >
                        View Case Study
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
