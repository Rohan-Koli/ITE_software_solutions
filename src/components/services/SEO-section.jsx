import React from "react";

const SEOOptimizationSection = () => {
  return (
    <section className="service-details-section section-padding">
      <div className="container mx-auto px-4">
        <div className="row flex flex-wrap gap-0 mb-4 pb-2 xl:pb-0">
          {/* Left Content */}
          <div className="col-lg-8 w-full lg:w-2/3">
            <div className="service-details-wraping">
              <div
                className="thumb mb-4 sm:mb-3 mb-2 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <img
                  src="/assets/img/tech-service/service-details-thumb.png"
                  alt="SEO Optimization"
                  className="w-full rounded-4"
                />
              </div>

              <div className="mb-4 pb-2 wow fadeInUp" data-wow-delay="0.2s">
                <h2 className="black fs-50 mb-3 wow fadeInUp">
                  SEO Optimization Services
                </h2>
                <p
                  className="pra fs-six mb-3 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  Our <strong>SEO Optimization Services</strong> help businesses
                  improve visibility, attract qualified leads, and enhance
                  online authority. We specialize in on-page, off-page, and
                  technical SEO strategies that drive long-term organic growth
                  and measurable results.
                </p>
                <p className="pra fs-six wow fadeInUp" data-wow-delay=".4s">
                  Our SEO experts leverage advanced tools and analytics to
                  identify growth opportunities, optimize your website
                  structure, improve keyword rankings, and deliver exceptional
                  user experience. Whether it’s a local business or an
                  enterprise website, we ensure your brand stays on top of
                  search engine results.
                </p>
              </div>

              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <h3 className="black mb-4 wow fadeInUp">
                  Why Choose Our SEO Services
                </h3>
                <div className="flex flex-wrap justify-between gap-3 mb-4">
                  <ul className="grid gap-2">
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Data-driven keyword strategy
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> On-page and off-page optimization
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Technical SEO audits and fixes
                    </li>
                  </ul>
                  <ul className="grid gap-2">
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> High-quality backlink building
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Local SEO for business visibility
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Regular performance reporting
                    </li>
                  </ul>
                </div>
                <p className="pra fs-six">
                  Our SEO process focuses on sustainable growth through
                  ethical, white-hat practices that enhance credibility, improve
                  conversions, and establish a strong digital presence across
                  all search platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-4 w-full lg:w-1/3">
            <div className="blog-details-right">
              {/* Related Services */}
              <div
                className="details-common category-service wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h3 className="black flex items-center gap-2 mb-4 fw_700 visible-slowly-right">
                  Related SEO Services
                </h3>
                <ul className="cates">
                  {[
                    "On-Page Optimization",
                    "Off-Page SEO",
                    "Technical SEO",
                    "Local SEO",
                    "SEO Content Writing",
                  ].map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="javascript:void(0)"
                        className="flex items-center justify-between fs-five black"
                      >
                        {item}
                        <span className="just-serial">
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Call */}
              <div
                className="details-common p2-bg quick-call text-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <h4 className="white-clr">Want to Rank Higher? Let’s Talk!</h4>
                <a href="#" className="d-center call rounded-full mb-4">
                  <i className="fa-solid fa-phone"></i>
                </a>
                <a href="tel:+918884567890" className="numbs heading-font">
                  (+91) 888 456 7890
                </a>
              </div>

              {/* Downloads */}
              <div
                className="details-common download-area wow fadeInUp"
                data-wow-delay=".6s"
              >
                {[
                  { name: "SEO Strategy Guide", size: "(1.1Mb)" },
                  { name: "Company Portfolio", size: "(2.4Mb)" },
                ].map((file, index) => (
                  <a
                    href="javascript:void(0)"
                    className="download-item flex items-center justify-between"
                    key={index}
                  >
                    <span className="pra fs-seven">{file.name}</span>
                    <div className="flex items-center gap-2 pra">
                      {file.size}{" "}
                      <i className="fa-solid fa-download p2-clr"></i>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SEO Service Cards */}
        {/* <div className="row flex flex-wrap gap-0 mb-4 pb-2 xl:pb-0">
          {[
            {
              id: "01",
              title: "On-Page SEO Optimization",
              icon: "seo-icon1.png",
              delay: ".4s",
              desc: "We optimize your website content, structure, and metadata to enhance search engine visibility and keyword rankings.",
            },
            {
              id: "02",
              title: "Technical SEO",
              icon: "seo-icon2.png",
              delay: ".6s",
              desc: "Our experts audit and fix issues affecting crawlability, site speed, mobile-friendliness, and indexation to improve performance.",
            },
            {
              id: "03",
              title: "Local SEO & Google My Business",
              icon: "seo-icon3.png",
              delay: ".7s",
              desc: "Boost your local presence and attract nearby customers by optimizing your Google My Business profile and local citations.",
            },
          ].map((item) => (
            <div
              className="col-lg-4 col-md-6 w-full md:w-1/2 lg:w-1/3"
              key={item.id}
            >
              <div
                className="empower-item empower-item-main white-bg border rounded-4 wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="border-bottom pb-4 flex items-center justify-between mb-4">
                  <div className={`icon p4-bg d-center rounded-full`}>
                    <img src={`/assets/img/icon/${item.icon}`} alt="icon" />
                  </div>
                  <span className="serial">{item.id}</span>
                </div>
                <h3 className="mb-3 lg:mb-4">
                  <a href="#" className="black-clr fw-500">
                    {item.title}
                  </a>
                </h3>
                <p className="pra fs-eight mb-4 mb-3 pb-1">{item.desc}</p>
                <a
                  href="#"
                  className="arrows read-more-btn fs-seven fw-semibold black-clr"
                >
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div> */}

        {/* Thumbnails */}
        {/* <div className="service-thumbnail-inner">
          <p
            className="fs-five pra mb-10 sm:mb-4 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            Our SEO specialists focus on delivering measurable, long-term
            results by improving keyword visibility, driving traffic, and
            boosting conversions. From audits to strategy execution, every step
            is designed to maximize ROI.
          </p>

          <div className="service-thumbnail grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 xl:gap-4">
            <div className="thumb wow fadeInUp rounded-xl" data-wow-delay=".3s">
              <img
                src="/assets/img/tech-service/service-thumbnail3.png"
                alt="Keyword Research"
                className="w-full rounded-xl"
              />
            </div>

            <div className="thumb wow fadeInUp rounded-xl" data-wow-delay=".3s">
              <img
                src="/assets/img/tech-service/service-thumbnail3.png"
                alt="Link Building"
                className="w-full rounded-xl"
              />
            </div>

            <div className="thumb wow fadeInUp rounded-xl" data-wow-delay=".3s">
              <img
                src="/assets/img/tech-service/service-thumbnail3.png"
                alt="SEO Analytics Reporting"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div> */}

        {/* Next/Previous */}
        {/* <div className="service-preview-next flex justify-between items-center mt-16">
          <h3 className="black-clr">
            <a href="#" className="flex items-center gap-2">
              <i className="fa-solid fa-angle-left"></i>
              Previous Service
            </a>
          </h3>
          <h3 className="black-clr">
            <a href="#" className="flex items-center gap-2">
              Next Service
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </h3>
        </div> */}
      </div>
    </section>
  );
};

export default SEOOptimizationSection;
