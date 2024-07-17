import Link from "next/link";
import React from "react";
import { MovingBorderBtn } from "./ui/moving-border";
import Title from "./Title";
import Image from "next/image";
import { px } from "framer-motion";

function HeroSection() {
  const heroimage = "/profile.jpg";

  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7x1 font-bold">
          Nice to meet you! <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Erdene."}
          </span>{" "}
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in Virginia. I'm a Fullstack developer passionate about building a modern web application that user love."
          }
        </p>
        <Link
          href="mailto:erdenebatbayar3@gmail.com"
          className="inline-block group p-2"
        >
          <Title  text="Contact Me📬"></Title>
        </Link>
      </div>
      <div className="w-92 h-92 space-y-3  lg:absolute lg:right-36">
        <div>
          <Image className="rounded-full border-animation object-contain" src={heroimage} alt={"heroimage"} width={390} height={390}></Image>  
        </div>
        {/* <div className="flex gap-3 translate-x-8">
          <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
          <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
        </div>
        <div className="flex gap-3 -translate-x-8">
          <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
          <div className="w-32 h-32 rounded-full bg-green-500"></div>
        </div> */}
        <div className=" glow  absolute top-[40%] right-1/2 -z-10"></div>
      </div>
      
        <MovingBorderBtn  borderRadius="1.5rem" className=" p-2 font-semibold ">
          <p>⭐Available for Work</p>
          <Link href={""}></Link>
        </MovingBorderBtn>
      
    </div>
  );
}

export default HeroSection;
