"use client";

import Image from "next/image";

const BRANDS = [
  {
    src: "/images/whatsapp-marketing/brands/navg-logo.png",
    alt: "NAVG",
    width: 187,
    height: 107,
    fit: "contain" as const,
  },
  {
    src: "/images/whatsapp-marketing/brands/orange-logo.png",
    alt: "Orange",
    width: 188,
    height: 107,
    fit: "contain" as const,
  },
  {
    src: "/images/whatsapp-marketing/brands/superstore-logo.png",
    alt: "Superstore",
    width: 188,
    height: 107,
    fit: "contain" as const,
  },
  {
    src: "/images/whatsapp-marketing/brands/revi-de-logo.png",
    alt: "REVI DE",
    width: 188,
    height: 107,
    fit: "contain" as const,
  },
  {
    src: "/images/whatsapp-marketing/brands/prologue-logo.png",
    alt: "Prologue",
    width: 187,
    height: 107,
    fit: "contain" as const,
  },
  {
    src: "/images/whatsapp-marketing/brands/monviso-logo.png",
    alt: "Monviso",
    width: 187,
    height: 106,
    fit: "contain" as const,
  },
  {
    src: "/images/whatsapp-marketing/brands/ferrari-world-logo.png",
    alt: "Ferrari World",
    width: 188,
    height: 106,
    fit: "contain" as const,
  },
  {
    src: "/images/whatsapp-marketing/brands/ascend-logo.png",
    alt: "Ascend",
    width: 188,
    height: 106,
    fit: "contain" as const,
  },
  {
    src: "/images/whatsapp-marketing/brands/w-logo.png",
    alt: "W",
    width: 188,
    height: 106,
    fit: "contain" as const,
  },
  {
    src: "/images/whatsapp-marketing/brands/al-shamsi-logo.png",
    alt: "Al Shamsi",
    width: 187,
    height: 106,
    fit: "contain" as const,
  },
  {
    src: "/images/whatsapp-marketing/brands/club-co-logo.png",
    alt: "Club Co",
    width: 187,
    height: 109,
    fit: "contain" as const,
  },
  {
    src: "/images/whatsapp-marketing/brands/phoenix-logo.png",
    alt: "Phoenix",
    width: 188,
    height: 109,
    fit: "contain" as const,
  },
  {
    src: "/images/whatsapp-marketing/brands/somayeh-logo.png",
    alt: "Somayeh Beauty Salon",
    width: 188,
    height: 109,
    fit: "contain" as const,
  },
  {
    src: "/images/whatsapp-marketing/brands/majestay-logo.png",
    alt: "Majestay Real Estate",
    width: 188,
    height: 109,
    fit: "contain" as const,
  },
  {
    src: "/images/whatsapp-marketing/brands/emenu-logo.png",
    alt: "eMenu",
    width: 187,
    height: 109,
    fit: "cover" as const,
  },
  {
    src: "/images/whatsapp-marketing/brands/remax-logo.png",
    alt: "RE/MAX",
    width: 153,
    height: 56,
    fit: "cover" as const,
  },
] as const;

const MARQUEE_BRANDS = [...BRANDS, ...BRANDS];

export default function BrandsThatTrustUs() {
  return (
    <section
      id="company"
      className="w-full overflow-visible bg-white px-5 py-[25px] md:px-10 xl:px-[95px]"
    >
      <div className="mx-auto flex w-full max-w-[1249px] flex-col items-center justify-center gap-[26px] overflow-hidden">
        <div className="w-full">
          <h2 className="mx-auto max-w-[820px] text-center font-lexend text-[25px] leading-[1.2] font-semibold tracking-[0] text-[#0F1728]">
            <span>Brands that </span>
            <span className="text-[#00E785]">trust us to elevate</span>
            <span> their digital presence.</span>
          </h2>
        </div>

        <div className="relative h-20 w-full max-w-[1195px] overflow-hidden">
          <div className="brands-mask h-full w-full">
            <ul className="brands-track flex h-full w-max items-center gap-0">
              {MARQUEE_BRANDS.map((brand, index) => (
                <li key={`${brand.src}-${index}`} className="shrink-0">
                  <div
                    className="relative shrink-0"
                    style={{
                      width: `${brand.width}px`,
                      height: `${brand.height}px`,
                    }}
                  >
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      fill
                      sizes={`${brand.width}px`}
                      className={
                        brand.fit === "cover" ? "object-cover" : "object-contain"
                      }
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .brands-mask {
          padding: 10px;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12.5%,
            black 87.5%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12.5%,
            black 87.5%,
            transparent 100%
          );
        }

        .brands-track {
          animation: brands-marquee 34s linear infinite;
          will-change: transform;
        }

        @keyframes brands-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 1199px) {
          .brands-track {
            animation-duration: 28s;
          }
        }

        @media (max-width: 809px) {
          .brands-mask {
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 8%,
              black 92%,
              transparent 100%
            );
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 8%,
              black 92%,
              transparent 100%
            );
          }

          .brands-track {
            animation-duration: 24s;
          }
        }
      `}</style>
    </section>
  );
}
