import Image from "next/image";

const AVATARS = [
  "/images/pr-agency-dubai/hero/avatar-1.png",
  "/images/pr-agency-dubai/hero/avatar-2.png",
  "/images/pr-agency-dubai/hero/avatar-3.png",
] as const;

const PUBLISHER_LOGOS = [
  {
    src: "/images/pr-agency-dubai/hero/logo-gulf-today.png",
    alt: "Gulf Today",
    className: "w-[178px]",
  },
  {
    src: "/images/pr-agency-dubai/hero/logo-the-national.png",
    alt: "The National",
    className: "w-[165px]",
  },
  {
    src: "/images/pr-agency-dubai/hero/logo-khaleej-times.png",
    alt: "Khaleej Times",
    className: "w-[146px]",
  },
] as const;

function StarIcon() {
  return (
    <svg
      viewBox="0 0 17 16"
      aria-hidden="true"
      className="h-[14px] w-[15px] text-[#0D6EFD]"
      fill="currentColor"
    >
      <path d="M7.707 1.213c.321-.989 1.719-.989 2.04 0l1.148 3.531c.143.442.555.741 1.02.741h3.713c1.039 0 1.471 1.33.631 1.941l-3.004 2.182c-.376.273-.534.757-.39 1.199l1.147 3.532c.322.988-.81 1.81-1.65 1.199l-3.004-2.182a1.09 1.09 0 0 0-1.26 0l-3.004 2.182c-.84.611-1.972-.211-1.65-1.199l1.147-3.532a1.09 1.09 0 0 0-.389-1.199L1.196 7.426c-.841-.611-.409-1.941.63-1.941H5.54c.465 0 .877-.299 1.02-.741z" />
    </svg>
  );
}

function AvatarStack() {
  return (
    <div className="flex items-center">
      {AVATARS.map((avatar, index) => (
        <div
          key={avatar}
          className="relative h-[31px] w-[31px] overflow-hidden rounded-full border border-white shadow-none md:h-[34px] md:w-[34px]"
          style={{ marginLeft: index === 0 ? 0 : -9 }}
        >
          <Image
            src={avatar}
            alt=""
            fill
            sizes="34px"
            className="object-cover"
            priority
          />
        </div>
      ))}
    </div>
  );
}

function ReviewBlock({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={`flex flex-col ${mobile ? "items-center" : "items-start"} gap-[10px]`}
    >
      <AvatarStack />

      <p className="font-inter text-[18px] leading-[28px] font-semibold text-[#1E1A1C]">
        <span className="hidden md:inline">Trusted by 6,287 Customers</span>
        <span className="md:hidden">
          Trusted by 6,287
          <br />
          Customers
        </span>
      </p>

      <div
        className={`flex items-center gap-[8px] ${mobile ? "justify-center" : ""}`}
      >
        <div className="flex items-center gap-[2px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
        <p className="font-inter text-[13px] leading-[20px] text-[#6A6A6A] md:text-[14px]">
          4.1/5 (14k Reviews)
        </p>
      </div>
    </div>
  );
}

function HeroCopy({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      <div className={`flex flex-col ${mobile ? "items-center" : "items-start"}`}>
        <h1
          className={`font-lexend font-bold tracking-[-0.06em] text-[#242424] ${
            mobile
              ? "max-w-[270px] text-center text-[27px] leading-[31px]"
              : "max-w-[610px] text-left text-[64px] leading-[64px]"
          }`}
        >
          <span className="hidden md:block">
            Unlock Your
            <br />
            Brand&apos;s Potential
            <br />
            with PR Marketing
          </span>
          <span className="md:hidden">
            Unlock Your
            <br />
            Brand&apos;s Potential
            <br />
            PR Marketing
          </span>
        </h1>

        <p
          className={`font-inter text-[16px] leading-[19px] font-normal text-[#7A7A7A] ${
            mobile
              ? "mt-[18px] max-w-[266px] text-center"
              : "mt-[24px] max-w-[472px] text-left"
          }`}
        >
          We dig deep to uncover your unique value proposition and translate it
          into a story that captivates media outlets and potential customers
          alike.
        </p>
      </div>

      <div
        className={`flex flex-col ${mobile ? "items-center" : "items-start"} gap-[18px] ${
          mobile ? "mt-[22px]" : "mt-[20px]"
        }`}
      >
        <ReviewBlock mobile={mobile} />

        <button className="inline-flex h-[42px] items-center justify-center rounded-full bg-[#1A1A1A] px-[22px] font-inter text-[14px] leading-[24px] font-semibold text-white shadow-[0_8px_16px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#111111] md:h-[44px]">
          Get Started
        </button>
      </div>
    </>
  );
}

function PublisherStrip({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={`flex flex-col items-center ${
        mobile ? "gap-[26px] px-0 pb-[22px] pt-[16px]" : "gap-[28px] pb-[54px]"
      }`}
    >
      <h2 className="font-inter text-[16px] leading-[28px] font-semibold text-[#2F2F33] md:text-[17px]">
        Publish Your Story on
      </h2>

      {mobile ? (
        <div className="w-full overflow-hidden">
          <div className="flex min-w-max translate-x-[-46px] items-center gap-[42px]">
            {PUBLISHER_LOGOS.map((logo) => (
              <div key={logo.src} className={`relative shrink-0 ${logo.className}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={220}
                  height={64}
                  sizes="180px"
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex w-full max-w-[780px] items-center justify-center gap-[74px]">
          {PUBLISHER_LOGOS.map((logo) => (
            <div key={logo.src} className={`relative shrink-0 ${logo.className}`}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={220}
                height={64}
                sizes="180px"
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="hidden md:block">
        <div
          className="mx-auto w-full max-w-[1440px] bg-no-repeat"
          style={{
            backgroundImage: "url('/images/pr-agency-dubai/hero/bg-desktop.png')",
            backgroundPosition: "center top",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="px-[34px] pt-[34px]">
            <div className="mx-auto flex w-full max-w-[1284px] items-start justify-between gap-[44px] pb-[118px] pt-[26px]">
              <div className="pt-[56px]">
                <HeroCopy />
              </div>

              <div className="relative w-[575px] shrink-0 pt-[6px]">
                <Image
                  src="/images/pr-agency-dubai/hero/hero-card-desktop.png"
                  alt="Magazine cover feature"
                  width={575}
                  height={578}
                  priority
                  sizes="(max-width: 1279px) 44vw, 575px"
                  className="h-auto w-full"
                />
              </div>
            </div>

            <PublisherStrip />
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="bg-[#F4F5F8] px-6 pb-[28px] pt-[48px]">
          <div className="mx-auto flex max-w-[342px] flex-col items-center">
            <HeroCopy mobile />

            <div className="mt-[18px] w-full">
              <Image
                src="/images/pr-agency-dubai/hero/hero-card-mobile.png"
                alt="Magazine cover feature"
                width={341}
                height={374}
                priority
                sizes="341px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <div className="bg-white">
          <PublisherStrip mobile />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
