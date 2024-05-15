import React from "react";
import { PinContainer } from "./ui/3d-pin";

import Title from "./Title";

export function AnimatedPinDemo() {
  const animatedPinDemo = [
    {
      title: "Amazon Web Scraper",
      Link: "https://github.com/Syren0914/Amazon-Product-Scraper",
      cover: "/web-scraper.png",
      description:"This Python script is designed to scrape product details from Amazon.com using Playwright and Selectolax libraries.",
      background: "bg-white",
    },
    {
      title: "Three.JS Apple webpage",
      Link: "https://github.com/Syren0914/Three.JS-Apple-webpage",
      cover: "/threejs.png",
      description:"This project is a responsive website built using Three.js framework for 3D rendering and React for creating interactive user interfaces.",
      background: "bg-white",
    },
    
    {
      title: "Crypto Price Alert",
      Link: "https://github.com/Syren0914/Crypto-Price-alert",
      cover: "/Crypto-price-alert.png",
      description:"Automated tool for cryptocurrency enthusiasts to monitor prices and receive notifications.",
      background: "bg-white",
    },
    {
      title: "Restaurant website (Lumthai)",
      Link: "https://Lumthai.com",
      description:"Discover authentic Thai flavors online with our beautifully crafted website.",
      cover: "/project2.png",
      background: "bg-white",
    },
    {
      title: "Restaurant website (Thailove)",
      description:"Discover authentic Thai flavors online with our beautifully crafted website.",
      Link: "https://thailove-afterwork.com",
      cover: "/project3.png",
      background: "bg-white",
    },
    {
      title: "Restaurant website (ThaiPapaya)",
      description:"Order authentic Thai cuisine online with seamless GloriaFood API integration.",
      Link: "https://thaipapayava.com",
      cover: "/project1.png",
      background: "bg-white",
    },
    // Add other projects here
  ];
  
  return (
    <>
      <Title
        text="Projects"
        className="mt-10 flex flex-col justify-center items-center rotate-[6deg]"
      />

      <div className="gap-y-20 mb-32 mt-32 w-full flex flex-wrap items-center justify-center">
        {animatedPinDemo.map((project, index) => (
          <PinContainer key={index}>
            <a target="_blank" href={project.Link} className="block">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[21rem] h-[21rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">{project.description}</span>
                </div>
                <div className="mt-4 object-contain">
                  <img src={project.cover} className="rounded-lg" alt="" />
                </div>
              </div>
            </a>
          </PinContainer>
        ))}
      </div>
    </>
  );
}
