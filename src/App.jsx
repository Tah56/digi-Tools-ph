
import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Premium from './Components/PremiumSection/Premium'
import HeroSection from './Components/HeroSection/HeroSection'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Premium></Premium>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
