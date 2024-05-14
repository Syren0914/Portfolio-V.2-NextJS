import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'

import Footer from './components/Footer'
import { AnimatedPinDemo } from './components/3D-pin'
import { SparklesCore } from './components/ui/sparkles'
import { SparklesPreview } from './components/Sparkling'






export default function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative'>
        <div className='max-w-6xl mx-auto p-5 '>
        
          <Navbar></Navbar>
          <HeroSection></HeroSection>
          
          
        </div>
        <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full'></div>
      </div>
      
      
        <div className='max-w-7xl mx-auto p-5 mt-20 mb-42 '>
          <Skills></Skills>
          
          
          <AnimatedPinDemo></AnimatedPinDemo>
          <Footer></Footer>
          
          
        </div>
        {/* <HeroParallaxDemo ></HeroParallaxDemo> */}
        
    </div>
  )
}
