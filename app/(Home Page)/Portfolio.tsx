"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ReactLenis, useLenis } from "lenis/react"; // useLenis hook
const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    { title: "Milestone Homes", img: "/sites/milestone.png" },
    { title: "Dimondra", img: "/sites/dimondra.png" },
    { title: "Brownstone homes", img: "/sites/bshh.png" },
    { title: "Menlocloud", img: "/sites/menlocloud.png" },
    { title: "Bizgrowth", img: "/sites/bizgrowth.png" },
    { title: "Teeser", img: "/sites/teeser.png" },
  ];
  const lenis = useLenis(); // access the global Lenis instance
  useEffect(() => {
    if (!lenis) return;

    if (selectedImage) {
      lenis.stop(); // pause global scroll
    } else {
      lenis.start(); // resume global scroll
    }

    return () => {
      lenis.start(); // ensure scroll resumes on unmount
    };
  }, [selectedImage, lenis]);

  return (
    <section className="w-full bg-[#121212] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-3xl lg:text-5xl font-Grostek text-[#FCFBF8] font-[600] mb-4">
          Proof That Speaks for Itself
        </h1>
        {/* Subtext */}
        <p className="text-[#FCFBF8] mb-12 max-w-3xl mx-auto">
          We&apos;ve helped brands across industries stand out, scale, and
          succeed. Explore some of our most impactful projects in branding, web
          development, and marketing.
        </p>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(project.img)}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
            >
              <div className="relative bg-black w-full h-64">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover object-top transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <h3 className="text-[#FCFBF8] text-xl font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full overflow-auto p-4">
            <Image
              src={selectedImage}
              alt="Project Preview"
              width={1920}
              height={1080}
              className="mx-auto object-contain"
            />
          </div>
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
