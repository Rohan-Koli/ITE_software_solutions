import React from "react";
import Breadcrumb from "../components/about/Breadcrumb.jsx";
import JobListing from "../components/careers/Job-listing.jsx";
import GetInTouchSection from  "../components/home/GetInTouch.jsx"
function Career() {
  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "Career", href: "/career" },
  ];
  return (
    <>
      <Breadcrumb title="Career" breadcrumbItems={breadcrumbItems} />
      <JobListing /> 
      <GetInTouchSection />


    </>
  );
}

export default Career;
