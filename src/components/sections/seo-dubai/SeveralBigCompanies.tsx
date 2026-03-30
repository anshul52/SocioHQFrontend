import Image from "next/image";

const SeveralBigCompanies = () => {
  return (
    <section
      id="company"
      className="flex w-full scroll-mt-[100px] justify-center overflow-visible bg-white px-6 py-[17px] md:px-[60px] md:py-12 xl:px-[95px] xl:py-[30px]"
    >
      <div className="flex w-full max-w-[1249px] flex-col items-center justify-center gap-6 overflow-hidden md:gap-[14px]">
        <div className="w-[341px] text-center font-inter text-[14px] leading-[140%] font-normal text-[#3F3F3F] md:w-[753px] md:text-[20px]">
          <p className="md:hidden">Collaborating closely with</p>
          <p className="md:hidden">several big companies</p>
          <p className="hidden md:block">
            Collaborating closely with several big companies
          </p>
        </div>

        <div className="flex h-[134px] w-[347px] flex-col items-center justify-center gap-[5px] overflow-hidden bg-white md:h-[71px] md:w-[1101px] md:flex-row md:gap-0">
          <div className="flex h-[71px] w-[350px] items-center justify-center gap-[10px] overflow-hidden bg-white md:w-[523px]">
            <div className="relative h-[46px] w-[105px] flex-none md:h-[71px] md:w-[163px]">
              <Image
                src="/images/seo-dubai/several-big-companies/khaleej-times.png"
                alt="Khaleej Times"
                fill
                sizes="(min-width: 768px) 163px, 105px"
                className="object-contain"
              />
            </div>

            <div className="relative h-[54px] w-[124px] flex-none md:h-[68px] md:w-[156px]">
              <Image
                src="/images/seo-dubai/several-big-companies/google-partner.png"
                alt="Google Partner"
                fill
                sizes="(min-width: 768px) 156px, 124px"
                className="object-contain"
              />
            </div>

            <div className="relative h-[41px] w-[94px] flex-none md:h-[52px] md:w-[118px]">
              <Image
                src="/images/seo-dubai/several-big-companies/clutch.png"
                alt="Clutch"
                fill
                sizes="(min-width: 768px) 118px, 94px"
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex h-[71px] w-[347px] items-center justify-center gap-[17px] overflow-hidden bg-white md:w-[581px] md:gap-[27px]">
            <div className="relative h-[53px] w-[121px] flex-none md:h-[79px] md:w-[181px]">
              <Image
                src="/images/seo-dubai/several-big-companies/meta-business-partner.png"
                alt="Meta Business Partner"
                fill
                sizes="(min-width: 768px) 181px, 121px"
                className="object-contain"
              />
            </div>

            <div className="relative h-[57px] w-[100px] flex-none md:h-[82px] md:w-[144px]">
              <Image
                src="/images/seo-dubai/several-big-companies/topdevelopers.png"
                alt="TopDevelopers"
                fill
                sizes="(min-width: 768px) 144px, 100px"
                className="object-contain"
              />
            </div>

            <div className="relative h-[40px] w-[91px] flex-none md:h-[76px] md:w-[175px]">
              <Image
                src="/images/seo-dubai/several-big-companies/gulf-today.png"
                alt="Gulf Today"
                fill
                sizes="(min-width: 768px) 175px, 91px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeveralBigCompanies;
