



import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonial from '../components/Testimonial'
import GenerateButton from '../components/GenerateButton'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] text-white min-h-screen">
      <Header />
      <div className="px-4 sm:px-10 md:px-16 lg:px-20">
        <Steps />
        <Description />
        <Testimonial />
        <GenerateButton />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
