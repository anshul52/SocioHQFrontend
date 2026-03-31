import Image from "next/image";

const TOP_SERVICES = [
  {
    title: "Marketing Campaigns",
    description: "Reach customers directly on their most-used messaging app",
    icon: "/images/whatsapp-marketing/services/icon-marketing-campaigns.svg",
    iconAlt: "Marketing campaigns icon",
    image: "/images/whatsapp-marketing/services/marketing-campaigns.png",
    imageAlt: "WhatsApp marketing campaigns dashboard",
    imageWidth: 408,
    imageHeight: 389,
    cardClassName: "bg-[linear-gradient(180deg,#FFFFFF_0%,#D6FFED_100%)]",
    contentClassName: "px-[50px] pt-[50px] pb-0",
  },
  {
    title: "Chat Bot",
    description:
      "Provide round-the-clock customer support with our intelligent WhatsApp chatbots",
    icon: "/images/whatsapp-marketing/services/icon-chat-bot.svg",
    iconAlt: "Chat bot icon",
    image: "/images/whatsapp-marketing/services/chat-bot.png",
    imageAlt: "WhatsApp chatbot interface preview",
    imageWidth: 425,
    imageHeight: 406,
    cardClassName: "bg-[linear-gradient(180deg,#FFFFFF_0%,#D6FFED_100%)]",
    contentClassName: "px-[50px] pt-[38px] pb-0",
  },
] as const;

export default function OurServices() {
  return (
    <section className="w-full bg-white pb-[50px]">
      <div className="mx-auto flex w-full max-w-[1264px] flex-col items-center gap-[35px] px-5 md:px-8">
        <div className="flex w-full max-w-[650px] flex-col items-center gap-4 pt-[10px] text-center">
          <div className="inline-flex min-h-[27px] items-center rounded-[50px] bg-[#F5F5F5] px-3 pb-[1px] pt-[2px]">
            <p className="text-center font-['Inter'] text-[12px] leading-6 font-semibold tracking-[0.05em] text-[#525252]">
              Revolutionize Your Reach with WhatsApp Marketing
            </p>
          </div>

          <h2 className="font-lexend text-[38px] leading-[1.08] font-bold tracking-[-0.04em] text-[#171717] md:text-[46px] xl:text-[52px] xl:leading-[1.16] xl:tracking-[-2px]">
            Our Services
          </h2>

          <p className="max-w-[620px] font-lexend text-[15px] leading-[140%] font-medium tracking-[-0.1px] text-[#737373] md:text-[16px]">
            Seamlessly connect WhatsApp marketing with your existing marketing
            stack.
          </p>
        </div>

        <div className="flex w-full flex-col gap-[35px]">
          <div className="grid w-full gap-[10px] xl:grid-cols-2">
            {TOP_SERVICES.map((service) => (
              <article
                key={service.title}
                className={`overflow-hidden rounded-[10px] ${service.cardClassName}`}
              >
                <div className="flex h-full flex-col items-center">
                  <div
                    className={`flex w-full flex-col items-start gap-[10px] ${service.contentClassName}`}
                  >
                    <div className="flex items-center justify-center rounded-[12px] bg-black p-3">
                      <Image
                        src={service.icon}
                        alt={service.iconAlt}
                        width={service.title === "Chat Bot" ? 24 : 25}
                        height={service.title === "Chat Bot" ? 24 : 25}
                      />
                    </div>

                    <h3 className="font-lexend text-[30px] leading-[1.14] font-semibold text-[#0F1728] md:text-[34px] xl:text-[36px] xl:leading-[1.2]">
                      {service.title}
                    </h3>

                    <p className="max-w-[430px] text-[16px] leading-[120%] font-normal text-[#454545]">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-2 flex w-full justify-center px-6 pb-0 pt-2 md:px-8 xl:px-0">
                    <div
                      className="relative w-full"
                      style={{
                        maxWidth: `${service.imageWidth}px`,
                        aspectRatio: `${service.imageWidth} / ${service.imageHeight}`,
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes={`(max-width: 1279px) 100vw, ${service.imageWidth}px`}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <article className="overflow-hidden rounded-[10px] bg-[linear-gradient(180deg,#D8FFEE_0%,#D1FFEB_100%)] px-5 py-8 md:px-8 xl:px-0 xl:py-0">
            <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-center xl:gap-[10px] xl:pl-[55px] xl:pr-0 xl:py-[37px]">
              <div className="flex flex-1 flex-col items-start gap-[10px]">
                <div className="flex items-center justify-center rounded-[12px] bg-black p-3">
                  <Image
                    src="/images/whatsapp-marketing/services/icon-grow-your-sales.svg"
                    alt="Grow your sales icon"
                    width={25}
                    height={23}
                  />
                </div>

                <h3 className="font-lexend text-[30px] leading-[1.14] font-semibold text-[#0F1728] md:text-[34px] xl:text-[36px] xl:leading-[1.2]">
                  Grow Your Sales
                </h3>

                <p className="max-w-[390px] text-[16px] leading-[120%] font-normal text-[#454545]">
                  Engage in personalized, one-on-one conversations
                </p>
              </div>

              <div className="relative mx-auto h-[280px] w-full max-w-[520px] xl:mx-0 xl:h-[328px] xl:w-[46%] xl:max-w-none">
                <Image
                  src="/images/whatsapp-marketing/services/grow-your-sales.webp"
                  alt="Grow your sales service illustration"
                  fill
                  sizes="(max-width: 1279px) 100vw, 471px"
                  className="object-contain xl:object-contain"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
