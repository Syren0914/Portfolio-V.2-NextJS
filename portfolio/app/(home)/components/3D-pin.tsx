"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { SiCss3, SiHtml5, SiJavascript, SiPython } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";

export function AnimatedPinDemo() {
  const animatedPinDemo = [
    {
      title: "Amazon Web Scraper",
      tech: [SiPython],
      Link: "https://github.com/Syren0914/Amazon-Product-Scraper",
      cover: "/web-scraper.png",
      background: "bg-white",
    },
    {
      title: "Crypto Price Alert",
      tech: [SiPython],
      Link: "https://thaipapayava.com",
      cover: "/threejs.png",
      background: "bg-white",
    },
    
    {
      title: "Restaurant website (ThaiPapaya)",
      tech: [SiPython],
      Link: "https://thaipapayava.com",
      cover: "/Crypto-price-alert.png",
      background: "bg-white",
    },
    {
      title: "Restaurant website (Lumthai)",
      tech: [SiHtml5, SiCss3, SiJavascript],
      Link: "https://Lumthai.com",
      cover: "/project2.png",
      background: "bg-white",
    },
    {
      title: "Restaurant website (Thailove & Afterwork)",
      tech: [SiHtml5, SiCss3, SiJavascript],
      Link: "https://thailove-afterwork.com",
      cover: "/project3.png",
      background: "bg-white",
    },
    {
      title: "Restaurant website (ThaiPapaya)",
      tech: [SiHtml5, SiCss3, SiJavascript],
      Link: "https://thaipapayava.com",
      cover: "/project1.png",
      background: "bg-white",
    },
  ];
  return (
    <>
      <Title
        text="Projects"
        className="flex flex-col justify-center items-center rotate-[6deg]"
      ></Title>

      <div className="gap-y-20 mb-32 mt-32  w-full flex flex-wrap  items-center justify-center ">
        {animatedPinDemo.map((animatedPinDemo, index) => {
          return (
            <PinContainer
                title={animatedPinDemo.title}
                href={animatedPinDemo.Link}
                >
                <a target="_blank" href={animatedPinDemo.Link} className="block">
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[21rem] h-[21rem]">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        {animatedPinDemo.title}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500">
                        Customizable Tailwind CSS and Framer Motion Components.
                        </span>
                    </div>
                    <div className="mt-4 object-contain">
                        <img
                        src={animatedPinDemo.cover}
                        className="rounded-lg"
                        alt=""
                        />
                    </div>
                    </div>
                </a>
            </PinContainer>

          );
        })}
      </div>
    </>
  );
}
