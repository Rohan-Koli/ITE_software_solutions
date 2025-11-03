import React from 'react'
import Breadcrumb from '../../components/about/Breadcrumb'
import WebDevelopmentSection from '../../components/services/Web-development-section'
function WebDevelopment() {
  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/service" },
    { text: "Web Development", href: "/service-details/web-development" }
  ];
  return (  
    <>
    <Breadcrumb 
  title="Web Development Services" 
  breadcrumbItems={breadcrumbItems} 
/>
<WebDevelopmentSection />
    </>
  )
}

export default WebDevelopment