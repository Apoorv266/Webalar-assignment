import React from 'react'
import Banner from './Banner'
import CompanyCard from './CompanyCard'
import Footer from './Footer'
import Navbar from './Navbar'

import { Work } from './Work'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <CompanyCard/>
    <Work/>
    <Footer/>
    </>
  )
}

export default Home