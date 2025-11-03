import React from "react";

const WebDevelopmentSection = () => {
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
                  alt="Web Development"
                  className="w-full rounded-4"
                />
              </div>

              <div className="mb-4 pb-2 wow fadeInUp" data-wow-delay="0.2s">
                <h2 className="black fs-50 mb-3 wow fadeInUp">
                  Web Development Services
                </h2>
                <p
                  className="pra fs-six mb-3 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  We provide end-to-end <strong>Web Development Services</strong>
                  — from planning and UI design to development, deployment, and
                  maintenance. Our goal is to create scalable, user-friendly,
                  and high-performance websites that represent your brand and
                  help you achieve business success.
                </p>
                <p className="pra fs-six wow fadeInUp" data-wow-delay=".4s">
                  Our developers specialize in modern technologies such as{" "}
                  <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
                  <strong>Node.js</strong>, and <strong>MongoDB</strong>, ensuring
                  your web solution is fast, responsive, and optimized for both
                  performance and SEO. From corporate websites to full-scale
                  e-commerce platforms, we deliver solutions that empower your
                  online presence.
                </p>
              </div>

              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <h3 className="black mb-4 wow fadeInUp">
                  Why Choose Our Web Development Services
                </h3>
                <div className="flex flex-wrap justify-between gap-3 mb-4">
                  <ul className="grid gap-2">
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Custom,
                      scalable web solutions
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i>{" "}
                      Responsive and mobile-first design
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Optimized
                      for performance and SEO
                    </li>
                  </ul>
                  <ul className="grid gap-2">
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i>{" "}
                      Full-stack expertise (MERN & MEAN)
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i>{" "}
                      Secure and scalable architecture
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Ongoing
                      support & maintenance
                    </li>
                  </ul>
                </div>
                <p className="pra fs-six">
                  Whether you need a sleek portfolio site or a powerful
                  enterprise platform, our web development process ensures a
                  perfect blend of creativity, usability, and technology to help
                  your business stand out online.
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
                  Related Web Services
                </h3>
                <ul className="cates">
                  {[
                    "Frontend Development",
                    "Backend Development",
                    "E-Commerce Solutions",
                    "Custom Web Apps",
                    "API Integration Services",
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
                <h4 className="white-clr">Need a Website? Let’s Talk!</h4>
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
                  { name: "Web Design Brochure", size: "(1.2Mb)" },
                  { name: "Company Portfolio", size: "(2.5Mb)" },
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
              title: "Custom Web Applications",
              icon: "work-icon1.png",
              delay: ".4s",
              desc: "We build custom web applications tailored to your business logic using modern frameworks like React.js and Node.js.",
            },
            {
              id: "02",
              title: "E-Commerce Development",
              icon: "work-icon3.png",
              delay: ".6s",
              desc: "From product management to secure payment integration, we develop e-commerce websites that boost sales and customer engagement.",
            },
            {
              id: "03",
              title: "UI/UX Design & Prototyping",
              icon: "work-icon2.png",
              delay: ".7s",
              desc: "We focus on delivering visually appealing and highly intuitive designs that offer an excellent user experience.",
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
            Our web development team focuses on delivering secure, scalable, and
            visually engaging websites that leave a lasting impression. From
            front-end visuals to back-end logic, we ensure every component
            performs seamlessly.
          </p>

          <div className="service-thumbnail grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 xl:gap-4">
            <div className="thumb wow fadeInUp rounded-xl" data-wow-delay=".3s">
              <img
                src="/assets/img/tech-service/service-thumbnail3.png"
                alt="Frontend Development"
                className="w-full rounded-xl"
              />
            </div>

            <div className="thumb wow fadeInUp rounded-xl" data-wow-delay=".3s">
              <img
                src="/assets/img/tech-service/service-thumbnail3.png"
                alt="Backend Development"
                className="w-full rounded-xl"
              />
            </div>

            <div className="thumb wow fadeInUp rounded-xl" data-wow-delay=".3s">
              <img
                src="/assets/img/tech-service/service-thumbnail3.png"
                alt="Responsive Web Design"
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

export default WebDevelopmentSection;
