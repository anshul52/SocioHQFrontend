"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

type BasicService = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  iconSize: number;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageClassName: string;
  imageSizes: string;
  cardClassName: string;
  contentGapClassName?: string;
  descriptionClassName?: string;
};

const basicServices: BasicService[] = [
  {
    title: "Logo Designing",
    description:
      "Crafting unique, impactful logos that elevate your brand's identity and make a lasting impression.",
    icon: "/images/branding-agency-dubai/our-branding-services/icons/logo-designing.svg",
    iconAlt: "Logo designing icon",
    iconSize: 26,
    image:
      "/images/branding-agency-dubai/our-branding-services/logo-designing.png",
    imageAlt: "Assorted logo branding layouts",
    imageWidth: 906,
    imageHeight: 474,
    imageClassName: "max-w-[425px]",
    imageSizes:
      "(max-width: 809px) calc(100vw - 96px), (max-width: 1439px) 425px, 425px",
    cardClassName: "bg-[#f6f7f9]",
    contentGapClassName: "gap-8",
  },
  {
    title: "Corporate Identity",
    description:
      "Developing corporate identities that reflect your brand's essence and enhance its market presence.",
    icon: "/images/branding-agency-dubai/our-branding-services/icons/corporate-identity.svg",
    iconAlt: "Corporate identity icon",
    iconSize: 28,
    image:
      "/images/branding-agency-dubai/our-branding-services/corporate-identity.png",
    imageAlt: "Corporate identity presentation mockup",
    imageWidth: 906,
    imageHeight: 474,
    imageClassName: "max-w-[502px]",
    imageSizes:
      "(max-width: 809px) calc(100vw - 96px), (max-width: 1439px) 502px, 502px",
    cardClassName: "bg-[#f6f7f9]",
    contentGapClassName: "gap-[7px]",
  },
  {
    title: "Packaging",
    description:
      "Designing eye-catching packaging that enhances product appeal and reinforces brand identity.",
    icon: "/images/branding-agency-dubai/our-branding-services/icons/packaging.svg",
    iconAlt: "Packaging icon",
    iconSize: 26,
    image: "/images/branding-agency-dubai/our-branding-services/packaging.jpg",
    imageAlt: "Printed packaging brochure mockup",
    imageWidth: 736,
    imageHeight: 440,
    imageClassName: "max-w-[425px]",
    imageSizes:
      "(max-width: 809px) calc(100vw - 96px), (max-width: 1439px) 439px, 439px",
    cardClassName: "bg-[#fed6ea]",
    contentGapClassName: "gap-[7px]",
  },
  {
    title: "Creative Designing",
    description:
      "Innovative and stunning designs that capture your brand's essence & engage your audience.",
    icon: "/images/branding-agency-dubai/our-branding-services/icons/creative-designing.svg",
    iconAlt: "Creative designing icon",
    iconSize: 32,
    image:
      "/images/branding-agency-dubai/our-branding-services/creative-designing.png",
    imageAlt: "Creative design collage",
    imageWidth: 736,
    imageHeight: 736,
    imageClassName: "max-w-[425px]",
    imageSizes:
      "(max-width: 809px) calc(100vw - 96px), (max-width: 1439px) 425px, 425px",
    cardClassName: "bg-[#f6f7f9]",
    contentGapClassName: "gap-[36px] md:gap-[48px] min-[1200px]:gap-[61px]",
  },
];

function ServiceCard({
  title,
  description,
  icon,
  iconAlt,
  iconSize,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  imageClassName,
  imageSizes,
  cardClassName,
  contentGapClassName = "gap-8",
  descriptionClassName = "",
}: BasicService) {
  return (
    <article
      className={`flex w-full flex-col items-start justify-between overflow-hidden rounded-[10px] px-[24px] py-[32px] min-[810px]:h-[424px] min-[810px]:px-[42px] min-[810px]:py-[42px] min-[1200px]:px-[55px] min-[1200px]:py-[55px] ${cardClassName}`}
    >
      <div
        className={`flex w-full flex-col items-start ${contentGapClassName}`}
      >
        <div className="flex w-full flex-col items-start gap-[10px]">
          <div className="flex h-min w-min items-center justify-center overflow-hidden rounded-[12px] bg-black p-3 text-white">
            <Image
              src={icon}
              alt={iconAlt}
              width={iconSize}
              height={iconSize}
              className="h-auto w-auto"
            />
          </div>

          <div className="flex w-full flex-col items-start gap-[10px]">
            <h3 className="font-lexend text-[28px] leading-none font-semibold text-[#0f1728] min-[1200px]:text-[30px]">
              {title}
            </h3>
            <p
              className={`font-inter text-[16px] leading-[120%] font-normal text-[#454545] ${descriptionClassName}`}
            >
              {description}
            </p>
          </div>
        </div>

        <div className={`relative w-full self-center ${imageClassName}`}>
          <Image
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            sizes={imageSizes}
            className="h-auto w-full"
          />
        </div>
      </div>
    </article>
  );
}

const OurBrandingServices = () => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };
  return (
    <section
      className="w-full bg-white"
      aria-labelledby="our-branding-services"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center bg-white px-4 pb-5 pt-14 min-[810px]:px-0 min-[810px]:pb-5 min-[810px]:pt-5">
        <div className="flex w-full flex-col items-center gap-[23px] min-[810px]:gap-7">
          <div className="flex w-full flex-col items-center gap-4 min-[810px]:gap-3">
            <div className="rounded-[50px] bg-[#f5f5f5] px-3 py-[1px]">
              <p className="font-inter text-center text-[12px] leading-6 font-semibold tracking-[0.05em] text-[#525252]">
                Featured
              </p>
            </div>

            <h2
              id="our-branding-services"
              className="w-full text-center font-lexend text-[24px] leading-[30px] font-bold tracking-[0] text-[#282828] min-[810px]:text-[65px] min-[810px]:leading-[86px] min-[810px]:font-medium min-[810px]:tracking-[-5px]"
            >
              Our Branding Services
            </h2>
          </div>

          <p className="w-full max-w-[688px] text-center font-inter text-[12px] leading-[19px] font-normal text-[#282828] min-[810px]:text-[22px] min-[810px]:leading-[36px]">
            A leading creative agency in dubai, revolutionizing digital
            identities through innovative branding.
          </p>

          {/* Button */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center"
          >
            <div className="w-fit bg-black rounded-full shadow-[0_0_30px_rgba(20,179,168,0.3)]">
              <div className="relative inline-flex rounded-full p-[1.5px] overflow-hidden">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-[conic-gradient(from_90deg,transparent_0deg,transparent_295deg,#14b3a8_322deg,#0347A0_348deg,transparent_360deg)]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="pointer-events-none absolute inset-[1.5px] rounded-full bg-black" />
                <Button className="relative font-inter z-10 rounded-full bg-transparent px-8 py-6 text-lg text-white hover:bg-transparent">
                  View Portfolio
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex w-full max-w-[1280px] flex-col items-center gap-[35px] px-6 py-8 min-[810px]:px-8 min-[810px]:py-[50px]">
          <div className="flex w-full flex-col items-center gap-[10px] min-[810px]:h-[424px] min-[810px]:flex-row">
            <ServiceCard {...basicServices[0]} />
            <ServiceCard {...basicServices[1]} />
          </div>

          <article className="flex w-full flex-col items-center overflow-hidden rounded-[10px] bg-[#2e7be3] px-[24px] py-[32px] text-white min-[810px]:min-h-[424px] min-[810px]:px-[42px] min-[810px]:py-[42px] min-[1200px]:px-[55px] min-[1200px]:py-[55px]">
            <div className="flex w-full flex-col items-center gap-[29px] min-[810px]:w-full min-[810px]:max-w-[1026px] min-[810px]:gap-[31px] min-[1200px]:flex-row min-[1200px]:gap-[10px]">
              <div className="flex w-full flex-col items-start gap-[26px] min-[1200px]:flex-1">
                <div className="flex w-full flex-col items-start gap-[10px]">
                  <div className="flex h-min w-min items-center justify-center overflow-hidden rounded-[12px] bg-black p-3 text-white">
                    <Image
                      src="/images/branding-agency-dubai/our-branding-services/icons/brand-strategy.svg"
                      alt="Brand strategy icon"
                      width={22}
                      height={22}
                      className="h-auto w-auto"
                    />
                  </div>

                  <div className="flex w-full flex-col items-start gap-[10px]">
                    <h3 className="font-lexend text-[28px] leading-none font-semibold text-white min-[810px]:text-[32px] min-[1200px]:text-[36px]">
                      Brand Strategy
                    </h3>
                    <p className="font-inter text-[18px] leading-7 font-normal text-white">
                      Creating comprehensive brand strategies that define your
                      market position and drive long-term success
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full max-w-[512px] min-[1200px]:shrink-0">
                <Image
                  src="/images/branding-agency-dubai/our-branding-services/brand-strategy.jpeg"
                  alt="Brand strategy book mockup"
                  width={736}
                  height={629}
                  sizes="(max-width: 1199px) calc(100vw - 96px), 512px"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </article>

          <div className="flex w-full flex-col items-center gap-[10px] min-[810px]:h-[424px] min-[810px]:flex-row">
            <ServiceCard {...basicServices[2]} />
            <ServiceCard {...basicServices[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBrandingServices;
