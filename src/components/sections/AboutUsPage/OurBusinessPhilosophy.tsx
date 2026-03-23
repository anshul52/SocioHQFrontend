const philosophyItems = [
  {
    title: "Our Mission",
    description:
      "Our mission is to help our clients establish a strong online presence, build brand awareness, and drive revenue growth.",
    image:
      "https://framerusercontent.com/images/bJbhFHhA7EgtwfCI6kuRwqhLhI.png?scale-down-to=1024",
    gradient:
      "linear-gradient(180deg, #3485fd 0%, rgba(254, 186, 255, 0) 100%)",
    imageClassName: "h-[251px] w-[265px] max-w-full",
  },
  {
    title: "Our Vision",
    description:
      "Our vision is to be a leading digital marketing agency that is recognized for its exceptional quality of work, creativity, and innovation.",
    image:
      "https://framerusercontent.com/images/a5X5sjCYXz99Ob9Olavp1V8fM.png?scale-down-to=1024",
    gradient: "linear-gradient(180deg, #fc6938 0%, #fafafa 100%)",
    imageClassName: "h-[250px] w-[265px] max-w-full",
  },
  {
    title: "Our Values",
    description:
      "Our digital marketing agency strives to empower businesses of all sizes to achieve their online goals through innovative and effective digital marketing strategies.",
    image:
      "https://framerusercontent.com/images/Wq9LEFSJXiXM0Nuugiyo9QfbI.png?scale-down-to=1024",
    gradient: "linear-gradient(180deg, #fc9535 0%, #fafafa 100%)",
    imageClassName: "h-[228px] w-[241px] max-w-full",
  },
  {
    title: "Our Goals",
    description:
      "Our vision is to be a leading digital marketing agency that is recognized for its exceptional quality of work, creativity, and innovation.",
    image:
      "https://framerusercontent.com/images/r1eAXwZuniOkUr1jWp1UnBj1xY.png?scale-down-to=1024",
    gradient: "linear-gradient(180deg, #359cfc 0%, #fafafa 100%)",
    imageClassName: "h-[252px] w-[265px] max-w-full",
  },
] as const;

const OurBusinessPhilosophy = () => {
  return (
    <section className="w-full px-4 py-6 ">
      <div className="mx-auto flex w-full max-w-full flex-col items-center justify-center gap-6 overflow-hidden">
        <div className="flex w-full flex-col items-center justify-center gap-[5px] overflow-visible">
          <h2
            className="text-center text-[52px] leading-5 font-bold tracking-normal text-[#171717] min-[810px]:leading-[1.16] min-[810px]:tracking-[-2px]"
            style={{ fontFamily: "var(--font-lexend)" }}
          >
            Our Business Philosophy
          </h2>
        </div>

        <div className="flex max-w-7xl items-start gap-6 overflow-visible">
          {philosophyItems.map((item, index) => (
            <article
              key={item.title}
              className={`relative flex w-full flex-none flex-col items-center justify-center gap-10 overflow-visible rounded-[24px] px-6 pt-10 min-[810px]:px-6 min-[810px]:pt-10 min-[1200px]:flex-[0.8_0_0] ${
                index === 0 ? "min-[1200px]:h-[509px]" : ""
              }`}
              style={{
                background: item.gradient,
              }}
            >
              <div className="flex w-[259px] max-w-full flex-col items-center justify-center gap-[10px] overflow-hidden">
                <div className="relative flex h-auto w-auto items-center justify-center overflow-visible rounded-full border border-transparent bg-white px-[10px] py-[2px] min-[810px]:px-[14px] min-[810px]:py-1">
                  <p
                    className="w-auto whitespace-pre text-center text-sm leading-[22px] font-semibold text-[#111111]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.title}
                  </p>
                </div>

                <p
                  className="w-full text-center text-base leading-[1.2] font-normal text-white"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item.description}
                </p>
              </div>

              <div
                className={`relative overflow-hidden ${item.imageClassName} ${
                  index === 3
                    ? "max-[1199px]:h-[330px] max-[1199px]:w-[280px]"
                    : ""
                } ${
                  index === 0
                    ? "min-[1200px]:max-[1399px]:h-[214px] min-[1200px]:max-[1399px]:w-[226px]"
                    : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain object-center"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBusinessPhilosophy;
