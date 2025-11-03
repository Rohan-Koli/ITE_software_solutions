import React from 'react'
import Breadcrumb from '../../components/about/Breadcrumb'
import BlockchainDevelopmentSection from '../../components/services/Blockchain-development-section' 
function Blockchain() {
  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/service" },
    { text: "Blockchain Development", href: "/service-details/blockchain-development" }
  ];
  return (
    <>
    <Breadcrumb 
  title="Blockchain Development Services" 
  breadcrumbItems={breadcrumbItems} 
/>
<BlockchainDevelopmentSection />
    </>
  )
}

export default Blockchain