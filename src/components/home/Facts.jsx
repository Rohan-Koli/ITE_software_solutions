import { factItems } from "@/data/facts";
import React from "react";

export default function Facts() {
  return (
    <div
      id="facts_numbers"
      className="overflow-hidden bg-orange-50 max-w-7xl mx-auto dark:bg-gray-900 py-16"
    >
      <div className="pt-8 md:pt-12 xl:pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div
              className="flex flex-col items-center gap-2 mb-8 lg:mb-12 max-w-2xl mx-auto"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="!text-3xl md:!text-5xl !font-semibold  text-gray-900 dark:text-white m-0">
                Together We Work for Innovation.
              </h2>
              <p className="!text-xl text-gray-700 dark:text-gray-300 opacity-80">
                "ITE Software Solutions is engineering success in the digital world."
              </p>
            </div>

            <div
              className="p-6 xl:p-10 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-sm"
              data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 350;"
            >
              <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center justify-center text-center"
                data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
              >
                {factItems.map((fact, index) => (
                  <div key={index}>
                    <div className="flex flex-col items-center gap-2">
                      <h5 className="!text-3xl !md:text-4xl  wow fadeInUp !font-bold  dark:text-teal-400">
                        {fact.value}
                      </h5>
                      <p className="!text-2xl !md:text-3xl !font-medium wow fadeInUp text-gray-800 dark:text-gray-200">
                        {fact.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
