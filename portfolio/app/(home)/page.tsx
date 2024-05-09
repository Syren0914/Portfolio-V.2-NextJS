import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

export default function page() {
  return (
    <div className='min-h-screen bg-black'>
      <div className='max-w-6xl mx-auto p-5 '>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
      </div>
    </div>
  )
}
