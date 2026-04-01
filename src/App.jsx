
import { Slide, ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Premium from './Components/PremiumSection/Premium'
import HeroSection from './Components/HeroSection/HeroSection'
import RatingSection from './Components/Rating/RatingSection'
import { useState } from 'react'
import GetStarted from './Components/GetStarted/GetStarted'
import TransparentPricing from './Components/TransparentPricing/TransparentPricing'
import ReadySection from './Components/RedaySection/ReadySection'
import FooterSection from './Components/FooterStection/FooterSection'

function App() {
     const [cart,setCart]=useState([])


  return (
    <>
      <Navbar cart={cart}></Navbar>
      <HeroSection></HeroSection>
      <RatingSection></RatingSection>
      <Premium cart={cart} setCart={setCart}></Premium>
      <GetStarted></GetStarted>
      <TransparentPricing></TransparentPricing>
      <ReadySection></ReadySection>
      <FooterSection></FooterSection>
      <ToastContainer transition={Slide}></ToastContainer>
    </>
  )
}

export default App
