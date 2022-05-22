import React from 'react'
import About from '../components/homeComponents/About'
import Banner from '../components/homeComponents/Banner'
import Coments from '../components/homeComponents/Coments'
import Footer from '../components/homeComponents/Footer'
import Information from '../components/homeComponents/Information'
import Nav from '../components/homeComponents/Nav'
import Services from '../components/homeComponents/Services'
import SocialMedia from '../components/homeComponents/SocialMedia'

function Home() {
  return (
    <div>
        <Nav/>
        <Banner/>
        <Services/>
        <About/>
        <Information/> 
        <SocialMedia/>
        <Coments/>
        <Footer/>
    </div>
  )
}

export default Home