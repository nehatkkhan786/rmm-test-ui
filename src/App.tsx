import './App.css'
import { FAQ } from './components/faq'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { HowItWorks } from './components/how-it-works'
import { Partner } from './components/partners'
import Services from './components/services'
import { Testimonials } from './components/testimonials'
import TopBrands from './components/top-brands'
import WhyUs from './components/why-us'

function App() {


  return (
    <>
      <div>
        <Header />
        <Hero/>
        <TopBrands/>
        <HowItWorks/>
        <Services/>
        <WhyUs/>
        <Testimonials/>
      <FAQ/>
        <Partner/>
      <Footer/>

      </div>
       
    </>
  )
}

export default App
