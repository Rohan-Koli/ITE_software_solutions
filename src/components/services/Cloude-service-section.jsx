import React from "react";

const AzureCloudConsultingSection = () => {
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
                  alt="Azure Cloud Consulting"
                  className="w-full rounded-4"
                />
              </div>

              <div className="mb-4 pb-2 wow fadeInUp" data-wow-delay="0.2s">
                <h2 className="black fs-50 mb-3 wow fadeInUp">
                  Azure Cloud Consulting Services
                </h2>
                <p
                  className="pra fs-six mb-3 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  Our <strong>Azure Cloud Consulting Services</strong> empower
                  organizations to harness the full potential of Microsoft Azure.
                  From cloud strategy and architecture design to seamless
                  migration and optimization, we help you achieve agility,
                  scalability, and cost efficiency in the cloud.
                </p>
                <p className="pra fs-six wow fadeInUp" data-wow-delay=".4s">
                  Our certified Azure experts specialize in{" "}
                  <strong>cloud infrastructure setup</strong>,{" "}
                  <strong>DevOps automation</strong>,{" "}
                  <strong>data modernization</strong>, and{" "}
                  <strong>security compliance</strong>. We ensure your cloud
                  environment is optimized for performance, reliability, and
                  governance, tailored to your business objectives.
                </p>
              </div>

              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <h3 className="black mb-4 wow fadeInUp">
                  Why Choose Our Azure Cloud Consulting Services
                </h3>
                <div className="flex flex-wrap justify-between gap-3 mb-4">
                  <ul className="grid gap-2">
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> End-to-end
                      Azure migration strategy
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Cost
                      optimization & cloud governance
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Scalable
                      infrastructure deployment
                    </li>
                  </ul>
                  <ul className="grid gap-2">
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Azure
                      DevOps and CI/CD automation
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Enhanced
                      cloud security & compliance
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> 24/7
                      monitoring & support
                    </li>
                  </ul>
                </div>
                <p className="pra fs-six">
                  Whether you’re just beginning your cloud journey or looking to
                  optimize your Azure environment, our consulting approach ensures
                  a secure, scalable, and cost-effective transformation.
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
                  Related Azure Services
                </h3>
                <ul className="cates">
                  {[
                    "Azure Migration Services",
                    "Cloud Architecture Design",
                    "Azure DevOps Automation",
                    "Managed Cloud Operations",
                    "Security & Compliance Consulting",
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
                <h4 className="white-clr">
                  Need Azure Cloud Expertise? Let’s Talk!
                </h4>
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
                  { name: "Azure Services Brochure", size: "(1.8Mb)" },
                  { name: "Cloud Strategy Guide", size: "(2.3Mb)" },
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
              title: "Azure Cloud Migration",
              icon: "work-icon1.png",
              delay: ".4s",
              desc: "Seamlessly migrate your on-premises workloads to Microsoft Azure with minimal downtime and maximum efficiency.",
            },
            {
              id: "02",
              title: "Azure DevOps Consulting",
              icon: "work-icon3.png",
              delay: ".6s",
              desc: "Automate your CI/CD pipelines, infrastructure provisioning, and deployment processes using Azure DevOps best practices.",
            },
            {
              id: "03",
              title: "Cloud Security & Compliance",
              icon: "work-icon2.png",
              delay: ".7s",
              desc: "Ensure your cloud environment is secure and compliant with industry standards using advanced Azure security services.",
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
            Our Azure consultants help businesses design, migrate, and optimize
            workloads in the Microsoft cloud ecosystem. From hybrid environments
            to complete Azure-native solutions, we ensure reliability,
            scalability, and performance at every stage.
          </p>

          <div className="service-thumbnail grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 xl:gap-4">
            <div className="thumb wow fadeInUp rounded-xl" data-wow-delay=".3s">
              <img
                src="/assets/img/tech-service/service-thumbnail1.png"
                alt="Azure Migration"
                className="w-full rounded-xl"
              />
            </div>

            <div className="thumb wow fadeInUp rounded-xl" data-wow-delay=".3s">
              <img
                src="/assets/img/tech-service/service-thumbnail2.png"
                alt="Cloud Architecture"
                className="w-full rounded-xl"
              />
            </div>

            <div className="thumb wow fadeInUp rounded-xl" data-wow-delay=".3s">
              <img
                src="/assets/img/tech-service/service-thumbnail3.png"
                alt="Azure Security"
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

export default AzureCloudConsultingSection;
