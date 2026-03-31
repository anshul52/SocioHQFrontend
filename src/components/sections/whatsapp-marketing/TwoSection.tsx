import Image from "next/image";

const PANELS = [
  {
    badge: "Connect, Communicate & Convert",
    title: "Targeted Campaigns That Convert",
    description:
      "Our expert team crafts tailored WhatsApp campaigns that resonate with your target audience. We leverage advanced segmentation techniques to ensure your messages reach the right people at the right time, maximizing your ROI.",
    points: [
      {
        title: "Rich Media Messaging",
        description:
          "Captivate your audience with engaging multimedia content.",
      },
      {
        title: "Customer Support",
        description:
          "Enhance your customer service with our WhatsApp automation solutions.",
      },
    ],
    image: "/images/whatsapp-marketing/two-section/targeted-campaigns.webp",
    imageAlt: "Targeted campaigns illustration",
    reverse: false,
    imageWrapperClassName:
      "bg-[linear-gradient(180deg,#FFFFFF_0%,#D7FFED_100%)]",
  },
  {
    badge: "Boost Your Engagement",
    title: "Unlock the Power of Direct Messaging",
    description:
      "WhatsApp has become an integral part of our daily lives, and now it's time to harness its potential for your business. Our WhatsApp Marketing services help you connect with your audience on a personal level, driving engagement and conversions like never before.",
    points: [
      {
        title: "Demographic targeting",
        description:
          "We leverage advanced segmentation techniques to reach the right people at the right time.",
      },
      {
        title: "Behavior-based campaigns",
        description:
          "We set up intelligent chatbots that can handle inquiries based on behavior.",
      },
    ],
    image: "/images/whatsapp-marketing/two-section/direct-messaging.webp",
    imageAlt: "Direct messaging illustration",
    reverse: true,
    imageWrapperClassName:
      "bg-[linear-gradient(180deg,#FFFFFF_0%,#D9FFEE_100%)]",
  },
] as const;

export default function TwoSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[65px] px-5 pb-24 pt-10 md:px-10 md:pb-[120px]">
        {PANELS.map((panel) => (
          <article
            key={panel.title}
            className={`flex items-center gap-8 overflow-hidden xl:gap-[62px] ${
              panel.reverse ? "flex-col xl:flex-row" : "flex-col xl:flex-row"
            }`}
          >
            {panel.reverse ? (
              <>
                <PanelImage
                  image={panel.image}
                  imageAlt={panel.imageAlt}
                  reverse
                  className={panel.imageWrapperClassName}
                />
                <PanelContent
                  badge={panel.badge}
                  title={panel.title}
                  description={panel.description}
                  points={panel.points}
                />
              </>
            ) : (
              <>
                <PanelContent
                  badge={panel.badge}
                  title={panel.title}
                  description={panel.description}
                  points={panel.points}
                />
                <PanelImage
                  image={panel.image}
                  imageAlt={panel.imageAlt}
                  reverse={false}
                  className={panel.imageWrapperClassName}
                />
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function PanelContent({
  badge,
  title,
  description,
  points,
}: {
  badge: string;
  title: string;
  description: string;
  points: readonly { title: string; description: string }[];
}) {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-8 xl:w-0">
      <div className="flex w-full flex-col items-start gap-4 overflow-hidden">
        <div className="inline-flex min-h-[48px] items-center rounded-[12px] border border-[#E2E8F0] px-3 py-[10px]">
          <p className="whitespace-pre text-[14px] leading-[160%] font-normal text-[#020617]">
            {badge}
          </p>
        </div>

        <h2 className="w-full font-lexend text-[36px] leading-[1.08] font-bold tracking-[-0.04em] text-[#171717] md:text-[44px] xl:text-[52px] xl:leading-[1.16] xl:tracking-[-2px]">
          {title}
        </h2>

        <p className="w-full text-[16px] leading-[120%] font-normal text-[#454545]">
          {description}
        </p>
      </div>

      <div className="h-px w-full bg-[#E2E8F0]" />

      <div className="flex w-full flex-col gap-6 xl:flex-row xl:gap-8">
        {points.map((point) => (
          <div key={point.title} className="flex w-full flex-1 flex-col gap-3">
            <h3 className="font-lexend text-[24px] leading-[1.5] font-semibold text-[#020617] xl:text-[26px]">
              {point.title}
            </h3>
            <p className="text-[14px] leading-[160%] font-normal text-[#020617]">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PanelImage({
  image,
  imageAlt,
  reverse,
  className,
}: {
  image: string;
  imageAlt: string;
  reverse: boolean;
  className: string;
}) {
  return (
    <div
      className={`relative h-[420px] w-full overflow-hidden rounded-[16px] border-4 border-white ${className} md:h-[520px] xl:h-[580px] xl:w-0 xl:flex-1`}
    >
      {reverse ? (
        <div className="absolute inset-y-0 left-0 w-full md:w-[527px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1279px) 100vw, 527px"
            className="object-contain object-left"
          />
        </div>
      ) : (
        <div
          className="absolute h-[320px] w-[291px] md:h-[463px] md:w-[421px]"
          style={{
            top: "50%",
            left: "49.7164%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1279px) 100vw, 421px"
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}
