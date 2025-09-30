"use client";
import React from "react";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";

const WhoWeAre = () => {
  const reasons = [
    "Proven track record with global brands and startups alike",
    "In-house expertise across design, development, and growth marketing",
    "Conversion-first approach to everything we build",
    "Agile execution with measurable results",
  ];

  return (
    <section className="w-full   py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12 lg:space-y-20">
        {/* Who We Are */}
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 items-center">
          {/* Image (on top in mobile, right on desktop) */}
          <div className="relative w-full h-80 lg:h-[420px] order-1 lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Who We Are"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl text-[#590000] font-Grostek font-bold mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold">Spok Digital</span> is a
              full-service creative and digital powerhouse specializing in
              branding, web and app development, content creation, and
              performance marketing. We partner with visionary businesses to
              transform ideas into scalable digital experiences that attract,
              engage, and convert.
            </p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-red-500/30" />
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 items-center">
          <div className="relative w-full h-80 lg:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with your image
              alt="Why Us"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl text-[#590000] font-Grostek font-bold mb-6">
              Why Us
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div>
                    <BadgeCheck className="text-red-100 fill-green-600   w-6 h-6 flex-shrink-0" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200 text-lg leading-snug">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
