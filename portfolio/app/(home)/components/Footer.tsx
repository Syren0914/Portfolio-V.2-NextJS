import React from 'react'
import Title from './Title'
import Navbar from './Navbar'

export default function Footer() {
  return (
    <div className='mt-10 border-t'>
        {/* <Title text="Contact Me" className='flex flex-col justify-center items-center '></Title> */}
        <Navbar className='flex-col gap-5'></Navbar>

    </div>
  )
}
