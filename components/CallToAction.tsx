"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function CallToAction() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          Ready to get started?
        </h2>
        <p className="text-neutral-400 max-w-lg mx-auto my-4 text-sm md:text-base">
          Join us today and experience the future of electrical solutions. 
          Let's build something great together.
        </p>
        <button className="mt-4 bg-white text-black rounded-full px-8 py-3 font-bold hover:bg-neutral-200 transition">
            Join the Waitlist
        </button>
      </div>
      
      {/* The Beams Background */}
      <BackgroundBeams />
    </div>
  );
}