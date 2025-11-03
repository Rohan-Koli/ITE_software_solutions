import React from 'react'

function Achivements() {
  return (
    <section className="about-exchange  !py-10 fix">
  <div className="container mx-auto">
    <div className="flex flex-wrap lg:flex-nowrap gap-0 md:gap-0 items-center">
      
      {/* Left Content */}
      <div className="w-full lg:w-1/2 !py-4">
        <div className="about-exchange-content style2">
          <h2
            className="mb-3 md:mb-3 wow fadeInUp black-clr visible-slowly-right"
            data-wow-delay=".3s"
          >
            IT Excellence Everywhere Building the Future with Innovation
          </h2>
          <p
            className="pra text-[20px] mb-3 xl:mb-4 pb-2 xl:pb-2 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            For over a decade, our software development company has been at the forefront of digital transformation delivering scalable, secure, and high-performing solutions across industries. 
            From enterprise applications to cutting-edge web and mobile platforms, we help global businesses harness the power of technology to achieve measurable growth.
          </p>

          {/* Display Items */}
          <div className="about-display2 flex flex-wrap xl:flex-nowrap gap-3 xl:gap-3 xxl:gap-4 mb-4 xl:mb-4 pb-2 xl:pb-2">
            
            <div className="about-display-item flex items-center gap-2 sm:gap-3">
              <div className="icon d-center rounded-full p3-bg">
                <img src="assets/img/icon/laptop1.png" alt="img" />
              </div>
              <div className="cont">
                <span className="fs-seven fw-semibold black-clr d-block mb-1">
                  Unleashing Possibilities
                </span>
                <p className="small-pra pra">
                  Delivered 250+ successful software products empowering startups and enterprises to innovate faster and scale smarter.
                </p>
              </div>
            </div>

            <div className="about-display-item flex items-center gap-2 sm:gap-3">
              <div className="icon d-center rounded-full p2-bg">
                <img src="assets/img/icon/diplay1.png" alt="img" />
              </div>
              <div className="cont">
                <span className="fs-seven fw-semibold black-clr d-block mb-1">
                  Navigating the Digital Frontier
                </span>
                <p className="small-pra pra">
                  Recognized for excellence in innovation, cloud engineering, and AI-driven development by top industry leaders.
                </p>
              </div>
            </div>

          </div>

          {/* Learn More Button */}
          <a
            href="/contact"
            className="common-btn box-style btn2 blackbg inline-flex justify-center items-center gap-2 xxl:gap-2 fw-500 white-clr py-3 overflow-hidden rounded-full"
          >
            Learn More
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>

      {/* Right Image / Counters */}
      <div className="w-full lg:w-1/2 !py-4">
        <div className="about-thumb-version2 relative ps-0 xl:ps-5 w-full">
          <img src="assets/img/about/about-v2.png" alt="img" className="w-full" />

          <img
            src="assets/img/element/dots.png"
            alt="img"
            className="dot-ele hidden lg:block"
          />

          {/* Counting Box 1 */}
          <div className="about-counting-box1 rounded-4 white-bg absolute top-4 right-4 p-4">
            <div className="flex items-center gap-2">
              <img src="assets/img/icon/troffe.png" alt="img" />
              <h3 className="flex items-center">
                <span className="black-clr count">10</span> +
              </h3>
            </div>
            <span className="black-clr fs-seven d-block mt-1">Years Of Experiences</span>
          </div>

          {/* Counting Box 2 */}
          <div className="about-counting-box2 flex items-center gap-2 xl:gap-3 rounded-4 cmn-bg absolute bottom-4 left-4 p-4">
            <img src="assets/img/icon/people.png" alt="img" />
            <div className="cont">
              <h3 className="flex items-center">
                <span className="black-clr count">4,000</span> +
              </h3>
              <span className="black-clr fs-seven d-block mt-1">Satisfied Clients</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

  )
}

export default Achivements
