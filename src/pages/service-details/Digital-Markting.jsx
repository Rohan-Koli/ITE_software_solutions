import React from 'react'
import Breadcrumb from '../../components/about/Breadcrumb'
import DigitalMarktingSection from '../../components/services/Digital-markting-section'
function DigitalMarkting() {
  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/service" },
    { text: "Digital Marketing", href: "/service-details/digital-marketing" }
  ];
  return (
    <>
    <Breadcrumb 
  title="Digital Marketing" 
  breadcrumbItems={breadcrumbItems} 
/>
<DigitalMarktingSection />
    </>
  )
}

export default DigitalMarkting