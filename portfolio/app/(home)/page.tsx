'use client'
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Footer from './components/Footer'
import { AnimatedPinDemo } from './components/3D-pin'
import SplashCursor from '../Animations/SplashCursor/SplashCursor'
import Ballpit from '../Backgrounds/Ballpit/Ballpit'
import Squares from '../Backgrounds/Squares/Squares'
import { Snowfall } from "react-snowfall";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white">
      {/* SplashCursor Background Layer */}
      <div className="absolute inset-0 -z-9">
        <SplashCursor />
      <Snowfall  snowflakeCount={200}/>

      </div>

      {/* ===== Hero Section with Squares Background ===== */}
      <div className="relative z-10">
        {/* Background behind Hero only */}
        <div className="absolute inset-0 -z-10">
          <Squares 
            speed={0.5} 
            squareSize={40}
            direction="diagonal"
            borderColor="rgb(34,34,34)"
            hoverFillColor="#222"
          />
        </div>

        <div className="max-w-6xl mx-auto p-5">
          <Navbar />
          <HeroSection />
        </div>

        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full" />
      </div>

      {/* ===== Black Background for Rest of Page ===== */}
      <div className="max-w-7xl mx-auto p-5 mt-20 mb-42 bg-black relative z-10">
        <Skills />
        <AnimatedPinDemo />
        <Footer />
      </div>

      {/* ===== Ballpit Section (optional) ===== */}
      <div className="relative w-full h-[50px] z-10">
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
