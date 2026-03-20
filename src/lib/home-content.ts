export type NavLink = {
  href: string;
  label: string;
};

export type ServiceLink = {
  href: string;
  label: string;
};

export type HeroStat = {
  avatars: string[];
  label: string;
};

export type ServiceCard = {
  href: string;
  title: string;
  accent: "orange" | "green" | "purple" | "blue" | "peach";
  image: string;
  icon: string;
};

export type SpotlightCard = {
  href: string;
  badge: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  accent: "mint" | "peach";
};

export type Testimonial = {
  company: string;
  quote: string;
};

export type BlogPost = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  image: string;
};

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Career" },
  { href: "#contact", label: "Contact Us" },
];

export const serviceLinks: ServiceLink[] = [
  { href: "/#services", label: "Web Development" },
  { href: "/#services", label: "Digital Marketing" },
  { href: "/#services", label: "Search Engine Optimization" },
  { href: "/#services", label: "Performance Marketing" },
  { href: "/#services", label: "Social Media Marketing" },
  { href: "/#services", label: "Branding" },
  { href: "/#services", label: "WhatsApp Marketing" },
  { href: "/#services", label: "PR" },
];

export const heroWords = ["Craft", "Build", "Elevate"];

export const heroStat: HeroStat = {
  avatars: [
    "https://framerusercontent.com/images/6kP3ad08MCSyS8aomPzuKit55Q.png?width=512&height=512",
    "https://framerusercontent.com/images/BIm3UvKRYwDsU3ZXU2X1GyVAl7A.png",
    "https://framerusercontent.com/images/lwZvDV4wQGvN9yW03NO2R6ctQ.png",
    "https://framerusercontent.com/images/7jtRkW2ogifNbFAwCtMgIywPHI.png",
  ],
  label: "200+ already with us",
};

export const clientLogos = [
  "https://framerusercontent.com/images/so2puV0a1BrmB9COadvTeHzI.png?width=200&height=100",
  "https://framerusercontent.com/images/BC4MHEkbRbcIYbFONdJeIkbFIKQ.png?width=200&height=100",
  "https://framerusercontent.com/images/LiqMWszMag9QJ8TyoacHLLfmb4.png?width=200&height=100",
  "https://framerusercontent.com/images/dT4GR34BNR3yGA9JRcSCCz7x9s.png?width=200&height=100",
  "https://framerusercontent.com/images/ekib8dtFMzVquV3RSoPKcMHqbA.png?width=200&height=100",
  "https://framerusercontent.com/images/1HwmiGdSHVUTbCodTnl7JdI7xnY.png?width=200&height=100",
  "https://framerusercontent.com/images/pi7VobzzWo2xePxdaGcyvuFPY.png?width=109&height=89",
  "https://framerusercontent.com/images/HtReLkDgjmsC6BiM4f6Zuho18Y.png?width=200&height=100",
  "https://framerusercontent.com/images/yZdfVmK0Udvg7kVirDSXlHjMo.png?width=200&height=100",
  "https://framerusercontent.com/images/SObKY3CLwEgCk5fjlZbob8yt8.png?width=200&height=100",
  "https://framerusercontent.com/images/a2rM9nx8ac38hyqX76WqXPyndE.png?width=200&height=100",
  "https://framerusercontent.com/images/77vOAHCiwe6Dn6wtbEtHeZJqQ.png?width=200&height=100",
];

export const serviceCards: ServiceCard[] = [
  {
    href: "/#services",
    title: "Digital Marketing",
    accent: "orange",
    image: "https://framerusercontent.com/images/V3iJDRKDgIQNeYgK1LAHe3luEGA.png?width=1208&height=1080",
    icon: "https://framerusercontent.com/images/GW6q0PTvGq9pmvX02ofYdm5p7dE.svg?width=36&height=36",
  },
  {
    href: "/#services",
    title: "Web Development",
    accent: "blue",
    image: "https://framerusercontent.com/images/Iezw644CW9qmN6Jo6cF9S7Sb7MY.png?width=2346&height=2346",
    icon: "https://framerusercontent.com/images/MduEw1nfufRJPB53QSyix8zKQ7Q.svg?width=35&height=34",
  },
  {
    href: "/#services",
    title: "SEO Optimisation",
    accent: "green",
    image: "https://framerusercontent.com/images/1ENVBnK4sGdrYkeuAXNMYhqik.jpg?width=1113&height=1173",
    icon: "https://framerusercontent.com/images/wHoFmWkMa8UZkBtfcnwiRhT1s.svg?width=36&height=36",
  },
  {
    href: "/#services",
    title: "Performance Marketing",
    accent: "peach",
    image: "https://framerusercontent.com/images/WwRcmIiPilRFoefyLlCBXiw8rA.jpg?width=1106&height=1174",
    icon: "https://framerusercontent.com/images/lzAw4YbladfEQgLJKlplYivOuTo.svg?width=36&height=36",
  },
  {
    href: "/#services",
    title: "Social Media",
    accent: "purple",
    image: "https://framerusercontent.com/images/6W9l1HRRPWtgzfDQxAn3JvL1wPU.jpg?width=1173&height=1173",
    icon: "https://framerusercontent.com/images/KaOjYllM5UYFQFfBLRPVPXscyU.svg",
  },
];

export const spotlightCards: SpotlightCard[] = [
  {
    href: "/#about",
    badge: "Search Engine Optimization",
    title: "Rank #1 On Search Engine",
    description:
      "Your business deserves organic growth. We design SEO campaigns that highlight your brand, grow authority, and unlock durable demand.",
    points: ["Technical SEO", "Content strategy", "Topical authority"],
    image: "https://framerusercontent.com/images/1ENVBnK4sGdrYkeuAXNMYhqik.jpg?width=1113&height=1173",
    accent: "mint",
  },
  {
    href: "/#about",
    badge: "Pay Per Click",
    title: "Find Leads Which Convert",
    description:
      "Unlock the full potential of paid search with data, AI, and sharp creative direction that drives sales, leads, and awareness.",
    points: ["Google Ads", "Landing pages", "Conversion tracking"],
    image: "https://framerusercontent.com/images/WwRcmIiPilRFoefyLlCBXiw8rA.jpg?width=1106&height=1174",
    accent: "peach",
  },
];

export const testimonials: Testimonial[] = [
  {
    company: "CC Limo",
    quote:
      "We onboarded Socio for Website Development & Digital Marketing services. We saw a 30% increase in sales after implementing the booking system and website.",
  },
  {
    company: "Offplan Finder",
    quote:
      "Through our partnership with Socio, they generated quality leads for our real estate agency and maintained an effective workflow with transparent collaboration.",
  },
  {
    company: "Revibe",
    quote:
      "We have been working with them for 2 years now and saw increased ad engagement, website traffic, influencer campaign reach, and sales.",
  },
  {
    company: "Kido",
    quote:
      "They successfully accomplished my tasks with an incredible project management workflow and a communicative approach that helped maintain a solid partnership.",
  },
  {
    company: "Reach Business Center",
    quote:
      "Their innovative marketing strategies helped us scale our business to another level and they consistently delivered high-quality outputs in a timely manner.",
  },
  {
    company: "Realty Force",
    quote:
      "The new website received positive feedback from our customers and helped us attract more traffic and leads. They were knowledgeable, skilled, and supportive throughout the process.",
  },
  {
    company: "VAVCI",
    quote:
      "I am very satisfied with the consistent productivity and seamless partnership with Socio's team. Our website traffic has definitely improved.",
  },
  {
    company: "Pink Bling",
    quote:
      "They helped me create complete branding for my company and designed a beautiful Shopify website that was seamless and visually stunning.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    category: "Digital Marketing",
    title: "Boost Sales Fast: Secrets from Dubai’s Social Media Pros",
    excerpt:
      "Boost sales in Dubai with expert social media strategies, trend-driven content, smart ads, cultural insight, and data-backed tactics that convert fast.",
    date: "Feb 12, 2026",
    href: "/#insights",
    image: "https://framerusercontent.com/images/Lq1CLVY80UrpjlGFh102kb3qQU.png?width=1920&height=1080",
  },
  {
    category: "Digital Marketing",
    title: "Best Free Tools for AI Ad Variations",
    excerpt:
      "Best free AI tools to create ad variations faster, test smarter, and improve PPC performance for brands and agencies in competitive markets like Dubai.",
    date: "Feb 6, 2026",
    href: "/#insights",
    image: "https://framerusercontent.com/images/Pi1k7ZH7CP5CnHD1J5qj5fNtIB0.png?width=1920&height=1080",
  },
  {
    category: "SEO",
    title: "What Are Content Clusters and Why They Boost Rankings",
    excerpt:
      "Find out how content clusters help websites rank higher by building topical authority, improving internal linking, and winning SEO in competitive markets like Dubai.",
    date: "Jan 26, 2026",
    href: "/#insights",
    image: "https://framerusercontent.com/images/BlALty6fxqiky2WyruK3g5cME.png?width=1920&height=1080",
  },
];

export const contactDetails = {
  address: "10th Floor, Concord Tower, Media City, Dubai",
  phone: "+971545255889",
  whatsapp: "https://wa.link/0tukmt",
  email: "info@socio.ae",
  socialLinks: [
    { href: "https://www.instagram.com/sociohq", label: "Instagram" },
    { href: "https://www.facebook.com/sociomediahq", label: "Facebook" },
    { href: "https://dribbble.com/socioHQ", label: "Dribbble" },
    { href: "https://www.behance.net/socioHQ", label: "Behance" },
  ],
};
