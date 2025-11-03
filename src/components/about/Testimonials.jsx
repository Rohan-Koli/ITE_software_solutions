import React from 'react'

function Testimonials() {
  return (
    <section className="testimonial-section">
  <div className="container mx-auto px-4">
    <div className="testimonail-wrapper-style1">

      {/* Header */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-2">
        <h2 className="white-clr mb-3 xl:mb-4 visible-slowly-right text-center sm:text-start">
          What Our Clients Say
        </h2>

        <div
          className="array-button verstion-2 flex gap-3 2xl:gap-4 wow fadeInUp"
          data-wow-delay=".5s"
        >
          <button className="array-prev d-center">
            <i className="fa-solid fa-arrow-left p2-clr"></i>
          </button>
          <button className="array-next active d-center">
            <i className="fa-solid fa-arrow-right p2-clr"></i>
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="swiper testimonial-slider1">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-items1">
              
              {/* Thumb */}
              <div className="thumb">
                <img
                  src="assets/img/testimonial/testimonial1-thumb.png"
                  alt="img"
                />
              </div>

              {/* Content */}
              <div className="content">
                <div className="flex flex-col md:flex-row items-center md:justify-between justify-center text-center md:text-start gap-2 mb-3">
                  
                  {/* Client Info */}
                  <div className="cont">
                    <h3 className="white-clr mb-1">Dianne Russell</h3>
                    <span className="fs-eight white-clr d-block">
                      President of Sales
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center justify-center md:justify-start gap-1">
                    <i className="fa-solid fa-star fs-seven p5-clr"></i>
                    <i className="fa-solid fa-star fs-seven p5-clr"></i>
                    <i className="fa-solid fa-star fs-seven p5-clr"></i>
                    <i className="fa-solid fa-star fs-seven p5-clr"></i>
                    <i className="fa-solid fa-star fs-seven p5-clr"></i>
                  </div>
                </div>

                {/* Review Text */}
                <p className="white-clr text-center md:text-start">
                  Information Technology is a broad field a encompassing the design, development implementation, and the an a maintenance
                  of the computer systems and applications. This industry plays a crucial role
                  in shaping our modern world, with innovations
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-2 fs-six fw_600 black mt-2">
                  <div className="line"></div> Mukesh Kumer
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  )
}

export default Testimonials