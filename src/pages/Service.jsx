import React from 'react'
import Breadcrumb from '../components/about/Breadcrumb.jsx'
import ServiceSection from '../components/services/services-section.jsx'
import FAQSection from '../components/FAQ.jsx';
function Service() {
  const breadcrumbItems = [
  { text: "Home", href: "/" },
  { text: "Services", href: "/services" }
];
  return (
    <>
    <Breadcrumb 
  title="Services" 
  breadcrumbItems={breadcrumbItems} 
/>
<ServiceSection />
<FAQSection />
    </>
  )
}

export default Service