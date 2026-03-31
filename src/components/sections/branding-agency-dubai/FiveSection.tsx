import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Lightbulb,
  type LucideIcon,
  MessageSquareText,
  Palette,
  RefreshCcw,
} from "lucide-react";

type Point = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type InsightSection = {
  badge: string;
  title: string;
  description: ReactNode;
  points: Point[];
  image: string;
  imageAlt: string;
  imagePriority?: boolean;
  backgroundClassName?: string;
  desktopImageFirst?: boolean;
  mobileImageFirst?: boolean;
  decorativeCard?: boolean;
  imageClassName?: string;
  imageOuterClassName?: string;
  imageCardClassName?: string;
};

const insightSections: InsightSection[] = [
  {
    badge: "Mastering Your Brand's Essence",
    title: "Brand Strategy",
    description: (
      <>
        We specialize in branding & rebranding identity with{" "}
        <Link
          href="/digital-marketing-agency-dubai"
          className="underline decoration-[1.5px] underline-offset-[3px]"
        >
          digital marketing solutions
        </Link>
        , creating memorable brand names and guidelines for consistency and a
        strong market presence. Our research helps carve out a unique niche for
        your brand, positioning you as the top choice and fostering customer
        loyalty.
      </>
    ),
    points: [
      {
        title: "Discovery & Research",
        description:
          "We dive into your business landscape to understand your objectives, target audience and market dynamics to ensure every branding choice aligns with your vision.",
        icon: Lightbulb,
      },
      {
        title: "Strategy Development",
        description:
          "Armed with insights & extensive brand experience, we craft a bespoke branding strategy that defines your unique position in the market setting clear objectives for your brand’s voice",
        icon: CalendarDays,
      },
    ],
    image: "/images/branding-agency-dubai/five-section/brand-strategy.png",
    imageAlt: "Brand strategy editorial portrait with colorful graphic strokes",
    imagePriority: true,
    desktopImageFirst: true,
    imageClassName: "object-cover",
    imageOuterClassName: "min-[1200px]:w-[51%] min-[1200px]:min-w-0",
    imageCardClassName: "min-[1200px]:h-[615px]",
  },
  {
    badge: "Iconic Designs that Speak Volumes",
    title: "Logo Designing",
    description:
      "Send proposals with confidence by leveraging our expert design services. Our team ensures that every proposal you create is visually compelling, clear, and professional, helping you make a lasting impression.",
    points: [
      {
        title: "Design & Creation",
        description:
          "Each design is tailored to communicate your brand’s essence visually and emotionally.",
        icon: Palette,
      },
      {
        title: "Branding Refinement",
        description:
          "This enables us to fine-tune your brand, ensuring it remains in sync with your audience & meets its strategic objectives.",
        icon: MessageSquareText,
      },
    ],
    image: "/images/branding-agency-dubai/five-section/logo-designing.png",
    imageAlt: "Technical logo construction artwork",
    decorativeCard: true,
    imageClassName: "object-contain p-6 min-[810px]:p-10",
    imageOuterClassName: "min-[1200px]:w-[51%] min-[1200px]:min-w-0",
    imageCardClassName: "min-[1200px]:h-[574px]",
  },
  {
    badge: "Polishing Your Business Image",
    title: "Corporate Identity",
    description:
      "As a leading branding agency Dubai, we specialize in crafting corporate identity that captures the essence of top-tier brands. Our approach is collaborative and strategic, ensuring your brand resonates deeply with your target market. From comprehensive market analysis to creating dynamic promotional materials, our team meticulously designs each branding activity to solidify your market position and enhance visibility.",
    points: [
      {
        title: "Brand Consistency",
        description:
          "Consistency is key, ensuring that your brand presents a unified identity everywhere it appears.",
        icon: Lightbulb,
      },
      {
        title: "Transparency & Authenticity",
        description:
          "Corporate branding that emphasizes honest communication helps in building long-term trust.",
        icon: CalendarDays,
      },
    ],
    image: "/images/branding-agency-dubai/five-section/corporate-identity.png",
    imageAlt: "Corporate identity business card mockup",
    backgroundClassName: "bg-[#f1f5f9]",
    desktopImageFirst: true,
    mobileImageFirst: true,
    decorativeCard: true,
    imageClassName: "object-contain p-6 min-[810px]:p-10",
    imageOuterClassName: "min-[1200px]:w-[51%] min-[1200px]:min-w-0",
    imageCardClassName: "min-[1200px]:h-[561px]",
  },
  {
    badge: "Elevate packaging aesthetics.",
    title: "Packaging",
    description:
      "Transform your product into a visual delight with our bespoke packaging design services. We go beyond aesthetics, strategically designing packaging that captures attention and communicates your brand's story and values. Our designs aren’t just seen, they’re remembered, creating a compelling first impression that enhances the overall appeal and drives consumer engagement. We turn every unboxing into an event with packaging that stands out in a crowded marketplace.",
    points: [
      {
        title: "Practicality & Usability",
        description:
          "Practical & Functional packaging adds to the overall customer experience, making the product more appealing because it’s convenient to handle.",
        icon: RefreshCcw,
      },
      {
        title: "Brand Loyalty",
        description:
          "Effective packaging allows a consumers to form an emotional attachment to the brand, which encourages consumers to repurchase.",
        icon: MessageSquareText,
      },
    ],
    image: "/images/branding-agency-dubai/five-section/packaging.png",
    imageAlt: "SweetCha can packaging mockup",
    decorativeCard: true,
    imageClassName: "object-contain p-6 min-[810px]:p-10",
    imageOuterClassName: "min-[1200px]:w-[51%] min-[1200px]:min-w-0",
    imageCardClassName: "min-[1200px]:h-[671px]",
  },
  {
    badge: "Where Ideas Come to Life",
    title: "Creative Designing",
    description:
      "Our team of professionals is here to transform your vision into stunning designs that leave a lasting impression. With an expansive library and a keen understanding of evolving consumer behavior in competitive markets, we tailor a unique brand journey that cuts through the noise. From initial concept to final execution, we collaborate closely, crafting digital experiences & personalized branding strategies that captivate and connect.",
    points: [
      {
        title: "Personal Branding",
        description:
          "Building a compelling personal brand that highlights your unique strengths and positions you as a leader in your field.",
        icon: Lightbulb,
      },
      {
        title: "Comprehensive Research",
        description:
          "We conduct comprehensive research, including audience insights to ensure every choice aligns with your vision.",
        icon: CalendarDays,
      },
    ],
    image: "/images/branding-agency-dubai/five-section/creative-designing.png",
    imageAlt: "Creative design portrait with colorful accent shapes",
    desktopImageFirst: true,
    decorativeCard: true,
    imageClassName: "object-contain p-4 min-[810px]:p-8",
    imageOuterClassName: "min-[1200px]:w-[51%] min-[1200px]:min-w-0",
    imageCardClassName: "min-[1200px]:h-[629px]",
  },
];

function Badge({ text }: { text: string }) {
  return (
    <div className="inline-flex w-fit items-center gap-[10px] rounded-[12px] border border-[#e2e8f0] px-3 py-2">
      <span className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-[#0f1728] text-white">
        <ArrowUpRight className="h-[10px] w-[10px]" strokeWidth={2.2} />
      </span>

      <span className="bg-[linear-gradient(90deg,#382e50_0%,#7143c7_100%)] bg-clip-text font-[family:var(--font-mulish)] text-[14px] leading-[160%] font-bold text-transparent">
        {text}
      </span>
    </div>
  );
}

function PointCard({ title, description, icon: Icon }: Point) {
  return (
    <div className="flex w-full flex-col items-start gap-3 min-[1200px]:flex-1">
      <div className="flex items-start gap-3">
        <span className="mt-1 text-[#0f1728]">
          <Icon className="h-[18px] w-[18px]" strokeWidth={2.1} />
        </span>

        <h3 className="font-[family:var(--font-mulish)] text-[18px] leading-[145%] font-bold text-[#020617] min-[810px]:text-[20px]">
          {title}
        </h3>
      </div>

      <p className="font-[family:var(--font-mulish)] text-[14px] leading-[160%] text-[#020617]">
        {description}
      </p>
    </div>
  );
}

function DecorativeImageCard({
  src,
  alt,
  priority = false,
  className = "",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={`relative h-[320px] overflow-hidden rounded-[16px] border-4 border-white bg-[#f1f5f9] ${className}`}
    >
      <span className="absolute left-1/2 top-[13px] h-[150px] w-[150px] -translate-x-1/2 rounded-full bg-[#f332f666] blur-[100px]" />
      <span className="absolute bottom-[14px] left-[39px] h-[150px] w-[150px] rounded-full bg-[#32f68066] blur-[100px]" />
      <span className="absolute bottom-[89px] right-[18px] h-[150px] w-[150px] rounded-full bg-[#f69a3266] blur-[100px]" />

      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1199px) calc(100vw - 32px), 612px"
        className={imageClassName}
      />
    </div>
  );
}

function PlainImageCard({
  src,
  alt,
  priority = false,
  className = "",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={`relative h-[320px] overflow-hidden rounded-[16px] border-4 border-white bg-white ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1199px) calc(100vw - 32px), 612px"
        className={imageClassName}
      />
    </div>
  );
}

function InsightBlock({
  badge,
  title,
  description,
  points,
  image,
  imageAlt,
  imagePriority = false,
  backgroundClassName = "bg-white",
  desktopImageFirst = false,
  mobileImageFirst = false,
  decorativeCard = false,
  imageClassName = "object-contain p-6 min-[810px]:p-10",
  imageOuterClassName = "",
  imageCardClassName = "",
}: InsightSection) {
  const mobileOrderClassName = mobileImageFirst
    ? "flex-col-reverse"
    : "flex-col";
  const contentOrderClassName = desktopImageFirst
    ? "min-[1200px]:order-2"
    : "min-[1200px]:order-1";
  const imageOrderClassName = desktopImageFirst
    ? "min-[1200px]:order-1"
    : "min-[1200px]:order-2";

  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 min-[810px]:px-8 min-[1200px]:px-[60px]">
        <div className="flex w-full max-w-[1200px] flex-col items-center py-8 min-[810px]:py-[62px]">
          <div
            className={`flex w-full items-center gap-8 min-[1200px]:flex-row min-[1200px]:gap-[62px] ${mobileOrderClassName}`}
          >
            <div
              className={`flex w-full flex-col items-start gap-8 ${contentOrderClassName} min-[1200px]:min-w-0 min-[1200px]:flex-1`}
            >
              <div className="flex w-full flex-col items-start gap-4">
                <Badge text={badge} />

                <h2 className="font-[family:var(--font-mulish)] text-[32px] leading-[120%] font-bold text-[#020617] min-[810px]:text-[38px] min-[1200px]:text-[48px]">
                  {title}
                </h2>

                <div className="font-[family:var(--font-mulish)] text-[16px] leading-[160%] text-[#020617] min-[1200px]:text-[18px]">
                  {description}
                </div>
              </div>

              <div className="h-px w-full bg-[#e2e8f0]" />

              <div className="flex w-full flex-col items-start gap-8 min-[1200px]:flex-row">
                {points.map((point) => (
                  <PointCard key={point.title} {...point} />
                ))}
              </div>
            </div>

            <div className={`w-full ${imageOrderClassName} ${imageOuterClassName}`}>
              {decorativeCard ? (
                <DecorativeImageCard
                  src={image}
                  alt={imageAlt}
                  priority={imagePriority}
                  className={imageCardClassName}
                  imageClassName={imageClassName}
                />
              ) : (
                <PlainImageCard
                  src={image}
                  alt={imageAlt}
                  priority={imagePriority}
                  className={imageCardClassName}
                  imageClassName={imageClassName}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FiveSection = () => {
  return (
    <div className="w-full bg-white">
      {insightSections.map((section) => (
        <InsightBlock key={section.title} {...section} />
      ))}
    </div>
  );
};

export default FiveSection;
