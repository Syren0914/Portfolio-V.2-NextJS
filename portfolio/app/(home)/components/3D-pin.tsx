import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import Title from "./Title";

export function AnimatedPinDemo() {
  const animatedPinDemo = [
    
    {
      title: "Sayed Sediq Portfolio",
      link: "https://sayedsediq.vercel.app",
      cover: "/sediq.png",
      description: "This project is a responsive portfolio website built using NEXT.js framework for introducing Sayed Sediq's beautifull art pieces using React and Shadcn library with interactive user interfaces.",
      background: "bg-white",
    },
    {
      title: "Three.JS Apple webpage",
      link: "https://iphone14threejs.netlify.app",
      cover: "/threejs.png",
      description: "This project is a responsive website built using Three.js framework for 3D rendering and React for creating interactive user interfaces.",
      background: "bg-white",
    },
    {
      title: "E-commerce website ",
      link: "https://thesrank.com",
      cover: "/shopify.png",
      description: "This project is a e-commerce store that is built using Shopify with Modern design creating interactive beautifull user interfaces.",
      background: "bg-white",
    },
    {
      title: "MindSpark Agency Webpage",
      link: "https://mindsparkagency.com",
      cover: "/agency.png",
      description: "This project is a responsive website built using NEXT.JS framework and Shadcn library to render React component for creating interactive beautifull user interfaces.",
      background: "bg-white",
    },
    {
      title: "Salon Website (Glow Organic)",
      link: "https://gloworganicsk.com",
      description: "Discover a aesthetic beautifully crafted salon website",
      cover: "/glowOrganic.png",
      background: "bg-white",
    },
    {
      title: "Amazon Web Scraper",
      link: "https://github.com/Syren0914/Amazon-Product-Scraper",
      cover: "/web-scraper.png",
      description: "This Python script is designed to scrape product details from Amazon.com using Playwright and Selectolax libraries.",
      background: "bg-white",
    },
    


    {
      title: "Crypto Price Alert V.2",
      link: "https://github.com/Syren0914/crypto-alert-v.2",
      cover: "/crypto-telegram.png", 
      description: "Automated tool for cryptocurrency enthusiasts to monitor prices and receive notifications using telegram.",
      background: "bg-white",
    },
    {
      title: "AI Review Summarizer",
      description: "Web scraping and AI summarization extract, condense reviews using Pyppeteer, GenerativeAI.",
      link: "https://github.com/Syren0914/AI-review/tree/main",
      cover: "/AI_Review.png",
      background: "bg-white",
    },
    {
      title: "LookChat V.1 ",
      link: "https://github.com/Syren0914/Lookchat-V.1--Android-Chatting-App",
      description: "Discover a aesthetic beautifully crafted salon website",
      cover: "/lookChat.png",
      background: "bg-white",
    },
    
    {
      title: "Restaurant website (Lumthai)",
      link: "https://Lumthai.com",
      description: "Discover authentic Thai flavors online with our beautifully crafted website.",
      cover: "/project2.png",
      background: "bg-white",
    },
    
    {
      title: "Restaurant website (Thailove)",
      description: "Discover authentic Thai flavors online with our beautifully crafted website.",
      link: "https://thailove-afterwork.com",
      cover: "/project3.png",
      background: "bg-white",
    },
    {
      title: "Restaurant website (ThaiPapaya)",
      description: "Order authentic Thai cuisine online with seamless GloriaFood API integration.",
      link: "https://thaipapayava.com",
      cover: "/project1.png",
      background: "bg-white",
    },
    {
      title: "Syren Bank",
      description: "Syren Bank is an online banking system built with Next.js and Appwrite, offering secure, fast, and user-friendly financial services.",
      link: "https://github.com/Syren0914/online-banking",
      cover: "/How to use.png",
      background: "bg-white",
    },
    
  ];
  return (
    <>
      <Title
        text="Projects"
        className="mt-10 flex flex-col justify-center items-center rotate-[6deg]"
      />

      <div className="gap-y-20 mb-32 mt-32 w-full flex flex-wrap items-center justify-center">
        {animatedPinDemo.map((animatedPinDemo, index) => (
          <PinContainer key={index} title={animatedPinDemo.title} href={animatedPinDemo.link}>
            <a target="_blank" rel="noopener noreferrer" href={animatedPinDemo.link} className="block">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[21rem] h-[21rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {animatedPinDemo.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    {animatedPinDemo.description}
                  </span>
                </div>
                <div className="mt-4 object-contain">
                  
                  <Image className="rounded-lg" src={animatedPinDemo.cover} alt="" width={500} height={450}></Image>
                </div>
              </div>
            </a>
          </PinContainer>
        ))}
      </div>
    </>
  );
}
