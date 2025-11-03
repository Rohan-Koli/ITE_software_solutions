import React from "react";

const services = [
  {
    id: "01",
    title: "Web Development Services",
    link: "/service-details/web-development",
    description:
      "We build responsive websites using modern technologies like React and Tailwind. Fast, scalable, and SEO-friendly solutions.",
  },
  {
    id: "02",
    title: "App Development Services",
    link: "/service-details/mobile-app-development",
    description:
      "Creating user-friendly mobile apps for iOS and Android. From concept to deployment with quality and performance in mind.",
  },
  {
    id: "03",
    title: "Blockchain Development",
    link: "/service-details/blockchain-development",
    description:
      "Developing secure decentralized applications and smart contracts. Ideal for fintech and supply chain projects.",
  },
  {
    id: "04",
    title: "Cloud Consulting Services",
    link: "/service-details/cloud-consulting",
    description:
      "Helping businesses migrate, deploy, and manage applications in the cloud. We optimize infrastructure for scalability, cost, and performance using AWS, Azure, and Google Cloud.",
  },
  {
    id: "05",
    title: "Digital Marketing Services",
    link: "/service-details/digital-marketing",
    description:
      "Boost your brand’s online presence with our digital marketing solutions including social media marketing, PPC campaigns, and targeted advertising strategies.",
  },
  {
    id: "06",
    title: "SEO Optimization Services",
    link: "/service-details/seo-optimization",
    description:
      "Improve your website’s visibility and ranking on search engines through keyword research, on-page optimization, link building, and performance analytics.",
  },
];


const EmpowerSection = () => {
  return (
    <section className="worke-section bg-subtle  py-5">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-wrap sm:flex-nowrap gap-3 items-end justify-center sm:justify-between mb-12">
          <div className="cont">
            <span className="fs-seven text-center sm:text-left font-semibold p1-clr block mb-2 lg:mb-3 tracking-[3.2px]">
              Our Services
            </span>
            <h1
              className="wow fadeInUp text-center sm:text-left black visible-slowly-right"
              data-wow-delay=".3s"
            >
              Connecting People with <br /> IT Technology IT
            </h1>
          </div>

          <div
            className="array-button flex gap-3 xl:gap-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <button className="array-prev flex justify-center items-center">
              <i className="fa-solid fa-arrow-left p2-clr"></i>
            </button>
            <button className="array-next flex justify-center items-center">
              <i className="fa-solid fa-arrow-right p2-clr"></i>
            </button>
          </div>
        </div>

        {/* Swiper Section */}
        <div className="team-wrapper swiper">
          <div className="swiper-wrapper">
            {services.map((service, index) => (
              <div key={service.id} className="swiper-slide">
                <div className="worke-items white-bg p-6 rounded-lg">
                  <div className="step-area flex items-center mb-4 pb-1">
                    <span className="block font-semibold fs-seven texts">Step</span>
                    <span className="serial ml-2">{service.id}</span>
                  </div>

                  <h3 className="mb-3 lg:mb-4">
                    <a href={service.link} className="black-clr">
                      {service.title}
                    </a>
                  </h3>

                  <p className="pra fs-eight mb-3 xl:mb-4 pb-2">
                    {service.description}
                  </p>

                  <a
                    href={service.link}
                    className="rarrow flex justify-center items-center white-bg rounded-full py-3"
                  >
                    <svg
                      width="44"
                      height="24"
                      viewBox="0 0 44 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 10.5C0.671573 10.5 -7.24234e-08 11.1716 0 12C7.24234e-08 12.8284 0.671573 13.5 1.5 13.5L1.5 10.5ZM43.5607 13.0607C44.1464 12.4749 44.1464 11.5251 43.5607 10.9393L34.0147 1.3934C33.4289 0.807609 32.4792 0.807609 31.8934 1.3934C31.3076 1.97918 31.3076 2.92893 31.8934 3.51472L40.3787 12L31.8934 20.4853C31.3076 21.0711 31.3076 22.0208 31.8934 22.6066C32.4792 23.1924 33.4289 23.1924 34.0147 22.6066L43.5607 13.0607ZM1.5 13.5L42.5 13.5L42.5 10.5L1.5 10.5L1.5 13.5Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpowerSection;
