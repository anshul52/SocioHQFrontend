import type { ComponentType } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  CalendarDays,
  Globe2,
  Lightbulb,
  MessageSquareMore,
  MonitorSmartphone,
} from "lucide-react";

type Point = {
  title: string[];
  description: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

type Card = {
  badge: string;
  title: string;
  description: string;
  reverseOnDesktop?: boolean;
  imageWrapperClassName?: string;
  imageLayers: {
    src: string;
    alt: string;
    className: string;
    sizes: string;
    priority?: boolean;
  }[];
  points: Point[];
};

const CARD_GROUPS: Card[][] = [
  [
    {
      badge: "Growth",
      title: "Targeting Right Keywords Have Never Been Easier.",
      description:
        "We analyze search trends, user intent, and competitor keywords to identify high-value terms that drive targeted traffic and improve rankings.",
      imageLayers: [
        {
          src: "/images/seo-dubai/four-section/shared-grid-bg.png",
          alt: "",
          sizes: "(min-width: 768px) 473px, 100vw",
          className: "object-cover object-center md:object-center md:object-bottom",
        },
        {
          src: "/images/seo-dubai/four-section/keywords-hero.png",
          alt: "Keyword research illustration",
          sizes: "(min-width: 768px) 473px, 100vw",
          className: "object-cover object-center",
          priority: true,
        },
      ],
      points: [
        {
          title: ["Advanced Keyword", "Research Tools"],
          description:
            "In order to maximize usability of the site, we utilize advanced keyword tools like SEMrush, Moz, Ubersuggest to provide accurate keyword planning.",
          icon: Lightbulb,
        },
        {
          title: ["In-Depth Content", "Analysis"],
          description:
            "We perform an in depth analysis ensuring our SEO process is backed by data driven approach such as Search Volume, Keyword Difficulty etc.",
          icon: CalendarDays,
        },
      ],
    },
    {
      badge: "Explore",
      title: "We Build Your Brand's Authority On The Internet.",
      description:
        "Link building can be a task specifically when choosing the right websites for your brand. We create a strong link-building strategy that can boost your website's authority, visibility, and rankings in search engine result.",
      reverseOnDesktop: true,
      imageLayers: [
        {
          src: "/images/seo-dubai/four-section/shared-grid-bg.png",
          alt: "",
          sizes: "(min-width: 768px) 473px, 100vw",
          className: "object-cover object-center object-bottom",
        },
        {
          src: "/images/seo-dubai/four-section/authority-hero.jpg",
          alt: "Brand authority illustration",
          sizes: "(min-width: 768px) 473px, 100vw",
          className: "object-cover object-center",
        },
      ],
      points: [
        {
          title: ["Identifying", "High-Quality", "Websites"],
          description:
            "Find high authority & relevant websites to ensure backlinks provide the link juice which helps in increasing the rankings.",
          icon: Globe2,
        },
        {
          title: ["Outreach and", "Relationship", "Building"],
          description:
            "Engage with site owners and influencers to request backlinks and foster long-term partnerships to make sure your website ranks.",
          icon: MessageSquareMore,
        },
      ],
    },
  ],
  [
    {
      badge: "Growth",
      title: "Maximizing User Conversions",
      description:
        "Get high-quality design work at a fraction of the cost, without compromising on creativity or efficiency. Benefit from professional-grade designs tailored to your specific needs, all while staying within your budget.",
      imageWrapperClassName: "bg-white",
      imageLayers: [
        {
          src: "/images/seo-dubai/four-section/conversions-hero.png",
          alt: "User conversions illustration",
          sizes: "(min-width: 768px) 473px, 100vw",
          className: "object-cover object-left md:object-left",
        },
      ],
      points: [
        {
          title: ["Optimize", "Landing Pages"],
          description:
            "A slow and unstructured landing page can't convert, hence we ensure your website performance is top notch.",
          icon: Lightbulb,
        },
        {
          title: ["Improving", "Customer User", "Experience"],
          description:
            "Increasing your customer lifetime value through well structured & optimized user experience (UX) by making necessary changes.",
          icon: MonitorSmartphone,
        },
      ],
    },
    {
      badge: "Explore",
      title: "Enhancing Your Local Visibility",
      description:
        "Send proposals with confidence by leveraging our expert design services. Our team ensures that every proposal you create is visually compelling, clear, and professional, helping you make a lasting impression.",
      reverseOnDesktop: true,
      imageWrapperClassName: "bg-white",
      imageLayers: [
        {
          src: "/images/seo-dubai/four-section/local-visibility-hero.png",
          alt: "Local SEO visibility illustration",
          sizes: "(min-width: 768px) 473px, 100vw",
          className: "object-cover object-center",
        },
      ],
      points: [
        {
          title: ["Optimize Your", "Google Listing"],
          description:
            "We make sure your business is found locally by people who are looking for your services and also help manage your reviews.",
          icon: Globe2,
        },
        {
          title: ["Build Local", "Citations"],
          description:
            "Accurate and consistent local citations enhance your local SEO, improving your visibility in search results and maps.",
          icon: MessageSquareMore,
        },
      ],
    },
  ],
];

const Badge = ({ label }: { label: string }) => {
  return (
    <div className="inline-flex w-fit items-center gap-[10px] rounded-[12px] border border-[#E2E8F0] px-3 py-2">
      <div className="flex h-5 w-5 items-center justify-center rounded-[4px] bg-[#020617] text-white">
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
      </div>
      <span className="font-inter text-[14px] leading-[160%] text-[#020617]">
        {label}
      </span>
    </div>
  );
};

const PointBlock = ({ point }: { point: Point }) => {
  const Icon = point.icon;

  return (
    <div className="flex w-full flex-col gap-3 md:flex-1">
      <div className="flex items-start gap-[10px]">
        <Icon
          className="mt-[7px] h-5 w-5 shrink-0 text-[#020617]"
          strokeWidth={2.2}
        />
        <h3 className="font-lexend text-[26px] leading-[160%] font-semibold text-[#020617]">
          {point.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
      </div>

      <p className="font-inter text-[14px] leading-[160%] text-[#020617]">
        {point.description}
      </p>
    </div>
  );
};

const ImageFrame = ({
  layers,
  className = "",
}: {
  layers: Card["imageLayers"];
  className?: string;
}) => {
  return (
    <div
      className={`relative h-[236px] overflow-hidden rounded-[16px] border-4 border-white bg-[#F1F5F9] md:h-[580px] ${className}`}
    >
      <div className="absolute top-[13px] left-[48%] h-[150px] w-[150px] -translate-x-1/2 rounded-full bg-[#F332F666] blur-[100px]" />
      <div className="absolute bottom-[14px] left-[39px] h-[150px] w-[150px] rounded-full bg-[#32F68066] blur-[100px]" />
      <div className="absolute bottom-[89px] left-[min(355px,72%)] h-[150px] w-[150px] rounded-full bg-[#F69A3266] blur-[100px]" />

      {layers.map((layer, index) => (
        <Image
          key={`${layer.src}-${index}`}
          src={layer.src}
          alt={layer.alt}
          fill
          priority={layer.priority}
          sizes={layer.sizes}
          className={layer.className}
        />
      ))}
    </div>
  );
};

const InsightCard = ({ card }: { card: Card }) => {
  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:items-center md:gap-[62px]">
      <div
        className={`order-1 md:order-none ${card.reverseOnDesktop ? "md:order-2" : "md:order-1"}`}
      >
        <ImageFrame
          layers={card.imageLayers}
          className={card.imageWrapperClassName}
        />
      </div>

      <div
        className={`order-0 flex w-full flex-col gap-8 ${card.reverseOnDesktop ? "md:order-1" : "md:order-2"}`}
      >
        <div className="flex flex-col items-start gap-4">
          <Badge label={card.badge} />

          <h2
            className="w-full text-balance font-lexend text-[22px] leading-[20px] font-bold tracking-[0px] text-[#171717] md:text-[42px] md:leading-[116%] md:tracking-[-2px]"
          >
            {card.title}
          </h2>

          <p className="max-w-[580px] font-inter text-[16px] leading-[120%] text-[#454545]">
            {card.description}
          </p>
        </div>

        <div className="border-t border-[#E2E8F0] pt-8">
          <div className="flex flex-col gap-8 md:flex-row">
            {card.points.map((point) => (
              <PointBlock key={point.title.join(" ")} point={point} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FourSection = () => {
  return (
    <section className="bg-white">
      {CARD_GROUPS.map((group, index) => (
        <div
          key={index}
          className="mx-auto flex w-full max-w-[1200px] flex-col gap-[62px] px-1 py-[62px] md:gap-[65px] md:px-10 md:pt-10 md:pb-[120px]"
        >
          {group.map((card) => (
            <InsightCard key={card.title} card={card} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default FourSection;
