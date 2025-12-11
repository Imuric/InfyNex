"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    // CHANGED: min-h-screen -> min-h-[40rem] (Compact height)
    <div className="relative w-full min-h-[40rem] bg-neutral-950 flex flex-col items-center justify-between overflow-hidden rounded-md antialiased">
      
      {/* --- SECTION 1: The CTA --- */}
      {/* CHANGED: Reduced margins to mt-10 mb-10 to shrink the section vertically */}
      <div className="flex flex-col items-center justify-center flex-grow p-4 relative z-10 text-center mt-10 mb-10">
        
        {/* KEPT: Text size remains large (text-7xl) */}
        <h2 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          Have a Project in mind?
        </h2>
        
        <p className="text-neutral-400 max-w-lg mx-auto my-4 text-sm md:text-base">
          Whether you need a complete electrical overhaul or a custom solution, 
          we are ready to bring your vision to light.
        </p>
        <button className="mt-4 bg-white text-black rounded-full px-8 py-3 font-bold hover:bg-neutral-200 transition shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Get in Touch
        </button>
      </div>


      {/* --- SECTION 2: The Footer Content --- */}
      <div className="w-full relative z-10 bg-black/40 backdrop-blur-md border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-12 md:pt-16">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 text-sm mb-12">
            
            {/* COLUMN 1: Logo, Socials, Contact */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 font-bold text-xl text-white">
                <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-xs">⚡</span>
                </div>
                <span>InfyNex</span>
              </div>
              <p className="text-neutral-400 mt-2">
                Powering the future with sustainable and reliable electrical engineering.
              </p>
              <div className="flex flex-col gap-2 text-neutral-400 mt-2">
                 <div className="flex items-center gap-2">
                    <MapPin size={16} /> <span>123 Innovation Dr, Tech City</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Mail size={16} /> <span>hello@infynex.com</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <Phone size={16} /> <span>+1 (555) 123-4567</span>
                 </div>
              </div>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-neutral-400 hover:text-white transition"><Twitter size={20} /></a>
                <a href="#" className="text-neutral-400 hover:text-white transition"><Facebook size={20} /></a>
                <a href="#" className="text-neutral-400 hover:text-white transition"><Instagram size={20} /></a>
                <a href="#" className="text-neutral-400 hover:text-white transition"><Linkedin size={20} /></a>
              </div>
            </div>

            {/* COLUMN 2: Company */}
            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Company</h3>
              <ul className="space-y-4 text-neutral-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Services</a></li>
                <li><a href="#" className="hover:text-white transition">Projects</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* COLUMN 3: Resources */}
            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Resources</h3>
              <ul className="space-y-4 text-neutral-400">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition">Whitepapers</a></li>
              </ul>
            </div>

            {/* COLUMN 4: Legal & Help */}
            <div>
              <h3 className="font-bold text-white mb-6 text-lg">Legal & Help</h3>
              <ul className="space-y-4 text-neutral-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Community Forum</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-800 pt-8 text-neutral-500 text-xs">
            <p>© 2025 InfyNex Inc. All rights reserved.</p>
            <p>Designed for the future.</p>
          </div>

        </div>

        {/* --- SECTION: Big Bottom Text Watermark --- */}
        <div className="w-full flex justify-center items-end -mt-32 overflow-hidden pointer-events-none">
            <h1 className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 select-none opacity-50 translate-y-1/3">
              InfyNex
            </h1>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}