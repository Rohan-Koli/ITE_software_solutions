import React from "react";

const BlockchainDevelopmentSection = () => {
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
                  alt="Blockchain Development"
                  className="w-full rounded-4"
                />
              </div>

              <div className="mb-4 pb-2 wow fadeInUp" data-wow-delay="0.2s">
                <h2 className="black fs-50 mb-3 wow fadeInUp">
                  Blockchain Development Services
                </h2>
                <p
                  className="pra fs-six mb-3 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  Our <strong>Blockchain Development Services</strong> empower
                  businesses to build secure, transparent, and decentralized
                  digital ecosystems. From smart contract creation to custom
                  blockchain solutions, we help you harness the power of
                  distributed ledger technology to improve trust, automation,
                  and efficiency across operations.
                </p>
                <p className="pra fs-six wow fadeInUp" data-wow-delay=".4s">
                  Our blockchain experts specialize in platforms like{" "}
                  <strong>Ethereum</strong>, <strong>Hyperledger</strong>,{" "}
                  <strong>Polygon</strong>, and <strong>Solana</strong>, offering
                  solutions for fintech, supply chain, real estate, and more.
                  Whether you’re launching a decentralized app (DApp) or
                  developing enterprise-grade blockchain infrastructure, we
                  ensure performance, scalability, and reliability at every step.
                </p>
              </div>

              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <h3 className="black mb-4 wow fadeInUp">
                  Why Choose Our Blockchain Development Services
                </h3>
                <div className="flex flex-wrap justify-between gap-3 mb-4">
                  <ul className="grid gap-2">
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Secure and
                      transparent blockchain architecture
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Smart
                      contract design, auditing, and deployment
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Expertise
                      in private and public blockchain networks
                    </li>
                  </ul>
                  <ul className="grid gap-2">
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Seamless
                      DApp and token development
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> End-to-end
                      blockchain integration
                    </li>
                    <li className="flex gap-2 items-center fs-seven pra">
                      <i className="fa-solid fa-angles-right pra"></i> Ongoing
                      maintenance and blockchain upgrades
                    </li>
                  </ul>
                </div>
                <p className="pra fs-six">
                  We blend innovation with security to deliver blockchain
                  solutions that drive trust and automation. Our approach ensures
                  your business is ready for the decentralized future.
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
                  Related Blockchain Services
                </h3>
                <ul className="cates">
                  {[
                    "Smart Contract Development",
                    "Decentralized App (DApp) Development",
                    "Tokenization Services",
                    "Private Blockchain Solutions",
                    "Blockchain Consulting",
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
                  Need a Blockchain Solution? Let’s Talk!
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
                  { name: "Blockchain Services Brochure", size: "(1.5Mb)" },
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
              title: "Smart Contract Development",
              icon: "blockchain-icon1.png",
              delay: ".4s",
              desc: "We develop secure, auditable, and efficient smart contracts to automate business operations and ensure trustless transactions.",
            },
            {
              id: "02",
              title: "DApp Development",
              icon: "blockchain-icon2.png",
              delay: ".6s",
              desc: "Build decentralized applications (DApps) powered by blockchain to deliver transparency, scalability, and user ownership.",
            },
            {
              id: "03",
              title: "Token & NFT Development",
              icon: "blockchain-icon3.png",
              delay: ".7s",
              desc: "Launch your own tokens or NFTs with custom standards and utilities across Ethereum, Binance Smart Chain, and Polygon.",
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
            Our blockchain development team builds decentralized systems that
            ensure transparency, enhance security, and reduce operational costs.
            From token creation to full-scale blockchain integration, we deliver
            solutions that redefine how businesses transact and trust.
          </p>

          <div className="service-thumbnail grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 xl:gap-4">
            <div className="thumb wow fadeInUp rounded-xl" data-wow-delay=".3s">
              <img
                src="/assets/img/tech-service/service-thumbnail3.png"
                alt="Smart Contract"
                className="w-full rounded-xl"
              />
            </div>

            <div className="thumb wow fadeInUp rounded-xl" data-wow-delay=".3s">
              <img
                src="/assets/img/tech-service/service-thumbnail3.png"
                alt="DApp Development"
                className="w-full rounded-xl"
              />
            </div>

            <div className="thumb wow fadeInUp rounded-xl" data-wow-delay=".3s">
              <img
                src="/assets/img/tech-service/service-thumbnail3.png"
                alt="Tokenization"
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

export default BlockchainDevelopmentSection;
