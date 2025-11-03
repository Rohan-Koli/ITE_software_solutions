import { slideData, slideData2, slides } from "@/data/elements";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Elements() {
  return (
    <div id="builder_elements" className="py-10 bg-white dark:bg-gray-900">
      <div className="pb-6 lg:pb-8 xl:pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className="flex flex-col items-center gap-3 xl:gap-4 text-center w-full"
            data-anime="onview: -100; targets: >*; translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(200);"
          >
            <h1 className="text-2xl md:text-3xl !font-semibold text-gray-900 dark:text-white">
              Our Technology Stack
            </h1>

            <div className="w-full">
              {/* First Swiper */}
              <Swiper
                className="w-full"
                slidesPerView={2.5}
                spaceBetween={16}
                centeredSlides={true}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: true,
                  reverseDirection: true,
                }}
                speed={7000}
                allowTouchMove={false}
                breakpoints={{
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 5, spaceBetween: 24 },
                }}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex items-center gap-2 md:gap-3 p-2 border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 shadow-sm">
                      <img
                        className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-500 dark:text-indigo-400"
                        src={slide.src}
                        alt={slide.alt}
                      />
                      <span className="text-sm md:text-base lg:text-lg font-medium text-gray-800 dark:text-gray-100">
                        {slide.label}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Second Swiper */}
              <Swiper
                // style={{ transform: "rotate(180deg)" }}
                className="w-full my-3 md:my-4"
                slidesPerView={2.5}
                slidesPerGroup={1}
                spaceBetween={16}
                modules={[Autoplay]}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: true,
                }}
                speed={7000}
                allowTouchMove={false}
                breakpoints={{
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 5, spaceBetween: 24 },
                }}
              >
                {slideData.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex items-center gap-2 md:gap-3 p-2 border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 shadow-sm">
                      <img
                        className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-500 dark:text-indigo-400"
                        src={slide.src}
                        alt={slide.alt}
                      />
                      <span className="text-sm md:text-base lg:text-lg font-medium text-gray-800 dark:text-gray-100">
                        {slide.label}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Third Swiper */}
              <Swiper
                className="w-full"
                slidesPerView={2.5}
                spaceBetween={16}
                centeredSlides={true}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: true,
                  reverseDirection: true,
                }}
                speed={7000}
                allowTouchMove={false}
                breakpoints={{
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1024: { slidesPerView: 5, spaceBetween: 24 },
                }}
              >
                {slideData2.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex items-center gap-2 md:gap-3 p-2 border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 shadow-sm">
                      <img
                        className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-500 dark:text-indigo-400"
                        src={slide.src}
                        alt={slide.alt}
                      />
                      <span className="text-sm md:text-base lg:text-lg font-medium text-gray-800 dark:text-gray-100">
                        {slide.label}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 mt-3 lg:mt-5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm md:text-base transition-all duration-300"
            >
              <span>View all elements</span>
              <i className="ri-arrow-right-line font-bold rotate-0 rtl:rotate-180" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
