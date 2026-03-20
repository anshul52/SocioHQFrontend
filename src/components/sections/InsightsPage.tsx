"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] py-16 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 border rounded-full px-4 py-2 text-sm bg-white shadow-sm mb-6">
          <span className="w-5 h-5 flex items-center justify-center bg-black text-white rounded-full text-xs">
            →
          </span>
          BLOGS
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Insights and News
        </h1>
        <p className="text-gray-500 text-lg">
          Discover latest articles and guides
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <Card className="rounded-2xl overflow-hidden bg-white shadow-md">
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            {/* IMAGE PLACEHOLDER */}
            <span className="text-gray-400">Image</span>
          </div>

          <CardContent className="p-6">
            <p className="text-xs tracking-widest text-gray-400 mb-3">
              DIGITAL MARKETING
            </p>

            <h2 className="text-xl font-semibold text-[#2d2f6f] leading-snug mb-4">
              Boost Sales Fast: Secrets from Dubai's Social Media Pros
            </h2>

            <p className="text-gray-400 text-sm">Feb 12, 2026</p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="rounded-2xl overflow-hidden bg-white shadow-md">
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Image</span>
          </div>

          <CardContent className="p-6">
            <p className="text-xs tracking-widest text-gray-400 mb-3">
              DIGITAL MARKETING
            </p>

            <h2 className="text-xl font-semibold text-[#2d2f6f] leading-snug mb-4">
              Best Free Tools for AI Ad Variations
            </h2>

            <p className="text-gray-400 text-sm">Feb 6, 2026</p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="rounded-2xl overflow-hidden bg-white shadow-md">
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Image</span>
          </div>

          <CardContent className="p-6">
            <p className="text-xs tracking-widest text-gray-400 mb-3">SEO</p>

            <h2 className="text-xl font-semibold text-[#2d2f6f] leading-snug mb-4">
              What Are Content Clusters and Why They Boost Rankings
            </h2>

            <p className="text-gray-400 text-sm">Jan 26, 2026</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
