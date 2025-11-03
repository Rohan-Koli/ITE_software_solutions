import React from "react";

const DigitalMarketingSection = () => {
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
                  alt="Digital Marketing"
                  className="w-full rounded-4"
                />
              </div>

              <div className="mb-4 pb-2 wow fadeInUp" data-wow-delay="0.2s">
                <h2 className="black fs-50 mb-3 wow fadeInUp">
                  Digital Marketing Services
                </h2>
                <p
                  className="pra fs-six mb-3 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  We offer comprehensive <strong>Digital Marketing Services</strong> designed to grow your online visibility, attract targeted audiences, and drive measurable business results. From SEO and social media management to paid ads and content strategy, we help brands dominate the digital landscape.
                </p>
                <p className="pra fs-six wow fadeInUp" data-wow-delay=".4s">
                  Our marketing experts use proven tools and techniques like{" "}
                  <strong>Google Ads</strong>, <strong>Meta Ads</strong>,{" "}
                  <strong>SEO Optimization</strong>, and{" "}
                  <strong>Performance Analytics</strong> to ensure your campaigns deliver maximum ROI. Whether you’re a startup or an enterprise, our digital marketing strategies help you reach and retain customers effectively.
                </p>
              </div>

              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <h3 className="black mb-4 wow fadeInUp">
                  Why Choose Our Digital Marketing Services
                </h3>
                <div className="flex flex-wrap justify-between gap-3 mb-4">
                  <ul className="grid gap-2">
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Data-driven marketing strategies
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> SEO and SEM expertise
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Social media campaign management
                    </li>
                  </ul>
                  <ul className="grid gap-2">
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Performance tracking and reporting
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Conversion-focused ad campaigns
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Continuous optimization & A/B testing
                    </li>
                  </ul>
                </div>
                <p className="pra fs-six">
                  From increasing organic traffic to running high-performing ad campaigns, our team ensures your brand message reaches the right audience at the right time — driving both awareness and conversions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-lg-4 w-full lg:w-1/3">
            <div className="blog-details-right">
              {/* Service Details */}
              <div
                className="details-common category-service wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h3 className="black flex items-center gap-2 mb-4 fw_700 visible-slowly-right">
                  Related Marketing Services
                </h3>
                <ul className="cates">
                  {[
                    "Search Engine Optimization (SEO)",
                    "Pay-Per-Click (PPC) Advertising",
                    "Social Media Marketing",
                    "Content Marketing",
                    "Email Marketing Campaigns",
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
                <h4 className="white-clr">Need Marketing Help? Let’s Talk!</h4>
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
                  { name: "Digital Marketing Brochure", size: "(1.5Mb)" },
                  { name: "Campaign Success Report", size: "(2.1Mb)" },
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

        {/* Services Cards */}
        {/* <div className="row flex flex-wrap gap-0 mb-4 pb-2 xl:pb-0">
          {[
            {
              id: "01",
              title: "Search Engine Optimization (SEO)",
              icon: "seo-icon.png",
              delay: ".4s",
              desc: "Enhance your website’s visibility and rank higher on search engines with our proven SEO strategies.",
            },
            {
              id: "02",
              title: "Social Media Management",
              icon: "social-icon.png",
              delay: ".6s",
              desc: "Build engagement and grow your brand presence across social platforms like Instagram, LinkedIn, and Facebook.",
            },
            {
              id: "03",
              title: "Pay-Per-Click Advertising",
              icon: "ppc-icon.png",
              delay: ".7s",
              desc: "Drive immediate results through data-driven paid campaigns that maximize ROI and conversions.",
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
                  <div className="icon p4-bg d-center rounded-full">
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
            Our digital marketing experts combine creativity with data analytics to craft campaigns that engage your audience, boost visibility, and deliver measurable growth across all online channels.
          </p>

          <div className="service-thumbnail grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 xl:gap-4">
            <div className="thumb wow fadeInUp rounded-xl" data-wow-delay=".3s">
              <img
                src="/assets/img/tech-service/service-details-thumb.png"
                alt="SEO Optimization"
                className="w-full rounded-xl"
              />
            </div>

            <div className="thumb wow fadeInUp rounded-xl" data-wow-delay=".3s">
              <img
                src="/assets/img/tech-service/service-details-thumb.png"
                alt="Social Media Marketing"
                className="w-full rounded-xl"
              />
            </div>

            <div className="thumb wow fadeInUp rounded-xl" data-wow-delay=".3s">
              <img
                src="/assets/img/tech-service/service-details-thumb.png"
                alt="PPC Campaigns"
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

export default DigitalMarketingSection;
