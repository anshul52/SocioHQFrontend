"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";

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
      <div className="min-h-screen flex items-center justify-center bg-[#ffffff] px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl bg-transparent"
        >
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-7xl font-bold text-black">Get in touch.</h1>
            <p className="text-gray-500 mt-4 text-lg">
              You can reach us anytime via <br />
              <span className="font-medium text-gray-700">info@socio.ae</span>
            </p>
          </div>

          {/* Form */}
          <motion.form
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="space-y-6 sm:px-46"
          >
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeIn}>
                <Label>Name *</Label>
                <Input
                  name="name"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  className="h-12 mt-2 rounded-xl"
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <Label>Email *</Label>
                <Input
                  name="email"
                  placeholder="jane@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  className="h-12 mt-2 rounded-xl"
                />
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeIn}>
                <Label>Phone *</Label>
                <Input
                  name="phone"
                  placeholder="+91"
                  value={form.phone}
                  onChange={handleChange}
                  className="h-12 mt-2 rounded-xl"
                />
              </motion.div>

              <motion.div variants={fadeIn}>
                <Label>Website</Label>
                <Input
                  name="website"
                  placeholder="www.example.com"
                  value={form.website}
                  onChange={handleChange}
                  className="h-12 mt-2 rounded-xl"
                />
              </motion.div>
            </div>

            {/* Message */}
            <motion.div variants={fadeIn}>
              <Label>Message</Label>
              <Textarea
                name="message"
                placeholder="Enter your message"
                value={form.message}
                onChange={handleChange}
                className="mt-2 rounded-xl min-h-[140px]"
              />
            </motion.div>

            {/* Button */}
            <motion.div variants={fadeIn}>
              <Button className="w-full h-14 text-lg rounded-2xl bg-black hover:bg-gray-900">
                Submit
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default ContactUs;
