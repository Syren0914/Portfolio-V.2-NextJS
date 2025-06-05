'use client'
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Footer from './components/Footer'
import { AnimatedPinDemo } from './components/3D-pin'
import SplashCursor from '../Animations/SplashCursor/SplashCursor'
import Ballpit from '../Backgrounds/Ballpit/Ballpit'

export default function Page() {
  return (
    <div className='relative min-h-screen bg-black overflow-hidden text-white'>
      

    <SplashCursor />

      {/* Full-screen PixelTrail Background */}
      {/* <div className="fixed top-0 left-0 w-full h-full z-20">
        <PixelTrail
          gridSize={50}
          trailSize={0.1}
          maxAge={250}
          interpolate={5}
          color="#00d8ff"
          gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
        />
      </div> */}

      <div className='dark:bg-black bg-grid-white/[0.05] relative'>
        <div className='max-w-6xl mx-auto p-5'>
          <Navbar />
          <HeroSection />
        </div>
        <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full'></div>
      </div>

      <div className='max-w-7xl mx-auto p-5 mt-20 mb-42'>
        <Skills />
        <AnimatedPinDemo />
        <Footer />
        

      </div>
      <div className="relative w-full h-[300px] z-100">
          {/* <Ballpit
            count={50}
            gravity={0.7}
            friction={0.8}
            wallBounce={0.95}
            followCursor={true}
            ambientColor={16777215}
          /> */}
        </div>
    </div>
  )
}
