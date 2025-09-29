"use client";
import HeroSection from "./(Home Page)/HeroSection";
import AboutUs from "./(Home Page)/AboutUs";
import { TechLogo } from "./(Home Page)/TechLogo";
import { CompantStats } from "./(Home Page)/CompantStats";
import MaskSection from "./(Home Page)/MaskSection";
import { TextMarquee } from "./(Home Page)/Text-Marquee";
import Form from "./App chunks/components/Form";
import { AnimatePresence, motion } from "framer-motion";
import { MarqueeLogo } from "./App chunks/components/MarqueeLogo";
import Service from "./(Home Page)/Service";
export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        exit={{
          scaleX: 0.2,
          scaleY: 0.05,
          borderRadius: "99px",
          y: -500,
        }}
        transition={{
          duration: 1,
          ease: [0.33, 0.88, 0.25, 0.91],
          delay: 0.2,
        }}
      >
        <HeroSection />
        <Service />
        <AboutUs />
        <TextMarquee />
        <MaskSection />
        <CompantStats />
        <TechLogo />
        <Form />
        <MarqueeLogo />
      </motion.div>
    </AnimatePresence>
  );
}
