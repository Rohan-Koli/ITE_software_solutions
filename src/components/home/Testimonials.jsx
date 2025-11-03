import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonials3 } from "@/data/testimonials";


export default function Testimonials() {
  return (
    <section className="testimonial-section my-5">
      <div className="container mx-auto px-4">
        <div className="testimonail-wrapper-style1">
          {/* Header */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-6">
            <h2 className="text-white mb-3 xl:mb-4 text-center sm:text-start text-2xl md:text-3xl font-bold">
              What Our Clients Say
            </h2>

            {/* Navigation Buttons */}
            <div className="array-button verstion-2 flex gap-3 2xl:gap-4">
              <button className="array-prev d-center swiper-prev bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
                <i className="fa-solid fa-arrow-left text-primary"></i>
              </button>
              <button className="array-next d-center swiper-next bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
                <i className="fa-solid fa-arrow-right text-primary"></i>
              </button>
            </div>
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            slidesPerView={1}
            loop={true}
            className="testimonial-slider1"
          >
            {testimonials3.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-items1 flex flex-col lg:flex-row bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 md:p-8 text-center sm:text-left">
                  {/* Thumb */}
                  <div className="thumb flex size-32 justify-center sm:justify-start mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-full border-2 border-primary"
                    />
                  </div>

                  {/* Content */}
                  <div className="content">
                    <div className="flex flex-col md:flex-row items-center md:justify-between justify-center text-center md:text-start gap-2 mb-3">
                      {/* Client Info */}
                      <div className="cont">
                        <h3 className="text-white mb-1 text-lg font-semibold">
                          {item.name}
                        </h3>
                        <span className="text-gray-400 text-sm block">
                          {item.position}
                        </span>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex items-center justify-center md:justify-start gap-1">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className="fa-solid fa-star text-yellow-400 text-sm"
                          ></i>
                        ))}
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-300 text-sm leading-relaxed text-center md:text-start">
                      {item.text}
                    </p>

                    {/* Reviewer */}
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-medium mt-4 justify-center md:justify-start">
                      <div className="w-8 h-[1px] bg-gray-500"></div>
                      {item.reviewer}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
