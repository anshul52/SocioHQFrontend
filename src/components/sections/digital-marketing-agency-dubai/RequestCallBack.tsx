"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";

const RequestCallBack = () => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };
  return (
    <section className="relative bg-black w-full min-h-screen flex items-center justify-center text-white overflow-hidden px-6 sm:px-18">
      <Image
        src="/images/bz2UmeMSBbPYYpljqZ4l0OHbDg.avif"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start justify-center">
          {/* Avatars + rating */}
          <div className="flex flex-col items-start gap-4 mb-6">
            <div className="flex -space-x-3">
              <Image
                src="/images/x74TObNHAolsBXNXj0UNhs3OTyc.avif"
                alt=""
                width={50}
                height={50}
                className="rounded-full"
              />
              <Image
                src="/images/sasGB9hURuQL8P6YdKIDa4fm0.avif"
                alt=""
                width={50}
                height={50}
                className="rounded-full"
              />
              <Image
                src="/images/q0d9KRnw15NbEjTpLKDcPPijcU.avif"
                alt=""
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>

            <div>
              <p className="text-lg text-gray-200 font-semibold">
                Trusted by 6,287 Customers
              </p>
              <div className="flex items-center gap-2 text-orange-400 text-[22px]">
                ★★★★★ <span className="text-white text-base">4.8/5</span>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-inter font-semibold leading-tight mb-6">
            Award Winning <br />
            Digital Marketing <br />
            Agency in Dubai
          </h1>

          {/* Description */}
          <p className="text-gray-300 max-w-xl mb-8 leading-relaxed">
            We understand the pulse of digital advertising and specialize in
            crafting comprehensive digital marketing solutions that maximize
            your ROI. As a leading digital marketing agency recognized among top
            digital marketing companies in Dubai, we offer a full suite of
            advertising services tailored to your business needs.
          </p>

          {/* Button */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center"
          >
            <div className="w-fit bg-black rounded-full shadow-[0_0_30px_rgba(20,179,168,0.3)]">
              <div className="relative inline-flex rounded-full p-[1.5px] overflow-hidden">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-[conic-gradient(from_90deg,transparent_0deg,transparent_295deg,#14b3a8_322deg,#0347A0_348deg,transparent_360deg)]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="pointer-events-none absolute inset-[1.5px] rounded-full bg-black" />
                <Button className="relative font-inter z-10 rounded-full bg-transparent px-8 py-6 text-lg text-white hover:bg-transparent">
                  View Portfolio
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT FORM */}
        <Card className="bg-white text-black rounded-2xl shadow-2xl w-full max-w-md mx-auto">
          <CardContent className="p-8 space-y-5">
            {/* Heading */}
            <div className="text-center space-y-2">
              <h2 className="text-5xl font-inter flex font-medium justify-center items-center gap-2">
                Request A <br /> Call Back
                <Phone className="w-6 h-6 text-blue-500" />
              </h2>
              <p className="text-gray-500 text-base font-inter">
                To contact us, fill out the form below and we'll get back to you
                within 24 hours.
              </p>
            </div>

            {/* Form */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 text-left">
                <Label
                  htmlFor="full-name"
                  className="text-gray-700 font-semibold px-1"
                >
                  Full Name
                </Label>
                <Input
                  id="full-name"
                  placeholder="Jane Smith"
                  className="rounded-xl border-gray-200"
                />
              </div>
              <div className="space-y-2 text-left">
                <Label
                  htmlFor="email"
                  className="text-gray-700 font-semibold px-1"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  placeholder="jane@gmail.com"
                  className="rounded-xl border-gray-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 text-left">
                <Label
                  htmlFor="phone"
                  className="text-gray-700 font-semibold px-1"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  placeholder="+91"
                  className="rounded-xl border-gray-200"
                />
              </div>
              <div className="space-y-2 text-left">
                <Label
                  htmlFor="website"
                  className="text-gray-700 font-semibold px-1"
                >
                  Website URL
                </Label>
                <Input
                  id="website"
                  placeholder="www.example.com"
                  className="rounded-xl border-gray-200"
                />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <Label
                htmlFor="message"
                className="text-gray-700 font-semibold px-1"
              >
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[120px] rounded-xl border-gray-200"
              />
            </div>

            <Button className="w-full bg-black text-white hover:bg-gray-900 shadow-lg">
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RequestCallBack;
