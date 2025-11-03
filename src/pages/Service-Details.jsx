import React from 'react'
import Breadcrumb from '../components/about/Breadcrumb.jsx'
function ServiceDetails() {
    const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "Service Details", href: "/service-details" }
  ];
  return (
    <>
    <Breadcrumb 
  title="Service Details" 
  breadcrumbItems={breadcrumbItems} 
/>
    </>
  )
}

export default ServiceDetails