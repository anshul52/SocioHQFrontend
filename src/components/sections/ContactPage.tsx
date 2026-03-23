"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div
      className="h-[110vh]  flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/51tnZtqll1e78fxWnMl2oObKT0.avif')",
      }}
    >
      <div className="w-full max-w-6xl flex rounded-3xl overflow-hidden mt-4">
        {/* LEFT SIDE */}
        <div className="relative p-12 flex flex-col justify-center text-white ">
          {/* Decorative lines */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-10 left-0 w-full h-[2px] bg-purple-300 blur-sm"></div>
            <div className="absolute top-16 left-0 w-full h-[2px] bg-purple-300 blur-sm"></div>
          </div>

          {/* Placeholder for your image/icon */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-xl"></div>
          </div>

          <h1 className="text-[63px] font-semibold leading-tight mb-6">
            Have a project <br /> in mind? 👋
          </h1>

          <p className="text-lg text-gray-200 mb-6 max-w-md">
            Connect with our team of dazzling designers and creative developers.
          </p>

          <p className="text-lg text-gray-200">
            Catch us for coffee, it's always on us ☕
          </p>
        </div>

        {/* RIGHT SIDE */}
        <Card className="rounded-[2.5rem] bg-[#f5f5f5]">
          <CardContent className="p-8 w-130">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-[#888888]">
                  Name<span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Jane Smith"
                  className="mt-2 py-5 outline-blue-400 bg-gray-200 border-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium  text-[#888888]">
                  Email<span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="jane@gmail.com"
                  className="mt-2 py-5 bg-gray-200 border-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-medium  text-[#888888]">
                  Phone<span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Enter your number"
                  className="mt-2 py-5 bg-gray-200 border-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium  text-[#888888]">
                  Website
                </label>
                <Input
                  placeholder="www.example.com"
                  className="mt-2 py-5 bg-gray-200 border-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-xs font-medium  text-[#888888]">
                Message
              </label>
              <Textarea
                placeholder="Enter your message"
                className="mt-2 bg-gray-200 border-none min-h-[120px]"
              />
            </div>

            <Button className="w-full bg-[#2c2c2c] hover:bg-black text-white py-6 text-base rounded-xl">
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
