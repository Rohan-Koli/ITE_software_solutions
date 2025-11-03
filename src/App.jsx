import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Career from './pages/Career'
import Service from './pages/Service'
import Terms from './pages/Terms-conditions'
import Policy from './pages/Privacy-policy'
import Contact from './pages/Contact'
import ServiceDetails from './pages/Service-Details'
import WebDevelopment from './pages/service-details/Web-development'
import AppDevelopment from './pages/service-details/App-development'
import DigitalMarkting from './pages/service-details/Digital-Markting'
import Blockchain from './pages/service-details/Blockchain'
import SEO from './pages/service-details/SEO'
import CloudServices from './pages/service-details/Cloud-Services'
import PrivacyPolicy from './pages/Privacy-policy'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar />
    {/* <div className="mouse-follower">
            <span className="cursor-outline"></span>
            <span className="cursor-dot"></span>
        </div> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/career' element={<Career />} />
        <Route path='/service' element={<Service />} />
        <Route path='/terms-conditions' element={<Terms />} />
        <Route path='/privacy-policy' element={<Policy />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/service-details'  > */}
         <Route path='/service-details/web-development' element={<WebDevelopment />} />
         <Route path='/service-details/mobile-app-development' element={<AppDevelopment />} />
         <Route path='/service-details/digital-marketing' element={<DigitalMarkting />} />
         <Route path='/service-details/blockchain-development' element={<Blockchain />} />
         <Route path='/service-details/SEO' element={<SEO />} />
         <Route path='/service-details/cloud-services' element={<CloudServices />} />
         <Route path='/privacy-policy' element={<PrivacyPolicy />} />
         <Route path='/terms' element={<Terms />} />
        {/* </Route> */}
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
