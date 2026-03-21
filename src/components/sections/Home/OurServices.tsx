"use client";

import Image from "next/image";
import Link from "next/link";

type ServiceCard = {
  title: string;
  description?: string;
  href: string;
  icon: string;
  image: string;
};

const leadCard: ServiceCard = {
  title: "Generate high-quality leads and achieve your revenue targets.",
  description:
    "Whether you're looking to amplify sales or enhance your online presence, our innovative approach is designed to scale your business by 8-10x.",
  href: "/digital-marketing-agency-dubai",
  icon: "https://framerusercontent.com/images/25QsD0z8u0K0DkMgAZD1BfjSBQ.png",
  image: "https://framerusercontent.com/images/KeDwc8RTqEeE9aW1OHLEVIYdQw.png",
};

const seoCard: ServiceCard = {
  title: "Turn Clicks into Customers with SEO That Delivers!",
  description:
    "Maximize your website's search engine rankings through our dedicated SEO strategies, designed to boost your digital presence and drive meaningful business results.",
  href: "/seo-dubai",
  icon: "https://framerusercontent.com/images/hFTmeT3QwD3Y2sqhcICKxgHXoN8.png",
  image: "https://framerusercontent.com/images/ud6zLI4M2xm1r0eDmuyz09uJfQ8.png",
};

const websiteCard: ServiceCard = {
  title: "Website Development\nThat Attracts Customers.",
  description:
    "We infuse your ideas with a touch of innovation and reliability, ensuring that your website exceeds all expectations.",
  href: "/web-development-agency-dubai",
  icon: "https://framerusercontent.com/images/5NxkyrhcGUvzkdiy2nVVxW56A.png",
  image: "https://framerusercontent.com/images/ieIF6o4qfrgeQkZmukbp0KuHs.png",
};

const socialCard: ServiceCard = {
  title: "Simplify your Social Media Management.",
  href: "/social-media-marketing-dubai",
  icon: "https://framerusercontent.com/images/vlqq2HnWW3XIGdf89XqYep3hSw.png",
  image: "https://framerusercontent.com/images/9mGMfyYaMrGXidqd4webvyvmvoo.png",
};

const brandingCard: ServiceCard = {
  title: "It's time to revamp\nyour Branding.",
  href: "/branding-agency-dubai",
  icon: "https://framerusercontent.com/images/aosrOCixiGbJrsqiMARS81KLDXQ.png",
  image: "https://framerusercontent.com/images/E2mudMo8QsnORiEwBi0G0J6cIA.jpg",
};

const promoCards = [
  {
    title: "Public Relation Solutions",
    href: "/pr-agency-dubai",
    icon: "https://framerusercontent.com/images/vlqq2HnWW3XIGdf89XqYep3hSw.png",
    image: "https://framerusercontent.com/images/RfxOLZJ38FpVW6nptPChTk0UWx0.png?width=1243&height=894",
    background: "bg-[#ffe2de]",
    titleColor: "text-[#c83302]",
  },
  {
    title: "Simplify your WhatsApp Game.",
    href: "/whatsapp-marketing",
    icon: "https://framerusercontent.com/images/vlqq2HnWW3XIGdf89XqYep3hSw.png",
    image: "https://framerusercontent.com/images/uRXPt2eLAsQ8VgfutkTvPu2fs.png?width=1786&height=1797",
    background: "bg-[#acfcfb]",
    titleColor: "text-[#045ea8]",
  },
];

const headingClassName =
  "font-lexend text-[24px] font-semibold leading-[1.2] tracking-[0] text-[#0f1728] md:text-[25px]";

const bodyClassName =
  "font-inter text-[16px] font-normal leading-[1.2] text-[#454545]";

function IconBadge({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-black p-3">
      <div className="relative h-[26px] w-[26px]">
        <Image alt={alt} fill sizes="26px" src={src} />
      </div>
    </div>
  );
}

export default function OurServices() {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[29px]">
        <div className="flex w-full max-w-[650px] flex-col items-center gap-4 text-center">
          <div className="rounded-full bg-[#f5f5f5] px-5 py-1.5">
            <p className="font-inter text-[12px] font-semibold uppercase tracking-[0.05em] leading-6 text-[#525252]">
              Featured
            </p>
          </div>
          <h2 className="font-lexend text-[42px] font-bold leading-[1.16] tracking-[-2px] text-[#171717] md:text-[52px]">
            Our Services
          </h2>
          <p className="font-inter text-[16px] leading-[1.2] text-[#454545]">
            Reaching the right audience has never been simpler.
          </p>
        </div>

        <div className="grid w-full gap-[10px] lg:grid-cols-[1fr_1fr]">
          <Link
            className="overflow-hidden rounded-[10px] bg-[linear-gradient(180deg,#ffffff_0%,#ffbf9f_98%)] transition-transform duration-200 hover:-translate-y-1"
            href={leadCard.href}
          >
            <div className="flex h-full flex-col">
              <div className="flex flex-col items-start gap-[10px] p-8 md:p-[50px]">
                <IconBadge alt="Digital marketing icon" src={leadCard.icon} />
                <h3 className={headingClassName}>{leadCard.title}</h3>
                <p className={bodyClassName}>{leadCard.description}</p>
              </div>
              <div className="relative h-[280px] w-full px-6 pb-0 pt-4 md:h-[499px] md:px-10 md:pt-10">
                <Image
                  alt="Digital marketing illustration"
                  fill
                  className="object-contain px-2"
                  sizes="(max-width: 1024px) 100vw, 603px"
                  src={leadCard.image}
                />
              </div>
            </div>
          </Link>

          <Link
            className="overflow-hidden rounded-[10px] bg-white transition-transform duration-200 hover:-translate-y-1"
            href={seoCard.href}
          >
            <div className="flex h-full flex-col bg-[linear-gradient(180deg,#8ab1ff_0%,#ffffff_100%)]">
              <div className="relative h-[250px] w-full md:h-[379px]">
                <Image
                  alt="SEO dashboard illustration"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 603px"
                  src={seoCard.image}
                />
              </div>
              <div className="flex flex-1 flex-col items-start gap-[10px] p-8 md:p-[50px]">
                <IconBadge alt="SEO icon" src={seoCard.icon} />
                <h3 className={headingClassName}>{seoCard.title}</h3>
                <p className={bodyClassName}>{seoCard.description}</p>
              </div>
            </div>
          </Link>
        </div>

        <Link
          className="w-full overflow-hidden rounded-[10px] bg-[#f6f7f9] transition-transform duration-200 hover:-translate-y-1"
          href={websiteCard.href}
        >
          <div className="grid items-center gap-8 p-8 md:p-[55px] lg:grid-cols-[minmax(0,1fr)_512px]">
            <div className="flex flex-col items-start gap-[10px]">
              <IconBadge alt="Web development icon" src={websiteCard.icon} />
              <h3 className={headingClassName}>
                {websiteCard.title.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
              <p className={bodyClassName}>{websiteCard.description}</p>
            </div>
            <div className="relative h-[230px] md:h-[318px]">
              <Image
                alt="Website development illustration"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 512px"
                src={websiteCard.image}
              />
            </div>
          </div>
        </Link>

        <div className="grid w-full gap-[10px] lg:grid-cols-[0.92fr_1fr_1.08fr]">
          <Link
            className="relative min-h-[360px] overflow-hidden rounded-[10px] bg-[#adc8ff] p-8 transition-transform duration-200 hover:-translate-y-1 md:min-h-[424px] md:p-10"
            href={socialCard.href}
          >
            <div className="relative z-10 flex h-full flex-col items-start gap-[17px]">
              <IconBadge alt="Social media icon" src={socialCard.icon} />
              <h3 className="font-lexend text-[24px] font-semibold leading-[1.2] text-white">
                {socialCard.title}
              </h3>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 h-[233px] w-[250px] md:h-[233px] md:w-[250px]">
              <Image
                alt="Social media illustration"
                fill
                className="object-contain object-left-bottom"
                sizes="250px"
                src={socialCard.image}
              />
            </div>
          </Link>

          <Link
            className="relative min-h-[360px] overflow-hidden rounded-[10px] transition-transform duration-200 hover:-translate-y-1 md:min-h-[424px]"
            href={brandingCard.href}
          >
            <Image
              alt="Branding background"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 434px"
              src={brandingCard.image}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_42%,rgba(255,255,255,0.08)_100%)]" />
            <div className="relative z-10 flex h-full flex-col items-start gap-[10px] p-8 md:px-[55px] md:pb-[210px] md:pt-[5px]">
              <div className="pt-6">
                <IconBadge alt="Branding icon" src={brandingCard.icon} />
              </div>
              <h3 className="font-lexend text-[24px] font-semibold leading-[1.2] text-black">
                {brandingCard.title.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
            </div>
          </Link>

          <Link
            className="relative min-h-[360px] overflow-hidden rounded-[10px] bg-[#ffcfe4] transition-transform duration-200 hover:-translate-y-1 md:min-h-[424px]"
            href="/digital-marketing-agency-dubai"
          >
            <div className="relative z-10 flex h-full max-w-[189px] flex-col items-start gap-[10px] px-8 pb-[210px] pt-[55px] md:px-[55px]">
              <h3 className="font-lexend text-[24px] font-semibold leading-[1.2] text-black">
                Explore all our digital Marketing Services
              </h3>
              <span className="inline-flex min-h-[48px] items-center justify-center rounded-[333px] border border-[#7f57f1] bg-[#7f57f1] px-5 py-3 font-inter text-[16px] font-medium text-white shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                Learn More
              </span>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-[-7px] h-[307px] w-[157px] md:h-[448px] md:w-[222px]">
              <Image
                alt="Marketing services collage"
                fill
                className="object-cover object-right-bottom"
                sizes="(max-width: 1024px) 157px, 222px"
                src="https://framerusercontent.com/images/bbfvTOYEbckl4yfZTIdz8ywYaE.png"
              />
            </div>
          </Link>
        </div>

        <div className="grid w-full gap-[10px] lg:grid-cols-2">
          {promoCards.map((card) => (
            <Link
              key={card.title}
              className={`relative min-h-[360px] overflow-hidden rounded-[10px] ${card.background} transition-transform duration-200 hover:-translate-y-1 md:min-h-[424px]`}
              href={card.href}
            >
              <div className="relative z-10 flex h-full max-w-[287px] flex-col items-start gap-[17px] px-[39px] pt-[71px]">
                <IconBadge alt={`${card.title} icon`} src={card.icon} />
                <h3 className={`font-lexend text-[24px] font-semibold leading-[1.2] ${card.titleColor}`}>
                  {card.title}
                </h3>
              </div>
              <div
                className={`pointer-events-none absolute ${
                  card.title.startsWith("Public")
                    ? "bottom-[-1px] right-[-62px] h-[370px] w-[516px]"
                    : "bottom-[-13px] right-[-13px] h-[414px] w-[392px]"
                }`}
              >
                <Image
                  alt={card.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 516px"
                  src={card.image}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
