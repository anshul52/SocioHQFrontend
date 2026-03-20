import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/sections/contact-form";
import Nav from "../sections/Nav";
import {
  blogPosts,
  clientLogos,
  contactDetails,
  heroStat,
  heroWords,
  navLinks,
  serviceCards,
  serviceLinks,
  spotlightCards,
  testimonials,
} from "@/lib/home-content";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M7 17 17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M5 4h4l2 5-2.5 2.5a16 16 0 0 0 4 4L15 13l5 2v4a2 2 0 0 1-2 2C10.82 21 3 13.18 3 6a2 2 0 0 1 2-2Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M20 12a8 8 0 0 1-11.77 7.05L4 20l1.02-4.06A8 8 0 1 1 20 12Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M9.7 8.9c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.5l.5 1.4c.1.3 0 .5-.1.6l-.4.5c-.1.1-.2.3-.1.5.2.5.7 1.2 1.3 1.7.8.7 1.6 1 2 .9.2 0 .3-.1.4-.3l.4-.5c.2-.2.4-.2.6-.1l1.3.6c.4.2.4.3.4.5v.5c0 .2-.1.4-.4.6-.5.3-1.1.5-1.7.5-1 0-2.2-.4-3.6-1.7-1.7-1.4-2.7-3.4-2.7-4.6 0-.5.1-1 .5-1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="section-eyebrow">{children}</div>;
}

function SiteHeader() {
  return (
    <header className="site-header" id="home">
      <div className="shell site-header__inner">
        <Link className="brand" href="/">
          <Image
            alt="Socio"
            height={50}
            priority
            src="https://framerusercontent.com/images/sR6AQWKxmyE63ehXMNBgmNIkaxQ.png?width=6710&height=4087"
            width={110}
          />
        </Link>

        <nav aria-label="Primary" className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link
            className="pill-button pill-button--whatsapp"
            href={contactDetails.whatsapp}
          >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </Link>
          <Link
            className="pill-button pill-button--phone"
            href={`tel:${contactDetails.phone}`}
          >
            <PhoneIcon />
            <span>{contactDetails.phone}</span>
          </Link>
        </div>

        <details className="mobile-menu">
          <summary>
            <span>Menu</span>
            <span aria-hidden="true" className="mobile-menu__icon">
              <span />
              <span />
            </span>
          </summary>
          <div className="mobile-menu__panel">
            <div className="mobile-menu__group">
              <p>Menu</p>
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mobile-menu__group">
              <p>Services</p>
              {serviceLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="shell">
        <div className="hero-card">
          <div className="hero-orbit hero-orbit--violet" />
          <div className="hero-orbit hero-orbit--gold" />
          <div className="hero-orbit hero-orbit--mint" />

          <div className="hero-content">
            <p className="hero-kicker">Digital Marketing</p>
            <h1>
              <span className="hero-title-line">Building bold brands with</span>
              <span aria-label="Craft, Build, Elevate" className="hero-rotator">
                {heroWords.map((word) => (
                  <span key={word}>{word}</span>
                ))}
              </span>
            </h1>
            <p className="hero-copy">
              We create high-conviction digital experiences for brands that want
              to feel premium, move faster, and grow with a distinctive presence
              online.
            </p>
            <div className="hero-actions">
              <Link className="cta-button" href="#contact">
                Get Started
                <ArrowIcon />
              </Link>
              <div className="hero-proof">
                <div className="hero-proof__avatars">
                  {heroStat.avatars.map((avatar, index) => (
                    <span
                      key={avatar}
                      className="hero-proof__avatar"
                      style={{ zIndex: 5 - index }}
                    >
                      <Image alt="" fill sizes="42px" src={avatar} />
                    </span>
                  ))}
                  <span aria-hidden="true" className="hero-proof__play">
                    ▶
                  </span>
                </div>
                <span>{heroStat.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="clients-section" id="clients">
      <div className="shell">
        <SectionEyebrow>Our Customers</SectionEyebrow>
        <div className="section-heading">
          <h2>Our Clients</h2>
          <p>
            Trusted by bold teams across hospitality, real estate, retail, and
            lifestyle.
          </p>
        </div>
        <div aria-label="Client logos" className="logo-marquee">
          <div className="logo-marquee__track">
            {marqueeLogos.map((logo, index) => (
              <div key={`${logo}-${index}`} className="logo-marquee__item">
                <Image alt="" fill sizes="180px" src={logo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="shell">
        <SectionEyebrow>Featured</SectionEyebrow>
        <div className="section-heading">
          <h2>Our Services</h2>
          <p>Reaching the right audience has never been simpler.</p>
        </div>

        <div className="services-grid">
          {serviceCards.map((service) => (
            <Link
              key={service.title}
              className={`service-card service-card--${service.accent}`}
              href={service.href}
            >
              <div className="service-card__icon">
                <Image alt="" fill sizes="36px" src={service.icon} />
              </div>
              <div className="service-card__copy">
                <h3>{service.title}</h3>
                <span>Learn More</span>
              </div>
              <div className="service-card__image">
                <Image
                  alt={service.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 30vw"
                  src={service.image}
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="services-cta">
          <div>
            <h3>See Our Work in Action.</h3>
            <p>Start your creative journey with us.</p>
          </div>
          <Link className="cta-button cta-button--light" href="#contact">
            Let&apos;s Collaborate
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="shell">
        <div className="about-intro">
          <SectionEyebrow>Learn More</SectionEyebrow>
          <h2>
            Innovative solutions for <em>bold brands</em>
          </h2>
          <p>
            Looking to elevate your brand? We craft immersive experiences that
            captivate, engage, and make your business unforgettable in every
            interaction.
          </p>
          <Link className="cta-button" href="#contact">
            Let&apos;s craft together
            <ArrowIcon />
          </Link>
        </div>

        <div className="spotlight-grid">
          {spotlightCards.map((spotlight) => (
            <Link
              key={spotlight.title}
              className={`spotlight-card spotlight-card--${spotlight.accent}`}
              href={spotlight.href}
            >
              <div className="spotlight-card__body">
                <p className="spotlight-card__badge">{spotlight.badge}</p>
                <h3>{spotlight.title}</h3>
                <p>{spotlight.description}</p>
                <ul>
                  {spotlight.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="spotlight-card__media">
                <Image
                  alt={spotlight.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  src={spotlight.image}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="shell">
        <SectionEyebrow>Our Testimonials</SectionEyebrow>
        <div className="section-heading">
          <h2>What People are saying</h2>
          <p>
            Our strategic know-how has enabled countless businesses to achieve
            their digital marketing goals and stand out brilliantly from the
            competition.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.company} className="testimonial-card">
              <div className="testimonial-card__brand">
                {testimonial.company}
              </div>
              <p>{testimonial.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="blog-section" id="insights">
      <div className="shell">
        <SectionEyebrow>Blogs</SectionEyebrow>
        <div className="section-heading">
          <h2>Insights and News</h2>
          <p>Discover latest articles and guides.</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link key={post.title} className="blog-card" href={post.href}>
              <div className="blog-card__image">
                <Image
                  alt={post.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  src={post.image}
                />
              </div>
              <div className="blog-card__content">
                <p className="blog-card__meta">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="shell">
        <div className="contact-panel">
          <div className="contact-copy">
            <SectionEyebrow>Connect</SectionEyebrow>
            <h2>Have a project in mind?</h2>
            <p>
              Connect with our team of dazzling designers and creative
              developers. Catch us for coffee, it&apos;s always on us.
            </p>
            <div className="contact-list">
              <p>{contactDetails.address}</p>
              <Link href={`tel:${contactDetails.phone}`}>
                {contactDetails.phone}
              </Link>
              <Link href={contactDetails.whatsapp}>WhatsApp us</Link>
              <Link href={`mailto:${contactDetails.email}`}>
                {contactDetails.email}
              </Link>
            </div>
          </div>
          <div className="contact-form-shell">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__brand">
          <Image
            alt="Socio"
            height={64}
            src="https://framerusercontent.com/images/sR6AQWKxmyE63ehXMNBgmNIkaxQ.png?width=6710&height=4087"
            width={140}
          />
          <p>
            We help our clients succeed by creating brand identities and digital
            experiences that feel sharp, modern, and memorable.
          </p>
          <div className="site-footer__socials">
            {contactDetails.socialLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Quick Navigation</h3>
          <div className="site-footer__links">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Services</h3>
          <div className="site-footer__links">
            {serviceLinks.slice(0, 6).map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Contact</h3>
          <div className="site-footer__links">
            <p>{contactDetails.address}</p>
            <Link href={`tel:${contactDetails.phone}`}>
              {contactDetails.phone}
            </Link>
            <Link href={contactDetails.whatsapp}>{contactDetails.phone}</Link>
            <Link href={`mailto:${contactDetails.email}`}>
              {contactDetails.email}
            </Link>
          </div>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        Copyright ©2026 Socio | MCS Marketing
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <ClientsSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
