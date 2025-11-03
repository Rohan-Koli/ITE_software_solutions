import React from "react";

const HeroSection = () => {
  return (
    <section className="banner-section hero-style2 mb-0  fix">
      <div className="cmn-bg z-1 pt-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Left Content */}
            <div className="w-full sticky xl:w-1/2 lg:w-7/12 md:w-8/12">
              <div className="hero-content-version2">
                <span className="subtitle black-clr uppercase block mb-3 font-bold">
                  It Solution
                </span>
                <h1 className="mb-8 wow fadeInUp" data-wow-delay=".6s">
                  Empowering Businesses Through{" "}
                  <span className="stext p1-clr">Innovative Software Solutions</span>
                </h1>
                <p className="pra pb-10">
                  We design, develop, and deliver cutting-edge digital products that help you grow, scale, and succeed in the digital era.
                </p>

                <div className="hero-adjust-partner">
                  <div
                    className="text-center wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <a
                      href="/contact"
                      className="common-btn box-style btn2 blackbg inline-flex justify-center items-center gap-2 font-medium white-clr py-3 overflow-hidden rounded-full"
                    >
                      Get Started
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>

                  <div
                    className="trusted-partner-wrap flex items-center justify-center gap-3 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="partner-inner flex items-center gap-2">
                      <div className="partner-icon">
                        <img src="assets/img/banner/partner1.png" alt="img" />
                      </div>
                      <div className="partner-icon">
                        <img src="assets/img/banner/partner2.png" alt="img" />
                      </div>
                      <div className="partner-icon">
                        <img src="assets/img/banner/partner3.png" alt="img" />
                      </div>
                      <div className="partner-icon flex justify-center items-center bg-white rounded-full w-12 h-12">
                        <span className="fs-eight black-clr font-medium">
                          12k+
                        </span>
                      </div>
                    </div>
                    <span
                      className="fs-seven font-medium pra wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      Trusted Partner
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div class="w-full xl:w-1/2 lg:w-5/12 md:w-4/12">
              <div class="hero-thumb-area2 gap-6 xl:gap-8 ps-6 md:pt-0 pt-2">
                <div class="hero-thumb-inner grid gap-6 xl:gap-8">
                  <div class="thumb w-full wow fadeInUp" data-wow-delay=".4s">
                    <img
                      src="assets/img/banner/hero2-thumb1.png"
                      alt="img"
                      class="w-full rounded-lg"
                    />
                  </div>

                  <div
                    class="hero-connecting-box p2-bg rounded-lg wow fadeInDown p-6"
                    data-wow-delay=".5s"
                  >
                    <h3 class="white-clr mb-3">Connecting World Every Byte</h3>
                    <p class="fs-seven white-clr font-normal mb-3 xl:mb-4 pb-4">
                      Information Technology is a broad field encompassing
                      development, implementation, and maintenance.
                    </p>
                    <a
                      href="about.html"
                      class="learn inline-flex items-center gap-2 pb-6 white-clr"
                    >
                      Learn More <i class="fas fa-arrow-right"></i>
                    </a>
                    <img
                      src="assets/img/banner/hero-commecting.png"
                      alt="img"
                      class="connecting-icon block mt-4"
                    />
                  </div>
                </div>

                <div class="thumb2 wow fadeInLeft" data-wow-delay=".7s">
                  <img
                    src="assets/img/banner/hero2-thumb2.png"
                    alt="img"
                    class="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
