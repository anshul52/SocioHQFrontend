import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeDollarSign,
  BarChart3,
  BookOpenText,
  BriefcaseBusiness,
  MessageSquareText,
  SlidersHorizontal,
} from "lucide-react";

type Point = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

type Insight = {
  badge: string;
  badgeTextClassName?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWrapperClassName: string;
  imageClassName: string;
  imageFirst?: boolean;
  mobileCardClassName?: string;
  points: Point[];
};

const INSIGHTS: Insight[] = [
  {
    badge: "Hot Lead Generation",
    title: "Achieve your revenue targets.",
    description:
      "Forget the scattergun approach. Our PPC services are fine-tuned to identify and engage your ideal customer demographic directly. With advanced targeting techniques, we ensure your ads reach those who are most likely to convert, making every ad dollar count.",
    imageSrc:
      "/images/ppc-agency-dubai/four-section/achieve-revenue-targets.png",
    imageAlt: "Revenue-focused PPC dashboard illustration",
    imageWrapperClassName: "bg-[#7CC779]",
    imageClassName:
      "object-cover object-center md:absolute md:bottom-[-24px] md:left-0 md:h-[544px] md:w-[527px] md:max-w-none",
    points: [
      {
        title: "Effective Budget & Campaign Planning",
        description:
          "We make sure every penny you spend on ads gives you the maximum ROI possible",
        icon: BadgeDollarSign,
      },
      {
        title: "Transparent Communication",
        description:
          "We believe in maintaining open lines of communication with our clients providing them with detailed reports",
        icon: MessageSquareText,
      },
    ],
  },
  {
    badge: "Optimize Ad Performance",
    badgeTextClassName: "text-[18px]",
    title: "Creative & Compelling Ad Copies",
    description:
      "Compelling ad copies designed by our creative team are used to engage and convert viewers along with continuous optimization based on performance data so as to achieve highest click-through rates (CTRs) as well as highest conversion rates.",
    imageSrc: "/images/ppc-agency-dubai/four-section/creative-ad-copies.png",
    imageAlt: "Creative PPC ad copy illustration",
    imageWrapperClassName: "bg-[#FFAD8A]",
    imageClassName: "object-contain object-center",
    imageFirst: true,
    mobileCardClassName: "px-10 md:px-0",
    points: [
      {
        title: "Advanced Data Analytics",
        description:
          "We utilize the proactive approach of advanced data analytics which enables us to optimize campaigns more effectively and efficiently.",
        icon: BarChart3,
      },
      {
        title: "Custom Tailored Campaigns",
        description:
          "We recognize that each business has unique needs. Our personalized approach ensures that every PPC campaign is specifically designed to meet your needs.",
        icon: SlidersHorizontal,
      },
    ],
  },
  {
    badge: "Laser Focused Targeting",
    title: "Reach the right audience.",
    description:
      "Forget the scattergun approach. Our PPC services are fine-tuned to identify and engage your ideal customer demographic directly. With advanced targeting techniques, we ensure your ads reach those who are most likely to convert, making every ad dollar count.",
    imageSrc:
      "/images/ppc-agency-dubai/four-section/reach-right-audience.png",
    imageAlt: "Audience targeting illustration",
    imageWrapperClassName: "bg-[#C8E3FA]",
    imageClassName: "object-contain object-center",
    points: [
      {
        title: "In Depth Knowledge",
        description:
          "Our deep understanding of both the local UAE market and global digital trends allows us to craft campaigns that deliver.",
        icon: BookOpenText,
      },
      {
        title: "End to End Management",
        description:
          "Whether its tailored strategies or keyword research, we manage your campaigns end to end so you can focus on your business growth.",
        icon: BriefcaseBusiness,
      },
    ],
  },
];

const Badge = ({
  label,
  textClassName,
}: {
  label: string;
  textClassName?: string;
}) => {
  return (
    <div className="inline-flex w-fit items-center gap-[10px] rounded-[12px] border border-[#E2E8F0] px-3 py-[10px]">
      <div className="flex h-5 w-5 items-center justify-center rounded-[4px] bg-[#020617] text-white">
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
      </div>
      <span
        className={`font-inter text-[14px] leading-[160%] whitespace-nowrap text-[#020617] ${textClassName ?? ""}`}
      >
        {label}
      </span>
    </div>
  );
};

const PointBlock = ({ point }: { point: Point }) => {
  const Icon = point.icon;

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex w-full items-start gap-[10px]">
        <Icon
          className="mt-[7px] h-6 w-6 shrink-0 text-[#020617]"
          strokeWidth={2.2}
        />
        <h3 className="flex-1 font-lexend text-[26px] leading-[160%] font-semibold text-[#020617]">
          {point.title}
        </h3>
      </div>

      <p className="font-inter text-[14px] leading-[160%] text-[#020617]">
        {point.description}
      </p>
    </div>
  );
};

const ImageFrame = ({
  insight,
}: {
  insight: Pick<
    Insight,
    "imageSrc" | "imageAlt" | "imageWrapperClassName" | "imageClassName"
  >;
}) => {
  return (
    <div
      className={`relative h-[320px] w-full overflow-hidden rounded-[16px] border-4 border-white md:h-[580px] ${insight.imageWrapperClassName}`}
    >
      <Image
        src={insight.imageSrc}
        alt={insight.imageAlt}
        fill
        sizes="(min-width: 1200px) 527px, (min-width: 810px) 100vw, 100vw"
        className={insight.imageClassName}
      />
    </div>
  );
};

const InsightCard = ({ insight }: { insight: Insight }) => {
  const imageBlock = <ImageFrame insight={insight} />;

  const contentBlock = (
    <div className="flex w-full flex-col gap-8 md:flex-1">
      <div className="flex w-full flex-col items-start gap-4">
        <Badge label={insight.badge} textClassName={insight.badgeTextClassName} />

        <h2 className="w-full max-w-[650px] text-balance font-lexend text-[22px] leading-[20px] font-bold tracking-[0px] text-[#171717] md:text-[42px] md:leading-[116%] md:tracking-[-2px]">
          {insight.title}
        </h2>

        <p className="w-full font-inter text-[16px] leading-[120%] text-[#454545]">
          {insight.description}
        </p>
      </div>

      <div className="w-full border-t border-[#E2E8F0] pt-8">
        <div className="flex w-full flex-col gap-8 md:flex-row md:items-start">
          {insight.points.map((point) => (
            <div key={point.title} className="md:flex-1">
              <PointBlock point={point} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-[62px] ${insight.mobileCardClassName ?? ""}`}
    >
      {insight.imageFirst ? imageBlock : contentBlock}
      {insight.imageFirst ? contentBlock : imageBlock}
    </div>
  );
};

const FourSection = () => {
  return (
    <>
      <section className="overflow-hidden bg-white px-4 py-[60px] md:px-8 xl:px-[60px]">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="relative overflow-hidden rounded-[32px] border-4 border-white bg-[#F1F5F9] px-6 py-8 md:px-0 md:py-20">
            <div className="absolute top-[-16px] left-[-31px] h-[191px] w-[191px] rounded-full bg-[#F69A3266] blur-[100px] md:top-1/2 md:left-1/2 md:h-[420px] md:w-[420px] md:-translate-x-1/2 md:-translate-y-1/2" />
            <div className="absolute top-1/2 left-[74px] h-[171px] w-[171px] -translate-y-1/2 rounded-full bg-[#32F68066] blur-[100px] md:top-auto md:bottom-[62px] md:left-[34px] md:h-[251px] md:w-[251px] md:translate-y-0" />
            <div className="absolute top-1/2 left-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F332F666] blur-[100px] md:left-auto md:right-[-120px] md:h-[320px] md:w-[320px] md:translate-x-0" />

            <div className="relative z-10 mx-auto flex w-full max-w-[800px] flex-col items-center gap-8">
              <div className="flex w-full flex-col items-center gap-4 text-center">
                <h2 className="w-full text-balance font-lexend text-[22px] leading-[20px] font-bold tracking-[0px] text-[#171717] md:text-[42px] md:leading-[116%] md:tracking-[-2px]">
                  Your Trusted PPC Advertising Agency In Dubai
                </h2>

                <p className="w-full font-inter text-[16px] leading-[120%] text-[#454545]">
                  Recognized as one of the leading PPC agencies, we offer
                  comprehensive solutions including expertise in keyword
                  research, ad creation, bid management, A/B testing, and
                  continuous campaign optimization to ensure the best ROI for
                  our clients.
                </p>
              </div>

              <div className="flex w-full justify-center">
                <Link
                  href="/contact-us"
                  className="relative inline-flex min-h-[48px] items-center justify-center overflow-hidden rounded-[8px] border border-[#020617] bg-[#020617] px-[18px] py-3 font-inter text-[16px] font-medium leading-[160%] text-white"
                >
                  <span className="absolute inset-x-3 top-0 h-[42px] rounded-full bg-white/50 blur-[21px]" />
                  <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(84,84,84,0)_0%,rgba(69,69,72,0.34)_22.6%,rgba(30,41,59,1)_47.3%,rgba(15,23,42,0.33)_76.95%,rgba(15,23,42,0)_100%)] opacity-80" />
                  <span className="relative z-10">Get started</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[62px] px-10 py-8 pb-[120px] md:px-10 md:pt-10">
          <InsightCard insight={INSIGHTS[0]} />
        </div>
      </section>

      <section className="bg-[#F1F5F9] px-4 md:px-8 xl:px-[60px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[120px] py-[62px] md:py-[120px]">
          <InsightCard insight={INSIGHTS[1]} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[62px] px-10 py-8 pb-[120px] md:px-10 md:pt-10">
          <InsightCard insight={INSIGHTS[2]} />
        </div>
      </section>
    </>
  );
};

export default FourSection;
