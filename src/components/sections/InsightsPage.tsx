"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function InsightsPage() {
  return (
    <div className="min-h-screen py-16 px-6 bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="inline-flex w-fit items-center gap-3 rounded-[12px] border border-[#dbe3ef] bg-white px-3 py-3 sm:gap-4">
          <span className="flex h-4 w-4 items-center justify-center bg-[#0e1326] text-white ">
            <ArrowRight className="h-3 w-3" strokeWidth={2.4} />
          </span>
          <span className="font-mulish text-[14px] font-bold leading-none tracking-[-0.03em] text-[#12182b]">
            BLOGS
          </span>
        </div>
        <h2 className="text-[52px] font-bold font-lexend tracking-tighter text-center mb-4">
          Insights and News
        </h2>
        <p className="text-gray-500 text-lg">
          Discover latest articles and guides
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <Card className="rounded-2xl overflow-hidden bg-white shadow-md p-0">
          <div className="h-46 overflow-hidden">
            <img
              src="/images/InsightsNews1.avif"
              alt="Boost Sales Fast article cover"
              className="h-full w-full object-cover"
            />
          </div>

          <CardContent className="p-10 pt-5">
            <p className="text-base font-inter tracking-widest text-black mb-3">
              DIGITAL MARKETING
            </p>

            <h2 className="text-[24px] font-inter font-extrabold text-[#19154E] leading-snug mb-4">
              Boost Sales Fast: Secrets from Dubai's Social Media Pros
            </h2>

            <p className="text-gray-600 font-medium text-[18px]">
              Feb 12, 2026
            </p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="rounded-2xl overflow-hidden bg-white shadow-lg p-0">
          <div className="h-46 overflow-hidden">
            <img
              src="/images/InsightsNews2.avif"
              alt="Best Free Tools for AI Ad Variations article cover"
              className="h-full w-full object-cover"
            />
          </div>

          <CardContent className="p-10 pt-5">
            <p className="text-base font-inter tracking-widest text-black mb-3">
              DIGITAL MARKETING
            </p>

            <h2 className="text-[24px] font-inter font-extrabold text-[#19154E] leading-snug mb-4">
              Best Free Tools for AI Ad Variations
            </h2>

            <p className="text-gray-600 font-medium text-[18px]">Feb 6, 2026</p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="rounded-2xl overflow-hidden bg-white shadow-md p-0">
          <div className="h-46 overflow-hidden">
            <img
              src="/images/InsightsNews3.avif"
              alt="What Are Content Clusters article cover"
              className="h-full w-full object-cover"
            />
          </div>

          <CardContent className="p-10 pt-5">
            <p className="text-base font-inter tracking-widest text-black mb-3">
              SEO
            </p>

            <h2 className="text-[24px] font-inter font-extrabold text-[#19154E] leading-snug mb-4">
              What Are Content Clusters and Why They Boost Rankings
            </h2>

            <p className="text-gray-600 font-medium text-[18px]">
              Jan 26, 2026
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
