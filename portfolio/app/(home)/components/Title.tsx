import React from 'react'

export default function Title({text,className}:{text:string,className?:string}) {
  return (
    <div className={className}>
            <h1 className="font-bold text-3xl group-hover:text-green-400 transition-all duration-300">
              {text}
            </h1>
            <div className="w-40 h-2 rounded-full bg-green-500 transition-all group-hover:translate-x-5"></div>
            <div className="w-40 h-2 rounded-full bg-indigo-500 transition-all translate-x-2 group-hover:-translate-x-5"></div>
    </div>
    
  )
}

