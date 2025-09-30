import { Minus } from "lucide-react";
import React from "react";

const Service = () => {
  const serviceData = [
    {
      title: "Branding",
      desc: "Craft an identity that speaks louder than words. From logo design to full-scale brand systems, we create brand identities that resonate, inspire, and stick. Whether you’re a startup looking to make a mark or an established business ready to evolve, our branding team ensures your story is told with impact.",
      lists: [
        "Brand Identity & Guidelines",
        "Business Presentations",
        "Photography & Videography",
        "UI/UX development",
        "3D Modelling",
      ],
    },
    {
      title: "Website Development",
      desc: "Websites that don’t just look good—they convert. We design and develop user-centric, high-performing websites and web apps tailored to your business goals. Our websites are optimized for speed, scalability, and search, ensuring your digital presence works as hard as you do.",
      lists: [
        "Landing Pages",
        "Corporate websites",
        "E-commerce websites",
        "Portal website",
      ],
    },
    {
      title: "Content Creation",
      desc: "Content that cuts through the noise. From cinematic brand videos to scroll-stopping social media content, our creative team produces visuals and stories that grab attention and drive engagement.",
      lists: [
        "Brand Videos",
        "Product Photography",
        "Social Media Content",
        "Motion Graphics",
      ],
    },
    {
      title: "Marketing",
      desc: "Data-driven growth strategies that deliver ROI. We craft integrated marketing campaigns powered by data and creativity. Whether it’s search, social, or email, we help you attract, engage, and convert customers at scale.",
      lists: [
        "SEO Optimization",
        "Social Media Marketing (SMM)",
        "Strategic Marketing & Campaign Management",
        "Performance Marketing (PPC & Paid Ads)",
        "Reputation Management",
        "Email Marketing",
      ],
    },
  ];
  return (
    <div className="py-16">
      <div className="container">
        <h1 className=" text-4xl text-[#590000] mb-4 lg:mb-8 lg:text-5xl font-Grostek font-[600]">
          Our Services
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceData.map((service, idx) => (
            <div
              key={idx}
              className={`bg-[hsl(0,70%,92%)] rounded-lg relative border border-red-200/20 shadow-sm p-5 ${
                idx === 1 || idx === 2 ? "lg:col-span-2" : ""
              }`}
            >
              <h2 className="text-xl font-[600] font-Synonym mb-4">
                {service.title}
              </h2>
              {idx == 1 ? (
                <div className=" w-[70%] overflow-hidden absolute top-0 right-0 h-full hidden lg:flex justify-between items-end gap-3">
                  <img
                    src="https://bidusdigital.com/wp-content/themes/bidusdigital/images/sep4.png"
                    alt="watch"
                    className="h-[30%] w-auto object-contain"
                  />
                  <img
                    src="https://bidusdigital.com/wp-content/themes/bidusdigital/images/sep3.png"
                    alt="mobile"
                    className="h-[50%] w-auto object-contain"
                  />
                  <img
                    src="https://bidusdigital.com/wp-content/themes/bidusdigital/images/sep2.png"
                    alt="tablet"
                    className="h-[60%] w-auto object-contain"
                  />
                  <img
                    src="https://bidusdigital.com/wp-content/themes/bidusdigital/images/sep1.png"
                    alt="desktop"
                    className="h-[70%] w-auto object-contain"
                  />
                </div>
              ) : null}
              {idx == 2 ? (
                <div className="w-[70%] hidden lg:block h-full absolute top-0 right-0">
                  <img
                    src={"/about.png"}
                    className="w-full h-full object-cover"
                    alt={""}
                  />
                </div>
              ) : null}
              <p className="block lg:hidden">{service.desc}</p>
              <ul className="space-y-2 hidden lg:block">
                {service.lists.map((item, index) => (
                  <li
                    key={index}
                    className="text-red-900 flex items-center gap-2"
                  >
                    <Minus /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
