import Image from "next/image";
import { ArrowUpRight, Users } from "lucide-react";

type StrategyCard = {
  badge: string;
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  imageFirst?: boolean;
  imageClassName: string;
};

const STRATEGY_CARDS: StrategyCard[] = [
  {
    badge: "Growth",
    title: "Get featured on influential news sites in just 7 days!",
    description: [
      "In the digital age, your online presence is crucial. Our digital PR strategies are designed to boost your visibility, engage your audience, and drive meaningful conversations around your brand.",
      "Harness the power of digital channels to elevate your brand's presence and influence.",
    ],
    imageSrc: "/images/pr-agency-dubai/pr-strategies/featured-news.jpg",
    imageAlt: "Woman working on laptop at a table",
    imageClassName:
      "object-cover object-[center_top] min-[1200px]:object-[left_center]",
  },
  {
    badge: "Explore",
    title: "Rank Higher on Google",
    description: [
      "Establish your brand as an industry authority through our PR marketing expertise.We optimize your press releases, website content, and digital assets to improve search engine rankings and increase organic traffic. By integrating key industry keywords and leveraging link-building opportunities, we ensure your brand stands out in the crowded digital landscape.",
    ],
    imageSrc: "/images/pr-agency-dubai/pr-strategies/rank-higher-google.jpg",
    imageAlt: "Magazines arranged on a table",
    imageFirst: false,
    imageClassName: "object-cover object-center",
  },
  {
    badge: "Growth",
    title: "Amplifying Your Online Presence",
    description: [
      "We create and distribute valuable, relevant content that attracts and engages your target audience. From thought leadership articles and whitepapers to infographics and video content, we develop a diverse content mix that positions your brand as a trusted resource and drives organic traffic to your digital platforms.",
    ],
    imageSrc:
      "/images/pr-agency-dubai/pr-strategies/amplifying-online-presence.jpg",
    imageAlt: "Person writing in a notebook",
    imageClassName:
      "object-cover object-[center_top] min-[1200px]:object-[left_center]",
  },
  {
    badge: "Growth",
    title: "Get Verified on Social",
    description: [
      "With our extensive network of media contacts and industry influencers, we position your brand at the forefront of relevant conversations. Our media relations experts secure high-value placements in top-tier publications, broadcast outlets, and online platforms. We craft attention-grabbing press releases, pitch compelling stories, and arrange interviews that showcase your expertise and thought leadership.",
    ],
    imageSrc: "/images/pr-agency-dubai/pr-strategies/verified-social.jpg",
    imageAlt: "Hands exchanging a social verification icon",
    imageFirst: false,
    imageClassName:
      "object-cover object-[center_top] min-[1200px]:object-[left_center]",
  },
] as const;

function Eyebrow() {
  return (
    <div className="inline-flex w-fit items-center gap-[8px] rounded-[60px] bg-[#F8FAFC] px-[16px] py-[10px]">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#020617] text-white">
        <Users className="h-3 w-3" strokeWidth={2.4} />
      </span>
      <span className="font-inter text-[14px] leading-[160%] text-[#020617]">
        Our Customers
      </span>
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <div className="inline-flex w-fit items-center gap-[10px] rounded-[12px] border border-[#E2E8F0] px-3 py-[10px]">
      <span className="flex h-5 w-5 items-center justify-center rounded-[4px] bg-[#020617] text-white">
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.2} />
      </span>
      <span className="font-inter text-[14px] leading-[160%] text-[#020617]">
        {label}
      </span>
    </div>
  );
}

function StrategyImage({
  src,
  alt,
  className,
}: Pick<StrategyCard, "imageSrc" | "imageAlt" | "imageClassName">) {
  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-[16px] border-4 border-white bg-[#F1F5F9] min-[1200px]:h-[580px]">
      <div className="absolute top-[6%] left-[48%] h-[150px] w-[150px] -translate-x-1/2 rounded-full bg-[#F332F666] blur-[100px] min-[1200px]:top-[13px]" />
      <div className="absolute bottom-[14px] left-[39px] h-[150px] w-[150px] rounded-full bg-[#32F68066] blur-[100px]" />
      <div className="absolute right-[18px] bottom-[84px] h-[150px] w-[150px] rounded-full bg-[#F69A3266] blur-[100px] min-[1200px]:right-[75px] min-[1200px]:bottom-[89px]" />

      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1440px) 580px, (min-width: 1200px) calc((100vw - 294px) / 2), (min-width: 810px) calc(100vw - 200px), calc(100vw - 40px)"
        className={className}
      />
    </div>
  );
}

function StrategyCard({ card }: { card: StrategyCard }) {
  const imageBlock = (
    <div className="w-full min-[1200px]:flex-1">
      <StrategyImage
        src={card.imageSrc}
        alt={card.imageAlt}
        className={card.imageClassName}
      />
    </div>
  );

  const contentBlock = (
    <div className="flex w-full flex-col gap-8 min-[1200px]:flex-1">
      <div className="flex w-full flex-col items-start gap-4">
        <Badge label={card.badge} />

        <h2 className="w-full font-lexend text-[22px] leading-[20px] font-bold tracking-[0] text-[#171717] min-[1200px]:text-[42px] min-[1200px]:leading-[116%] min-[1200px]:tracking-[-2px] min-[1440px]:text-[52px]">
          {card.title}
        </h2>

        <div className="flex w-full flex-col gap-5">
          {card.description.map((paragraph) => (
            <p
              key={paragraph}
              className="font-inter text-[16px] leading-[120%] font-normal text-[#454545]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="border-t border-[#E2E8F0]" />
    </div>
  );

  return (
    <article className="flex flex-col gap-8 min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:gap-[32px] min-[1440px]:gap-[62px]">
      {card.imageFirst === false ? contentBlock : imageBlock}
      {card.imageFirst === false ? imageBlock : contentBlock}
    </article>
  );
}

const PrStrategies = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-[32px] min-[810px]:px-8 min-[810px]:py-[40px] min-[1200px]:px-[100px] min-[1200px]:py-[40px] min-[1440px]:pb-[120px]">
        <div className="flex w-full max-w-[1200px] flex-col items-center gap-[62px] min-[1200px]:gap-[65px]">
          <div className="flex w-full max-w-[800px] flex-col items-center gap-4 text-center">
            <Eyebrow />

            <h2 className="w-full font-lexend text-[22px] leading-[20px] font-bold tracking-[0] text-[#171717] min-[1200px]:text-[42px] min-[1200px]:leading-[116%] min-[1200px]:tracking-[-2px] min-[1440px]:text-[52px]">
              PR Strategies That Drive Business Growth
            </h2>

            <p className="w-full max-w-[356px] font-inter text-[16px] leading-[120%] text-[#767575] min-[810px]:max-w-[728px] min-[810px]:text-[20px] min-[810px]:leading-[150%] min-[810px]:tracking-[-0.5px]">
              Our expert PR team specializes in crafting compelling narratives
              that resonate with your target audience.
            </p>
          </div>

          {STRATEGY_CARDS.map((card) => (
            <StrategyCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrStrategies;
