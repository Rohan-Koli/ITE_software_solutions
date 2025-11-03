import React from "react";

const GetInTouchSection = () => {
  return (
    <section className="getin-touch-section space-bottom">
      <div className="container mx-auto px-4">
        <div className="getin-wrappper rounded-2xl flex flex-wrap items-center">
          <form
            action="#"
            className="row grid grid-cols-1 md:grid-cols-2 gap-4 get-inform w-full md:w-1/2 p-4"
          >
            <h3 className="black-clr visible-slowly-right mb-4 font-semibold text-xl md:col-span-2">
              Get In Touch
            </h3>

            <div className="col-lg-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-lg-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-lg-6">
              <input
                type="text"
                placeholder="Your Number"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-lg-6">
              <select
                name="choose"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="1">Choose a Option</option>
                <option value="2">Choose a Option</option>
                <option value="3">Choose a Option</option>
                <option value="4">Choose a Option</option>
              </select>
            </div>

            <div className="col-lg-12 md:col-span-2">
              <textarea
                name="write"
                rows="4"
                placeholder="Message here..."
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="col-lg-12 md:col-span-2">
              <button
                type="button"
                className="common-btn box-style p1-bg inline-flex justify-center items-center gap-2 font-medium text-white py-3 overflow-hidden rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300"
              >
                Sent Now
                <i className="fa-solid fa-arrow-right-long ml-1"></i>
              </button>
            </div>
          </form>

          <div className="thumb-getin w-full md:w-1/2">
            <img
              src="assets/img/contact/getin-thumb.png"
              alt="img"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
