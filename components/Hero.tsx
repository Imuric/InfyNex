import React from "react";
import Spotlight from "@/components/ui/Spotlight";

export default function Hero() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-dot-white/[0.2] relative overflow-hidden">
      
      {/* THE TWEAK: 
         Changed 'md:left-60' to 'md:left-80' 
         This pushes the light source 5rem (80px) to the right.
      */}
      <Spotlight
        className="-top-40 left-0 md:left-[36rem] md:-top-20"
        fill="white"
      />
      
      {/* The Mask */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* The Content */}
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 text-center">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Building the Future of <br /> Crypticonic Power
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto">
          We combine legacy expertise with modern innovation to deliver trusted solutions since [Year]. 
          Experience quality that speaks for itself.
        </p>
        
        <div className="mt-8 flex justify-center gap-4">
             <button className="bg-white text-black rounded-full px-8 py-3 font-bold hover:bg-neutral-200 transition">
                Get Started
             </button>
        </div>
      </div>
    </div>
  );
}