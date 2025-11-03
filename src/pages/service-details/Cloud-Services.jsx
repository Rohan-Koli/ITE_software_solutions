import React from 'react'
import Breadcrumb from '../../components/about/Breadcrumb'
import CloudeServiceSection from '../../components/services/Cloude-service-section'
function CloudServices() {
  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/service" },
    { text: "Azure Cloud Consulting", href: "/service-details/cloud-services" }
  ];
  return (
    <>
    <Breadcrumb 
  title="Azure Cloud Consulting Services" 
  breadcrumbItems={breadcrumbItems} 
/>  
<CloudeServiceSection />
    </>
  )
}

export default CloudServices