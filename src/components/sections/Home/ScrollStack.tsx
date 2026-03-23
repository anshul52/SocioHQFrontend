"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollStackContainer, {
  ScrollStackItem,
} from "@/components/ui/ScrollStack";

type StackSlide = {
  badge: string;
  title: string;
  description: string;
  href: string;
  image: string;
  gradientClass: string;
  glowColor: string;
  reverse?: boolean;
};

const stackSlides: StackSlide[] = [
  {
    badge: "Search Engine Optimization",
    title: "Rank #1 On\nSearch Engine",
    description:
      "Your business deserves organic growth. We design SEO campaigns that not only highlight your brand to potential audiences but also drive market expansion.",
    href: "https://socio.ae/seo-dubai",
    image:
      "https://framerusercontent.com/images/1ENVBnK4sGdrYkeuAXNMYhqik.jpg?width=1113&height=1173",
    gradientClass: "socio-scroll-gradient-1",
    glowColor: "rgba(130, 201, 94, 0.32)",
  },
  {
    badge: "Pay Per Click",
    title: "Find Leads Which\nConvert",
    description:
      "Unlock the full potential of Paid Search with data, AI, and smart creative thinking. Our Pay Per Click services ensure we Driving sales, Generate leads, & Increase Your Brand Awareness.",
    href: "https://socio.ae/ppc-agency-dubai",
    image:
      "https://framerusercontent.com/images/WwRcmIiPilRFoefyLlCBXiw8rA.jpg?width=1106&height=1174",
    gradientClass: "socio-scroll-gradient-2",
    glowColor: "rgba(132, 130, 214, 0.28)",
    reverse: true,
  },
  {
    badge: "Web Development",
    title: "Websites That Work Wonders",
    description:
      "From concept to launch, we build user-focused, modern websites that amplify your brand and grow your business.",
    href: "https://socio.ae/web-development-agency-dubai",
    image:
      "https://framerusercontent.com/images/Iezw644CW9qmN6Jo6cF9S7Sb7MY.png?width=2346&height=2346",
    gradientClass: "socio-scroll-gradient-3",
    glowColor: "rgba(212, 135, 64, 0.28)",
  },
  {
    badge: "Social Media Marketing",
    title: "Revamp You\nSocial Media",
    description:
      "Boost your brand visibility & credibility by harnessing the full power of social media marketing. Let the experts handle the extra work for you from copyright to content creation to running successful brand campaigns.",
    href: "https://socio.ae/social-media-marketing-dubai",
    image:
      "https://framerusercontent.com/images/6W9l1HRRPWtgzfDQxAn3JvL1wPU.jpg?width=1173&height=1173",
    gradientClass: "socio-scroll-gradient-4",
    glowColor: "rgba(186, 138, 214, 0.32)",
    reverse: true,
  },
  {
    badge: "Branding",
    title: "Create Captivating\nExperiences",
    description:
      "We are a creative agency with Super Powers. An effective brand strategy is the blueprint for your business success, hence we create captivating brand experiences to bring your ideas to life.",
    href: "https://socio.ae/branding-agency-dubai",
    image:
      "https://framerusercontent.com/images/5qynqAwXX2r2P50LCTkHYwhxso.jpg?width=1173&height=1173",
    gradientClass: "socio-scroll-gradient-5",
    glowColor: "rgba(23, 155, 110, 0.24)",
  },
  {
    badge: "Branding",
    title: "Connect, Engage, Convert WhatsApp",
    description:
      "Unlock the power of WhatsApp marketing to build meaningful customer connections, boost engagement, and drive sales.",
    href: "https://socio.ae/",
    image:
      "https://framerusercontent.com/images/V3iJDRKDgIQNeYgK1LAHe3luEGA.png?width=1208&height=1080",
    gradientClass: "socio-scroll-gradient-6",
    glowColor: "rgba(15, 100, 153, 0.24)",
    reverse: true,
  },
];

function LearnMorePill() {
  return (
    <span className="relative inline-flex min-h-[46px] items-center justify-center rounded-full px-5 py-3 font-inter text-[14px] font-medium text-white">
      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-[rgb(181,225,255)] to-transparent opacity-20" />
      <span className="relative rounded-full bg-[#0a0a0a] px-5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        Learn More
      </span>
    </span>
  );
}

function StackCard({ slide }: { slide: StackSlide }) {
  const titleLines = slide.title.split("\n");

  return (
    <ScrollStackItem
      itemClassName={`scroll-stack-home-card ${slide.gradientClass} min-h-[540px] overflow-hidden border border-white/45 p-5 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.32)] sm:min-h-[560px] sm:p-7 lg:p-8`}
    >
      <Link
        className="block h-full"
        href={slide.href}
        rel="noreferrer"
        target="_blank"
      >
        <div
          className={`relative grid min-h-[500px] items-stretch gap-8 lg:min-h-[496px] ${
            slide.reverse
              ? "lg:grid-cols-[438px_minmax(0,1fr)]"
              : "lg:grid-cols-[minmax(0,1fr)_438px]"
          }`}
        >
          <div
            className={`flex flex-col justify-between ${
              slide.reverse ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div>
              <div className="inline-flex rounded-[12px] border border-[#e2e8f0] bg-white/20 px-4 py-2">
                <span className="font-mulish text-[14px] leading-[1.6] text-[#020617]">
                  {slide.badge}
                </span>
              </div>

              <h3 className="mt-5 font-lexend text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[0.96] tracking-[-0.05em] text-[#111827]">
                {titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>

              <p className="mt-5 max-w-[620px] font-mulish text-[15px] leading-[1.65] tracking-[-0.01em] text-[#344256] sm:text-[16px]">
                {slide.description}
              </p>
            </div>

            <div className="mt-8 border-t border-[#e2e8f0] pt-6">
              <LearnMorePill />
            </div>
          </div>

          <div
            className={`relative ${
              slide.reverse ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-[12px] sm:min-h-[340px]">
              <Image
                alt={slide.title.replace("\n", " ")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 438px"
                src={slide.image}
                priority={false}
                loading="lazy"
                quality={85}
              />
            </div>
          </div>
        </div>
      </Link>
    </ScrollStackItem>
  );
}

export default function ScrollStack() {
  return (
    <section className="relative w-full bg-white px-4 pb-20 pt-8 md:px-6 md:pb-28 md:pt-12 lg:px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        <ScrollStackContainer
          baseScale={0.86}
          blurAmount={0}
          itemDistance={92}
          itemScale={0.028}
          itemStackDistance={24}
          scaleEndPosition="4%"
          stackPosition="12%"
          useWindowScroll
        >
          {stackSlides.map((slide, index) => (
            <StackCard key={`${index}-${slide.title}`} slide={slide} />
          ))}
        </ScrollStackContainer>
      </div>

      <style jsx global>{`
        /* Force GPU acceleration and optimize rendering */
        .scroll-stack-home-card {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          perspective: 1000px;
          -webkit-perspective: 1000px;
          transform: translate3d(0, 0, 0);
          -webkit-transform: translate3d(0, 0, 0);
        }

        /* Ultra-simple solid color backgrounds - zero animation */
        .socio-scroll-gradient-1 {
          background-color: #b3f0d4;
        }

        .socio-scroll-gradient-2 {
          background-color: #e8e7f5;
        }

        .socio-scroll-gradient-3 {
          background-color: #f7e8dd;
        }

        .socio-scroll-gradient-4 {
          background-color: #fce8ea;
        }

        .socio-scroll-gradient-5 {
          background-color: #e0f8f0;
        }

        .socio-scroll-gradient-6 {
          background-color: #e3f3f9;
        }

        /* Optimize text rendering */
        .scroll-stack-home-card * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeSpeed;
        }

        /* Optimize images */
        .scroll-stack-home-card img {
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }
      `}</style>
    </section>
  );
}
