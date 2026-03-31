import type { Metadata } from "next";

export type AnimatedPhrase = {
  text: string;
  gradient: string;
};

export type SplitHeading = {
  lines: string[];
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type HeroSectionContent = SplitHeading & {
  description: string;
  phrases: AnimatedPhrase[];
  primaryCta: string;
};

export type RequestCallBackContent = {
  trustedByText: string;
  ratingText: string;
  heading: SplitHeading;
  description: string;
  buttonLabel: string;
  formHeading: SplitHeading;
  formDescription: string;
  submitLabel: string;
};

export type ClientsSectionContent = {
  badge: string;
  title: string;
  description: string;
};

export type ServiceCardContent = {
  title: string;
  description: string;
};

export type ServicesSectionContent = {
  badge: string;
  title: string;
  description: string;
  cards: {
    seo: ServiceCardContent;
    ppc: ServiceCardContent;
    social: ServiceCardContent;
    leadGeneration: ServiceCardContent;
    whatsapp: ServiceCardContent;
  };
  ctaTitle: SplitHeading;
  ctaDescription: string;
  ctaButtonLabel: string;
};

export type ServiceDeepDiveContent = {
  badge: string;
  title: string;
  description: string;
  features: [FeatureItem, FeatureItem];
  buttonLabel: string;
};

export type ServicesDeepDiveSectionContent = {
  seo: ServiceDeepDiveContent;
  ppc: ServiceDeepDiveContent;
  social: ServiceDeepDiveContent;
  whatsapp: ServiceDeepDiveContent;
  leadGeneration: ServiceDeepDiveContent;
};

export type PortfolioSectionContent = {
  badge: string;
  title: string;
  description: string;
};

export type FAQItemContent = {
  question: string;
  answer: string;
};

export type FAQSectionContent = {
  badge: string;
  title: string;
  items: FAQItemContent[];
};

export type ContactSectionContent = {
  heading: SplitHeading;
  description: string;
  subdescription: string;
  submitLabel: string;
};

export type DigitalMarketingAgencyPageContent = {
  hero: HeroSectionContent;
  requestCallBack: RequestCallBackContent;
  clients: ClientsSectionContent;
  services: ServicesSectionContent;
  portfolio: PortfolioSectionContent;
  servicesDeepDive: ServicesDeepDiveSectionContent;
  faq: FAQSectionContent;
  contact: ContactSectionContent;
};

export const usaDigitalMarketingAgencyContent: DigitalMarketingAgencyPageContent =
  {
    hero: {
      lines: ["Leading Digital Marketing", "Agency in Dubai"],
      description:
        "Our suite of comprehensive services is designed to place your brand front and center in the ever-evolving digital arena. We offer branding solutions and bespoke solutions tailored to each client's unique needs, ensuring a personalized approach for every project. Our team is dedicated to capturing your brand's essence, integrating your core values and identity into every aspect of our branding efforts. Through expert graphic design, we create compelling visual identities and marketing materials that engage customers and elevate your brand's presence.",
      phrases: [
        { text: "Web Development", gradient: "from-blue-500 to-cyan-500" },
        {
          text: "Digital Marketing",
          gradient: "from-pink-500 via-purple-500 to-indigo-500",
        },
        { text: "Branding", gradient: "from-amber-400 to-orange-600" },
        { text: "Social Media", gradient: "from-emerald-400 to-teal-600" },
        { text: "SEO", gradient: "from-violet-500 to-fuchsia-500" },
      ],
      primaryCta: "View Portfolio",
    },
    requestCallBack: {
      trustedByText: "Trusted by 6,287 Customers",
      ratingText: "4.8/5",
      heading: {
        lines: ["Award Winning", "Digital Marketing", "Agency in Dubai"],
      },
      description:
        "We understand the pulse of digital advertising and specialize in crafting comprehensive digital marketing solutions that maximize your ROI. As a leading digital marketing agency recognized among top digital marketing companies in Dubai, we offer a full suite of advertising services tailored to your business needs.",
      buttonLabel: "View Portfolio",
      formHeading: {
        lines: ["Request A", "Call Back"],
      },
      formDescription:
        "To contact us, fill out the form below and we'll get back to you within 24 hours.",
      submitLabel: "Submit",
    },
    clients: {
      badge: "Our Customers",
      title: "Our Clients",
      description: "Brands that trust us to elevate their digital presence.",
    },
    services: {
      badge: "Transforming Online Presence",
      title: "Our Services",
      description:
        "Let's navigate the digital landscape together strategically, creatively, and successfully. Our agency specializes in developing comprehensive digital strategies and data-driven strategies designed to deliver measurable digital success.",
      cards: {
        seo: {
          title: "Search Engine Optimization.",
          description:
            "By combining innovative techniques with deep market insights, we build up your website to attract high-converting traffic. Our search engine optimisation services include comprehensive keyword research to improve your search engine rankings on major search engines.",
        },
        ppc: {
          title: "Pay Per Click.",
          description:
            "We don't just run digital marketing campaigns, we craft personalized experiences that connect, convert, and cultivate relationships to drive online success. Our PPC services are a key part of our search engine marketing solutions, designed to maximize your brand visibility.",
        },
        social: {
          title: "Social Media Ads",
          description:
            "By combining innovative techniques with deep market insights, we build up your website to attract high-converting traffic. Our search engine optimisation services include comprehensive keyword research to improve your search engine rankings on major search engines.",
        },
        leadGeneration: {
          title: "Lead Generation",
          description:
            "Fuel your sales pipeline with high-quality leads. Our agency has a proven track record of successful projects in lead generation for various industries, delivering measurable growth and ROI.",
        },
        whatsapp: {
          title: "Whatsapp Marketing",
          description: "Leverage the personal touch of WhatsApp Marketing",
        },
      },
      ctaTitle: {
        lines: [
          "Ready to Propel Your Digital Marketing",
          "to New Heights?",
        ],
      },
      ctaDescription:
        "We create a tailor-made performance marketing strategy designed to drive the results you're after. It's time to turn your goals into achievements let's make it happen!",
      ctaButtonLabel: "Get started",
    },
    portfolio: {
      badge: "Crafted Success Stories",
      title: "Our Portfolio",
      description:
        "Explore a curated selection of our digital marketing success stories. From brand strategy and content creation to paid campaigns and performance analytics, our portfolio showcases the results we've delivered across industries. Each project reflects our commitment to creativity, data-driven execution, and measurable growth.",
    },
    servicesDeepDive: {
      seo: {
        badge: "Dominate The Top Rankings",
        title: "Search Engine Optimization",
        description:
          "Being a leading SEO agency in dubai, we ensure your brand not only gets found but dominates search engine results. With a holistic seo approach, we modify website content and structure to boost visibility, drive organic traffic, and position you as the industry leader.",
        features: [
          {
            title: "On Page SEO",
            description:
              "Our on-site SEO services ensure you're heard loud and clear.",
          },
          {
            title: "Off Page SEO",
            description:
              "Beyond your site, we extend your digital footprint, building robust backlinks.",
          },
        ],
        buttonLabel: "Get Started",
      },
      ppc: {
        badge: "Unlock Your Online Potential",
        title: "Pay Per Click",
        description:
          "Accelerating brand visibility with targeted PPC campaigns that deliver instant results. As a key component of our paid advertising offerings, PPC ensures your brand reaches the right audience quickly and effectively. Our strategic Google ads placement and optimized bidding strategies ensure that every click counts, maximizing your ROI while capturing the attention of your ideal customers.",
        features: [
          {
            title: "Comprehensive Performance Reports",
            description:
              "Stay ahead of the curve with our comprehensive 360 reports for your campaigns",
          },
          {
            title: "Precise Ad Targeting",
            description:
              "Our PPC services are fine-tuned to identify and engage your ideal customer demographic directly",
          },
        ],
        buttonLabel: "Get Started",
      },
      social: {
        badge: "Amplify Your Brand Presence",
        title: "Social Media Ads",
        description:
          "We craft compelling campaigns that not only grab attention but also drive meaningful engagement and conversions, ensuring your brand shines in the social spotlight. Our expertise in influencer marketing helps expand your brand reach and engagement by connecting you with industry leaders for authentic collaborations.",
        features: [
          {
            title: "Strategy Management",
            description:
              "We map your social media journey from obscurity to online stardom with precision and flair.",
          },
          {
            title: "Visual Storytelling",
            description:
              "Our visuals don't just capture eyes, they capture hearts making sure your social media stands out in the crowd.",
          },
        ],
        buttonLabel: "Learn More",
      },
      whatsapp: {
        badge: "Drive your business growth",
        title: "Whatsapp Marketing",
        description:
          "Deliver messages that matter through our WhatsApp Marketing Services. Our approach is designed for maximum engagement, allowing for real-time interaction and personalized service that enhances customer relationships and loyalty; leading to a successful digital marketing business.",
        features: [
          {
            title: "Smart Retargeting",
            description:
              "Smart Retargeting Campaigns can increase sales and engagement for your business.",
          },
          {
            title: "Advanced Chatbots",
            description:
              "Simplify communication with your customers using personalized responses with advanced chatbots.",
          },
        ],
        buttonLabel: "Get Started",
      },
      leadGeneration: {
        badge: "Reach your ideal customers",
        title: "Lead Generation",
        description:
          "Generated piping hot leads through our multi-channel digital marketing strategies. We identify and engage target audiences by understanding their needs and preferences, ensuring our lead generation efforts are tailored for maximum results. We combine insight-driven approaches with effective targeting techniques to attract and convert prospects who are eager to engage with your brand.",
        features: [
          {
            title: "Advanced Data Analytics",
            description:
              "Making smarter, data-driven decisions by transforming complex information into clear, actionable insights.",
          },
          {
            title: "Digital Strategy Creation",
            description:
              "We map successful digital journeys with innovative & impactful strategies helping you reach your ideal audience.",
          },
        ],
        buttonLabel: "Get Started",
      },
    },
    faq: {
      badge: "FAQs",
      title: "Frequently Asked Questions",
      items: [
        {
          question:
            "How much does it cost to hire a digital marketing firm in Dubai?",
          answer:
            "The cost varies depending on the scope of services, campaign complexity, and agency expertise. Typically, monthly retainers range from AED 5,000 to AED 50,000+, with project-based pricing also available.",
        },
        {
          question:
            "Choosing the best digital marketing agency - how do I make this decision?",
          answer:
            "Consider factors like portfolio quality, industry experience, client testimonials, transparent pricing, strategic approach, and cultural fit. Request case studies and schedule consultations to assess their expertise.",
        },
        {
          question:
            "What services are included in your digital marketing package for Dubai businesses?",
          answer:
            "Our comprehensive packages include SEO, PPC advertising, social media management, content marketing, email campaigns, web analytics, conversion optimization, and brand strategy tailored to the Dubai market.",
        },
        {
          question: "Why should I hire a digital marketing agency in Dubai?",
          answer:
            "Dubai's competitive market requires localized expertise in multilingual campaigns, cultural nuances, regional platforms, and compliance with UAE regulations. Local agencies understand the unique digital landscape and consumer behavior.",
        },
        {
          question: "How do digital marketing strategies differ industry-wise?",
          answer:
            "Each industry has unique customer journeys, buying cycles, and platforms. B2B focuses on LinkedIn and thought leadership, retail emphasizes Instagram and influencer partnerships, while real estate leverages virtual tours and property platforms.",
        },
        {
          question:
            "Can MCS integrate my existing marketing efforts into a new digital strategy?",
          answer:
            "Absolutely. We audit your current initiatives, identify strengths and gaps, then seamlessly integrate existing campaigns with new digital channels for a cohesive, data-driven marketing ecosystem.",
        },
        {
          question: "How do agencies measure the success of digital campaigns?",
          answer:
            "Success is tracked through KPIs like ROI, conversion rates, click-through rates, engagement metrics, lead quality, customer acquisition cost, lifetime value, and attribution modeling across all touchpoints.",
        },
        {
          question: "What makes MCS's approach to digital marketing innovative?",
          answer:
            "We leverage AI-powered analytics, predictive modeling, advanced automation, cross-channel attribution, and proprietary optimization frameworks combined with creative excellence to deliver measurable results beyond industry benchmarks.",
        },
      ],
    },
    contact: {
      heading: {
        lines: ["Have a project", "in mind?"],
      },
      description:
        "Connect with our team of dazzling designers and creative developers.",
      subdescription: "Catch us for coffee, it's always on us.",
      submitLabel: "Submit",
    },
  };

export const michiganDigitalMarketingAgencyContent: DigitalMarketingAgencyPageContent =
  {
    hero: {
      lines: ["#1 Digital Marketing", "Agency Michigan"],
      description:
        "Michigan is one of America's most resilient and fiercely competitive business environments - and the race for digital attention never stops. As a full-service digital marketing agency Michigan businesses rely on, SocioHQ is built to put your brand front and center in the Great Lakes State market and beyond. From AI-powered campaign strategies to data-backed execution, we deliver bespoke internet marketing Michigan solutions tailored to your industry, your growth stage, and the unique pulse of the Michigan market.",
      phrases: [
        { text: "Craft", gradient: "from-blue-500 to-cyan-500" },
        {
          text: "Build",
          gradient: "from-pink-500 via-purple-500 to-indigo-500",
        },
        { text: "Scale", gradient: "from-amber-400 to-orange-600" },
        { text: "Dominate", gradient: "from-emerald-400 to-teal-600" },
      ],
      primaryCta: "View Our Portfolio",
    },
    requestCallBack: {
      trustedByText: "Trusted by 6,000+ Businesses",
      ratingText: "4.8/5",
      heading: {
        lines: ["Award-Winning", "Michigan Marketing", "Agency"],
      },
      description:
        "We know Michigan - its industries, its consumers, and its intensely competitive digital landscape. As one of the leading marketing firms in Michigan businesses turn to, SocioHQ crafts comprehensive internet marketing services that maximize ROI at every funnel stage. Whether you're in Detroit, Ann Arbor, Grand Rapids, Lansing, Flint, or scaling nationally, our full service digital marketing solutions are engineered to deliver measurable, compounding growth.",
      buttonLabel: "View Portfolio",
      formHeading: {
        lines: ["Request A", "Call Back"],
      },
      formDescription:
        "Tell us about your Michigan growth goals and we'll get back to you within 24 hours with a free strategy call.",
      submitLabel: "Get My Free Strategy Call",
    },
    clients: {
      badge: "Our Customers",
      title: "Our Clients",
      description:
        "Brands across Detroit, Grand Rapids, Ann Arbor, Lansing, and beyond that trust us to elevate their digital presence and grow their businesses online.",
    },
    services: {
      badge: "Transforming Michigan's Online Presence",
      title: "Our Michigan Digital Marketing Services",
      description:
        "Let's navigate the Michigan digital landscape together - strategically, creatively, and profitably. As a leading full service digital marketing company Michigan businesses count on, SocioHQ develops data-driven strategies built to convert visibility into revenue.",
      cards: {
        seo: {
          title: "Search Engine Optimization.",
          description:
            "Michigan's business landscape is more competitive than ever, and ranking on page one is essential. Our SEO approach combines technical auditing, Michigan-specific keyword research, authoritative link building, and conversion-focused content to capture buyers when they're ready to act.",
        },
        ppc: {
          title: "PPC Advertising.",
          description:
            "Stop spending on ads that don't convert. We build Google Ads and Meta campaigns engineered to generate high-quality leads and sales for Michigan businesses with smart audience intelligence, relentless testing, and real-time optimization.",
        },
        social: {
          title: "Social Media Ads",
          description:
            "We create thumb-stopping social campaigns that do more than grab attention across Michigan - they build trust, loyalty, and revenue. From Facebook and Instagram to LinkedIn and TikTok, every campaign is tailored to Michigan audiences.",
        },
        leadGeneration: {
          title: "Lead Generation",
          description:
            "Generate a consistent flow of sales-ready leads across Wayne County, Kent County, and the wider Michigan market. We combine paid media, organic search, CRO, and CRM automation to build a lead machine that works around the clock.",
        },
        whatsapp: {
          title: "Whatsapp Marketing",
          description:
            "Use WhatsApp to deliver direct, high-engagement conversations that cut through the noise. Our approach helps Michigan brands build stronger customer relationships through personalized messaging, retargeting, and AI-assisted automation.",
        },
      },
      ctaTitle: {
        lines: ["Ready to Grow Your Michigan", "Digital Presence?"],
      },
      ctaDescription:
        "We build tailor-made performance marketing strategies for Michigan businesses that want measurable growth, stronger lead flow, and a digital presence that compounds over time.",
      ctaButtonLabel: "Get Started",
    },
    portfolio: {
      badge: "Proven Growth Stories",
      title: "Our Portfolio",
      description:
        "Explore a curated selection of growth stories that show how strategy, creative execution, and performance marketing come together to drive measurable outcomes. Every engagement reflects our focus on visibility, conversion, and long-term business growth.",
    },
    servicesDeepDive: {
      seo: {
        badge: "Own Michigan's Search Results",
        title: "Search Engine Optimization",
        description:
          "Michigan businesses that partner with SocioHQ for SEO don't just improve their rankings - they capture entire market categories. Our technical SEO foundation covers site architecture, Core Web Vitals, schema markup, indexation, and page speed so Google can crawl, understand, and rank your Michigan content with maximum efficiency.",
        features: [
          {
            title: "Content Strategy Built for Michigan Buyers",
            description:
              "We research the exact questions, terms, and intent signals your Michigan audience uses at every stage of the buyer journey, then build content ecosystems that capture and convert that traffic at scale.",
          },
          {
            title: "Authority Link Building for Michigan Markets",
            description:
              "Our outreach team earns high-quality backlinks from authoritative Michigan media, industry publications, and relevant business directories to establish your site as the trusted resource in your niche.",
          },
        ],
        buttonLabel: "Get Started",
      },
      ppc: {
        badge: "Maximize Your Michigan Ad Spend",
        title: "PPC Advertising",
        description:
          "In a competitive Michigan market, every ad dollar needs to work overtime. Our PPC team manages Google Ads, Meta Ads, LinkedIn Ads, and Microsoft Advertising with daily optimization, testing, and reporting focused on generating stronger ROI month after month.",
        features: [
          {
            title: "Michigan Landing Page Optimization",
            description:
              "Clicks are worthless without conversions. We build and refine landing pages that turn Michigan traffic into Michigan leads with A/B testing, heat mapping, and UX improvements.",
          },
          {
            title: "Multi-Platform Campaign Management",
            description:
              "From Google Search to Instagram Reels, we manage your paid presence across high-performing channels with unified attribution so you know which platforms drive your best customers.",
          },
        ],
        buttonLabel: "Get Started",
      },
      social: {
        badge: "Amplify Your Michigan Brand Presence",
        title: "Social Media Ads",
        description:
          "We craft compelling social media campaigns that do more than capture attention across Michigan - they build the brand equity that sustains your business for years. From strategy and creative to optimization, we manage every step across the platforms your audience actually uses.",
        features: [
          {
            title: "Michigan-First Strategy & Campaign Management",
            description:
              "We map your Michigan social media journey from obscurity to category leadership with audience-first strategies built around Michigan demographics, creative direction, and continuous performance refinement.",
          },
          {
            title: "Visual Storytelling for Michigan Audiences",
            description:
              "Our team understands what resonates with Michigan consumers, whether you're targeting professionals in Detroit's Midtown, families in Troy and Rochester Hills, or B2B buyers across the state's manufacturing and healthcare sectors.",
          },
        ],
        buttonLabel: "Learn More",
      },
      whatsapp: {
        badge: "Drive Your Michigan Business Growth",
        title: "Whatsapp Marketing",
        description:
          "Deliver messages that genuinely matter to your Michigan audience through WhatsApp. With open rates exceeding 98%, it gives Michigan businesses a direct, personal channel for engagement, real-time support, and customer retention.",
        features: [
          {
            title: "Smart Michigan Retargeting",
            description:
              "Re-engage warm Michigan leads and past customers with behavior-triggered WhatsApp campaigns that increase conversion rates, reduce cart abandonment, and keep your brand top of mind.",
          },
          {
            title: "Advanced AI Chatbots",
            description:
              "Automate personalized customer interactions 24/7 with intelligent chatbots that qualify Michigan leads, answer FAQs, and guide prospects through your funnel across every Michigan time zone.",
          },
        ],
        buttonLabel: "Get Started",
      },
      leadGeneration: {
        badge: "Reach Your Ideal Michigan Customers",
        title: "Lead Generation",
        description:
          "Generate a consistent flow of high-intent, sales-ready leads from across Wayne County, Kent County, and the Michigan metro. We combine paid media, organic search, CRO expertise, and CRM automation to build a pipeline engine that keeps working for your business.",
        features: [
          {
            title: "Advanced Michigan Data Analytics",
            description:
              "We transform complex Michigan audience and campaign data into clear, actionable insights so you can make smarter decisions and invest where returns are strongest.",
          },
          {
            title: "Michigan-Specific Digital Strategy Creation",
            description:
              "We build bespoke lead generation strategies that map the entire Michigan customer acquisition journey - from first touch to signed contract - so valuable opportunities never slip through the cracks.",
          },
        ],
        buttonLabel: "Get Started",
      },
    },
    faq: {
      badge: "FAQs",
      title: "Frequently Asked Questions About Digital Marketing in Michigan",
      items: [
        {
          question:
            "How much does it cost to hire a digital marketing agency in Michigan?",
          answer:
            "The cost of hiring a digital marketing agency Michigan businesses work with typically ranges from $1,500 to $15,000+ per month, depending on scope, agency experience, and your industry. Full-service packages that include SEO, PPC, social media ads, and lead generation often land between $3,000 and $10,000 per month for most Michigan small to mid-sized businesses.",
        },
        {
          question:
            "How do I choose the best digital marketing agency in Michigan for my business?",
          answer:
            "Look for a marketing agency Michigan businesses recommend - one with a proven portfolio in your industry, transparent reporting, and a strategy-first approach. The best agencies start with a clear audit, define KPIs tied to Michigan market realities, and focus on sustainable growth instead of shortcuts.",
        },
        {
          question:
            "What digital marketing services does SocioHQ offer Michigan businesses?",
          answer:
            "SocioHQ offers SEO, PPC advertising, social media ads, content marketing, lead generation, WhatsApp marketing, email marketing, and conversion rate optimization. Every package is tailored to your business goals, growth stage, and position in the Michigan market.",
        },
        {
          question:
            "Why should I hire one of the marketing companies in Michigan instead of building an in-house team?",
          answer:
            "Working with an experienced agency gives you access to strategists, SEO specialists, paid media managers, copywriters, and designers for a fraction of the cost of building that capability internally. You also benefit from faster execution, proven tools, and broader Michigan market insight.",
        },
        {
          question: "Does SocioHQ work with Michigan B2B companies?",
          answer:
            "Yes. We support Michigan B2B companies across technology, SaaS, financial services, healthcare, professional services, automotive, and manufacturing. Our work includes account-based marketing, LinkedIn advertising, and multi-touch nurturing for longer, more complex sales cycles.",
        },
        {
          question:
            "Do you offer internet marketing Michigan small businesses can afford?",
          answer:
            "Yes. We offer growth-focused packages designed for early-stage and local Michigan companies with leaner budgets. The focus is on high-impact channels like local SEO and targeted paid media so you can acquire customers quickly while building long-term organic momentum.",
        },
        {
          question:
            "What makes SocioHQ one of the best marketing firms in Michigan?",
          answer:
            "SocioHQ stands out for three reasons: deep Michigan market expertise, AI-powered campaign execution, and a relentless focus on measurable ROI. We blend data, creative execution, and local understanding to build strategies that are both locally relevant and nationally scalable.",
        },
      ],
    },
    contact: {
      heading: {
        lines: ["Have a Project", "in Mind?"],
      },
      description:
        "Connect with our team of results-driven strategists and creative performance marketers.",
      subdescription:
        "Let's grab a virtual coffee and talk about what's possible for your Michigan business - it's always on us.",
      submitLabel: "Submit",
    },
  };

export const michiganDigitalMarketingMetadata: Metadata = {
  title: "Trusted Digital Marketing Agency Michigan | SocioHQ",
  description:
    "Top Digital Marketing Agency Michigan offering SEO, PPC, social media marketing, and web design to help businesses grow online and generate leads.",
  alternates: {
    canonical: "https://www.sociohq.com/michigan/digital-marketing",
  },
  openGraph: {
    title: "#1 Digital Marketing Agency Michigan | SocioHQ",
    description:
      "From startups to established enterprises, SocioHQ delivers AI-driven digital marketing strategies built for the Michigan market.",
    url: "https://www.sociohq.com/michigan/digital-marketing",
    type: "website",
  },
};

export const michiganDigitalMarketingStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SocioHQ",
    url: "https://www.sociohq.com",
    logo: "https://sociohq.com/images/sociohq-logo.png",
    description:
      "SocioHQ is a full service digital marketing agency offering SEO, PPC, social media advertising, lead generation, and WhatsApp marketing for businesses across Michigan and the USA.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      availableLanguage: "English",
      url: "https://sociohq.com/contact-us",
    },
    sameAs: [
      "https://www.instagram.com/sociohq",
      "https://www.facebook.com/sociohq",
      "https://www.linkedin.com/company/sociohq",
      "https://dribbble.com/socioHQ",
      "https://www.behance.net/socioHQ",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SocioHQ - Digital Marketing Agency Michigan",
    url: "https://www.sociohq.com/michigan/digital-marketing",
    image: "https://sociohq.com/images/digital-marketing-agency-michigan-hero.jpg",
    description:
      "Award-winning digital marketing agency Michigan. We offer SEO, PPC, Social Media Advertising, Lead Generation, and WhatsApp Marketing for startups, SMBs, B2B, financial services, healthcare, and enterprise brands across Detroit, Grand Rapids, Ann Arbor, Lansing, Troy, Kalamazoo, and all of Michigan.",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Michigan",
      addressRegion: "MI",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Detroit" },
      { "@type": "City", name: "Grand Rapids" },
      { "@type": "City", name: "Ann Arbor" },
      { "@type": "City", name: "Lansing" },
      { "@type": "City", name: "Troy" },
      { "@type": "City", name: "Kalamazoo" },
      { "@type": "City", name: "Flint" },
      { "@type": "City", name: "Dearborn" },
      { "@type": "AdministrativeArea", name: "Wayne County" },
      { "@type": "AdministrativeArea", name: "Kent County" },
      { "@type": "AdministrativeArea", name: "Michigan" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Michigan Digital Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Search Engine Optimization (SEO) Michigan",
            url: "https://www.sociohq.com/seo-agency-usa",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pay Per Click (PPC) Advertising Michigan",
            url: "https://www.sociohq.com/ppc-agency-usa",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Advertising Michigan",
            url: "https://www.sociohq.com/social-media-marketing-agency-usa",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lead Generation Michigan",
            url: "https://www.sociohq.com/lead-generation-agency-usa",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "WhatsApp Marketing Michigan",
            url: "https://www.sociohq.com/whatsapp-marketing-agency-usa",
          },
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: michiganDigitalMarketingAgencyContent.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.sociohq.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Michigan",
        item: "https://www.sociohq.com/michigan",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Digital Marketing Agency Michigan",
        item: "https://www.sociohq.com/michigan/digital-marketing",
      },
    ],
  },
];

export const lasVegasDigitalMarketingAgencyContent: DigitalMarketingAgencyPageContent =
  {
    hero: {
      lines: ["#1 Digital Marketing", "Agency Las Vegas, NV"],
      description:
        "Las Vegas is one of America's most dynamic and fiercely competitive business environments - and the race for digital attention never sleeps. As a full-service digital marketing agency in Las Vegas, SocioHQ is built to put your brand front and center in the Nevada market and beyond. From AI-powered campaign strategies to data-backed execution, we deliver bespoke digital marketing services in Las Vegas tailored to your industry, your growth stage, and the unique pulse of the market.",
      phrases: [
        { text: "Craft", gradient: "from-blue-500 to-cyan-500" },
        {
          text: "Build",
          gradient: "from-pink-500 via-purple-500 to-indigo-500",
        },
        { text: "Scale", gradient: "from-amber-400 to-orange-600" },
        { text: "Dominate", gradient: "from-emerald-400 to-teal-600" },
      ],
      primaryCta: "View Our Portfolio",
    },
    requestCallBack: {
      trustedByText: "Trusted by 6,000+ Businesses",
      ratingText: "4.8/5",
      heading: {
        lines: ["Award-Winning", "Las Vegas Digital", "Marketing Agency"],
      },
      description:
        "We know Las Vegas - its industries, its consumers, and its intensely competitive digital landscape. As one of the leading Las Vegas digital marketing agencies, SocioHQ specializes in crafting comprehensive internet marketing services that maximize ROI at every funnel stage. Whether you're a local business on the Strip corridor, a hospitality brand in Paradise, a B2B firm near the Las Vegas Tech Center, a healthcare provider in Summerlin, or an e-commerce company, our online marketing agency Las Vegas solutions are engineered to deliver measurable, compounding growth.",
      buttonLabel: "View Portfolio",
      formHeading: {
        lines: ["Request A", "Call Back"],
      },
      formDescription:
        "Tell us about your Las Vegas growth goals and we'll get back to you within 24 hours with a free strategy call.",
      submitLabel: "Get My Free Strategy Call",
    },
    clients: {
      badge: "Our Customers",
      title: "Our Clients",
      description:
        "Brands across Las Vegas, Henderson, and beyond that trust us to elevate their digital presence and grow their businesses online.",
    },
    services: {
      badge: "Transforming Las Vegas Online Presence",
      title: "Our Las Vegas Digital Marketing Services",
      description:
        "Let's navigate the Las Vegas digital landscape together - strategically, creatively, and profitably. As a leading internet marketing company in Las Vegas that local businesses count on, SocioHQ develops comprehensive, data-driven strategies built to convert visibility into revenue.",
      cards: {
        seo: {
          title: "Search Engine Optimization.",
          description:
            "Las Vegas is a city where businesses compete fiercely for digital real estate, and our SEO strategies are built to win that battle. We combine innovative techniques with deep Nevada market insight to attract high-converting traffic and build search authority that compounds over time.",
        },
        ppc: {
          title: "Pay Per Click.",
          description:
            "In Las Vegas's fast-moving commercial landscape, you can't afford to wait for organic results alone. We craft precision-targeted PPC campaigns that connect Las Vegas consumers with your brand at exactly the right moment and convert clicks into customers.",
        },
        social: {
          title: "Social Media Ads",
          description:
            "Las Vegas consumers are highly active on social media, and your brand needs to be where the conversation is happening. We create scroll-stopping campaigns across Facebook, Instagram, LinkedIn, and TikTok that build brand equity while driving qualified leads and conversions.",
        },
        leadGeneration: {
          title: "Lead Generation",
          description:
            "Generate a consistent flow of high-intent, sales-ready leads from across the Las Vegas metro. We combine paid media, organic search, CRO expertise, and CRM automation to build a lead machine that works around the clock for your Nevada business.",
        },
        whatsapp: {
          title: "Whatsapp Marketing",
          description:
            "Deliver messages that genuinely matter to your Las Vegas audience through personalized WhatsApp campaigns built for engagement, retention, and real-time conversations with Nevada customers.",
        },
      },
      ctaTitle: {
        lines: ["Ready to Grow Your Las Vegas", "Digital Presence?"],
      },
      ctaDescription:
        "We build tailor-made performance marketing strategies for Las Vegas businesses that want stronger visibility, better lead flow, and measurable growth across the Nevada market.",
      ctaButtonLabel: "Get Started",
    },
    portfolio: {
      badge: "Proven Growth Stories",
      title: "Our Portfolio",
      description:
        "Explore a curated selection of growth stories that show how strategy, creative execution, and performance marketing come together to drive measurable outcomes. Every engagement reflects our focus on visibility, conversion, and long-term business growth.",
    },
    servicesDeepDive: {
      seo: {
        badge: "Own Las Vegas Search Results",
        title: "Search Engine Optimization",
        description:
          "Claim your position at the top of Google for every search term that matters to your Las Vegas business. As a results-obsessed digital marketing agency Las Vegas businesses trust for SEO, SocioHQ engineers search dominance through technical excellence, local authority building, and AI-enhanced keyword strategy focused on Southern Nevada.",
        features: [
          {
            title: "On-Page SEO",
            description:
              "Our on-site SEO services ensure your website communicates clearly and powerfully to both search engines and Las Vegas consumers by optimizing titles, metadata, content structure, internal linking, and Core Web Vitals for the Nevada market.",
          },
          {
            title: "Off-Page SEO",
            description:
              "Beyond your website, we extend your digital authority through high-quality backlinks, local Las Vegas citations, placements on authoritative Nevada publications, and a stronger Google Business Profile across the metro.",
          },
        ],
        buttonLabel: "Get Started",
      },
      ppc: {
        badge: "Unlock Your Las Vegas Online Potential",
        title: "Pay Per Click",
        description:
          "Accelerate brand visibility in the Las Vegas market with precision-targeted PPC campaigns that deliver instant, measurable results. Our paid media strategies maximize every ad dollar through intelligent Nevada audience targeting, continuous bid optimization, and creative built to convert.",
        features: [
          {
            title: "Comprehensive Performance Reports",
            description:
              "Stay ahead with transparent 360-degree reporting dashboards that give you a real-time view of impressions, clicks, conversions, ROAS, and Las Vegas online marketing performance benchmarks.",
          },
          {
            title: "Precise Las Vegas Ad Targeting",
            description:
              "Our PPC services are tuned to identify and engage your ideal customer demographic across Las Vegas, Henderson, Summerlin, North Las Vegas, Boulder City, Laughlin, and the wider Clark County region.",
          },
        ],
        buttonLabel: "Get Started",
      },
      social: {
        badge: "Amplify Your Las Vegas Brand Presence",
        title: "Social Media Ads",
        description:
          "We craft compelling social media campaigns that don't just capture attention across Las Vegas - they build the brand equity that sustains your business for years. From strategy and creative to execution and optimization, we manage every step across the channels your Southern Nevada audience actually uses.",
        features: [
          {
            title: "Las Vegas-First Strategy & Campaign Management",
            description:
              "We map your Las Vegas social media journey from obscurity to category leadership with audience-first strategies built around Nevada demographics, creative direction, and continuous performance refinement.",
          },
          {
            title: "Visual Storytelling for Nevada Audiences",
            description:
              "Our creative team understands what resonates with Las Vegas consumers, whether you're targeting tourists on the Strip, suburban families in Summerlin, or B2B decision-makers in the Las Vegas Tech Center.",
          },
        ],
        buttonLabel: "Learn More",
      },
      whatsapp: {
        badge: "Drive Your Las Vegas Business Growth",
        title: "Whatsapp Marketing",
        description:
          "Deliver messages that genuinely matter to your Las Vegas audience through SocioHQ's WhatsApp Marketing service. With open rates exceeding 98%, it gives Las Vegas businesses a personal, high-converting direct channel for engagement, service, and retention.",
        features: [
          {
            title: "Smart Las Vegas Retargeting",
            description:
              "Re-engage warm Nevada leads and past customers with behaviour-triggered WhatsApp campaigns that increase conversion rates, reduce cart abandonment, and keep your Las Vegas brand top of mind.",
          },
          {
            title: "Advanced AI Chatbots",
            description:
              "Automate personalized customer interactions 24/7 with intelligent chatbots that qualify Las Vegas leads, answer FAQs, and guide prospects through your sales funnel across every Nevada time zone.",
          },
        ],
        buttonLabel: "Get Started",
      },
      leadGeneration: {
        badge: "Reach Your Ideal Las Vegas Customers",
        title: "Lead Generation",
        description:
          "Generate a consistent flow of high-intent, sales-ready leads from across Clark County and the Las Vegas metro through SocioHQ's multi-channel lead generation framework. We combine paid media, organic search, conversion optimization, and CRM automation to build a pipeline engine that keeps working for your business.",
        features: [
          {
            title: "Advanced Las Vegas Data Analytics",
            description:
              "We transform complex Nevada audience and campaign data into clear, actionable insights that help you make smarter decisions faster and allocate your local internet marketing Las Vegas budget where it delivers the highest return.",
          },
          {
            title: "Las Vegas-Specific Digital Strategy Creation",
            description:
              "We build bespoke lead generation strategies that map the entire Las Vegas customer acquisition journey from first touch to signed contract, ensuring no Nevada opportunity falls through the cracks.",
          },
        ],
        buttonLabel: "Get Started",
      },
    },
    faq: {
      badge: "FAQs",
      title: "Frequently Asked Questions About Digital Marketing in Las Vegas",
      items: [
        {
          question:
            "How much does it cost to hire a digital marketing agency in Las Vegas, NV?",
          answer:
            "The cost of hiring a digital marketing agency Las Vegas businesses work with typically ranges from $1,500 to $15,000+ per month, depending on the scope of services, agency experience, and your industry. Full-service packages covering SEO, PPC, social media ads, and lead generation tend to range between $3,000 and $10,000 per month for most Las Vegas small to mid-sized businesses. SocioHQ offers flexible, transparent pricing tailored to your growth stage and Las Vegas market goals.",
        },
        {
          question:
            "How do I choose the best digital marketing agency in Las Vegas for my business?",
          answer:
            "Look for a professional Las Vegas digital marketing agency with a proven portfolio in your industry, transparent reporting, and a strategy-first approach. The best marketing firms in Las Vegas begin with a thorough audit, set clear KPIs aligned to Nevada market benchmarks, and focus on sustainable, data-driven growth.",
        },
        {
          question:
            "What digital marketing services in Las Vegas does SocioHQ offer?",
          answer:
            "As a full-service internet marketing company in Las Vegas, SocioHQ offers SEO, PPC advertising, social media ads, content marketing, lead generation, WhatsApp marketing, email marketing, and conversion rate optimization. We customize every Las Vegas digital marketing package based on your business goals and Nevada market position.",
        },
        {
          question:
            "Why should I hire one of the marketing firms in Las Vegas instead of building an in-house team?",
          answer:
            "Hiring experienced marketing firms in Las Vegas gives you immediate access to strategists, SEO experts, paid media managers, copywriters, and designers for a fraction of the cost of building that capability in-house. You also benefit from cross-industry Nevada market insights, proven tools, and faster time-to-results.",
        },
        {
          question: "Does SocioHQ work with Las Vegas B2B companies?",
          answer:
            "Absolutely. SocioHQ supports Las Vegas B2B companies across technology, SaaS, healthcare, professional services, and manufacturing. We specialize in longer sales cycles, account-based marketing, LinkedIn advertising, and multi-touch nurturing strategies for enterprise prospects.",
        },
        {
          question:
            "Do you offer local internet marketing services for Las Vegas small businesses?",
          answer:
            "Yes. As a local internet marketing Las Vegas specialist, we offer growth-focused packages designed for early-stage and local companies with lean budgets. We prioritize high-impact channels like local SEO and targeted paid media to generate Nevada customers quickly while building long-term organic momentum.",
        },
        {
          question:
            "Can SocioHQ act as my Las Vegas marketing consultant on an ongoing basis?",
          answer:
            "Yes. Beyond running campaigns, SocioHQ can serve as your dedicated Las Vegas marketing consultant by providing strategic counsel on channel selection, budget allocation, competitive positioning, and growth roadmapping for your Nevada business.",
        },
        {
          question:
            "How does SocioHQ use AI in Las Vegas digital marketing campaigns?",
          answer:
            "SocioHQ integrates artificial intelligence across campaign strategy, audience targeting, content personalization, ad creative optimization, predictive analytics, and chatbot automation. That AI-powered approach helps us move faster, make smarter Nevada market decisions, and deliver stronger Las Vegas online marketing performance.",
        },
      ],
    },
    contact: {
      heading: {
        lines: ["Have a Project", "in Mind?"],
      },
      description:
        "Connect with our team of results-driven strategists and creative performance marketers.",
      subdescription:
        "Let's grab a virtual coffee and talk about what's possible for your Las Vegas business - it's always on us.",
      submitLabel: "Submit",
    },
  };

export const lasVegasDigitalMarketingMetadata: Metadata = {
  title: "Trusted Digital Marketing Agency Las Vegas, NV | SocioHQ",
  description:
    "Top Digital Marketing Agency Las Vegas, NV offering SEO, PPC, social media marketing and web design to help businesses grow online and generate leads.",
  keywords: [
    "digital marketing agency las vegas",
    "las vegas digital marketing agency",
    "marketing firms in las vegas",
    "digital marketing company las vegas",
    "internet marketing company las vegas",
    "internet marketing agency las vegas",
    "online marketing agency las vegas",
    "local internet marketing las vegas",
    "brand marketing agency las vegas",
    "digital marketing expert las vegas",
    "las vegas marketing consultant",
    "digital marketing consultant las vegas",
    "internet marketing company in las vegas",
    "digital marketing services in las vegas",
    "las vegas internet marketing company",
  ],
  alternates: {
    canonical: "https://www.sociohq.com/las-vegas/digital-marketing",
  },
  openGraph: {
    title: "#1 Digital Marketing Agency Las Vegas, NV | SocioHQ",
    description:
      "From startups to established enterprises, SocioHQ delivers AI-driven digital marketing strategies built for the Nevada market.",
    url: "https://www.sociohq.com/las-vegas/digital-marketing",
    type: "website",
  },
};

export const lasVegasDigitalMarketingStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SocioHQ",
    url: "https://www.sociohq.com",
    logo: "https://sociohq.com/images/sociohq-logo.png",
    description:
      "SocioHQ is a full-service digital marketing agency in Las Vegas, NV offering SEO, PPC, Social Media Ads, Lead Generation, and WhatsApp Marketing for Las Vegas businesses of all sizes.",
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      availableLanguage: "English",
      url: "https://sociohq.com/contact-us",
    },
    sameAs: [
      "https://www.instagram.com/sociohq",
      "https://www.facebook.com/sociohq",
      "https://www.linkedin.com/company/sociohq",
      "https://dribbble.com/socioHQ",
      "https://www.behance.net/socioHQ",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SocioHQ - Digital Marketing Agency Las Vegas, NV",
    url: "https://www.sociohq.com/las-vegas/digital-marketing",
    image: "https://sociohq.com/images/digital-marketing-agency-las-vegas-hero.jpg",
    description:
      "Award-winning digital marketing agency in Las Vegas, NV. We offer SEO, PPC, Social Media Advertising, Lead Generation, and WhatsApp Marketing for startups, SMBs, B2B, hospitality, healthcare, and enterprise brands across Las Vegas, Henderson, Summerlin, North Las Vegas, and Clark County.",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89101",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.1699",
      longitude: "-115.1398",
    },
    areaServed: [
      { "@type": "City", name: "Las Vegas" },
      { "@type": "City", name: "Henderson" },
      { "@type": "City", name: "Summerlin" },
      { "@type": "City", name: "North Las Vegas" },
      { "@type": "City", name: "Boulder City" },
      { "@type": "City", name: "Spring Valley" },
      { "@type": "City", name: "Enterprise" },
      { "@type": "AdministrativeArea", name: "Clark County" },
      { "@type": "AdministrativeArea", name: "Southern Nevada" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Las Vegas Digital Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Search Engine Optimization (SEO) Las Vegas",
            url: "https://sociohq.com/seo-agency-usa",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pay Per Click (PPC) Advertising Las Vegas",
            url: "https://sociohq.com/ppc-agency-usa",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Advertising Las Vegas",
            url: "https://sociohq.com/social-media-marketing-usa",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lead Generation Las Vegas",
            url: "https://sociohq.com/lead-generation-usa",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "WhatsApp Marketing Las Vegas",
            url: "https://sociohq.com/whatsapp-marketing-usa",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Las Vegas Conversion Rate Optimization",
            url: "https://www.sociohq.com/las-vegas/digital-marketing",
          },
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: lasVegasDigitalMarketingAgencyContent.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.sociohq.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Las Vegas",
        item: "https://www.sociohq.com/las-vegas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Digital Marketing Agency Las Vegas, NV",
        item: "https://www.sociohq.com/las-vegas/digital-marketing",
      },
    ],
  },
];
