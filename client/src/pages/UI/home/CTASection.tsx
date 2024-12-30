"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function CTASection() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="relative overflow-hidden rounded-2xl bg-[#2C4A28] p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative">
          {/* Icon Circle */}
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#F5F5DC] flex items-center justify-center mb-4 md:mb-0">
            <img src="/icon/icon4.png" alt="Icon" width={32} height={32} />
          </div>

          {/* Text Content */}
          <div className="flex-grow text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
              Shabelle: Partnering for sustainable farming solutions and a
              prosperous future
            </h2>
          </div>

          {/* CTA Button */}
          <Button className="flex-shrink-0 bg-[#F5F5DC] text-[#2C4A28] hover:bg-[#E5E5CC] px-6 py-2 rounded-full font-medium w-full md:w-auto">
            <span>Discover More</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/img/cta.png')",
          }}
        />
      </div>
    </div>
  );
}
