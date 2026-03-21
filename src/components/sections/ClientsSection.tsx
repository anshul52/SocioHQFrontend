/* eslint-disable @next/next/no-img-element */

type LogoImage = {
  type: "image";
  src: string;
  width: number;
  height: number;
  fit?: "contain" | "cover";
};

type LogoSvg = {
  type: "svg";
  width: number;
  height: number;
  viewBox: string;
  path: string;
};

type LogoItem = LogoImage | LogoSvg;

type LogoRowProps = {
  items: LogoItem[];
  direction?: "left" | "right";
  duration: number;
};

const rowOne: LogoItem[] = [
  {
    type: "image",
    src: "https://framerusercontent.com/images/so2puV0a1BrmB9COadvTeHzI.png?width=200&height=100",
    width: 187,
    height: 107,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/BC4MHEkbRbcIYbFONdJeIkbFIKQ.png?width=200&height=100",
    width: 188,
    height: 107,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/LiqMWszMag9QJ8TyoacHLLfmb4.png?width=200&height=100",
    width: 188,
    height: 107,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/dT4GR34BNR3yGA9JRcSCCz7x9s.png?width=200&height=100",
    width: 188,
    height: 107,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/ekib8dtFMzVquV3RSoPKcMHqbA.png?width=200&height=100",
    width: 187,
    height: 107,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/1HwmiGdSHVUTbCodTnl7JdI7xnY.png?width=200&height=100",
    width: 187,
    height: 106,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/pi7VobzzWo2xePxdaGcyvuFPY.png?width=109&height=89",
    width: 188,
    height: 106,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/HtReLkDgjmsC6BiM4f6Zuho18Y.png?width=200&height=100",
    width: 188,
    height: 106,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/yZdfVmK0Udvg7kVirDSXlHjMo.png?width=200&height=100",
    width: 188,
    height: 106,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/SObKY3CLwEgCk5fjlZbob8yt8.png?width=200&height=100",
    width: 187,
    height: 106,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/a2rM9nx8ac38hyqX76WqXPyndE.png?width=200&height=100",
    width: 187,
    height: 109,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/77vOAHCiwe6Dn6wtbEtHeZJqQ.png?width=200&height=100",
    width: 188,
    height: 109,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/NVrH86p7gdXJJmxSmBFNCna6bWY.png?width=1032&height=599",
    width: 188,
    height: 109,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/M3BCJE7PxWdAMHuIZP4KLejk.png?width=1032&height=599",
    width: 188,
    height: 109,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/hGd6Rp2RashF6c4Yc4qDQ14OVmU.png?width=1032&height=599",
    width: 187,
    height: 109,
    fit: "cover",
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/F3o3inD2TrAjOTbmVGjoMcssMQ.png?width=500&height=183",
    width: 153,
    height: 56,
    fit: "cover",
  },
];

const rowTwo: LogoItem[] = [
  {
    type: "image",
    src: "https://framerusercontent.com/images/cGMH5irEfgbszioDhhupxhBSk.png?width=200&height=100",
    width: 186,
    height: 108,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/zJNIv4emHnI04eFiOaR7YcmSYVc.png?width=200&height=100",
    width: 186,
    height: 108,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/PvFvaceZole2F47GhJqYKJ7Fy4.png?width=200&height=100",
    width: 186,
    height: 105,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/VLCebnNx1uxdjaxjaBxh3MApBo.png?width=200&height=100",
    width: 186,
    height: 108,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/ZbiFfGmTVfQWWtmTRN8WQUlq4.png?width=200&height=100",
    width: 186,
    height: 105,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/M1qz50cjnzHK6StwH8htT11JM.png?width=200&height=100",
    width: 186,
    height: 105,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/7qAEKVgMbBV1SAniLyArrpNo.png?width=200&height=100",
    width: 186,
    height: 105,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/PvFvaceZole2F47GhJqYKJ7Fy4.png?width=200&height=100",
    width: 186,
    height: 105,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/FxIeKG9s01pf9b23m5uxlWvYZzI.png?width=200&height=100",
    width: 186,
    height: 105,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/xByCh5aRL2Ip4zoYWQb680MHV7Y.png?width=1032&height=599",
    width: 186,
    height: 105,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/CBkI3d5zZXlSgWvUlupDHibkM.png?width=1032&height=599",
    width: 186,
    height: 105,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/lBFbIrdmP75YE4TcIIfVRp1VciY.png?width=1032&height=599",
    width: 181,
    height: 105,
    fit: "cover",
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/87yAKlaHqTySqMOWrEe2GS7B08Q.png?width=1032&height=599",
    width: 181,
    height: 105,
    fit: "cover",
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/K4XWiMFtqnQtVWf4r9vnqLXBk.png?width=1236&height=310",
    width: 122,
    height: 31,
    fit: "cover",
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/bGMMffv1MjD7XJVNhF0xlgdb60A.png?width=2560&height=658",
    width: 181,
    height: 47,
    fit: "cover",
  },
];

const rowThree: LogoItem[] = [
  {
    type: "image",
    src: "https://framerusercontent.com/images/QJhJD38MvP3Fu3QkUNjYf09mF4.png?width=200&height=100",
    width: 179,
    height: 103,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/pGjX5txWApM1ZCy4keOtePw7Ns.png?width=200&height=100",
    width: 179,
    height: 103,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/7Rq3cjd2NYJTKNPgdIsabBEeIo4.png?width=200&height=100",
    width: 178,
    height: 103,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/1BWOdzO8jUJcmzs7GV3oYSKho.png?width=200&height=100",
    width: 179,
    height: 103,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/e3lMlFOR9xeQedfnIbdZbY9XlfE.png?width=200&height=100",
    width: 179,
    height: 103,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/7gdfNWhDECXutk8pyvAC89FFZC4.png?width=200&height=100",
    width: 179,
    height: 102,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/xqCl6PI2EEwt1AJ3SKmzSPiNWM.png?width=200&height=100",
    width: 179,
    height: 102,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/MDosLDyGXRMYC55X5uq6bGRI15o.png?width=200&height=100",
    width: 178,
    height: 102,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/yzyuxS4Tt8kXjFtqtvuU4k89hQ.png?width=200&height=100",
    width: 179,
    height: 102,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/2Loake2ZF3q6xg4Ai6DvsU1d3yA.png?width=200&height=100",
    width: 179,
    height: 102,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/cPOX6wGp9rxVOzzaBjZ03BoryA.png?width=1032&height=599",
    width: 179,
    height: 102,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/QI4EmAKcz97aObeF9unNPznt0Ic.png?width=1032&height=599",
    width: 179,
    height: 102,
  },
  {
    type: "image",
    src: "https://framerusercontent.com/images/JTVJ36hP3SNJVOHUNeUngStLChY.png?width=160&height=160",
    width: 63,
    height: 63,
    fit: "cover",
  },
  {
    type: "svg",
    width: 179,
    height: 102,
    viewBox: "0 0 129 13",
    path: "M 121.717 8.085 L 125.211 12.627 L 129 12.627 L 123.832 5.687 L 128.596 0.272 L 124.915 0.272 L 119.933 5.887 L 119.933 0.272 L 116.824 0.272 L 116.824 12.627 L 119.933 12.627 L 119.933 10.121 Z M 107.146 6.286 L 107.146 2.98 L 109.445 2.98 C 110.641 2.98 111.595 3.617 111.595 4.615 C 111.595 5.634 110.639 6.286 109.445 6.286 Z M 109.078 9.047 L 111.763 12.626 L 115.515 12.626 L 112.296 8.447 C 113.785 7.744 114.72 6.245 114.687 4.614 C 114.687 1.943 112.609 0.271 109.519 0.271 L 104.038 0.271 L 104.038 12.627 L 107.146 12.627 L 107.146 9.047 Z M 95.884 2.944 L 102.23 2.944 L 102.23 0.272 L 92.776 0.272 L 92.776 12.627 L 102.23 12.627 L 102.23 9.956 L 95.884 9.956 L 95.884 7.813 L 101.421 7.813 L 101.421 5.196 L 95.884 5.196 Z M 91.59 0.272 L 88.296 0.272 L 85.961 7.939 L 83.312 0.272 L 80.736 0.272 L 80.736 0.309 L 78.088 7.958 L 75.752 0.272 L 72.459 0.272 L 76.506 12.7 L 79.504 12.7 L 82.024 5.159 L 84.544 12.7 L 87.542 12.7 Z M 66.624 0 C 63.683 0 61.658 1.563 61.658 4.035 C 61.658 5.998 62.819 7.142 65.281 7.669 L 67.341 8.123 C 68.408 8.324 68.666 8.761 68.666 9.177 C 68.666 9.85 68.059 10.268 66.9 10.268 C 65.428 10.268 64.472 9.613 64.27 8.524 L 61.162 8.524 C 61.456 11.576 63.994 12.884 66.809 12.884 C 69.935 12.884 71.996 11.34 71.996 8.869 C 71.996 6.743 70.506 5.835 68.225 5.344 L 66.478 4.945 C 65.539 4.744 65.043 4.454 65.043 3.781 C 65.043 2.982 65.76 2.546 66.827 2.546 C 68.096 2.546 68.685 3.183 68.85 4.109 L 71.977 4.109 C 71.664 0.781 68.648 0 66.624 0 M 59.624 0.272 L 56.516 0.272 L 56.516 7.231 L 50.482 0.272 L 48.109 0.272 L 48.109 12.627 L 51.217 12.627 L 51.217 5.85 L 57.214 12.627 L 59.622 12.627 Z M 40.076 10.029 C 39.131 10.021 38.228 9.637 37.574 8.963 C 36.919 8.289 36.568 7.383 36.599 6.45 C 36.544 5.188 37.194 3.998 38.293 3.35 C 39.391 2.703 40.76 2.703 41.858 3.35 C 42.956 3.998 43.607 5.188 43.552 6.45 C 43.583 7.383 43.232 8.289 42.578 8.963 C 41.923 9.637 41.021 10.021 40.076 10.029 M 40.076 0.018 C 38.326 -0.023 36.635 0.637 35.387 1.849 C 34.139 3.061 33.442 4.721 33.454 6.45 C 33.454 10.067 36.423 13 40.085 13 C 43.747 13 46.716 10.067 46.716 6.45 C 46.727 4.718 46.027 3.057 44.776 1.844 C 43.524 0.632 41.828 -0.027 40.076 0.018 M 31.934 0.273 L 29.618 0.273 L 25.185 6.868 L 20.734 0.272 L 18.435 0.272 L 18.435 12.627 L 21.543 12.627 L 21.524 6.395 L 24.319 10.665 L 24.319 10.683 L 26.049 10.683 L 26.049 10.665 L 28.825 6.432 L 28.825 12.627 L 31.934 12.627 Z M 15.967 0.273 L 12.861 0.273 L 12.861 12.627 L 15.969 12.627 Z M 5.461 0 C 2.52 0 0.497 1.563 0.497 4.035 C 0.497 5.998 1.656 7.142 4.12 7.669 L 6.18 8.123 C 7.247 8.324 7.504 8.761 7.504 9.177 C 7.504 9.85 6.897 10.268 5.739 10.268 C 4.267 10.268 3.311 9.613 3.108 8.524 L 0 8.524 C 0.294 11.576 2.832 12.884 5.647 12.884 C 8.774 12.884 10.834 11.34 10.834 8.869 C 10.834 6.743 9.344 5.835 7.063 5.344 L 5.316 4.945 C 4.378 4.744 3.881 4.454 3.881 3.781 C 3.881 2.982 4.598 2.546 5.665 2.546 C 6.935 2.546 7.523 3.183 7.686 4.109 L 10.814 4.109 C 10.502 0.781 7.486 0 5.461 0",
  },
];

function LogoRow({ items, direction = "left", duration }: LogoRowProps) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="clients-lane">
      <div
        className={`clients-track ${direction === "right" ? "clients-track--reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.type}-${index}`}
            className="clients-item"
            style={{ width: `${item.width}px`, height: `${item.height}px` }}
          >
            {item.type === "image" ? (
              <img
                alt=""
                aria-hidden="true"
                loading="lazy"
                src={item.src}
                style={{ objectFit: item.fit ?? "contain" }}
              />
            ) : (
              <svg
                aria-hidden="true"
                className="clients-item__svg"
                viewBox={item.viewBox}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={item.path} fill="#000" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="w-full bg-[#ffffff] py-8 md:py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-6 lg:px-8">
        <div className="flex w-full max-w-[800px] flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-3 overflow-hidden rounded-[60px] bg-[#f8fafc] pr-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#020617]">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
            </span>
            <span className="font-mulish text-[14px] leading-[1.6] text-[#020617]">
              Our Customers
            </span>
          </div>

          <h2 className="font-lexend text-[22px] font-bold leading-[1.16] tracking-[0] text-[#171717] sm:text-[33px] sm:tracking-[-0.04em] lg:text-[42px] xl:text-[52px]">
            Our Clients
          </h2>

          <p className="max-w-[720px] font-mulish text-[15px] leading-[1.6] tracking-[-0.01em] text-[#4b5563] sm:text-[16px]">
            Brands that trust us to elevate their digital presence.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-7 overflow-hidden">
          <LogoRow duration={38} items={rowOne} />
          <LogoRow direction="right" duration={42} items={rowTwo} />
          <LogoRow duration={40} items={rowThree} />
        </div>
      </div>

      <style>{`
        .clients-lane {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          height: 80px;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12.5%,
            black 87.5%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12.5%,
            black 87.5%,
            transparent 100%
          );
        }

        .clients-track {
          display: flex;
          align-items: center;
          gap: 10px;
          width: max-content;
          min-width: max-content;
          will-change: transform;
          animation: clients-marquee linear infinite;
        }

        .clients-track--reverse {
          animation-direction: reverse;
        }

        .clients-item {
          position: relative;
          flex: 0 0 auto;
          overflow: visible;
        }

        .clients-item img,
        .clients-item__svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        @keyframes clients-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
