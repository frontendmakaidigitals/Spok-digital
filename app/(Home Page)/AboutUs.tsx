"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Carousel, {
  Slider,
  SliderContainer,
  SliderProgress,
  SliderNextButton,
  SliderPrevButton,
} from "../App chunks/components/Carousel";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
const AboutUs = () => {
  const OPTIONS: EmblaOptionsType = { loop: false };
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO, Example Co.",
      rating: 5,
      text: "This service was outstanding! The team was professional, and the results exceeded our expectations.",
    },
    {
      name: "Jane Smith",
      title: "Marketing Head, Acme Corp.",
      rating: 4,
      text: "Highly recommend! They delivered quality work on time.",
    },
    {
      name: "Alice Johnson",
      title: "Freelancer",
      rating: 5,
      text: "Fantastic experience. Will work with them again for future projects.",
    },
    {
      name: "Alice Johnson",
      title: "Freelancer",
      rating: 5,
      text: "Fantastic experience. Will work with them again for future projects.",
    },
    {
      name: "Alice Johnson",
      title: "Freelancer",
      rating: 5,
      text: "Fantastic experience. Will work with them again for future projects.",
    },
  ];

  return (
    <div className="w-full overflow-hidden  relative py-12">
      <div className="container">
        <h1 className=" text-4xl lg:text-6xl font-Grostek mb-8 font-[600]">
          Our Clients Experience
        </h1>
        <Carousel className="bg-transparent " options={OPTIONS}>
          <SliderContainer className="gap-2 lg:gap-5 !px-0">
            {testimonials.map((testimonial, idx) => (
              <Slider
                key={idx}
                className="bg-[hsl(0,70%,90%)] w-2/3 lg:w-1/3 p-6 rounded-xl shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 lg:h-6 lg:w-6 ${
                          i < testimonial.rating
                            ? "fill-yellow-600 text-yellow-600"
                            : "fill-gray-300 text-gray-300 "
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.text}</p>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </Slider>
            ))}
          </SliderContainer>

          <div className="flex items-center gap-5 justify-end my-5">
            <SliderPrevButton className="bg-red-500 p-2 rounded-full text-slate-50">
              <ArrowLeft />
            </SliderPrevButton>
            <SliderNextButton className="bg-red-500 p-2 rounded-full text-slate-50">
              <ArrowRight />
            </SliderNextButton>
          </div>

          <div className="flex justify-center py-2">
            <SliderProgress />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default AboutUs;
