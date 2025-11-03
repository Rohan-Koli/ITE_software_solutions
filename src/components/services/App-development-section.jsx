import React from "react";

const AppDevelopmentSection = () => {
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
                  alt="App Development"
                  className="w-full rounded-4"
                />
              </div>

              <div className="mb-4 pb-2 wow fadeInUp" data-wow-delay="0.2s">
                <h2 className="black fs-50 mb-3 wow fadeInUp">
                  App Development Services
                </h2>
                <p
                  className="pra fs-six mb-3 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  We deliver full-cycle <strong>App Development Services</strong> — from concept and design 
                  to deployment and support. Our mission is to craft powerful, user-friendly, and 
                  feature-rich mobile applications that elevate your brand and deliver seamless digital 
                  experiences.
                </p>
                <p className="pra fs-six wow fadeInUp" data-wow-delay=".4s">
                  Our app developers specialize in building cross-platform and native mobile applications 
                  using <strong>React Native</strong>, <strong>Flutter</strong>, <strong>Swift</strong>, 
                  and <strong>Kotlin</strong>. We focus on creating apps that are fast, intuitive, and optimized 
                  for performance, scalability, and security — whether for startups or enterprises.
                </p>
              </div>

              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <h3 className="black mb-4 wow fadeInUp">
                  Why Choose Our App Development Services
                </h3>
                <div className="flex flex-wrap justify-between gap-3 mb-4">
                  <ul className="grid gap-2">
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Native & cross-platform app expertise
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> High-performance and scalable architecture
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Engaging and intuitive UI/UX design
                    </li>
                  </ul>
                  <ul className="grid gap-2">
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Secure data handling and integrations
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Robust testing & QA process
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Continuous updates & support
                    </li>
                  </ul>
                </div>
                <p className="pra fs-six">
                  Whether it’s an e-commerce app, social platform, or business management tool, 
                  our app development process ensures high quality, strong security, and a smooth 
                  user experience across all devices.
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
                  Related App Services
                </h3>
                <ul className="cates">
                  {[
                    "iOS App Development",
                    "Android App Development",
                    "Cross-Platform Apps",
                    "UI/UX for Mobile",
                    "App Maintenance & Support",
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
                <h4 className="white-clr">Need a Mobile App? Let’s Talk!</h4>
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
                  { name: "App Development Brochure", size: "(1.5Mb)" },
                  { name: "Company Portfolio", size: "(2.8Mb)" },
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
        
      </div>
    </section>
  );
};

export default AppDevelopmentSection;
