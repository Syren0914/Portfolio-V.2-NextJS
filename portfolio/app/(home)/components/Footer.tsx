import React from 'react'
import Title from './Title'
import Navbar from './Navbar'
import Ballpit from '@/app/Backgrounds/Ballpit/Ballpit'



export default function Footer() {
  return (<div className='-z-10'>

  
    <div className='mt-10 border-t'>
        <Title text="Contact Me" className=' mt-10 flex flex-col justify-center items-center z-10'></Title>
        
        <Navbar className='flex-col gap-5'></Navbar>
        


    </div>
    
    </div>
  )
}
