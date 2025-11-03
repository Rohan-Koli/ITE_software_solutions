import { useForm } from "@formspree/react";

export default function GetInTouch() {
  const [state, handleSubmit] = useForm("xeopwpnn");

 

  return (
    <section className="getin-touch-section space-bottom">
      <div className="container mx-auto px-4">
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
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="common-btn box-style p2-bg inline-flex justify-center items-center gap-2 fw-500 white-clr py-3 px-6 rounded-full hover:opacity-90 transition-opacity"
                >
                  Send Message
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
}
