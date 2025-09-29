"use client";
import "@/app/App chunks/components/MaskSection.css";

export default function MaskSection() {
  return (
    <section className={" bg-red-100"}>
      <div className={"h-[40vh] lg:h-[90vh] overflow-hidden"}>
        <video className="object-cover w-full h-full" autoPlay muted loop>
          <source src="/InterzenVideo/Interzens Website.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
