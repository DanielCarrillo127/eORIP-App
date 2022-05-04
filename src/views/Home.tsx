import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Coments from '../components/Coments'
import Footer from '../components/Footer'
import Information from '../components/Information'
import Nav from '../components/Nav'
import Services from '../components/Services'
import SocialMedia from '../components/SocialMedia'

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