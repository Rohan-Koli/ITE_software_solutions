import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { brands } from "@/data/brands";

export default function Brands() {
  // Duplicate array to make a seamless loop
  const infiniteBrands = [...brands, ...brands];

  return (
    <div className="overflow-hidden max-w-7xl mx-auto py-4">
      <div className="marquee flex items-center gap-16">
        {infiniteBrands.map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex justify-center items-center"
          >
            <img
              className="h-[40px] w-auto opacity-80 hover:opacity-100 transition"
              src={brand.src}
              alt={brand.alt}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
