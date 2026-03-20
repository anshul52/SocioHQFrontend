"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardCheck, Lightbulb } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const featureItems = [
  {
    title: "On Page SEO",
    description: "Our on-site SEO services ensure you're heard loud and clear.",
    icon: Lightbulb,
  },
  {
    title: "Off Page SEO",
    description:
      "Beyond your site, we extend your digital footprint, building robust backlinks.",
    icon: ClipboardCheck,
  },
];
const featureItems2 = [
  {
    title: "Comprehensive Performance Reports",
    description:
      "Stay ahead of the curve with our comprehensive 360 reports for your campaigns",
    icon: Lightbulb,
  },
  {
    title: "Precise Ad Targeting",
    description:
      "Our PPC services are fine-tuned to identify and engage your ideal customer demographic directly",
    icon: ClipboardCheck,
  },
];
const featureItems3 = [
  {
    title: "Strategy Management",
    description:
      "We map your social media journey from obscurity to online stardom with precision and flair.",
    icon: Lightbulb,
  },
  {
    title: "Visual Storytelling",
    description:
      "Our visuals don’t just capture eyes, they capture hearts making sure your social media stands out in the crowd.",
    icon: ClipboardCheck,
  },
];
const featureItems4 = [
  {
    title: "Smart Retargeting",
    description:
      "Smart Retargeting Campaigns can increase sales and engagement for your business.",
    icon: Lightbulb,
  },
  {
    title: "Advanced Chatbots",
    description:
      "Simplify communication with your customers using personalized responses with advanced chatbots.",
    icon: ClipboardCheck,
  },
];
const featureItems5 = [
  {
    title: "Advanced Data Analytics",
    description:
      "Making smarter, data-driven decisions by transforming complex information into clear, actionable insights.",
    icon: Lightbulb,
  },
  {
    title: "Digital Strategy Creation",
    description:
      "We map successful digital journeys with innovative & impactful strategies helping you reach your ideal audience.",
    icon: ClipboardCheck,
  },
];

const OurServices2 = () => {
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
    <section className="bg-white bg-amber-500">
      {/* -----------------part1------------------- */}
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

        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-3 rounded-[12px] border border-[#dbe3ef] bg-white px-4 py-4 sm:gap-4 sm:px-5">
            <span className="flex h-4 w-4 items-center justify-center bg-[#0e1326] text-white ">
              <ArrowRight className="h-3 w-3" strokeWidth={2.4} />
            </span>
            <span className="font-inter text-[18px] font-bold leading-none tracking-[-0.03em] text-[#12182b]">
              Dominate The Top Rankings
            </span>
          </div>

          <h2 className="mt-5 max-w-[760px] font-mulish text-[38px] font-bold leading-[1.02] tracking-[-0.05em] text-[#090f23]">
            Search Engine Optimization
          </h2>

          <p className="mt-6 max-w-[760px] font-mulish text-[18px] font-medium leading-[1.58] tracking-[-0.02em] text-[#242a3a]">
            Being a leading SEO agency in dubai, we ensure your brand not only
            gets found but dominates search engine results. With a holistic seo
            approach, we modify website content and structure to boost
            visibility, drive organic traffic, and position you as the industry
            leader.
          </p>

          <div className="mt-8 h-px w-full bg-[#dce3ec]" />

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8">
            {featureItems.map(({ title, description, icon: Icon }) => (
              <div key={title} className="max-w-[320px]">
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
            ))}
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
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* -----------------part2------------------- */}
      <div className="mx-auto py-32 grid max-w-7xl px-12 items-center gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-16">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-3 rounded-[12px] border border-[#dbe3ef] bg-white px-4 py-4 sm:gap-4 sm:px-5">
            <span className="flex h-4 w-4 items-center justify-center bg-[#0e1326] text-white ">
              <ArrowRight className="h-3 w-3" strokeWidth={2.4} />
            </span>
            <span className="font-inter text-[18px] font-normal leading-none tracking-[-0.03em] text-[#12182b]">
              Unlock Your Online Potential
            </span>
          </div>

          <h2 className="mt-5 max-w-[760px] font-mulish text-[38px] font-bold leading-[1.02] tracking-[-0.05em] text-[#090f23]">
            Pay Per Click
          </h2>

          <p className="mt-6 max-w-[760px] font-mulish text-[18px] font-medium leading-[1.58] tracking-[-0.02em] text-[#242a3a]">
            Accelerating brand visibility with targeted PPC campaigns that
            deliver instant results. As a key component of our paid advertising
            offerings, PPC ensures your brand reaches the right audience quickly
            and effectively. Our strategic Google ads placement and optimized
            bidding strategies ensure that every click counts, maximizing your
            ROI while capturing the attention of your ideal customers.
          </p>

          <div className="mt-8 h-px w-full bg-[#dce3ec]" />

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8">
            {featureItems2.map(({ title, description, icon: Icon }) => (
              <div key={title} className="max-w-[320px]">
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
            ))}
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
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="relative min-h-[620px] overflow-hidden rounded-[12px] bg-amber-300 shadow-[0_0_0_3px_rgba(255,255,255,0.9)_inset] md:min-h-[570px] ">
          <Image
            src="/images/RsbSPiAzsywWRGdpvKjXfcTqBII.avif"
            alt="SEO illustration"
            fill
            sizes="(min-width: 1024px) 48rem, 100vw"
            className="pointer-events-none absolute inset-0 z-10 select-none object-cover object-center"
            priority={false}
          />
        </div>
      </div>
      {/* -----------------part3------------------- */}
      <div className="mx-auto  bg-[#F1F5F9]">
        <div className="py-32 mx-auto max-w-7xl lg:gap-16 grid  px-12 items-center gap-10 lg:grid-cols-[1.02fr_1fr]">
          <div className="relative min-h-[620px] overflow-hidden rounded-[12px] shadow-[0_0_0_3px_rgba(255,255,255,0.9)_inset] md:min-h-[570px] ">
            <Image
              src="/images/eVV5ZOP0UKNC9rJg5UkkJw1RE.avif"
              alt="SEO illustration"
              fill
              sizes="(min-width: 1024px) 48rem, 100vw"
              className="pointer-events-none absolute inset-0 z-10 select-none object-cover object-center"
              priority={false}
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-3 rounded-[12px] border border-[#dbe3ef] bg-[#F1F5F9] px-4 py-4 sm:gap-4 sm:px-5">
              <span className="flex h-4 w-4 items-center justify-center bg-[#0e1326] text-white ">
                <ArrowRight className="h-3 w-3" strokeWidth={2.4} />
              </span>
              <span className="font-inter text-[18px] font-normal leading-none tracking-[-0.03em] text-[#12182b]">
                Amplify Your Brand Presence
              </span>
            </div>

            <h2 className="mt-5 max-w-[760px] font-mulish text-[38px] font-bold leading-[1.02] tracking-[-0.05em] text-[#090f23]">
              Social Media Ads
            </h2>

            <p className="mt-6 max-w-[760px] font-mulish text-[18px] font-medium leading-[1.58] tracking-[-0.02em] text-[#242a3a]">
              We craft compelling campaigns that not only grab attention but
              also drive meaningful engagement and conversions, ensuring your
              brand shines in the social spotlight. Our expertise in influencer
              marketing helps expand your brand reach and engagement by
              connecting you with industry leaders for authentic collaborations.
            </p>

            <div className="mt-8 h-px w-full bg-[#dce3ec]" />

            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8">
              {featureItems3.map(({ title, description, icon: Icon }) => (
                <div key={title} className="max-w-[320px]">
                  <div className="flex items-center gap-3">
                    <Icon
                      className="h-7 w-7 text-[#0c1225]"
                      strokeWidth={2.2}
                    />
                    <h3 className="font-mulish text-[20px] font-semibold tracking-[-0.03em] text-[#0c1225]">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-5 font-mulish text-[14px] font-normal leading-[1.45] text-[#0C1020]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-start mt-10">
              <motion.div
                variants={itemVariants}
                className="flex justify-center"
              >
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
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------part4------------------- */}
      <div className="mx-auto py-32 grid max-w-7xl px-12 items-center gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-16">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-3 rounded-[12px] border border-[#dbe3ef] bg-white px-4 py-4 sm:gap-4 sm:px-5">
            <span className="flex h-4 w-4 items-center justify-center bg-[#0e1326] text-white ">
              <ArrowRight className="h-3 w-3" strokeWidth={2.4} />
            </span>
            <span className="font-mulish text-[14px] font-normal leading-none tracking-[-0.03em] text-[#12182b]">
              Drive your business growth
            </span>
          </div>

          <h2 className="mt-5 max-w-[760px] font-mulish text-[38px] font-bold leading-[1.02] tracking-[-0.05em] text-[#090f23]">
            Whatsapp Marketing
          </h2>

          <p className="mt-6 max-w-[760px] font-mulish text-[18px] font-medium leading-[1.58] tracking-[-0.02em] text-[#242a3a]">
            Deliver messages that matter through our WhatsApp Marketing
            Services. Our approach is designed for maximum engagement, allowing
            for real-time interaction and personalized service that enhances
            customer relationships and loyalty; leading to a successful digital
            marketing business.
          </p>

          <div className="mt-8 h-px w-full bg-[#dce3ec]" />

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8">
            {featureItems4.map(({ title, description, icon: Icon }) => (
              <div key={title} className="max-w-[320px]">
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
            ))}
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
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="relative min-h-[620px] overflow-hidden rounded-[12px] bg-amber-300 shadow-[0_0_0_3px_rgba(255,255,255,0.9)_inset] md:min-h-[570px] ">
          <Image
            src="/images/ja41Cv2CszUTzMQprSeXYxix1uY.avif"
            alt="SEO illustration"
            fill
            sizes="(min-width: 1024px) 48rem, 100vw"
            className="pointer-events-none absolute inset-0 z-10 select-none object-cover object-center"
            priority={false}
          />
        </div>
      </div>
      {/* -----------------part5------------------- */}
      <div className="mx-auto grid max-w-7xl px-12 items-center gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-16">
        <div className="relative min-h-[620px] overflow-hidden rounded-[12px] bg-[#A1B5FF] shadow-[0_0_0_3px_rgba(255,255,255,0.9)_inset] md:min-h-[570px] ">
          <Image
            src="/images/fCy1cBnqYJjWNbiO50pfY3w.avif"
            alt="SEO illustration"
            fill
            sizes="(min-width: 1024px) 48rem, 100vw"
            className="pointer-events-none absolute inset-0 z-10 select-none object-cover object-center"
            priority={false}
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-3 rounded-[12px] border border-[#dbe3ef] bg-white px-4 py-4 sm:gap-4 sm:px-5">
            <span className="flex h-4 w-4 items-center justify-center bg-[#0e1326] text-white ">
              <ArrowRight className="h-3 w-3" strokeWidth={2.4} />
            </span>
            <span className="font-mulish text-[14px] font-normal leading-none tracking-[-0.03em] text-[#12182b]">
              Reach your ideal customers
            </span>
          </div>

          <h2 className="mt-5 max-w-[760px] font-mulish text-[38px] font-bold leading-[1.02] tracking-[-0.05em] text-[#090f23]">
            Lead Generation
          </h2>

          <p className="mt-6 max-w-[760px] font-mulish text-[18px] font-medium leading-[1.58] tracking-[-0.02em] text-[#242a3a]">
            Generated piping hot leads through our multi-channel digital
            marketing strategies. We identify and engage target audiences by
            understanding their needs and preferences, ensuring our lead
            generation efforts are tailored for maximum results. We combine
            insight-driven approaches with effective targeting techniques to
            attract and convert prospects who are eager to engage with your
            brand.
          </p>

          <div className="mt-8 h-px w-full bg-[#dce3ec]" />

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-8">
            {featureItems5.map(({ title, description, icon: Icon }) => (
              <div key={title} className="max-w-[320px]">
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
            ))}
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
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices2;
