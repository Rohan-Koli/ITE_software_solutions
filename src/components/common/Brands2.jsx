import { reviewLogos } from "@/data/brands";
import React from "react";

export default function Brands() {
  return (
    <div id="trusted_brands" className="py-6 my-4 md:my-8 md:py-10 bg-gray-50 dark:bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg px-6 py-10 sm:px-10 sm:py-12 transition-transform duration-500 ease-out translate-y-0 hover:-translate-y-1"
        >
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted for overall simplicity
          </h2>

          {/* Rating and Description */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-700 dark:text-gray-300 mb-6">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className="fa-solid fa-star text-yellow-400 text-lg"
                ></i>
              ))}
            </div>

            {/* Description */}
            <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Based on 4,000+ reviews with customer satisfaction on
            </span>
          </div>

          {/* Logos Section */}
          <div className="mt-4 sm:mt-6 flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {reviewLogos.map((logo, index) => (
              <div key={index} className="flex items-center">
                {/* Light Mode Logo */}
                <img
                  src={logo.lightSrc}
                  alt={logo.alt || "Brand logo"}
                  className="h-[42px] w-auto dark:hidden opacity-80 hover:opacity-100 transition"
                />
                {/* Dark Mode Logo */}
                <img
                  src={logo.darkSrc}
                  alt={logo.alt || "Brand logo"}
                  className="h-[42px] w-auto hidden dark:block opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
