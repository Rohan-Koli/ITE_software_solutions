import React from "react";
import Achivements from "../components/home/Achivements";
import Timeline from "../components/about/Timeline";
import Testimonials from "../components/home/Testimonials.jsx";
import Breadcrumb from "../components/about/Breadcrumb.jsx";
import Brands from "../components/common/Brands2.jsx";
function About() {
  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
  ];

  return (
    <>
      <Breadcrumb title="About Us" breadcrumbItems={breadcrumbItems} />

    
      <Achivements />
      <Brands />
      <Timeline />
      <Testimonials />
    </>
  );
}

export default About;
