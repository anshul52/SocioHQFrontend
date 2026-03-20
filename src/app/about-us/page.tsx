"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";

type PhilosophyCardProps = {
  title: string;
  description: string;
  image: string;
  delay: number;
};

type ClientsMarqueeProps = {
  logos: string[];
  speed?: number;
};

type TestimonialCardProps = {
  logo: string;
  text: string;
  avatar: string;
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              About Us
            </h1>
            <p className="text-lg lg:text-xl text-purple-100 leading-relaxed">
              Socio is a boutique agency that specializes in creating unique and
              effective{" "}
              <a
                href="#digital-marketing"
                className="underline hover:text-white transition-colors"
              >
                digital marketing
              </a>{" "}
              strategies for businesses of all sizes. Our team of experts
              understands the importance of marketing in today's digital
              landscape, and we work tirelessly to help our clients stand out
              from the crowd.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 rounded-full text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Get Started
            </Button>
          </div>

          <div className="space-y-6">
            <img
              src="https://framerusercontent.com/images/9jpgQmhHqTmtz49LjZb8h9rDr8E.png"
              alt="Team collaboration"
              className="w-full rounded-2xl shadow-2xl"
            />
            <img
              src="https://framerusercontent.com/images/sBVXWZCMbR1FLYwyxGcfqTaUgg.png"
              alt="Digital marketing"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Philosophy Card Component
const PhilosophyCard = ({
  title,
  description,
  image,
  delay,
}: PhilosophyCardProps) => {
  return (
    <Card
      className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-8 space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
        <div className="overflow-hidden rounded-xl">
          <img
            src={image}
            alt={title}
            className="w-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </CardContent>
    </Card>
  );
};

// Business Philosophy Section
const BusinessPhilosophy = () => {
  const philosophies = [
    {
      title: "Our Mission",
      description:
        "Our mission is to help our clients establish a strong online presence, build brand awareness, and drive revenue growth.",
      image:
        "https://framerusercontent.com/images/bJbhFHhA7EgtwfCI6kuRwqhLhI.png?scale-down-to=1024",
    },
    {
      title: "Our Vision",
      description:
        "Our vision is to be a leading digital marketing agency that is recognized for its exceptional quality of work, creativity, and innovation.",
      image:
        "https://framerusercontent.com/images/a5X5sjCYXz99Ob9Olavp1V8fM.png?scale-down-to=1024",
    },
    {
      title: "Our Values",
      description:
        "Our digital marketing agency strives to empower businesses of all sizes to achieve their online goals through innovative and effective digital marketing strategies.",
      image:
        "https://framerusercontent.com/images/Wq9LEFSJXiXM0Nuugiyo9QfbI.png?scale-down-to=1024",
    },
    {
      title: "Our Goals",
      description:
        "Our vision is to be a leading digital marketing agency that is recognized for its exceptional quality of work, creativity, and innovation.",
      image:
        "https://framerusercontent.com/images/r1eAXwZuniOkUr1jWp1UnBj1xY.png?scale-down-to=1024",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Our Business Philosophy
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {philosophies.map((phil, idx) => (
            <PhilosophyCard key={idx} {...phil} delay={idx * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Clients Marquee Component
const ClientsMarquee = ({ logos, speed = 40 }: ClientsMarqueeProps) => {
  return (
    <div className="overflow-hidden py-4">
      <div
        className="flex gap-8 animate-scroll"
        style={{
          animationDuration: `${speed}s`,
          width: "fit-content",
        }}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-44 h-22 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Client ${idx}`}
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Clients Section
const ClientsSection = () => {
  const clientLogos = {
    row1: [
      "https://framerusercontent.com/images/so2puV0a1BrmB9COadvTeHzI.png?width=200&height=100",
      "https://framerusercontent.com/images/BC4MHEkbRbcIYbFONdJeIkbFIKQ.png?width=200&height=100",
      "https://framerusercontent.com/images/LiqMWszMag9QJ8TyoacHLLfmb4.png?width=200&height=100",
      "https://framerusercontent.com/images/dT4GR34BNR3yGA9JRcSCCz7x9s.png?width=200&height=100",
      "https://framerusercontent.com/images/ekib8dtFMzVquV3RSoPKcMHqbA.png?width=200&height=100",
      "https://framerusercontent.com/images/1HwmiGdSHVUTbCodTnl7JdI7xnY.png?width=200&height=100",
      "https://framerusercontent.com/images/HtReLkDgjmsC6BiM4f6Zuho18Y.png?width=200&height=100",
      "https://framerusercontent.com/images/yZdfVmK0Udvg7kVirDSXlHjMo.png?width=200&height=100",
    ],
    row2: [
      "https://framerusercontent.com/images/cGMH5irEfgbszioDhhupxhBSk.png?width=200&height=100",
      "https://framerusercontent.com/images/zJNIv4emHnI04eFiOaR7YcmSYVc.png?width=200&height=100",
      "https://framerusercontent.com/images/PvFvaceZole2F47GhJqYKJ7Fy4.png?width=200&height=100",
      "https://framerusercontent.com/images/VLCebnNx1uxdjaxjaBxh3MApBo.png?width=200&height=100",
      "https://framerusercontent.com/images/ZbiFfGmTVfQWWtmTRN8WQUlq4.png?width=200&height=100",
      "https://framerusercontent.com/images/M1qz50cjnzHK6StwH8htT11JM.png?width=200&height=100",
      "https://framerusercontent.com/images/7qAEKVgMbBV1SAniLyArrpNo.png?width=200&height=100",
      "https://framerusercontent.com/images/FxIeKG9s01pf9b23m5uxlWvYZzI.png?width=200&height=100",
    ],
    row3: [
      "https://framerusercontent.com/images/QJhJD38MvP3Fu3QkUNjYf09mF4.png?width=200&height=100",
      "https://framerusercontent.com/images/pGjX5txWApM1ZCy4keOtePw7Ns.png?width=200&height=100",
      "https://framerusercontent.com/images/7Rq3cjd2NYJTKNPgdIsabBEeIo4.png?width=200&height=100",
      "https://framerusercontent.com/images/1BWOdzO8jUJcmzs7GV3oYSKho.png?width=200&height=100",
      "https://framerusercontent.com/images/e3lMlFOR9xeQedfnIbdZbY9XlfE.png?width=200&height=100",
      "https://framerusercontent.com/images/7gdfNWhDECXutk8pyvAC89FFZC4.png?width=200&height=100",
      "https://framerusercontent.com/images/xqCl6PI2EEwt1AJ3SKmzSPiNWM.png?width=200&height=100",
      "https://framerusercontent.com/images/MDosLDyGXRMYC55X5uq6bGRI15o.png?width=200&height=100",
    ],
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-600 font-semibold uppercase tracking-wide mb-2">
            Our Customers
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Clients
          </h2>
          <p className="text-xl text-gray-600">
            Brands that trust us to elevate their digital presence.
          </p>
        </div>
        <div className="space-y-8">
          <ClientsMarquee logos={clientLogos.row1} speed={40} />
          <ClientsMarquee logos={clientLogos.row2} speed={35} />
          <ClientsMarquee logos={clientLogos.row3} speed={45} />
        </div>
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ logo, text, avatar }: TestimonialCardProps) => {
  return (
    <Card className="min-w-full bg-gray-50 border-none">
      <CardContent className="p-8 lg:p-12 space-y-6">
        <div className="h-16 flex items-center">
          <img
            src={logo}
            alt="Company logo"
            className="max-h-full max-w-[200px]"
          />
        </div>
        <p className="text-gray-600 text-lg leading-relaxed italic">"{text}"</p>
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt="Customer"
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </CardContent>
    </Card>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      logo: "https://framerusercontent.com/images/TzFq9taJbn9Uy8XWQtgaFySlOQ.png",
      text: "We onboarded Socio for Website Development & Digital Marketing services. We saw a 30% increase in sales after I implemented the booking system and website. The design was smooth and user-friendly. They managed the project well by focusing on meeting our deadlines. The team was young and energetic, delivering results throughout the project.",
      avatar:
        "https://framerusercontent.com/images/BLz62yFbXHFaiPHe8EkIYpL3F0.png?scale-down-to=512",
    },
    {
      logo: "https://framerusercontent.com/images/H6Bkog9sJTUeHK9CkkIhiuRLB1o.png",
      text: "Through our partnership with Socio, they have generated quality leads for our real estate agency. We communicate weekly through Zoom meetings, and they are available for a call anytime if there are additional tasks. Moreover, they maintain an effective workflow and transparent collaboration.",
      avatar:
        "https://framerusercontent.com/images/BLz62yFbXHFaiPHe8EkIYpL3F0.png?scale-down-to=512",
    },
    {
      logo: "https://framerusercontent.com/images/S3fxr0uvULZyq17hmRI6tDD4xJ8.svg",
      text: "We have been working with them for 2 years now & thanks to Socio's efforts, we saw an increased ad engagement, website traffic, influencer campaign reach, and sales. They consistently delivered timely creative assets, were responsive, and adapted to feedback.",
      avatar:
        "https://framerusercontent.com/images/BLz62yFbXHFaiPHe8EkIYpL3F0.png?scale-down-to=512",
    },
    {
      logo: "https://framerusercontent.com/images/Ju8IDnjTpeVu6mZParlA4U7Zo.svg",
      text: "Socio is hands on one of the best digital marketing companies I have worked in dubai. They successfully accomplished my tasks, thanks to an incredible project management workflow and a communicative approach that help me maintain a solid partnership with them.",
      avatar:
        "https://framerusercontent.com/images/BLz62yFbXHFaiPHe8EkIYpL3F0.png?scale-down-to=512",
    },
    {
      logo: "https://framerusercontent.com/images/ORnirYlS8o8eb4Cb2heiBt1AM.png",
      text: "We partnered with Socio when we took a complete business center in Media City. Their innovative marketing strategies have helped us scale our business to another level. They work as part of a cohesive team, where everyone contributes equally to accomplish each task.",
      avatar:
        "https://framerusercontent.com/images/BLz62yFbXHFaiPHe8EkIYpL3F0.png?scale-down-to=512",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-600 font-semibold uppercase tracking-wide mb-2">
            Our Customers
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What People are saying
          </h2>
          <p className="text-xl text-gray-600">
            Let's navigate the digital landscape together—strategically,
            creatively, and successfully.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <TestimonialCard key={idx} {...testimonial} />
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? "w-8 bg-purple-600"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Form Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold">
              Have a project in mind?👋
            </h2>
            <p className="text-lg text-purple-100 leading-relaxed">
              Connect with our team of dazzling designers and creative
              developers.
              <br />
              <br />
              Catch us for coffee, it's always on us ☕️
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Name*"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm focus:bg-white/15 focus:border-white"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email*"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm focus:bg-white/15 focus:border-white"
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone*"
                required
                value={formData.phone}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm focus:bg-white/15 focus:border-white"
              />
              <Input
                type="url"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm focus:bg-white/15 focus:border-white"
              />
              <Textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm focus:bg-white/15 focus:border-white resize-none"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 rounded-xl px-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                Submit
              </Button>
            </form>
          </div>

          <div className="hidden lg:flex justify-center">
            <img
              src="https://framerusercontent.com/images/51tnZtqll1e78fxWnMl2oObKT0.webp"
              alt="Contact"
              className="max-w-md rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <HeroSection />
      {/* <BusinessPhilosophy />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection /> */}
      <Footer />
    </div>
  );
}
