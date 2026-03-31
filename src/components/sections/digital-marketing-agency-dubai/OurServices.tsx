/* eslint-disable @next/next/no-img-element */
import {
  type ServicesSectionContent,
  usaDigitalMarketingAgencyContent,
} from "@/content/digital-marketing-agency";

type OurServicesProps = {
  content?: ServicesSectionContent;
};

const OurServices = ({
  content = usaDigitalMarketingAgencyContent.services,
}: OurServicesProps) => {
  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 flex items-center justify-center">
          <div className="w-fit rounded-2xl bg-[#F5F5F5] p-1 px-5 text-center font-inter text-[12px] font-bold text-[#525252]">
            {content.badge}
          </div>
        </div>
        <h2 className="mb-4 text-center font-lexend text-[52px] font-bold tracking-tighter">
          {content.title}
        </h2>
        <p className="mb-12 text-center font-inter text-base font-medium leading-5 text-gray-600">
          {content.description}
        </p>
        <div className="mt-12 flex gap-2">
          <div className="w-1/2 rounded-lg bg-[#f6f7f9]">
            <div className="w-full px-12 pt-20">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-black">
                <span aria-hidden="true">{"\uD83D\uDD0D"}</span>
              </div>
              <h1 className="mb-3 font-lexend text-[36px] font-semibold leading-11">
                {content.cards.seo.title}
              </h1>
              <p className="font-inter text-base font-medium leading-5 text-gray-600">
                {content.cards.seo.description}
              </p>
            </div>
            <img
              src="/images/eqhAZTQXge8OEWJKJyMeOUJs.avif"
              alt=""
              className="h-auto w-full"
            />
          </div>
          <div className="w-1/2 rounded-lg bg-gradient-to-b from-[#8FB0F5] to-white text-white transition-all duration-300">
            <div className="w-full px-12 pt-20">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-black">
                <span aria-hidden="true">{"\uD83D\uDD0D"}</span>
              </div>
              <h1 className="font-lexend text-[36px] font-semibold leading-11 text-black">
                {content.cards.ppc.title}
              </h1>
              <p className="font-inter text-base font-medium leading-5 text-gray-600">
                {content.cards.ppc.description}
              </p>
            </div>
            <img
              src="/images/c24tZY8YyftvOBMoIVozjFcsU.avif"
              alt=""
              className="h-auto w-full"
            />
          </div>
        </div>
        <div className="mt-12 flex gap-2 rounded-lg bg-[#f6f7f9] p-6">
          <div className="w-1/2">
            <div className="w-full px-12 pt-20">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-black">
                <span aria-hidden="true">{"\uD83D\uDD0D"}</span>
              </div>
              <h1 className="mb-3 font-lexend text-[36px] font-semibold leading-11">
                {content.cards.social.title}
              </h1>
              <p className="font-inter text-base font-medium leading-5 text-gray-600">
                {content.cards.social.description}
              </p>
            </div>
          </div>
          <img
            src="/images/BpaSxj6ktbEDcMVXytqvq4g39k.avif"
            alt=""
            className="h-auto w-1/2"
          />
        </div>
        <div className="mt-12 flex gap-2">
          <div className="w-1/2 rounded-lg bg-gradient-to-b from-[#11DDD3] to-white p-6">
            <div className="w-full px-12 pt-20">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-black">
                <span aria-hidden="true">{"\uD83D\uDD0D"}</span>
              </div>
              <h1 className="mb-3 font-lexend text-[36px] font-semibold leading-11">
                {content.cards.leadGeneration.title}
              </h1>
              <p className="font-inter text-base font-medium leading-5 text-gray-600">
                {content.cards.leadGeneration.description}
              </p>
            </div>
            <img
              src="/images/rKWfc5T1IC8ga3mxHVCT2F9z8k.avif"
              alt=""
              className="h-auto w-full"
            />
          </div>
          <div className="w-1/2 rounded-lg bg-gradient-to-b from-white to-[#8FB0F5] p-6">
            <div className="w-full px-12 pt-20">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-black">
                <span aria-hidden="true">{"\uD83D\uDD0D"}</span>
              </div>
              <h1 className="mb-3 font-lexend text-[36px] font-semibold leading-11">
                {content.cards.whatsapp.title}
              </h1>
              <p className="font-inter text-base font-medium leading-5 text-gray-600">
                {content.cards.whatsapp.description}
              </p>
            </div>
            <img
              src="/images/ZvjVrSupCDr7b1Xw6jirZNMxJRs.avif"
              alt=""
              className="h-auto w-full"
            />
          </div>
        </div>
        <div className="mt-12">
          <div className="overflow-hidden rounded-[38px] bg-[#f5f7f9] p-[4px]">
            <div className="flex min-h-[400px] w-full flex-col items-center justify-center rounded-[34px] bg-[radial-gradient(circle_at_top_left,_rgba(218,244,245,0.95),_transparent_34%),radial-gradient(circle_at_center,_rgba(245,228,205,0.92),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(235,213,245,0.92),_transparent_34%),linear-gradient(90deg,_#eef6f7_0%,_#f7f0e7_50%,_#f1e6f7_100%)] px-6 py-16 text-center md:px-12">
              <div className="mx-auto flex max-w-[980px] flex-col items-center">
                <h1 className="max-w-[980px] font-mulish text-[42px] font-bold leading-[1.12] tracking-[-0.04em] text-[#0a1028]">
                  {content.ctaTitle.lines[0]}
                  <br />
                  {content.ctaTitle.lines[1]}
                </h1>
                <p className="mt-5 max-w-[980px] font-mulish text-[18px] font-medium leading-[1.6] tracking-[-0.02em] text-[#1d2338] md:px-8">
                  {content.ctaDescription}
                </p>
                <button className="mt-8 inline-flex min-h-[60px] items-center justify-center rounded-[14px] bg-[linear-gradient(180deg,_#14192c_0%,_#0b1020_100%)] px-8 font-inter text-[18px] font-semibold leading-none text-white shadow-[0_12px_30px_rgba(8,12,24,0.18)] transition-transform duration-300 hover:scale-[1.02]">
                  {content.ctaButtonLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
