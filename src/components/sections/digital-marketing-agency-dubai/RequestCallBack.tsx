"use client";

import { Fragment } from "react";
import { motion, Variants } from "framer-motion";
import { ImPhone } from "react-icons/im";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  type RequestCallBackContent,
  usaDigitalMarketingAgencyContent,
} from "@/content/digital-marketing-agency";

type RequestCallBackProps = {
  content?: RequestCallBackContent;
};

const RequestCallBack = ({
  content = usaDigitalMarketingAgencyContent.requestCallBack,
}: RequestCallBackProps) => {
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
    <section className="relative bg-black w-full min-h-screen flex items-center justify-center text-white overflow-hidden px-6 sm:px-18 py-25">
      <Image
        src="/images/bz2UmeMSBbPYYpljqZ4l0OHbDg.avif"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start justify-center pl-15">
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
                {content.trustedByText}
              </p>
              <div className="flex items-center gap-2 text-orange-400 text-[22px]">
                {"\u2605\u2605\u2605\u2605\u2605"}
                <span className="text-white text-base">{content.ratingText}</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-inter font-semibold leading-tight mb-6">
            {content.heading.lines.map((line, index) => (
              <Fragment key={line}>
                {line}
                {index < content.heading.lines.length - 1 ? <br /> : null}
              </Fragment>
            ))}
          </h1>

          <p className="text-gray-300 max-w-xl mb-8 leading-relaxed pr-20">
            {content.description}
          </p>

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
                  {content.buttonLabel}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <Card className="bg-white text-black rounded-2xl shadow-2xl w-full max-w-[30rem] mx-auto">
          <CardContent className="p-8 space-y-5 px-13">
            <div className="text-center space-y-2">
              <h2 className="inline-flex flex-col items-center text-center font-inter font-medium text-[50px] leading-[1.2] tracking-[-0.08em]">
                <span className="bg-[linear-gradient(90deg,#05111d_0%,#10263b_62%,#4d93cd_100%)] bg-clip-text text-transparent">
                  {content.formHeading.lines[0]}
                  <span className="opacity-0">.</span>
                </span>
                <span className="flex items-end gap-3 relative">
                  <span className="bg-[linear-gradient(90deg,#05111d_0%,#10263b_68%,#3d86c6_100%)] leading-[0.80] bg-clip-text text-transparent">
                    {content.formHeading.lines[1]}
                    <span className="opacity-0">.</span>
                  </span>
                  <ImPhone className="h-12 w-12 shrink-0 text-[#3d86c6] stroke-[0.001]" />
                </span>
              </h2>
              <p className="text-gray-500 text-base font-inter mb-10">
                {content.formDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 text-left">
                <Label
                  htmlFor="full-name"
                  className="text-[#8d8d8d] font-semibold text-xs"
                >
                  Name<span className="text-[#ff3232]">*</span>
                </Label>
                <Input
                  id="full-name"
                  placeholder="Jane Smith"
                  className="rounded-lg py-5 border-gray-200"
                />
              </div>
              <div className="space-y-2 text-left">
                <Label
                  htmlFor="email"
                  className="text-[#8d8d8d] font-semibold text-xs"
                >
                  Email<span className="text-[#ff3232]">*</span>
                </Label>
                <Input
                  id="email"
                  placeholder="jane@gmail.com"
                  className="rounded-lg py-5 border-gray-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 text-left">
                <Label
                  htmlFor="phone"
                  className="text-[#8d8d8d] font-semibold text-xs"
                >
                  Phone<span className="text-[#ff3232]">*</span>
                </Label>
                <Input
                  id="phone"
                  placeholder="+91"
                  className="rounded-lg py-5 border-gray-200"
                />
              </div>
              <div className="space-y-2 text-left">
                <Label
                  htmlFor="website"
                  className="text-[#8d8d8d] font-semibold text-xs"
                >
                  Website
                </Label>
                <Input
                  id="website"
                  placeholder="www.example.com"
                  className="rounded-lg py-5 border-gray-200"
                />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <Label
                htmlFor="message"
                className="text-[#8d8d8d] font-semibold px-1"
              >
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[120px] rounded-lg border-gray-200"
              />
            </div>

            <Button className="w-full bg-[#333333] py-5 font-bold text-white hover:bg-gray-900 shadow-lg">
              {content.submitLabel}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RequestCallBack;
