"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from './ui/card-hover-effect'
import { SiAmazonaws, SiCisco, SiCoursera, SiGoogle, SiMeta, SiUdemy, SiMicrosoft } from 'react-icons/si'

export default function Certifications() {
    const certifications = [
        {
            text: "AWS Certified",
            Icon: SiAmazonaws,
            // imageUrl: "/parcel.png" 
        },
        {
            text: "Meta Frontend",
            Icon: SiMeta
        },
        {
            text: "Google Cloud",
            Icon: SiGoogle
        },
        {
            text: "Cisco Certified",
            Icon: SiCisco
        },
        {
            text: "Microsoft Azure",
            Icon: SiMicrosoft
        },
        {
            text: "Coursera",
            Icon: SiCoursera
        }
    ]

  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title text="Certifications" className='flex flex-col justify-center items-center rotate-[6deg]'></Title>
        <HoverEffect items={certifications} />
    </div>
  )
}
