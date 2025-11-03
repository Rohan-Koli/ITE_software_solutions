import React from 'react';
import { useForm } from "@formspree/react";
import { p } from 'framer-motion/client';
const ContactSection = () => {
  const [state, handleSubmit] = useForm("xeopwpnn");


  const contactInfo = [
    {
      icon: "fa-solid fa-phone",
      label: "Call Us any Time",
      value: "+91 7447872873",
      href: "tel:+91 7447872873"
    },
    {
      icon: "fa-solid fa-envelope",
      label: "Sent A Email",
      value: "info@itesoftwaresolutions.com  hr@itesoftwaresolutions.com",
      href: "mailto:debbie.baker@example.com"
    },
    {
      icon: "fa-solid fa-location-dot",
      label: "Our Office Address",
      value: "MILO, Off FC Rd, Ganeshwadi, Deccan Gymkhana, Pune,Maharashtra 411004",
      href: "https://maps.google.com"
    }
  ];

  return (
    <section className="contact-section section-padding py-16">
      <div className="container mx-auto px-4">
        <div className="space-bottom mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 contact-info-area">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-span-1">
                <div
                  className="contact-info flex items-center gap-3 xl:gap-4 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="icon text-xl text-blue-600">
                    <i className={info.icon}></i>
                  </div>
                  <div className="cont">
                    <a
                      href={info.href}
                      className="black-clr fw-500 fs-seven hover:text-blue-600 transition-colors"
                    >
                      <span className="pra fs-seven block fw-normal">{info.label}</span>
                      {info.value}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="col-span-1">
            <form
              onSubmit={handleSubmit}
              className="get-inform h-full style4 get-inform-main white-bg border border-gray-200 rounded-xl p-6 shadow-sm"
            >
              <h3 className="black-clr fw-500 visible-slowly-right mb-3 text-xl font-semibold">
                Feel Free To Write
              </h3>

              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="phone"
                  required
                  pattern="[0-9]{10}"         // allows only digits (0–9) with exactly 10 numbers
                  // minLength="10"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  rows="3"
                  required
                  placeholder="Message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="common-btn box-style p2-bg inline-flex justify-center items-center gap-2 fw-500 white-clr py-3 px-6 rounded-full hover:opacity-90 transition-opacity"
                >
                  Submit
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
                {state.succeeded && <p className='text-3xl mx-3 my-1.5 text-green-600 font-semibold'>Message sent!</p>}
              </div>
            </form>
          </div>

          {/* Contact Image */}
          <div className="col-span-1">
            <div className="rounded-xl my-auto overflow-hidden shadow-md">
              <img
                src="/assets/img/contact/contact-thumb.png"
                alt="img"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
