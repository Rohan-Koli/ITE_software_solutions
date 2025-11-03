import React from 'react'
import Breadcrumb from '../../components/about/Breadcrumb'
import AppDevelopmentSection from '../../components/services/App-development-section'
function AppDevelopment() {
  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/service" },
    { text: "App Development", href: "/service-details/mobile-app-development" }
  ];
  return (
    <>
    <Breadcrumb 
  title="App Development Services" 
  breadcrumbItems={breadcrumbItems} 
/>
<AppDevelopmentSection />
    </>
  )
}

export default AppDevelopment