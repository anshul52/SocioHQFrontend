import Image from "next/image";
import {
  ArrowRight,
  ClipboardCheck,
  Lightbulb,
  Search,
} from "lucide-react";

const keywordPills = [
  "SEO",
  "Market Research",
  "Content Marketing",
  "Advertising",
  "Keywords",
  "Social Media",
];

const featureItems = [
  {
    title: "On Page SEO",
    description:
      "Our on-site SEO services ensure you're heard loud and clear.",
    icon: Lightbulb,
  },
  {
    title: "Off Page SEO",
    description:
      "Beyond your site, we extend your digital footprint, building robust backlinks.",
    icon: ClipboardCheck,
  },
];

const OurServices2 = () => {
  return (
    <section className="bg-white px-4 py-20 md:px-6 lg:py-24">
      <div className="mx-auto grid max-w-[1520px] items-center gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-16">
        <div className="relative min-h-[620px] overflow-hidden rounded-[28px] border border-[#d8e4ff] bg-[#5c82ea] px-6 pt-8 shadow-[0_0_0_3px_rgba(255,255,255,0.9)_inset] sm:px-8 sm:pt-10 md:min-h-[720px] md:px-10 lg:min-h-[724px]">
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex w-full max-w-[278px] items-center justify-between rounded-full border border-white/45 bg-white/8 px-5 py-3 text-white/85 shadow-[0_10px_30px_rgba(39,69,158,0.18)] backdrop-blur-[2px] sm:max-w-[276px]">
              <span className="font-inter text-[14px] font-medium">
                Top Keywords
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#8f96ab] shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
                <Search className="h-4 w-4" strokeWidth={2.4} />
              </span>
            </div>

            <div className="mt-8 flex max-w-[520px] flex-wrap items-center justify-center gap-3">
              {keywordPills.map((pill, index) => {
                const isActive = index === 0;

                return (
                  <span
                    key={pill}
                    className={`inline-flex h-10 items-center justify-center rounded-full px-6 font-inter text-[14px] font-semibold tracking-[-0.01em] ${
                      isActive
                        ? "bg-[linear-gradient(90deg,#ff9e36_0%,#ff5f67_100%)] text-white shadow-[0_10px_25px_rgba(255,111,83,0.3)]"
                        : "border border-white/65 bg-white/7 text-white shadow-[0_8px_18px_rgba(34,55,124,0.14)]"
                    }`}
                  >
                    {pill}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="pointer-events-none absolute left-[-4%] top-[56%] h-[24px] w-[54%] rounded-full bg-[linear-gradient(90deg,#0b74e7_0%,#2558da_100%)] opacity-95 blur-[0.2px]" />
          <div className="pointer-events-none absolute right-[5%] top-[59%] h-[28px] w-[42%] rounded-full bg-[linear-gradient(90deg,#2f1de2_0%,#2f05b5_100%)] opacity-95 blur-[0.2px]" />
          <div className="pointer-events-none absolute bottom-[92px] left-1/2 z-20 h-[112px] w-[300px] -translate-x-1/2 rotate-[9deg] rounded-[50%] border-[18px] border-[#150db7] sm:h-[120px] sm:w-[332px] md:bottom-[90px] md:h-[126px] md:w-[348px] md:border-[20px]" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[130px] bg-[linear-gradient(180deg,rgba(92,130,234,0)_0%,rgba(92,130,234,0.08)_35%,rgba(92,130,234,0.42)_100%)]" />

          <Image
            src="/images/c24tZY8YyftvOBMoIVozjFcsU.avif"
            alt="SEO illustration"
            width={974}
            height={1024}
            className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-auto w-[74%] max-w-[540px] -translate-x-1/2 select-none md:w-[68%]"
            priority={false}
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-3 rounded-[18px] border border-[#dbe3ef] bg-white px-4 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)] sm:gap-4 sm:px-5">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#0e1326] text-white sm:h-10 sm:w-10">
              <ArrowRight className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <span className="font-inter text-[18px] font-semibold leading-none tracking-[-0.03em] text-[#12182b] sm:text-[22px]">
              Dominate The Top Rankings
            </span>
          </div>

          <h2 className="mt-8 max-w-[760px] font-lexend text-[42px] font-medium leading-[1.02] tracking-[-0.05em] text-[#090f23] sm:text-[52px] lg:text-[66px]">
            Search Engine Optimization
          </h2>

          <p className="mt-8 max-w-[760px] font-inter text-[18px] font-normal leading-[1.78] tracking-[-0.02em] text-[#242a3a] sm:text-[20px]">
            Being a leading SEO agency in dubai, we ensure your brand not only
            gets found but dominates search engine results. With a holistic seo
            approach, we modify website content and structure to boost
            visibility, drive organic traffic, and position you as the industry
            leader.
          </p>

          <div className="mt-10 h-px w-full bg-[#dce3ec]" />

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
            {featureItems.map(({ title, description, icon: Icon }) => (
              <div key={title} className="max-w-[320px]">
                <div className="flex items-center gap-3">
                  <Icon className="h-7 w-7 text-[#0c1225]" strokeWidth={2.2} />
                  <h3 className="font-inter text-[26px] font-medium tracking-[-0.03em] text-[#0c1225]">
                    {title}
                  </h3>
                </div>
                <p className="mt-5 font-inter text-[16px] leading-[1.75] text-[#2d3446]">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-12 inline-flex w-fit items-center justify-center rounded-full border border-[#0a0f1f] bg-[#111111] px-9 py-4 font-inter text-[17px] font-semibold text-white shadow-[0_0_0_3px_#d2e4f5,0_16px_34px_rgba(17,17,17,0.12)] transition-transform duration-300 hover:scale-[1.02]"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices2;
