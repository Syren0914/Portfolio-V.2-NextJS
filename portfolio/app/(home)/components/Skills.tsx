"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from './ui/card-hover-effect'
import { SiGit, SiJavascript, SiKotlin, SiNextdotjs, SiPython, SiReact, SiSwift, SiTailwindcss } from 'react-icons/si'
import { text } from 'stream/consumers'

export default function Skills() {
    const skills = [
        {
            text:"React",
            Icon: SiReact
        },
        {
            text:"Next.JS",
            Icon:SiNextdotjs
        },
        {
            text:"Tailwind",
            Icon:SiTailwindcss
        },
        {
            text:"Python",
            Icon:SiPython

        },
        {
            text:"Javascript",
            Icon:SiJavascript
        },
        {
            text:"Git",
            Icon:SiGit
        },
        {
            text:"Kotlin",
            Icon:SiKotlin
        },
        {
            text:"Swift",
            Icon:SiSwift
        }

    ]

  return (
    <div className='max-w-5xl mx-auto px-8'>
        
        <Title text="Skills" className='flex flex-col justify-center items-center -rotate-[6deg]'></Title>
        <HoverEffect items={skills}>

        </HoverEffect>
        
    </div>
    
  )
}

