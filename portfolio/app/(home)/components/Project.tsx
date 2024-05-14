import React from "react";
import { SiCss3, SiHtml5, SiJavascript, SiPython } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";



export default function Project() {
  const project = [
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
    
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Project"
        className="flex flex-col justify-center items-center rotate-[6deg]"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {project.map((project, index) => {
          return (
            <Link href={project.Link} key={index}>
              <div className={cn("p-1 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1>{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index}></Icon>;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
