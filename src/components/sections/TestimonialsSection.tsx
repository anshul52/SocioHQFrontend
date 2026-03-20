"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

type TestimonialCardProps = {
  logo: string;
  text: string;
  avatar: string;
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

export default TestimonialsSection;

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
