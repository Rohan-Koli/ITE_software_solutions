import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { timelineData } from "@/data/timeline";

export default function Timeline() {
  return (
    <section
      id="about-timeline"
      className="overflow-hidden bg-subtle dark:bg-gray-800"
    >
      <div className="py-6 xl:py-9">
        {/* Make the container wide enough */}
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 xl:gap-8">
            <h2
              className="m-0 text-center !text-lg sm:!text-2xl lg:!text-3xl !font-semibold"
              data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
            >
              How we got here
            </h2>

            {/* Let Swiper use full available width */}
            <div className="w-full">
              <Swiper
                className="overflow-visible"
                spaceBetween={16}
                centeredSlides={true}
                // Choose one of the two configs below:

                // A1) Fixed counts per breakpoint
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}

                // A2) Or: auto width slides (uncomment to try)
                // slidesPerView={"auto"}
                // on slidesPerView: "auto", give slides a fixed width (see SwiperSlide className)
              >
                {timelineData.map((item, index) => (
                  // For A1 (fixed counts) keep this as is.
                  // For A2 (auto), add "!w-[260px]" (or whatever width you want):
                  <SwiperSlide key={index} /* className="!w-[260px]" */>
                    <div className="flex flex-col items-center gap-9 text-center">
                      <div className="overflow-hidden w-[200px]">
                        <img
                          className="w-full origin-bottom"
                          src={item.src}
                          width={400}
                          height={400}
                          alt={item.alt}
                          loading="lazy"
                        />
                      </div>

                      <div className="flex flex-col items-center px-3 xl:px-6">
                        <h3 className="text-lg sm:text-2xl font-semibold dark:text-white">
                          {item.year}
                        </h3>
                        <p className="text-base xl:text-lg opacity-70 dark:text-white">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}