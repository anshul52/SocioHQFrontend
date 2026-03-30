import Image from "next/image";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["900"],
});

const SHAPES = [
  {
    src: "/images/social-media-marketing-dubai/hero/shapes/orange-pyramid.png",
    alt: "Orange pyramid",
    className:
      "right-[-42px] top-[72px] w-[126px] md:left-[160px] md:right-auto md:top-[111px] md:w-[258px] md:max-w-none",
  },
  {
    src: "/images/social-media-marketing-dubai/hero/shapes/purple-sphere.png",
    alt: "Purple sphere",
    className:
      "left-1/2 top-[54px] w-[84px] -translate-x-1/2 md:left-[156px] md:top-[299px] md:w-[208px] md:max-w-none md:translate-x-0",
  },
  {
    src: "/images/social-media-marketing-dubai/hero/shapes/blue-cylinder.png",
    alt: "Blue cylinder",
    className:
      "left-[16px] top-[76px] w-[96px] md:left-[238px] md:top-[553px] md:w-[206px] md:max-w-none",
  },
  {
    src: "/images/social-media-marketing-dubai/hero/shapes/turquoise-star.png",
    alt: "Turquoise star",
    className:
      "bottom-[106px] right-[-18px] w-[94px] md:bottom-auto md:right-[140px] md:top-[98px] md:w-[240px] md:max-w-none",
  },
  {
    src: "/images/social-media-marketing-dubai/hero/shapes/lime-green-object.png",
    alt: "Lime green object",
    className:
      "bottom-[121px] left-1/2 w-[86px] -translate-x-[-10%] md:bottom-auto md:left-auto md:right-[176px] md:top-[322px] md:w-[202px] md:max-w-none md:translate-x-0",
  },
  {
    src: "/images/social-media-marketing-dubai/hero/shapes/yellow-cube.png",
    alt: "Yellow cube",
    className:
      "bottom-[152px] left-[4px] w-[82px] md:bottom-auto md:left-auto md:right-[228px] md:top-[565px] md:w-[188px] md:max-w-none",
  },
] as const;

const PARTNER_LOGOS = [
  {
    src: "/images/social-media-marketing-dubai/hero/logos/khaleej-times.png",
    alt: "Khaleej Times",
    className: "w-[163px] sm:w-[140px] md:w-[163px]",
  },
  {
    src: "/images/social-media-marketing-dubai/hero/logos/google-partner.png",
    alt: "Google Partner",
    className: "w-[156px] sm:w-[136px] md:w-[156px]",
  },
  {
    src: "/images/social-media-marketing-dubai/hero/logos/clutch.png",
    alt: "Clutch",
    className: "w-[118px] sm:w-[104px] md:w-[118px]",
  },
  {
    src: "/images/social-media-marketing-dubai/hero/logos/meta-business-partner.png",
    alt: "Meta Business Partner",
    className: "w-[181px] sm:w-[150px] md:w-[181px]",
  },
  {
    src: "/images/social-media-marketing-dubai/hero/logos/gulf-today.png",
    alt: "Acquisition International",
    className: "w-[175px] sm:w-[146px] md:w-[175px]",
  },
  {
    src: "/images/social-media-marketing-dubai/hero/logos/acquisition-international.png",
    alt: "Gulf Today",
    className: "w-[144px] sm:w-[122px] md:w-[144px]",
  },
] as const;

const TRUST_AVATARS = [
  "/images/social-media-marketing-dubai/hero/avatars/avatar-1.png",
  "/images/social-media-marketing-dubai/hero/avatars/avatar-2.png",
  "/images/social-media-marketing-dubai/hero/avatars/avatar-3.png",
] as const;

function StarIcon() {
  return (
    <svg
      viewBox="0 0 17 16"
      aria-hidden="true"
      className="h-[15px] w-[16px] text-[#FF4D3A]"
      fill="currentColor"
    >
      <path d="M7.707 1.213c.321-.989 1.719-.989 2.04 0l1.148 3.531c.143.442.555.741 1.02.741h3.713c1.039 0 1.471 1.33.631 1.941l-3.004 2.182c-.376.273-.534.757-.39 1.199l1.147 3.532c.322.988-.81 1.81-1.65 1.199l-3.004-2.182a1.09 1.09 0 0 0-1.26 0l-3.004 2.182c-.84.611-1.972-.211-1.65-1.199l1.147-3.532a1.09 1.09 0 0 0-.389-1.199L1.196 7.426c-.841-.611-.409-1.941.63-1.941H5.54c.465 0 .877-.299 1.02-.741z" />
    </svg>
  );
}

function FloatingShape({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <div className={`pointer-events-none absolute z-[1] ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1024}
        height={1024}
        sizes="(max-width: 767px) 128px, 240px"
        className="h-auto w-full object-contain"
        priority
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] overflow-hidden">
        <div className="relative isolate min-h-[760px] overflow-hidden px-4 pt-5 sm:px-6 md:h-[842px] md:min-h-0 md:px-0">
          {SHAPES.map((shape) => (
            <FloatingShape key={shape.src} {...shape} />
          ))}

          <div className="pointer-events-none absolute inset-x-0 top-[292px] hidden overflow-hidden md:block">
            <p
              className={`${publicSans.className} whitespace-nowrap text-center text-[248px] leading-[0.84] font-[900] tracking-[-0.08em] text-black`}
            >
              SOCIAL MEDIA
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center px-2 pt-[88px] md:px-0 md:pt-0">
            <div className="w-full max-w-[696px] md:absolute md:left-1/2 md:top-[108px] md:-translate-x-1/2">
              <h1 className="text-center font-lexend text-[22px] leading-[20px] font-bold tracking-[0] text-[#171717] md:text-[33px] md:leading-[116%] md:tracking-[-2px] xl:text-[42px]">
                Dubai&apos;s #1
                <br />
                Social Media Agency
              </h1>

              <p className="mt-4 text-center font-inter text-[16px] leading-[120%] font-normal text-[#454545]/70 md:mt-[14px]">
                Say farewell to the complexities of the past and unlock a
                smoother path to success.
                <br className="hidden md:block" />
                <span className="md:hidden"> </span>
                Welcome to a new era of simplicity and efficiency.
              </p>
            </div>

            <div className="relative mt-[58px] flex flex-col items-center md:absolute md:left-1/2 md:top-[336px] md:mt-0 md:-translate-x-1/2">
              <div className="relative h-[286px] w-[286px] overflow-hidden rounded-[42px] bg-white shadow-[0_20px_20px_rgba(0,0,0,0.1)] md:h-[280px] md:w-[280px] md:rounded-[48px]">
                <Image
                  src="/images/social-media-marketing-dubai/hero/cards/hero-card.jpeg"
                  alt="Social media showcase artwork"
                  fill
                  priority
                  sizes="(max-width: 767px) 286px, 280px"
                  className="object-cover"
                />
              </div>

              <div className="mt-[17px] flex w-[220px] flex-col items-center gap-[11px] md:mt-[18px]">
                <div className="h-[8px] w-[100px] overflow-hidden">
                  <div className="flex items-center justify-center">
                    {TRUST_AVATARS.map((avatar, index) => (
                      <div
                        key={avatar}
                        className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-none"
                        style={{
                          marginLeft: index === 0 ? 0 : -26,
                          transform: "translateY(-40px)",
                        }}
                      >
                        <Image
                          src={avatar}
                          alt=""
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-center font-inter text-[18px] leading-[28px] font-semibold text-[#171717]">
                  Trusted by 6,287
                  <br />
                  Customers
                </p>

                <div className="flex items-center gap-[6px]">
                  <div className="flex items-center gap-[2px]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} />
                    ))}
                  </div>
                  <span className="font-inter text-[18px] leading-6 text-[#454545]">
                    4.8/5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pb-[76px] pt-[8px] sm:px-8 md:px-[95px] md:pt-0">
          <div className="mx-auto flex w-full max-w-[1249px] flex-col items-center gap-6 md:gap-[52px]">
            <div className="w-full max-w-[753px] text-center">
              <p className="hidden text-[20px] leading-[140%] text-[#3F3F3F] md:block">
                Collaborating closely with several big companies
              </p>
              <p className="text-[14px] leading-[140%] text-[#3F3F3F] md:hidden">
                Collaborating closely with
                <br />
                several big companies
              </p>
            </div>

            <div className="flex w-full max-w-[1101px] flex-wrap items-center justify-center gap-x-8 gap-y-6 md:flex-nowrap md:justify-between md:gap-x-8 md:gap-y-0">
              {PARTNER_LOGOS.map((logo) => (
                <div key={logo.src} className={`relative ${logo.className}`}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={181}
                    height={79}
                    sizes="(max-width: 767px) 140px, 181px"
                    className="h-auto w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
