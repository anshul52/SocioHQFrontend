"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const avatarImages = [
  "/images/seo-dubai/dominate-top-rankings/avatar-1.png",
  "/images/seo-dubai/dominate-top-rankings/avatar-2.png",
  "/images/seo-dubai/dominate-top-rankings/avatar-3.png",
];

const starOffsets = [0, 22, 45, 67, 90];

const DominateTopRankings = () => {
  const router = useRouter();
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
    <section className="relative isolate flex flex-col items-center justify-center gap-10 overflow-hidden px-5 pt-20 pb-[60px] md:px-10 md:py-20 xl:px-0">
      <Image
        src="/images/seo-dubai/dominate-top-rankings/background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none -z-20 object-fill select-none"
      />

      <div className="relative flex w-full max-w-full flex-col items-center gap-6 pt-8 xl:w-[837px]">
        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full flex-col items-center gap-4">
            <div className="flex w-full flex-col items-center gap-[11px]">
              <div className="relative h-12 w-[100px] overflow-hidden">
                {avatarImages.map((src, index) => (
                  <div
                    key={src}
                    className="absolute top-0 h-12 w-12 overflow-hidden rounded-full ring-2 ring-white"
                    style={{
                      left: `${index === 0 ? 0 : index === 1 ? 26 : 54}px`,
                    }}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <p className="w-full text-center font-inter text-[18px] leading-7 font-semibold text-white">
                Trusted by 6,287 Customers
              </p>

              <div className="flex w-full max-w-[264px] items-center justify-center gap-[5px] overflow-hidden">
                <div className="relative h-[21px] w-[111px]" aria-hidden="true">
                  {starOffsets.map((left, index) => (
                    <svg
                      key={index}
                      viewBox="0 0 17 16"
                      className="absolute top-0 h-[21px] w-[21px]"
                      style={{ left }}
                      fill="none"
                    >
                      <path
                        d="M7.525 1.213C7.846 0.224 9.244 0.224 9.566 1.213L10.713 4.744C10.857 5.186 11.268 5.485 11.733 5.485H15.446C16.485 5.485 16.917 6.815 16.077 7.426L13.073 9.608C12.697 9.881 12.54 10.365 12.683 10.807L13.83 14.339C14.152 15.327 13.02 16.149 12.18 15.538L9.176 13.356C8.8 13.082 8.291 13.082 7.915 13.356L4.911 15.538C4.07 16.149 2.939 15.327 3.26 14.339L4.408 10.807C4.551 10.365 4.394 9.881 4.018 9.608L1.014 7.426C0.173 6.815 0.605 5.485 1.645 5.485H5.358C5.822 5.485 6.234 5.186 6.378 4.744L7.525 1.213Z"
                        fill={index === 4 ? "#FD4E3C" : "#FF4D3A"}
                      />
                    </svg>
                  ))}
                </div>

                <p className="font-inter text-[16px] leading-6 font-normal text-white">
                  4.8/5
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-3">
              <h2 className="w-full max-w-[753px] text-center font-lexend text-[26px] leading-[1.2] font-bold text-white md:text-[50px] md:leading-[60px] xl:max-w-[837px]">
                <span className="bg-[linear-gradient(180deg,_rgba(255,255,255,0.3)_0%,_#ffffff_100%)] bg-clip-text text-transparent">
                  Dominate The Top Rankings With Best SEO Agency In Dubai
                </span>
              </h2>

              <p className="w-full max-w-[944px] text-center font-inter text-[16px] leading-[1.2] font-normal text-white/60 xl:max-w-[832px]">
                Enhance your online presence and attract the right audience with
                our expert, comprehensive SEO services. We optimize your
                website&apos;s rankings using targeted keywords, on-page
                optimization, and effective link-building. Our custom
                SEO-curated{" "}
                <Link
                  href="/digital-marketing-agency-usa"
                  className="text-[#757575] underline decoration-[#757575] underline-offset-[2px]"
                >
                  digital marketing
                </Link>{" "}
                services adapt to the algorithms of the major search engines,
                helping you turn clicks into loyal customers.
              </p>
            </div>
          </div>
        </div>

        {/* <Link
          href="/seo-dubai#portfolio-seo"
          className="group relative block h-[52px] w-[163px] overflow-hidden rounded-[118px] no-underline"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-[72px] bg-[radial-gradient(26.2206%_47.0221%_at_68.5588%_79%,_rgb(181,225,255)_0%,_rgba(181,225,255,0)_100%)] blur-[15px]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-[72px] bg-[radial-gradient(20.4245%_50.1026%_at_68.5588%_79%,_rgb(125,203,255)_0%,_rgba(159,216,255,0)_100%)]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-[2px] rounded-[114px] bg-black"
          />
          <span className="relative flex h-full items-center justify-center px-7 font-inter text-[16px] leading-[19.2px] font-medium text-white">
            View Portfolio
          </span>
        </Link> */}
        {/* Button */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex justify-center cursor-pointer"
          onClick={() => router.push("/seo-dubai#portfolio-seo")}
        >
          <div className="w-fit bg-black rounded-full cursor-pointer shadow-[0_0_30px_rgba(20,179,168,0.3)]">
            <div className="relative inline-flex rounded-full p-[1.5px] overflow-hidden">
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 cursor-pointer rounded-full bg-[conic-gradient(from_90deg,transparent_0deg,transparent_295deg,#14b3a8_322deg,#0347A0_348deg,transparent_360deg)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <span className="pointer-events-none absolute inset-[1.5px] rounded-full bg-black" />
              <Button
                onClick={() => router.push("/seo-dubai#portfolio-seo")}
                className="relative cursor-pointer font-inter z-10 rounded-full bg-transparent px-8 py-6 text-lg text-white hover:bg-transparent"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative h-[212px] w-full xl:h-[556px] xl:w-[920px] rounded-xl overflow-hidden">
        <Image
          src="/images/seo-dubai/dominate-top-rankings/illustration.png"
          alt="Search engine optimization dashboard illustration"
          fill
          priority
          sizes="(min-width: 1280px) 920px, 100vw"
          className="pointer-events-none object-contain select-none xl:object-cover"
        />
      </div>
    </section>
  );
};

export default DominateTopRankings;
