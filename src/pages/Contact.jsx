import React from 'react'
import Breadcrumb from '../components/about/Breadcrumb.jsx'
import ContactSection from '../components/contact/ContactSection.jsx'
import MapArea from '../components/contact/MapArea.jsx'
function Contact() {
  const breadcrumbItems = [
  { text: "Home", href: "/" },
  { text: "Contact Us", href: "/contact" }
];

  return (
    <>
    <Breadcrumb 
  title="Contact Us" 
  breadcrumbItems={breadcrumbItems} 
/>
<ContactSection />
<MapArea />
    </>
  )
}

export default Contact