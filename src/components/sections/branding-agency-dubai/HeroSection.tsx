import Image from "next/image";

type BrandingCardProps = {
  src: string;
  alt: string;
  className: string;
  sizes: string;
  priority?: boolean;
  imageClassName?: string;
};

function BrandingCard({
  src,
  alt,
  className,
  sizes,
  priority = false,
  imageClassName = "object-cover",
}: BrandingCardProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={imageClassName}
      />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center overflow-hidden bg-white md:min-h-[136.375vh] md:justify-center">
        <div className="flex w-full flex-col items-center gap-12 px-5 pb-0 pt-[103px] md:px-0 md:pt-0">
          <div className="flex w-full flex-col items-center gap-6">
            <div className="w-full md:px-10 min-[1200px]:px-0">
              <h1 className="text-center font-lexend text-[48px] leading-[54px] font-[900] tracking-[0] text-[#282828] md:text-[80px] md:leading-[92px] md:tracking-[-5px] min-[1200px]:text-[112px] min-[1200px]:leading-[124px] min-[1360px]:text-[120px] min-[1360px]:leading-[132px]">
                <span className="block">Leading Branding Agency</span>
                <span className="block">Company in Dubai</span>
              </h1>
            </div>

            <p className="max-w-[398px] text-center font-inter text-[16px] leading-[120%] font-normal text-[#454545]">
              Explore the world with our expertly crafted travel packages. Our
              team is ready to make your dream vacation a reality.
            </p>
          </div>

          <div className="flex h-[338px] w-full max-w-[1118px] items-center justify-center gap-[2px] md:gap-[10px] min-[810px]:h-[502px]">
            <div className="flex h-[246px] w-[105px] flex-col items-center gap-[10px] overflow-hidden min-[810px]:h-[502px] min-[810px]:w-[200px]">
              <BrandingCard
                src="/images/branding-agency-dubai/hero/left-top.jpg"
                alt="Branding poster on blue background"
                className="h-[117px] w-[96px] rounded-[12px] min-[810px]:h-[243px] min-[810px]:w-[200px]"
                sizes="(max-width: 809px) 96px, 200px"
                priority
              />

              <BrandingCard
                src="/images/branding-agency-dubai/hero/left-bottom.png"
                alt="Green shopping bag branding artwork"
                className="h-[115px] w-[95px] rounded-[12px] min-[810px]:h-[244px] min-[810px]:w-[200px]"
                sizes="(max-width: 809px) 95px, 200px"
                priority
              />
            </div>

            <div className="relative h-[257px] w-[150px] flex-none overflow-hidden rounded-[15px] min-[810px]:h-[491px] min-[810px]:w-[377px] min-[1200px]:h-[498px] min-[1200px]:w-[686px]">
              <div className="h-full w-full transform-[perspective(1200px)_rotateX(16deg)] overflow-hidden rounded-[15px]">
                <Image
                  src="/images/branding-agency-dubai/hero/center.png"
                  alt="House of Burgers branding mockup"
                  fill
                  priority
                  sizes="(max-width: 809px) 150px, (max-width: 1199px) 377px, 686px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="flex h-[245px] w-[107px] flex-col items-center gap-[10px] overflow-hidden min-[810px]:h-[502px] min-[810px]:w-[200px]">
              <BrandingCard
                src="/images/branding-agency-dubai/hero/right-top.jpg"
                alt="Kylie branding artwork"
                className="h-[121px] w-[100px] rounded-[12px] min-[810px]:h-[243px] min-[810px]:w-[200px]"
                sizes="(max-width: 809px) 100px, 200px"
                priority
              />

              <BrandingCard
                src="/images/branding-agency-dubai/hero/right-bottom.jpg"
                alt="Luxury shopping bag branding mockup"
                className="h-[112px] w-[92px] rounded-[12px] min-[810px]:h-[244px] min-[810px]:w-[200px]"
                sizes="(max-width: 809px) 92px, 200px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
