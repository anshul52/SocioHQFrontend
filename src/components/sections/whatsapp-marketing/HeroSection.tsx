import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "800"],
  display: "swap",
});

const REVIEW_AVATARS = [
  "/images/whatsapp-marketing/hero/avatar-1.png",
  "/images/whatsapp-marketing/hero/avatar-2.png",
  "/images/whatsapp-marketing/hero/avatar-3.png",
  "/images/whatsapp-marketing/hero/avatar-4.png",
] as const;

function StarIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 17 17"
      className="h-4 w-4 text-[#5D5DFF]"
      fill="currentColor"
    >
      <path d="M7.894 1.979c.17-.525.913-.525 1.083 0l1.121 3.45c.076.235.294.394.541.394h3.628c.551 0 .78.706.334 1.03l-2.935 2.133c-.2.145-.283.402-.207.637l1.121 3.449c.171.525-.43.961-.876.637l-2.935-2.132a.687.687 0 0 0-.62 0L5.166 13.71c-.446.324-1.047-.112-.876-.637l1.12-3.45a.55.55 0 0 0-.206-.636L2.269 6.854c-.447-.325-.217-1.031.334-1.031H6.23c.247 0 .466-.159.542-.394z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="w-full bg-white pb-12 pt-9 md:pb-16 md:pt-[38px]">
      <div className="mx-auto w-[89%] max-w-[1280px]">
        <div className="grid gap-6 md:gap-8 xl:grid-cols-[minmax(0,1fr)_484px] xl:px-8">
          <div className="flex min-h-[520px] flex-col rounded-[10px] bg-[#F5FFFB] p-[22px] md:min-h-[666px]">
            <div className="flex flex-col items-start rounded-[18px]">
              <div
                className={`${manrope.className} flex items-center gap-[13.67px] text-[22.79px] leading-[22.79px] font-extrabold`}
              >
                <p className="whitespace-nowrap text-[#8C8C8C]">
                  <span className="text-black">15K </span>
                  reviews on
                </p>
                <div className="flex items-center gap-[2px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
              </div>

              <div className="mt-[13.67px] flex items-center gap-[13.67px]">
                <p
                  className={`${manrope.className} text-[22.79px] leading-[22.79px] font-extrabold text-black`}
                >
                  4.9
                </p>

                <div className="flex items-start">
                  {REVIEW_AVATARS.map((avatar, index) => (
                    <div
                      key={avatar}
                      className="relative h-[46px] w-[46px] overflow-hidden rounded-full border border-[#00E785] shadow-[0_4.56px_4.56px_rgba(0,0,0,0.08)]"
                      style={{ marginLeft: index === 0 ? 0 : -8 }}
                    >
                      <Image
                        src={avatar}
                        alt=""
                        fill
                        sizes="46px"
                        className="object-cover"
                      />
                    </div>
                  ))}

                  <div className="relative ml-[-8px] flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#00E785] bg-[#00E785] shadow-[0_4.56px_4.56px_rgba(0,0,0,0.08)]">
                    <span
                      className={`${manrope.className} text-[11.39px] leading-[22.79px] font-semibold text-white`}
                    >
                      15K
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[108px] w-full">
              <h1 className="font-lexend text-[52px] leading-[1.02] font-bold tracking-[-0.06em] text-[#282828] md:text-[62px] md:leading-[1.04] md:tracking-[-0.07em] xl:text-[62px] xl:leading-[72px] xl:tracking-[-4px]">
                <span className="block">Supercharge Your</span>
                <span className="block">Business with</span>
                <span className="block text-[#00E785]">WhatsApp</span>
              </h1>

              <p className="mt-[22px] max-w-[575px] text-[16px] leading-[120%] font-normal text-[#454545]">
                Learn how our WhatsApp Marketing services can transform your
                business communication and drive growth.
              </p>
            </div>
          </div>

          <div className="relative aspect-[0.924384] overflow-hidden rounded-[10px] xl:h-[666px] xl:w-[484px] xl:aspect-auto">
            <Image
              src="/images/whatsapp-marketing/hero/hero-bg.jpg"
              alt="WhatsApp marketing hero background"
              fill
              priority
              sizes="(max-width: 1279px) 100vw, 484px"
              className="object-cover"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-[-28.1%] left-1/2 z-[1] w-full max-w-[484px] -translate-x-1/2 drop-shadow-[30px_20px_17px_rgba(0,0,0,0.2)]">
              <Image
                src="/images/whatsapp-marketing/hero/phone-mockup.png"
                alt="WhatsApp conversation mockup on a phone"
                width={484}
                height={735}
                priority
                sizes="(max-width: 1279px) 100vw, 484px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
