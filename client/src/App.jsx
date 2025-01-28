
import './App.css'
import Hero from './Components/Hero/Hero'
import React from 'react'
import ImageSlider from './Components/ImageSlider/ImageSlider'
import TierCard from './Components/TierCard/TierCard'
import MostLovedBrands from './Components/MostLovedBrands/MostLovedBrands'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
function App() {


  return (
    <>
    <Navbar />
    <ImageSlider />
    <Hero />
    <TierCard />
    <MostLovedBrands />
    <Footer />
    </>
  )
}

export default App
