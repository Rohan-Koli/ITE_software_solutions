import React from "react";
import { features2 } from "@/data/features";
// Data array for hallmarks

// {
//     icon: "unicon-document",
//     title: "Client Approach",
//     description:
//       "We have client centric approach,which sustains us in market optimizing your work.",
//     backgroundColor: "bg-white dark:bg-gray-800",
//   },

export default function Hallmarks() {
  return (
    <section className="empower-section fix py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 empower-heading text-center">
          <h1
            className="wow fadeInUp mb-4 sm:mb-6 text-3xl md:text-4xl font-bold text-black visible-slowly-right"
            data-wow-delay=".3s"
          >
            Hallmarks
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features2.map((item) =>{
            const Icon = item.icon;
            return (
            <div
              key={item.id}
              className="empower-item white-bg border rounded-xl p-6 hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300 wow fadeInUp"
            //   data-wow-delay={item.delay}
            >
              {/* Icon Section */}
              <div className="border-b pb-4 flex items-center justify-between mb-4">

                <div className="icon d-center rounded-full bg-gray-100 w-16 h-16 flex justify-center items-center">
                  <Icon
                    // src={item.icon}
                    // alt={item.title}
                    className={`w-10 h-10  object-contain`}
                  />
                </div>
                {/* <span className="serial text-gray-700 font-semibold text-lg">
                  {item.id}
                </span> */}
              </div>

              {/* Content Section */}
              <h3 className="mb-2 lg:mb-3 text-xl font-semibold">
                {/* <a
                  href={item.link}
                  className="black-clr font-medium hover:text-blue-600"
                > */}
                  {item.title}
                {/* </a> */}
              </h3>
              <p className="pra fs-eight mb-3 lg:mb-4 pb-1 lg:pb-2 text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* Read More Button */}
              {/* <a
                href={item.link}
                className="arrows read-more-btn fs-seven fw-semibold black-clr inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors"
              >
                Read More <i className="fas fa-arrow-right"></i>
              </a> */}
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
