"use client";

import Image from "next/image";
import Link from "next/link";

type WorkItem =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "video";
      src: string;
      ariaLabel: string;
    };

const WORK_ITEMS: WorkItem[] = [
  {
    type: "image",
    src: "/images/social-media-marketing-dubai/our-digital-works/work-1.jpeg",
    alt: "Digital work showcase preview one",
  },
  {
    type: "image",
    src: "/images/social-media-marketing-dubai/our-digital-works/work-2.jpeg",
    alt: "Digital work showcase preview two",
  },
  {
    type: "video",
    src: "/images/social-media-marketing-dubai/our-digital-works/work-3.mp4",
    ariaLabel: "Digital work showcase preview video",
  },
  {
    type: "image",
    src: "/images/social-media-marketing-dubai/our-digital-works/work-4.png",
    alt: "Digital work showcase preview four",
  },
  {
    type: "image",
    src: "/images/social-media-marketing-dubai/our-digital-works/work-5.png",
    alt: "Digital work showcase preview five",
  },
];

const OurDigitalWorks = () => {
  const loopedItems = [...WORK_ITEMS, ...WORK_ITEMS];

  return (
    <section className="w-full overflow-hidden bg-white py-5">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center">
        <div className="flex w-full flex-col items-center gap-5 px-4 sm:px-6 lg:px-0">
          <div className="flex w-full flex-col items-center gap-3">
            <div className="w-full">
              <h2 className="text-center font-lexend text-[22px] leading-[20px] font-bold tracking-[0] text-[#171717] sm:text-[33px] sm:leading-[116%] sm:tracking-[-2px] lg:text-[42px] xl:text-[52px]">
                Our Digital Works
              </h2>
            </div>

            <p className="w-full max-w-[688px] text-center font-inter text-[16px] leading-[120%] font-normal text-[#454545]">
              Our suite of comprehensive services is designed to place your
              brand front and center in the ever-evolving digital arena.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="relative inline-flex min-h-[54px] items-center justify-center overflow-hidden rounded-full px-7 py-4"
          >
            <span className="absolute inset-0 rounded-full bg-[#0A0A0A]" />
            <span className="absolute inset-0 rounded-full bg-[radial-gradient(49.266%_119%_at_50%_50%,#7DCBFF_0%,rgba(125,203,255,0)_100%)]" />
            <span className="absolute inset-0 rounded-full bg-[radial-gradient(50%_100%_at_50%_50%,#B5E1FF_0%,rgba(181,225,255,0)_100%)] blur-[15px]" />
            <span className="absolute inset-[2px] rounded-full bg-[#0A0A0A]" />
            <span className="relative z-10 whitespace-nowrap font-inter text-[16px] leading-none font-medium text-white">
              Get Started
            </span>
          </Link>

          <div className="our-digital-works-marquee flex w-full  overflow-hidden">
            <div className="our-digital-works-track flex w-max shrink-0">
              {loopedItems.map((item, index) => (
                <div
                  key={`${item.src}-${index}`}
                  className="flex h-[484px] w-[300px] shrink-0 items-center justify-center overflow-hidden px-[10px] py-[10px]"
                >
                  <div className="relative h-full w-[280px] overflow-hidden rounded-[8px] shadow-[0_0_14px_0_rgba(0,0,0,0.08)]">
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="280px"
                        className="object-cover object-center"
                      />
                    ) : (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        aria-label={item.ariaLabel}
                        className="h-full w-full object-cover object-center"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .our-digital-works-marquee {
          -webkit-mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 12.5%,
            rgba(0, 0, 0, 1) 87.5%,
            rgba(0, 0, 0, 0) 100%
          );
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 12.5%,
            rgba(0, 0, 0, 1) 87.5%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        .our-digital-works-track {
          will-change: transform;
          animation: our-digital-works-scroll 26s linear infinite;
        }

        @keyframes our-digital-works-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default OurDigitalWorks;
