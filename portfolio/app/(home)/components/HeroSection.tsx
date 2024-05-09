import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
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
        <Link href="mailto:erdenebatbayar3@gmail.com" className="inline-block group">
          <div>
            <h1 className="font-bold text-3xl group-hover:text-green-400 transition-all duration-300">Contact me 📬</h1>
            <div className="w-40 h-2 rounded-full bg-green-500 transition-all group-hover:translate-x-5"></div>
            <div className="w-40 h-2 rounded-full bg-indigo-500 transition-all translate-x-2 group-hover:-translate-x-5"></div>

          </div>
        </Link>
      </div>
      <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
        <div className="flex gap-3 translate-x-8">
          <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
          <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
        </div>
        <div className="flex gap-3 -translate-x-8">
          <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
          <div className="w-32 h-32 rounded-full bg-green-500"></div>
        </div>
        <div className=" glow absolute"></div>
      </div>
    </div>
  );
}

export default HeroSection;
