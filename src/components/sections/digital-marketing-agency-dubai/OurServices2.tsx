"use client";

import Image from "next/image";
import { ArrowRight, ClipboardCheck, Lightbulb } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  type ServicesDeepDiveSectionContent,
  usaDigitalMarketingAgencyContent,
} from "@/content/digital-marketing-agency";

type OurServices2Props = {
  content?: ServicesDeepDiveSectionContent;
};

type FeatureCardProps = {
  title: string;
  description: string;
  useClipboard?: boolean;
};

const FeatureCard = ({
  title,
  description,
  useClipboard = false,
}: FeatureCardProps) => {
  const Icon = useClipboard ? ClipboardCheck : Lightbulb;

  return (
    <div className="max-w-[320px]">
      <div className="flex items-center gap-3">
        <Icon className="h-7 w-7 text-[#0c1225]" strokeWidth={2.2} />
        <h3 className="font-mulish text-[20px] font-semibold tracking-[-0.03em] text-[#0c1225]">
          {title}
        </h3>
      </div>
      <p className="mt-5 font-mulish text-[14px] font-normal leading-[1.45] text-[#0C1020]">
        {description}
      </p>
    </div>
  );
};

type ContentSectionProps = {
  badge: string;
  title: string;
  description: string;
  features: ServicesDeepDiveSectionContent[keyof ServicesDeepDiveSectionContent]["features"];
  buttonLabel: string;
};

const ContentSection = ({
  badge,
  title,
  description,
  features,
  buttonLabel,
}: ContentSectionProps) => {
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
    <div className="flex flex-col justify-center">
      <div className="inline-flex w-fit items-center gap-3 rounded-[12px] border border-[#dbe3ef] bg-white px-4 py-4 sm:gap-4 sm:px-5">
        <span className="flex h-4 w-4 items-center justify-center bg-[#0e1326] text-white ">
          <ArrowRight className="h-3 w-3" strokeWidth={2.4} />
        </span>
        <span className="font-mulish text-[14px] font-normal leading-none tracking-[-0.03em] text-[#12182b] sm:text-[18px] sm:font-bold">
          {badge}
        </span>
      </div>

      <h2 className="mt-5 max-w-[760px] font-mulish text-[38px] font-bold leading-[1.02] tracking-[-0.05em] text-[#090f23]">
        {title}
      </h2>

      <p className="mt-6 max-w-[760px] font-mulish text-[18px] font-medium leading-[1.58] tracking-[-0.02em] text-[#242a3a]">
        {description}
      </p>

      <div className="mt-8 h-px w-full bg-[#dce3ec]" />

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8">
        <FeatureCard
          title={features[0].title}
          description={features[0].description}
        />
        <FeatureCard
          title={features[1].title}
          description={features[1].description}
          useClipboard
        />
      </div>
      <div className="flex items-center justify-start mt-10">
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="w-fit bg-black rounded-full">
            <div className="relative inline-flex rounded-full p-[1.5px] overflow-hidden">
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-[conic-gradient(from_90deg,transparent_0deg,transparent_295deg,#14b3a8_322deg,#0347A0_348deg,transparent_360deg)]"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <span className="pointer-events-none absolute inset-[1.5px] rounded-full bg-black" />
              <Button className="relative font-inter z-10 rounded-full bg-transparent px-8 py-6 text-lg text-white hover:bg-transparent">
                {buttonLabel}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const OurServices2 = ({
  content = usaDigitalMarketingAgencyContent.servicesDeepDive,
}: OurServices2Props) => {
  return (
    <section className="bg-white bg-amber-500">
      <div className="mx-auto grid max-w-7xl px-12 items-center gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-16">
        <div className="relative min-h-[620px] overflow-hidden rounded-[12px] bg-amber-300 shadow-[0_0_0_3px_rgba(255,255,255,0.9)_inset] md:min-h-[570px] ">
          <Image
            src="/images/GAkCtgb12qT91vQy7Wlo801FeNg.avif"
            alt="SEO illustration"
            fill
            sizes="(min-width: 1024px) 48rem, 100vw"
            className="pointer-events-none absolute inset-0 z-10 select-none object-cover object-center"
            priority={false}
          />
        </div>

        <ContentSection
          badge={content.seo.badge}
          title={content.seo.title}
          description={content.seo.description}
          features={content.seo.features}
          buttonLabel={content.seo.buttonLabel}
        />
      </div>

      <div className="mx-auto py-32 grid max-w-7xl px-12 items-center gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-16">
        <ContentSection
          badge={content.ppc.badge}
          title={content.ppc.title}
          description={content.ppc.description}
          features={content.ppc.features}
          buttonLabel={content.ppc.buttonLabel}
        />
        <div className="relative min-h-[620px] overflow-hidden rounded-[12px] bg-amber-300 shadow-[0_0_0_3px_rgba(255,255,255,0.9)_inset] md:min-h-[570px] ">
          <Image
            src="/images/RsbSPiAzsywWRGdpvKjXfcTqBII.avif"
            alt="PPC illustration"
            fill
            sizes="(min-width: 1024px) 48rem, 100vw"
            className="pointer-events-none absolute inset-0 z-10 select-none object-cover object-center"
            priority={false}
          />
        </div>
      </div>

      <div className="mx-auto bg-[#F1F5F9]">
        <div className="py-32 mx-auto max-w-7xl lg:gap-16 grid px-12 items-center gap-10 lg:grid-cols-[1.02fr_1fr]">
          <div className="relative min-h-[620px] overflow-hidden rounded-[12px] shadow-[0_0_0_3px_rgba(255,255,255,0.9)_inset] md:min-h-[570px] ">
            <Image
              src="/images/eVV5ZOP0UKNC9rJg5UkkJw1RE.avif"
              alt="Social media illustration"
              fill
              sizes="(min-width: 1024px) 48rem, 100vw"
              className="pointer-events-none absolute inset-0 z-10 select-none object-cover object-center"
              priority={false}
            />
          </div>

          <ContentSection
            badge={content.social.badge}
            title={content.social.title}
            description={content.social.description}
            features={content.social.features}
            buttonLabel={content.social.buttonLabel}
          />
        </div>
      </div>

      <div className="mx-auto py-32 grid max-w-7xl px-12 items-center gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-16">
        <ContentSection
          badge={content.whatsapp.badge}
          title={content.whatsapp.title}
          description={content.whatsapp.description}
          features={content.whatsapp.features}
          buttonLabel={content.whatsapp.buttonLabel}
        />
        <div className="relative min-h-[620px] overflow-hidden rounded-[12px] bg-amber-300 shadow-[0_0_0_3px_rgba(255,255,255,0.9)_inset] md:min-h-[570px] ">
          <Image
            src="/images/ja41Cv2CszUTzMQprSeXYxix1uY.avif"
            alt="Whatsapp illustration"
            fill
            sizes="(min-width: 1024px) 48rem, 100vw"
            className="pointer-events-none absolute inset-0 z-10 select-none object-cover object-center"
            priority={false}
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl px-12 items-center gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-16">
        <div className="relative min-h-[620px] overflow-hidden rounded-[12px] bg-[#A1B5FF] shadow-[0_0_0_3px_rgba(255,255,255,0.9)_inset] md:min-h-[570px] ">
          <Image
            src="/images/fCy1cBnqYJjWNbiO50pfY3w.avif"
            alt="Lead generation illustration"
            fill
            sizes="(min-width: 1024px) 48rem, 100vw"
            className="pointer-events-none absolute inset-0 z-10 select-none object-cover object-center"
            priority={false}
          />
        </div>

        <ContentSection
          badge={content.leadGeneration.badge}
          title={content.leadGeneration.title}
          description={content.leadGeneration.description}
          features={content.leadGeneration.features}
          buttonLabel={content.leadGeneration.buttonLabel}
        />
      </div>
    </section>
  );
};

export default OurServices2;
