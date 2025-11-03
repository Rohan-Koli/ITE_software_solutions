import React from 'react'
import HeroSection from '../components/home/Hero.jsx'
import Services from '../components/home/Services.jsx'
import Achivements from '../components/home/Achivements.jsx' 
import Testimonials from '../components/home/Testimonials.jsx'  
import Brands2 from '../components/common/Brands2.jsx'
import Techstack from '../components/common/Techstack.jsx'
import Hallmarks from '../components/home/Hallmarks.jsx'
import GetInTouch from '../components/home/GetInTouch.jsx'
import Facts from '../components/home/Facts.jsx'  
function Home() {
  return (
    <>
    <HeroSection />
    <Services />
    <Brands2 />
    <Achivements />
    <Facts />
    <Hallmarks />
    <Techstack />
    <Testimonials />
    <GetInTouch />
    </>
  )
}

export default Home