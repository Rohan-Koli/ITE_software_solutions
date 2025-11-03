import React from "react";

const JobListing = () => {
  const jobList = [
    {
      id: 1,
      img: "assets/img/icon/empower-icon1.png",
      serial: "01",
      title: "Frontend Developer",
      description:
        "Looking for a skilled Frontend Developer experienced in React.js and Tailwind CSS to build responsive and interactive user interfaces.",
      link: "/jobs/frontend-developer",
      delay: ".4s",
    },
    {
      id: 2,
      img: "assets/img/icon/empower-icon2.png",
      serial: "02",
      title: "Backend Engineer",
      description:
        "Join our backend team to design and develop RESTful APIs using Node.js and Express, with strong knowledge of MongoDB or MySQL.",
      link: "/jobs/backend-engineer",
      delay: ".6s",
    },
    {
      id: 3,
      img: "assets/img/icon/empower-icon3.png",
      serial: "03",
      title: "Full Stack Developer",
      description:
        "We’re hiring a Full Stack Developer proficient in React.js, Node.js, and database integration to build scalable web applications.",
      link: "/jobs/fullstack-developer",
      delay: ".7s",
    },
  ];

  return (
    <section className="empower-section !py-10 fix">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-12 empower-heading">
          <h2
            className="wow fadeInUp sm:mb-3 mb-2 !font-semibold !text-3xl md:!text-4xl text-center black visible-slowly-right"
            data-wow-delay=".3s"
          >
            Join Our Team <br /> Explore Opportunities at ITE Software Solutions
          </h2>
          <p className="pra wow fadeInUp" data-wow-delay=".4s">
            We work on problems that are interesting and where we can make a
            difference. We are looking for people who can work hard, be bold,
            grab opportunities, and deliver results.
          </p>
        </div>

        {/* Dynamic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobList.map((item) => (
            <div
              key={item.id}
              className="empower-item white-bg border rounded-xl wow fadeInUp"
              data-wow-delay={item.delay}
            >
              <div className="border-b pb-4 flex items-center justify-start mb-4">
                <span className="serial">{item.serial}</span>
              </div>

              <h3 className="lg:mb-3 mb-2">
                <a href={item.link} className="black-clr font-medium">
                  {item.title}
                </a>
              </h3>

              <p className="pra text-sm lg:mb-4 mb-3 lg:pb-1">
                {item.description}
              </p>

              <a
                href="/contact"
                className="arrows read-more-btn text-xs font-semibold black-clr inline-flex items-center gap-1"
              >
                Read More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListing;
