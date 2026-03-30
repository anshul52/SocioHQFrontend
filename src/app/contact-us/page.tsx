"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import ContactGlobe from "@/components/sections/ContactGlobe";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Nav />
      <main className="bg-white">
        <section className="relative overflow-hidden rounded-b-[64px] bg-[#fefffe] px-4 pb-[180px] pt-10 sm:px-6 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mx-auto flex w-full max-w-[574px] flex-col items-center gap-12 pt-[60px] lg:w-[40%]"
          >
            <div className="text-center">
              <h1 className="text-[clamp(3.25rem,8vw,5.5rem)] font-bold tracking-[-0.05em] text-[#0f0f0f]">
                Get in touch.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#5f6980]">
                You can reach us anytime via <br />
                <span className="font-medium text-[#5f6980]">info@socio.ae</span>
              </p>
            </div>

            <motion.form
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="w-full space-y-5 rounded-[28px] border border-[#d8e1ef] bg-white/90 p-4 shadow-[0_24px_80px_rgba(166,187,213,0.22)] backdrop-blur-sm sm:p-6"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <motion.div variants={fadeIn}>
                  <Label className="text-[14px] text-[#3d4759]">Name *</Label>
                  <Input
                    name="name"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 h-12 rounded-[18px] border-[#d6dfec] bg-white px-4 shadow-none focus-visible:ring-[#adc1de]"
                  />
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Label className="text-[14px] text-[#3d4759]">Email *</Label>
                  <Input
                    name="email"
                    placeholder="jane@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 h-12 rounded-[18px] border-[#d6dfec] bg-white px-4 shadow-none focus-visible:ring-[#adc1de]"
                  />
                </motion.div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <motion.div variants={fadeIn}>
                  <Label className="text-[14px] text-[#3d4759]">Phone *</Label>
                  <Input
                    name="phone"
                    placeholder="+91"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-2 h-12 rounded-[18px] border-[#d6dfec] bg-white px-4 shadow-none focus-visible:ring-[#adc1de]"
                  />
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Label className="text-[14px] text-[#3d4759]">Website</Label>
                  <Input
                    name="website"
                    placeholder="www.example.com"
                    value={form.website}
                    onChange={handleChange}
                    className="mt-2 h-12 rounded-[18px] border-[#d6dfec] bg-white px-4 shadow-none focus-visible:ring-[#adc1de]"
                  />
                </motion.div>
              </div>

              <motion.div variants={fadeIn}>
                <Label className="text-[14px] text-[#3d4759]">Message</Label>
                <Textarea
                  name="message"
                  placeholder="Enter your message"
                  value={form.message}
                  onChange={handleChange}
                  className="mt-2 min-h-[140px] rounded-[18px] border-[#d6dfec] bg-white px-4 py-3 shadow-none focus-visible:ring-[#adc1de]"
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <Button className="h-14 w-full rounded-[20px] bg-[#111111] text-lg hover:bg-black">
                  Submit
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>

          <div className="absolute bottom-[-174px] left-[-20px] right-[-20px] z-0 h-[431px] md:bottom-auto md:left-1/2 md:right-auto md:top-[74.26%] md:h-[44.03%] md:w-[57%] md:-translate-x-1/2 lg:top-[74.49%] lg:h-[67.85%] lg:w-[56%]">
            <ContactGlobe />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default ContactUs;
