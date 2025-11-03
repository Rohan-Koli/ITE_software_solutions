import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaPhone,
  FaLocationDot,
  FaAnglesRight,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-section style2 z-1 relative fix">
      <div className="container">
        <div className="common-wrapper z-1 relative cmn-bg rounded-t-4 pt-80 px-xxl-5 px-4">
          <div className="footer-widgets-wrapper">
            <div className="social-adjustment flex justify-between items-center">
              <div
                className="single-footer-widget footer2-form wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="widget-head">
                  <a href="/">
                    <img src="/assets/img/logo/logo-dark.png" alt="logo-img" />
                  </a>
                </div>
                <div className="footer-content">
                  <p className="pra fs-eight mb-30 block">
                    Information Technology is a broad field the main man
                    encompassing the design Info Technology is a broad field the
                    main man
                  </p>
                  {/* <form
                    action="#"
                    className="form-cmn-style white-bg style1 cmn-border rounded-5"
                  >
                    <input type="text" placeholder="Enter you E-mail" />
                    <button
                      type="button"
                      className="common-btn white-clr text-nowrap box-style first-box inline-flex justify-center items-center fs-seven gap-xxl-2 gap-2 fs-seven overflow-hidden p2-bg rounded-5"
                    >
                      Subscribe
                    </button>
                  </form> */}
                </div>
              </div>
              <div className="adjust-lin"></div>
              <div className="footer2-social">
                <a href="#" className="emails !text-xl md:!text-3xl lg:!text-4xl">
                  info@itesoftwaresolutions.com
                </a>
                <div className="social-wrapper flex flex-wrap items-center gap-xxl-3 gap-2">
                  <a href="#" className="rounded-full cmn-bg">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="rounded-full cmn-bg">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3881 7.49266L16.3338 0.825195H14.9249L9.76215 6.61446L5.63871 0.825195H0.882812L7.11826 9.57959L0.882812 16.5715H2.29185L7.7438 10.4578L12.0985 16.5715H16.8544L10.3877 7.49266H10.3881ZM8.45818 9.65672L7.8264 8.78498L2.79954 1.84844H4.96374L9.02047 7.44645L9.65225 8.31819L14.9255 15.5947H12.7613L8.45818 9.65705V9.65672Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/ite-software-solutions-pvt-ltd/" className="rounded-full cmn-bg">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="rounded-full cmn-bg">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-widgets-wrapper footer-widget-wrapper2 pb-80 border-t">
            <div
              className="single-footer-widget wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="widget-head">
                <h3 className="black-clr fw-500">Contact</h3>
              </div>
              <ul className="list-area grid gap-md-4 gap-3">
                <li className="flex items-center gap-xl-3 gap-2">
                  <div className="icon d-center cmn-bg w-40 rounded-full">
                    <i className="fa-solid fa-location-dot black-clr"></i>
                  </div>
                  <div className="block !text-xs md:!text-base fs-seven black-clr fw-500">
                    <span className="fs-eight  !mx-2  pra block">Address:</span>
                    MILO, Off FC Rd, Ganeshwadi, <br/> Deccan Gymkhana, Pune,<br/>
                    Maharashtra 411004
                  </div>
                </li>
                <li className="flex items-center gap-xl-3 gap-2">
                  <div className="icon d-center cmn-bg w-40 rounded-full">
                    <i className="fa-solid fa-phone black-clr"></i>
                  </div>
                  <div className="block !text-xs md:!text-base fs-seven black-clr fw-500">
                    <span className="fs-eight !mx-2 pra block">
                      Phone Number:
                    </span>
                    +91 7447872873
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="single-footer-widget wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="widget-head">
                <h3 className="black-clr fw-500">Quick links</h3>
              </div>
              <ul className="list-linkes flex flex-col gap-3">
                <li>
                  <a
                    href="/"
                    className="flex items-center gap-2 pra-clr fs-seven"
                  >
                    <i className="fa-solid fa-angles-right black-clr fs-eight"></i>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/service"
                    className="flex items-center gap-2 pra-clr fs-seven"
                  >
                    <i className="fa-solid fa-angles-right black-clr fs-eight"></i>
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="flex items-center gap-2 pra-clr fs-seven"
                  >
                    <i className="fa-solid fa-angles-right black-clr fs-eight"></i>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/career"
                    className="flex items-center gap-2 pra-clr fs-seven"
                  >
                    <i className="fa-solid fa-angles-right black-clr fs-eight"></i>
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="flex items-center gap-2 pra-clr fs-seven"
                  >
                    <i className="fa-solid fa-angles-right black-clr fs-eight"></i>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="single-footer-widget wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="widget-head">
                <h3 className="black-clr fw-500">Service</h3>
              </div>
              <ul className="list-linkes flex flex-col gap-3">
                <li>
                  <a
                    href="/service-details/web-development"
                    className="flex items-center gap-2 pra-clr fs-seven"
                  >
                    <i className="fa-solid fa-angles-right black-clr fs-eight"></i>
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="/service-details/mobile-app-development"
                    className="flex items-center gap-2 pra-clr fs-seven"
                  >
                    <i className="fa-solid fa-angles-right black-clr fs-eight"></i>
                    App Development
                  </a>
                </li>
                <li>
                  <a
                    href="/service-details/blockchain-development"
                    className="flex items-center gap-2 pra-clr fs-seven"
                  >
                    <i className="fa-solid fa-angles-right black-clr fs-eight"></i>
                    Blockchain Devlopment
                  </a>
                </li>
                <li>
                  <a
                    href="/service-details/cloud-services"
                    className="flex items-center gap-2 pra-clr fs-seven"
                  >
                    <i className="fa-solid fa-angles-right black-clr fs-eight"></i>
                    Claud Consulting
                  </a>
                </li>
                <li>
                  <a
                    href="/service-details/SEO"
                    className="flex items-center gap-2 pra-clr fs-seven"
                  >
                    <i className="fa-solid fa-angles-right black-clr fs-eight"></i>
                    Search Engine Optimization
                  </a>
                </li>
                <li>
                  <a
                    href="/service-details/digital-marketing"
                    className="flex items-center gap-2 pra-clr fs-seven"
                  >
                    <i className="fa-solid fa-angles-right black-clr fs-eight"></i>
                    Digital Markting
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom py-4 cmn-border-top flex flex-sm-nowrap flex-wrap items-center justify-between sm:justify-center gap-sm-0 gap-2">
            <p className="body-font fs-eight pra text-center">
              &copy;{" "}
              <a href="/" className="p1-clr">
                ITE Software Solutions Pvt Ltd.
              </a>{" "}
              2025 | All Rights Reserved
            </p>
            <ul className="condition flex flex-sm-nowrap flex-wrap justify-start sm:justify-center items-center gap-xxl-4 gap-xl-3 gap-sm-2 gap-1">
              <li>
                <a href="/terms" className="fs-eight pra p1-hover">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="fs-eight pra p1-hover">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/contact" className="fs-eight pra p1-hover">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Ele */}
          <img
            src="/assets/img/element/footer2-ele-top.png"
            alt="img"
            className="footer2-ele-top"
          />
          <img
            src="/assets/img/element/footer2-ele-bottom.png"
            alt="img"
            className="footer2-ele-bottom"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
