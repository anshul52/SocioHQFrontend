import Image from "next/image";

type Testimonial = {
  name: string;
  logo: string;
  review: string;
};

const clutchBadge =
  "https://framerusercontent.com/images/BLz62yFbXHFaiPHe8EkIYpL3F0.png?scale-down-to=512";

const testimonialRows: Testimonial[][] = [
  [
    {
      name: "Connection Chauffeur Limo",
      logo: "https://framerusercontent.com/images/TzFq9taJbn9Uy8XWQtgaFySlOQ.png",
      review:
        "We onboarded Socio for Website Development & Digital Marketing services. We saw a 30% increase in sales after I implemented the booking system and website. The design was smooth and user-friendly. They managed the project well by focusing on meeting our deadlines. The team was young and energetic, delivering results throughout the project.",
    },
    {
      name: "Offplan Finder",
      logo: "https://framerusercontent.com/images/H6Bkog9sJTUeHK9CkkIhiuRLB1o.png",
      review:
        "Through our partnership with Socio, they have generated quality leads for our real estate agency. We communicate weekly through Zoom meetings, and they are available for a call anytime if there are additional tasks. Moreover, they maintain an effective workflow and transparent collaboration.",
    },
    {
      name: "Revibe",
      logo: "https://framerusercontent.com/images/S3fxr0uvULZyq17hmRI6tDD4xJ8.svg",
      review:
        "We have been working with them for 2 years now & thanks to Socio's efforts, we saw an increased ad engagement, website traffic, influencer campaign reach, and sales. They consistently delivered timely creative assets, were responsive, and adapted to feedback. They demonstrated commitment & understanding to our brand.",
    },
    {
      name: "Kido",
      logo: "https://framerusercontent.com/images/Ju8IDnjTpeVu6mZParlA4U7Zo.svg",
      review:
        "Socio is hands on one of the best digital marketing comapanies I have worked in dubai. They successfully accomplished my tasks, thanks to an incredible project management workflow and a communicative approach that help me maintain a solid partnership with them. Their professionalism also fosters ongoing collaboration.",
    },
    {
      name: "Reach",
      logo: "https://framerusercontent.com/images/ORnirYlS8o8eb4Cb2heiBt1AM.png",
      review:
        "We partnered with Socio when we took a complete business center in Media City. Their innovative marketing strategies have helped us scale our business to another level. They work as part of a cohesive team, where everyone contributes equally to accomplish each task. As a result, They've been able to consistently deliver high-quality outputs in a timely manner.",
    },
  ],
  [
    {
      name: "Realty Force",
      logo: "https://framerusercontent.com/images/54FsIcrwIVuwork0uExmx113w.png",
      review:
        "We onboarded them for website design services but soon signed up for their other digital marketing services as well. The new website received positive feedback from our customers and helped us attract more traffic and leads. They handled the project well, thanks to a reliable project manager who made sure every task was properly attended to. They were knowledgeable, skilled, and supportive throughout the process.",
    },
    {
      name: "VAVCI",
      logo: "https://framerusercontent.com/images/VmsORq7KbHZeR4woev3h8jXnqQ.png",
      review:
        "I am very satisfied with the consistent productivity and seamless partnership with Socio's Team. They are our go to support for all our digital marketing needs. Our Website's traffic has definitely improved thanks to the team's streamlined communications and flexibility to adapt to the climate of the business.",
    },
    {
      name: "AKG",
      logo: "https://framerusercontent.com/images/FyBnKkxanLqTXVaJ7wpudVuOY.png",
      review:
        "We worked with them on two projects and both were delivered on time and as per our expectations. Thanks to Socio's effort, we enjoy an increase in engagement, followers, and website traffic. The team delivers on time and communicates via in-person and virtual meetings and email. Their innovative approach, collaborative process, and adaptability are hallmarks of the customer satisfaction.",
    },
    {
      name: "Pink Bling",
      logo: "https://framerusercontent.com/images/QCwilV3PiG9d9xeyyRQJhUSQLj0.svg",
      review:
        "I worked with their team on my homegrown jewelry brand, and they helped me create complete branding for my company. The experience was nothing short of amazing, as they were highly communicative and helped bring my vision to life. They also designed a beautiful Shopify website for my brand, which was seamless and visually stunning.",
    },
    {
      name: "DayCleaner",
      logo: "https://framerusercontent.com/images/ORnirYlS8o8eb4Cb2heiBt1AM.png",
      review:
        "We partnered with Socio when we took a complete business center in Media City. They were our first client and on-going partner ever since. Their innovative marketing strategies have helped us scale our business to another level. They work as part of a cohesive team, where everyone contributes equally to accomplish each task. As a result, They've been able to consistently deliver high-quality outputs in a timely manner.",
    },
  ],
];

const maskGradient =
  "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)";

const MarqueeRow = ({
  items,
  reverse = false,
}: {
  items: Testimonial[];
  reverse?: boolean;
}) => {
  const repeatedItems = [...items, ...items];

  return (
    <div
      className="overflow-hidden px-[10px] pb-[12px] pt-[0px]"
      style={{
        WebkitMaskImage: maskGradient,
        maskImage: maskGradient,
      }}
    >
      <div
        className={`what-people-row ${reverse ? "what-people-row--reverse" : ""}`}
      >
        {repeatedItems.map((item, index) => (
          <article
            key={`${item.name}-${index}`}
            className="flex w-[min(435px,86vw)] shrink-0 flex-col rounded-[40px] bg-[#F1F5F9] px-7 pb-7 pt-8 text-left md:w-[435px] md:px-8"
          >
            <div className="flex min-h-[62px] items-center">
              <Image
                src={item.logo}
                alt={`${item.name} logo`}
                width={160}
                height={61}
                className="h-auto max-h-[61px] w-auto max-w-[160px] object-contain"
              />
            </div>

            <p className="mt-6 font-lexend text-[16px] font-light leading-[1.5] tracking-[0] text-[rgba(3,3,3,0.8)]">
              {item.review}
            </p>

            <div className="mt-6 mb-4">
              <Image
                src={clutchBadge}
                alt="Reviewed on Clutch with a 5.0 rating"
                width={118}
                height={12}
                className="object-contain"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const WhatPeopleSaying = () => {
  return (
    <section className="bg-white px-4 pb-20 pt-8 sm:px-6 lg:px-4 lg:pb-24 lg:pt-2">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center">
        <div className="flex w-full max-w-[920px] flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F8FAFC] px-4 py-1.5 shadow-[inset_0_0_0_1px_rgba(2,6,23,0.08)]">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#020617]">
              <span className="h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="font-inter text-[14px] leading-[1.6] text-[#020617]">
              Voices of Satisfaction
            </span>
          </div>

          <h2 className="text-[52px] font-bold font-lexend tracking-tighter text-center mb-0">
            What People are saying
          </h2>

          <p className="max-w-[800px] font-mulish text-[17px] leading-8 tracking-[-0.01em] text-[#475569] md:text-[20px]">
            Our strategic know-how has enabled countless businesses to achieve
            their digital marketing solutions and stand out brilliantly from the
            competition.
          </p>
        </div>

        <div className="mt-10 flex w-full flex-col gap-[0px] md:mt-14 md:gap-[0px]">
          <MarqueeRow items={testimonialRows[0]} />
          <MarqueeRow items={testimonialRows[1]} reverse />
        </div>
      </div>

      <style>{`
        .what-people-row {
          --gap: 15px;
          display: flex;
          align-items: flex-start;
          width: max-content;
          gap: var(--gap);
          will-change: transform;
          animation: what-people-marquee 42s linear infinite;
        }

        .what-people-row--reverse {
          animation-name: what-people-marquee-reverse;
          animation-duration: 46s;
        }

        @keyframes what-people-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - (var(--gap) / 2)));
          }
        }

        @keyframes what-people-marquee-reverse {
          from {
            transform: translateX(calc(-50% - (var(--gap) / 2)));
          }

          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhatPeopleSaying;
