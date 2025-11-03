import React from 'react'
import Breadcrumb from '../../components/about/Breadcrumb'
import SEOSection from '../../components/services/SEO-section'
function SEO() {
  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/service" },
    { text: "Search Engine Optimization", href: "/service-details/SEO" }
  ];
  return (
    <>
    <Breadcrumb 
  title="Search Engine Optimization Services" 
  breadcrumbItems={breadcrumbItems} 
/>
<SEOSection />  
    </>
  )
}

export default SEO