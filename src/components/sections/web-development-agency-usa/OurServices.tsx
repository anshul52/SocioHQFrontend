const services = {
  shopify: {
    title: "Shopify / Ecommerce Websites.",
    description:
      "We ensures a robust and SEO-friendly business website that drives traffic and engagement.",
    image: "/images/web-development-services/shopify-ecommerce-websites.png",
  },
  wordpress: {
    title: "WordPress / Business Websites.",
    description:
      "We ensures a robust and SEO-friendly business website that drives traffic and engagement.",
    image: "/images/web-development-services/wordpress-business-websites.png",
  },
  framer: {
    title: ["Framer & Webflow", "Websites."],
    description:
      "Create visually stunning websites without compromising on functionality with Webflow & Framer",
    image: "/images/web-development-services/framer-webflow-websites.png",
  },
  mean: {
    title: ["MEAN & MERN Stack", "Websites"],
    description: "Fuel your sales pipeline with high-quality leads.",
    image: "/images/web-development-services/mean-mern-stack-websites.png",
  },
  custom: {
    title: "Custom Website Development",
    description:
      "Whatever your needs, our custom web development services are designed to deliver.",
    image: "/images/web-development-services/custom-website-development.png",
  },
} as const;

function IconShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-fit items-center justify-center rounded-[12px] bg-black p-3">
      {children}
    </div>
  );
}

function ShopifyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 25 25"
      className="h-[25px] w-[25px]"
      fill="none"
    >
      <path
        d="M19.405 22.314a2.057 2.057 0 0 0 2.91-2.909l-4.086-4.085-2.909 2.91 4.085 4.084Z"
        fill="#fff"
        opacity=".4"
      />
      <circle
        cx="11.458"
        cy="11.458"
        r="9.375"
        transform="rotate(180 11.458 11.458)"
        fill="#fff"
      />
    </svg>
  );
}

function WordpressIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 35 35"
      className="h-[25px] w-[25px]"
      fill="none"
    >
      <path
        d="m21.394 31.006-3.81-11.43c-.41-1.231.76-2.403 1.992-1.992l11.43 3.81c1.436.478 1.436 2.51 0 2.988l-4.22 1.407c-.47.157-.84.526-.997.996l-1.407 4.221c-.478 1.436-2.51 1.436-2.988 0Z"
        fill="#fff"
      />
      <path
        d="M17.5 11.302a6.198 6.198 0 0 0-2.32 11.947 1.094 1.094 0 0 1-.82 2.029A8.388 8.388 0 0 1 17.5 9.115a8.388 8.388 0 0 1 7.778 5.246 1.094 1.094 0 0 1-2.029.819 6.2 6.2 0 0 0-5.749-3.878Z"
        fill="#fff"
        opacity=".4"
      />
      <path
        d="M17.5 4.01c-7.45 0-13.49 6.04-13.49 13.49 0 7.412 5.978 13.428 13.376 13.49a1.094 1.094 0 1 1-.018 2.187C8.77 33.105 1.823 26.114 1.823 17.5c0-8.658 7.019-15.677 15.677-15.677 8.614 0 15.605 6.947 15.677 15.545a1.094 1.094 0 0 1-2.188.018C30.928 9.989 24.912 4.011 17.5 4.011Z"
        fill="#fff"
        opacity=".4"
      />
    </svg>
  );
}

function FramerIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 25 23"
      className="h-[23px] w-[25px]"
      fill="none"
    >
      <path
        d="m12.5 3.225.956-1.05c2.641-2.9 6.923-2.9 9.563 0 2.641 2.9 2.641 7.602 0 10.503l-8.606 9.452c-1.057 1.16-2.77 1.16-3.826 0l-8.606-9.452c-2.641-2.9-2.641-7.603 0-10.503 2.64-2.9 6.922-2.9 9.563 0l.956 1.05Zm6.25-.35a.948.948 0 0 0-.938.958c0 .53.42.959.938.959.863 0 1.563.715 1.563 1.597 0 .53.42.958.937.958a.948.948 0 0 0 .938-.958c0-1.94-1.54-3.514-3.438-3.514Z"
        fill="#fff"
      />
    </svg>
  );
}

function MeanIcon() {
  return (
    <img
      src="/images/web-development-services/mean-mern-icon.png"
      alt=""
      className="h-[25px] w-[25px]"
    />
  );
}

function CustomIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 25 25"
      className="h-[25px] w-[25px]"
      fill="none"
    >
      <path
        d="M9.165 6.994c-.226-.501-.463-.513-.678-.519-.173-.006-.376-.006-.579-.006-.203 0-.527.075-.805.375S6.048 7.871 6.048 9.352c0 1.477 1.084 2.907 1.234 3.108.151.202 2.092 3.333 5.157 4.538 2.549 1.003 3.07.802 3.62.75.551-.052 1.785-.727 2.04-1.43.249-.704.249-1.303.174-1.43-.076-.127-.278-.202-.58-.352-.3-.15-1.784-.876-2.062-.98-.278-.098-.481-.15-.678.15-.203.3-.782.974-.956 1.176-.174.202-.353.225-.655.075-.3-.15-1.274-.467-2.427-1.493-.898-.796-1.506-1.782-1.68-2.082-.174-.3-.018-.461.133-.611.133-.133.301-.352.452-.525.15-.173.203-.3.301-.501.099-.202.052-.375-.023-.525-.075-.144-.666-1.632-.933-2.226Z"
        fill="#fff"
      />
      <path
        d="m0 24.263 1.715-6.227a11.907 11.907 0 0 1-1.61-6.014C.104 5.392 5.526 0 12.183 0c3.233 0 6.268 1.251 8.545 3.523a11.893 11.893 0 0 1 3.534 8.505c0 6.63-5.422 12.022-12.085 12.022h-.006c-2.022 0-4.009-.507-5.776-1.465L0 24.264Zm6.703-3.851.365.219a10.106 10.106 0 0 0 5.11 1.395h.006c5.533 0 10.04-4.48 10.04-9.992a9.921 9.921 0 0 0-2.937-7.07 9.988 9.988 0 0 0-7.103-2.929C6.65 2.03 2.144 6.51 2.144 12.022c0 1.886.527 3.725 1.535 5.316l.237.381-1.013 3.684 3.8-.991Z"
        fill="#fff"
      />
    </svg>
  );
}

function ServiceTitle({
  title,
}: {
  title: string | readonly [string, string];
}) {
  if (Array.isArray(title)) {
    return (
      <h3 className="font-lexend text-[30px] font-semibold leading-[1.2] text-[#0f1728] md:text-[36px]">
        {title[0]}
        <br />
        {title[1]}
      </h3>
    );
  }

  return (
    <h3 className="font-lexend text-[30px] font-semibold leading-[1.2] text-[#0f1728] md:text-[36px]">
      {title}
    </h3>
  );
}

const OurServices = () => {
  return (
    <section className="bg-white px-4 py-20 md:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-[35px] px-0 md:px-8 md:pb-[50px]">
        <div className="flex w-full max-w-[650px] flex-col items-center gap-4 pt-2 text-center">
          <div className="rounded-[50px] bg-[#f5f5f5] px-[22px] py-[2px] font-inter text-[12px] font-semibold tracking-[0.05em] text-[#525252]">
            Featured
          </div>
          <h2 className="font-lexend text-[40px] font-bold leading-[1.16] tracking-[-2px] text-[#171717] md:text-[52px]">
            Our Website <br />
            Development Services
          </h2>
          <p className="font-lexend text-[16px] font-medium leading-[1.4] tracking-[-0.1px] text-[#737373]">
            As a leading Web Development Company in Dubai we are dedicated to
            helping brands create scalable and interactive websites that align
            with their business objectives
          </p>
        </div>

        <div className="flex w-full flex-col gap-[10px]">
          <div className="flex flex-col gap-[10px] lg:flex-row">
            <div className="flex flex-1 flex-col overflow-hidden rounded-[10px] bg-[#f6f7f9]">
              <div className="flex flex-col items-start gap-[10px] p-8 md:p-[50px]">
                <IconShell>
                  <ShopifyIcon />
                </IconShell>
                <ServiceTitle title={services.shopify.title} />
                <p className="font-inter text-[16px] leading-[1.2] text-[#454545]">
                  {services.shopify.description}
                </p>
              </div>
              <img
                src={services.shopify.image}
                alt={services.shopify.title}
                className="h-auto w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="flex flex-1 flex-col overflow-hidden rounded-[10px] bg-[linear-gradient(180deg,#f5a98e_0%,#ffffff_100%)]">
              <div className="flex flex-col items-start gap-[10px] px-8 py-8 md:px-[50px] md:py-[38px]">
                <IconShell>
                  <WordpressIcon />
                </IconShell>
                <ServiceTitle title={services.wordpress.title} />
                <p className="font-inter text-[16px] leading-[1.2] text-[#454545]">
                  {services.wordpress.description}
                </p>
              </div>
              <img
                src={services.wordpress.image}
                alt={services.wordpress.title}
                className="h-auto w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-[10px] bg-[#f6f7f9] px-6 py-8 md:px-0 md:py-[37px] md:pl-[55px]">
            <div className="flex flex-col items-center gap-[10px] lg:flex-row">
              <div className="flex min-w-0 flex-1 flex-col items-start gap-[10px]">
                <IconShell>
                  <FramerIcon />
                </IconShell>
                <ServiceTitle title={services.framer.title} />
                <p className="font-inter text-[16px] leading-[1.2] text-[#454545]">
                  {services.framer.description}
                </p>
              </div>

              <div className="w-full lg:w-[67%]">
                <img
                  src={services.framer.image}
                  alt="Framer and Webflow websites showcase"
                  className="h-auto w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[10px] lg:h-[454px] lg:flex-row">
            <div className="flex flex-1 flex-col items-center gap-4 overflow-hidden rounded-[10px] bg-[linear-gradient(180deg,#ffffff_0%,#f6f7f9_100%)] p-8 md:p-[55px] py-0">
              <div className="flex w-full flex-col items-start gap-[10px]">
                <IconShell>
                  <MeanIcon />
                </IconShell>
                <ServiceTitle title={services.mean.title} />
                <p className="font-inter text-[16px] leading-[1.2] text-[#454545]">
                  {services.mean.description}
                </p>
              </div>
              <img
                src={services.mean.image}
                alt="MEAN and MERN stack technologies"
                className="h-60 w-full max-w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="flex flex-1 flex-col items-center gap-[19px] overflow-hidden rounded-[10px] bg-[linear-gradient(180deg,#f6f7f9_0%,#afc7fa_100%)] p-8 md:p-[55px]">
              <div className="flex w-full flex-col items-start gap-[10px]">
                <IconShell>
                  <CustomIcon />
                </IconShell>
                <ServiceTitle title={services.custom.title} />
                <p className="font-inter text-[16px] leading-[1.2] text-[#454545]">
                  {services.custom.description}
                </p>
              </div>
              <img
                src={services.custom.image}
                alt={services.custom.title}
                className="h-40  max-w-auto  object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
