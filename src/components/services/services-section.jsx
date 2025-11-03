import { NavLink } from "react-router-dom";

const WorkingSection = () => {
  // Arrow SVG component to avoid repetition
  const ArrowIcon = () => (
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
  );

  const services = [
  {
    id: "01",
    title: "Web Development Services",
    link:"/service-details/web-development",
    description:
      "We build responsive websites using modern technologies like React and Tailwind. Fast, scalable, and SEO-friendly solutions.",
  },
  {
    id: "02",
    title: "App Development Services",
    link:"/service-details/mobile-app-development",
    description:
      "Creating user-friendly mobile apps for iOS and Android. From concept to deployment with quality and performance in mind.",
  },
  {
    id: "03",
    title: "Blockchain Development",
    link:"/service-details/blockchain-development",
    description:
      "Developing secure decentralized applications and smart contracts. Ideal for fintech and supply chain projects.",
  },
  {
    id: "04",
    title: "Cloud Consulting",
    link:"/service-details/cloud-services",
    description:
      "Helping you migrate and optimize cloud infrastructure. Ensure scalability, security, and cost efficiency.",
  },
  {
    id: "05",
    title: "Search Engine Optimization",
    link:"/service-details/SEO",
    description:
      "Improve website visibility and rankings. Use on-page, off-page, and technical SEO strategies to drive traffic.",
  },
  {
    id: "06",
    title: "Digital Marketing",
    link:"/service-details/digital-marketing",
    description:
      "Engage your audience with social media, PPC campaigns, and content strategies. Maximize brand awareness and ROI.",
  },
];



  return (
    <section className="working-section6 space-top fix">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(service => (
            <div key={service.id}>
              <div className="worke-items white-bg">
                <div className="step-area flex items-center mb-4 pb-1">
                  <span className="block font-semibold fs-seven texts">
                    Step
                  </span>
                  <span className="serial">{service.id}</span>
                </div>
                <h3 className="mb-3 lg:mb-4">
                  <a href="service-details.html" className="black-clr">
                    {service.title}
                  </a>
                </h3>
                <p className="pra fs-eight mb-3 xl:mb-4 pb-2">
                  {service.description}
                </p>
                <NavLink to={service.link} className="rarrow d-center cmn-bg rounded-full py-3">
                  <ArrowIcon />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;