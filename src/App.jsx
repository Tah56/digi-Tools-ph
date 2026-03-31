
import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Premium from './Components/PremiumSection/Premium'
import HeroSection from './Components/HeroSection/HeroSection'
import RatingSection from './Components/Rating/RatingSection'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <RatingSection></RatingSection>
      <Premium></Premium>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
