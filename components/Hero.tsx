import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Hero() {
  return (
    <div className="h-[80vh] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-dot-white/[0.2] relative overflow-hidden">
      
      {/* 1. The Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* 2. The Radial Fade to make text readable */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* 3. Content - Wide and Spacious */}
      <div className="p-4 max-w-5xl mx-auto relative z-10 w-full text-center pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Building the Future of <br /> Electrical Solutions
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto">
          We combine legacy expertise with modern innovation to deliver trusted solutions. 
          Join us in powering a brighter tomorrow.
        </p>
        
        <div className="mt-8 flex justify-center gap-4">
             <button className="bg-white text-black rounded-full px-8 py-3 font-bold hover:bg-neutral-200 transition">
               Get Started
             </button>
             <button className="text-white border border-neutral-600 rounded-full px-8 py-3 font-bold hover:bg-neutral-900 transition">
               Contact Sales
             </button>
        </div>
      </div>
    </div>
  );
}